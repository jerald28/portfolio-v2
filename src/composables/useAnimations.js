import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ui, reducedMotion } from '../store.js'
import { sections } from '../data/site.js'

gsap.registerPlugin(ScrollTrigger)
gsap.config({ nullTargetWarn: false })
ScrollTrigger.config({ ignoreMobileResize: true })

const $ = (s, r = document) => r.querySelector(s)
const $$ = (s, r = document) => Array.from(r.querySelectorAll(s))

export const motionOn = !reducedMotion

/* ---------- section-to-section curtain transition ---------- */
let busy = false
export function goTo(id) {
  const el = id === 'top' ? document.body : document.getElementById(id)
  if (!el) return
  const y = id === 'top' ? 0 : Math.max(0, el.getBoundingClientRect().top + window.scrollY - 70)
  if (!motionOn) {
    window.scrollTo({ top: y, behavior: 'auto' })
    ui.activeId = id
    return
  }
  if (busy) return
  busy = true
  const cu = $('#cu')
  const label = $('#cl')
  const panels = $$('#cu i')
  const sec = sections.find((s) => s.id === id)
  label.textContent = sec ? sec.label : ''
  cu.style.visibility = 'visible'
  const root = document.documentElement
  gsap
    .timeline({
      onComplete() {
        cu.style.visibility = 'hidden'
        busy = false
      },
    })
    .set(panels, { yPercent: 100 })
    .set(label, { opacity: 0, y: 30 })
    .to(panels, { yPercent: 0, stagger: 0.05, duration: 0.5, ease: 'power3.inOut' })
    .to(label, { opacity: 1, y: 0, duration: 0.35, ease: 'power3.out' }, '-=.2')
    .add(() => {
      root.style.scrollBehavior = 'auto'
      window.scrollTo(0, y)
      root.style.scrollBehavior = ''
      ScrollTrigger.update()
      ui.activeId = id
    })
    .to(label, { opacity: 0, y: -30, duration: 0.25 }, '+=.2')
    .to(panels, { yPercent: -100, stagger: 0.05, duration: 0.5, ease: 'power3.inOut' }, '-=.1')
    .add(() => {
      const scope = id === 'top' ? $('.hero') : el
      const targets = scope.querySelectorAll('.sh h2,.sh p,.big,.hg>*,.close h2,.close .cta')
      if (targets.length)
        gsap.from(targets, {
          y: 50,
          opacity: 0,
          stagger: 0.08,
          duration: 0.8,
          ease: 'power3.out',
          clearProps: 'transform,opacity',
        })
    }, '-=.35')
}

/* ---------- page animations, started once the app is mounted ---------- */
export function startAnimations() {
  if (!motionOn) return
  document.documentElement.classList.add('anim')

  // Intro loader, then the hero entrance
  const ld = $('#ld')
  const lc = $('#lc')
  const counter = { v: 0 }
  ld.style.display = 'flex'
  const hero = () => {
    gsap
      .timeline({ defaults: { ease: 'power4.out' } })
      .fromTo('.hb', { y: -24, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, clearProps: 'transform,opacity' }, 0)
      .from('[data-h]:not(h1)', { y: 30, opacity: 0, stagger: 0.1, duration: 0.8 }, 0.2)
      .from('.sp1 .w', { yPercent: 110, stagger: 0.06, duration: 1 }, 0.15)
      .from('.ph .im', { clipPath: 'inset(0 0 100% 0)', duration: 1.2, ease: 'power4.inOut' }, 0.2)
      .from('.sel', { opacity: 0, scale: 1.05, duration: 0.8 }, 0.9)
      .from('.cur', { scale: 0, opacity: 0, stagger: 0.15, duration: 0.6, ease: 'back.out(2)' }, 1.1)
      .from('.name .ch', { yPercent: 110, stagger: 0.035, duration: 0.9 }, 0.5)
    gsap.to('.c1', { x: 22, y: 26, duration: 3.2, ease: 'sine.inOut', yoyo: true, repeat: -1 })
    gsap.to('.c2', { x: -24, y: -20, duration: 3.8, ease: 'sine.inOut', yoyo: true, repeat: -1 })
  }
  gsap
    .timeline()
    .to(counter, {
      v: 100,
      duration: 1.1,
      ease: 'power2.inOut',
      onUpdate: () => (lc.textContent = Math.round(counter.v)),
    })
    .to(ld, { yPercent: -100, duration: 0.8, ease: 'power4.inOut', onComplete: () => (ld.style.display = 'none') }, '+=.1')
    .add(hero, '-=.35')

  // Reveals: play once, then hand the element back to CSS
  const reveal = (el, delay = 0, duration = 0.85, rise = 44) =>
    gsap.fromTo(
      el,
      { y: rise, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration,
        delay,
        ease: 'power3.out',
        clearProps: 'transform,opacity',
        scrollTrigger: { trigger: el, start: 'top 93%', once: true },
      },
    )
  $$('[data-r]').forEach((el) => reveal(el))
  $$('.sc').forEach((el, i) => reveal(el, (i % 4) * 0.08))
  $$('.tp').forEach((el, i) => reveal(el, (i % 6) * 0.015, 0.4, 16))

  gsap.fromTo(
    '#car',
    { y: 90, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: 1.1,
      ease: 'power3.out',
      clearProps: 'transform,opacity',
      scrollTrigger: { trigger: '#car', start: 'top 92%', once: true },
    },
  )

  // About statement lights up word by word
  gsap.to('#bg .w', {
    opacity: 1,
    stagger: 0.1,
    ease: 'none',
    scrollTrigger: { trigger: '#bg', start: 'top 82%', end: 'bottom 50%', scrub: true },
  })

  // Count-up numbers
  $$('[data-count]').forEach((el) => {
    const n = { v: 0 }
    const to = +el.dataset.count
    ScrollTrigger.create({
      trigger: el,
      start: 'top 92%',
      once: true,
      onEnter: () =>
        gsap.to(n, {
          v: to,
          duration: 1.4,
          ease: 'power2.out',
          onUpdate: () => (el.textContent = Math.round(n.v) + (el.dataset.suf || '')),
        }),
    })
  })

  // Marquees loop and lean with scroll speed
  const skew = gsap.quickTo(gsap.utils.toArray('.mq div'), 'skewX', { duration: 0.5, ease: 'power3' })
  ScrollTrigger.create({
    onUpdate: (s) => skew(-s.direction * Math.min(Math.abs(s.getVelocity()) / 500, 3)),
  })

  const fine = window.matchMedia('(hover: hover) and (pointer: fine)').matches

  // Magnetic buttons
  $$('[data-mag]').forEach((b) => {
    b.addEventListener('mousemove', (e) => {
      const r = b.getBoundingClientRect()
      gsap.to(b, { x: (e.clientX - r.left - r.width / 2) * 0.22, y: (e.clientY - r.top - r.height / 2) * 0.3, duration: 0.3 })
    })
    b.addEventListener('mouseleave', () => gsap.to(b, { x: 0, y: 0, duration: 0.6, ease: 'elastic.out(1,.4)' }))
  })

  // Portrait drifts with the mouse
  if (window.matchMedia('(hover: hover)').matches) {
    const ph = $('#ph')
    const qx = gsap.quickTo(ph, 'x', { duration: 0.8 })
    const qy = gsap.quickTo(ph, 'y', { duration: 0.8 })
    window.addEventListener('mousemove', (e) => {
      qx((e.clientX / innerWidth - 0.5) * 18)
      qy((e.clientY / innerHeight - 0.5) * 14)
    })
  }

  // Soft cursor ring (desktop only)
  if (fine) {
    const rg = document.createElement('div')
    rg.setAttribute('aria-hidden', 'true')
    rg.className = 'ring'
    document.body.appendChild(rg)
    const rx = gsap.quickTo(rg, 'x', { duration: 0.35, ease: 'power3' })
    const ry = gsap.quickTo(rg, 'y', { duration: 0.35, ease: 'power3' })
    window.addEventListener('mousemove', (e) => {
      rx(e.clientX)
      ry(e.clientY)
      const inCarousel = e.target.closest && e.target.closest('.car')
      const hot = e.target.closest && e.target.closest('a,button,[data-k],.tp,.sc,.pc')
      rg.classList.toggle('big', !!hot && !inCarousel)
      rg.style.opacity = inCarousel ? 0 : 1
    })
    document.addEventListener('mouseleave', () => (rg.style.opacity = 0))
  }

  // Keep trigger positions right after images, fonts or layout change
  window.addEventListener('load', () => ScrollTrigger.refresh())
  setTimeout(() => ScrollTrigger.refresh(), 2500)
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(() => ScrollTrigger.refresh())
  if ('ResizeObserver' in window) {
    let t
    new ResizeObserver(() => {
      clearTimeout(t)
      t = setTimeout(() => ScrollTrigger.refresh(), 250)
    }).observe(document.body)
  }
}

export { gsap }
