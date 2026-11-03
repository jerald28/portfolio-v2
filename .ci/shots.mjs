import { chromium } from 'playwright'
import sharp from 'sharp'
import fs from 'fs'
const SITES = [['empleo', 'https://empleospace.com/']]
const b = await chromium.launch()
const log = []
async function prep(pg) {
  await pg.waitForTimeout(2500)
  // close common popups / cookie bars
  for (const sel of ['button:has-text("Accept")', 'button:has-text("Got it")', 'button:has-text("Close")', '.pum-close', '.elementor-popup-modal .dialog-close-button', '[aria-label="Close"]']) {
    try { const el = pg.locator(sel).first(); if (await el.isVisible({ timeout: 300 })) await el.click({ timeout: 1000 }) } catch {}
  }
  // scroll to load lazy images and trigger entrance animations
  const h = await pg.evaluate(() => document.documentElement.scrollHeight)
  for (let y = 0; y < h; y += 500) { await pg.evaluate((y) => scrollTo(0, y), y); await pg.waitForTimeout(250) }
  await pg.evaluate(() => scrollTo(0, 0)); await pg.waitForTimeout(1500)
  await pg.addStyleTag({ content: '*{animation-play-state:paused!important} .elementor-invisible{visibility:visible!important;opacity:1!important}' }).catch(() => {})
}
for (const [slug, url] of SITES) {
  const dir = `shots/${slug}`; fs.mkdirSync(dir, { recursive: true })
  try {
    const ctx = await b.newContext({ viewport: { width: 1440, height: 900 }, deviceScaleFactor: 1 })
    const pg = await ctx.newPage()
    await pg.goto(url, { waitUntil: 'networkidle', timeout: 60000 }).catch(() => {})
    await prep(pg)
    const hero = await pg.screenshot({ type: 'png' })
    await sharp(hero).resize(1600, 1000, { fit: 'cover', position: 'top' }).jpeg({ quality: 78, mozjpeg: true }).toFile(`${dir}/cover.jpg`)
    const full = await pg.screenshot({ type: 'png', fullPage: true })
    const meta = await sharp(full).metadata()
    const H = meta.height, segH = 1800, n = Math.min(4, Math.ceil(H / segH))
    for (let i = 0; i < n; i++) {
      const top = i * segH, h = Math.min(segH, H - top); if (h < 300) break
      await sharp(full).extract({ left: 0, top, width: meta.width, height: h }).resize({ width: 1200 }).jpeg({ quality: 72, mozjpeg: true }).toFile(`${dir}/desktop_${i + 1}.jpg`)
    }
    const tech = await pg.evaluate(() => { const h = document.documentElement.outerHTML; const g = (document.querySelector('meta[name=generator]') || {}).content || ''; const f = []; if (window.__NEXT_DATA__ || h.includes('/_next/')) f.push('Next.js'); if (window.__NUXT__ || h.includes('/_nuxt/')) f.push('Nuxt'); if (h.includes('data-v-') || window.__VUE__) f.push('Vue'); if (document.querySelector('[data-reactroot]') || h.includes('react')) f.push('React?'); if (h.includes('wp-content')) f.push('WordPress'); if (h.includes('framer')) f.push('Framer'); if (h.includes('webflow')) f.push('Webflow'); if (/\b(tw-|text-\[|bg-\[)/.test(h) || h.includes('tailwind')) f.push('Tailwind?'); if (h.includes('/assets/index-') ) f.push('Vite'); return g + ' | ' + f.join(',') + ' | scripts: ' + [...document.scripts].map(s => s.src).filter(Boolean).slice(0, 6).join(' ') })
    log.push(`${slug}: desktop height ${H}, ${n} parts, title=${await pg.title()}, tech=${tech}`)
    await ctx.close()
    const m = await b.newContext({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 2, isMobile: true, hasTouch: true })
    const mp = await m.newPage()
    await mp.goto(url, { waitUntil: 'networkidle', timeout: 60000 }).catch(() => {})
    await prep(mp)
    const mf = await mp.screenshot({ type: 'png', fullPage: true })
    const mm = await sharp(mf).metadata()
    for (let i = 0; i < 2; i++) {
      const top = i * 1688, h = Math.min(1688, mm.height - top); if (h < 400) break
      await sharp(mf).extract({ left: 0, top, width: mm.width, height: h }).resize({ width: 520 }).jpeg({ quality: 72, mozjpeg: true }).toFile(`${dir}/mobile_${i + 1}.jpg`)
    }
    await m.close()
  } catch (e) { log.push(`${slug}: ERROR ${e.message}`) }
}
await b.close()
fs.writeFileSync('shots/log.txt', log.join('\n'))
console.log('::warning title=Shots::' + log.join('%0A'))
