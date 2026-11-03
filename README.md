# Portfolio v2 · Jerald Esguerra

Personal portfolio of **Jerald Esguerra**, UI/UX Developer based in San Juan City, Metro Manila, Philippines.
Interfaces designed in Figma and built for the web.

Built with **Vue 3**, **Vite** and **GSAP**.

## Features

- Intro loader, word-by-word and letter-by-letter hero reveals, and scroll-triggered section reveals
- Curtain transition when jumping between sections from the nav, side dots or "Next" links
- Draggable, endlessly looping project carousel with momentum, snapping, keyboard arrows and a 3D focus effect
- Case-study pop-up for each project with description, role, stack, key features and screenshots
- Design-process section with an "AI assist" switch, grouped tech stack, FAQ accordion
- Light and dark themes (navy dark mode), remembered between visits
- Copy-email and Download CV buttons
- Respects `prefers-reduced-motion`: animations turn off and the page stays fully usable

## Projects featured

| Project | Stack |
| --- | --- |
| Elvion: Natural Skincare E-Commerce | WordPress, Elementor, WooCommerce |
| Pet Booking Website & Management System | Nuxt, Laravel, Tailwind CSS, Figma |
| HR & Employee Management System | Vue, Laravel, Tailwind CSS, Figma |
| Children’s Training & Booking Platform | Nuxt, Supabase, Tailwind CSS, Figma |
| Barangay Management System | Vue, Laravel, Tailwind CSS, Figma |
| Hydrogen Man Solutions ([live](https://hydrogenmansolutions.com/)) | WordPress |
| Ayahtek ([live](https://ayahtek.com/)) | WordPress |
| LiftNow PH ([live](https://liftnowph.com/)) | WordPress |

Role on each: Figma design and prototyping + front-end development.

## Run locally

Requires Node.js 18 or newer.

```bash
npm install
npm run dev      # start the dev server
npm run build    # production build in dist/
npm run preview  # preview the production build
```

## Project structure

```
public/
  images/               portrait, project covers and screenshots
  Jerald_Esguerra_CV.pdf
  favicon.svg
src/
  App.vue               page layout and in-page navigation
  main.js               app entry
  store.js              shared UI state (active section, menu, modal)
  assets/main.css       design tokens, layout and section styles
  data/
    site.js             contact details, sections, services, process, stack, FAQ
    projects.js         featured projects and case-study content
    icons.js            inline SVG icon set
  composables/
    useAnimations.js    GSAP animations and the section curtain transition
    useActiveSection.js highlights the current section in the nav
    useTheme.js         light / dark theme
    useCopy.js          copy-email helper
  components/           one component per section, plus header, menu, carousel and modal
```

To update content, edit `src/data/site.js` and `src/data/projects.js`. Replace images in `public/images/`.

## Deploy

The build uses relative asset paths (`base: './'` in `vite.config.js`), so `dist/` works on Vercel,
Netlify or GitHub Pages without extra setup. On Vercel, import the repository and keep the Vite defaults
(build command `npm run build`, output directory `dist`).

## Contact

- Email: jeraldesguerra5@gmail.com
- LinkedIn: https://www.linkedin.com/in/jerald-esguerra-a35a39294/
- GitHub: https://github.com/jerald28
