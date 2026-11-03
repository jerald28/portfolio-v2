// Site content. Edit text here; the components read from these lists.

export const contact = {
  name: 'Jerald Esguerra',
  role: 'UI/UX Developer',
  email: 'jeraldesguerra5@gmail.com',
  phone: '0917 372 6490',
  phoneHref: 'tel:+639173726490',
  location: 'San Juan City, Metro Manila, Philippines',
  linkedin: 'https://www.linkedin.com/in/jerald-esguerra-a35a39294/',
  github: 'https://github.com/jerald28',
  cv: 'Jerald_Esguerra_CV.pdf',
}

// Order of sections on the page. Used by the nav, side dots and "Next" links.
export const sections = [
  { id: 'top', label: 'Intro' },
  { id: 'projects', label: 'Work' },
  { id: 'services', label: 'Services' },
  { id: 'process', label: 'Process' },
  { id: 'tools', label: 'Stack' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'faq', label: 'Questions' },
  { id: 'contact', label: 'Contact' },
]

export const navLinks = [
  { id: 'projects', label: 'Work' },
  { id: 'services', label: 'Services' },
  { id: 'process', label: 'Process' },
  { id: 'tools', label: 'Stack' },
  { id: 'about', label: 'About' },
  { id: 'faq', label: 'FAQ' },
]

export const menuLinks = [
  { id: 'top', label: 'Home' },
  { id: 'projects', label: 'Work' },
  { id: 'services', label: 'Services' },
  { id: 'process', label: 'Process' },
  { id: 'tools', label: 'Stack' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'faq', label: 'Questions' },
  { id: 'contact', label: 'Contact' },
]

export const marquees = {
  top: ['UI/UX Design', 'Front-End', 'Figma', 'Vue', 'React', 'Nuxt', 'Tailwind'],
  bottom: ['Design', 'Prototype', 'Build', 'Ship', 'Repeat'],
}

export const services = [
  {
    icon: 'wire',
    title: 'UI/UX Design',
    text: 'Wireframes, user flows and high-fidelity interfaces in Figma that are easy to understand and use.',
    items: ['Wireframing & flows', 'UI design', 'Responsive layouts'],
  },
  {
    icon: 'proto',
    title: 'Prototyping',
    text: 'Clickable prototypes and reusable design systems that keep design and code consistent.',
    items: ['Figma prototypes', 'Design systems', 'Handoff-ready files'],
  },
  {
    icon: 'vue',
    title: 'Front-End Dev',
    text: 'Responsive interfaces built with Vue, React, Nuxt and Tailwind CSS.',
    items: ['Vue · React · Nuxt', 'Tailwind · shadcn/ui', 'HTML · CSS · JS'],
  },
  {
    icon: 'wordpress',
    title: 'Web & E-commerce',
    text: 'Marketing sites and online stores built with WordPress, Elementor and WooCommerce.',
    items: ['WordPress', 'Elementor', 'WooCommerce'],
  },
]

export const processSteps = [
  {
    title: 'Discover',
    text: 'Understand the goal, the users and the requirements before opening a design tool.',
    deliverables: ['Goals & scope', 'User flows', 'Requirements notes'],
    tools: ['Trello', 'Agile / Scrum'],
    ai: 'Summarize meeting notes and list edge cases or questions I should still ask.',
  },
  {
    title: 'Wireframe',
    text: 'Sketch structure and flows in low fidelity so everyone agrees on layout first.',
    deliverables: ['Wireframes', 'Flow map', 'Content outline'],
    tools: ['Figma', 'Wireframing'],
    ai: 'Suggest alternative layouts to react to and help name screens and states.',
  },
  {
    title: 'Design',
    text: 'Turn the structure into polished UI and a reusable system of components.',
    deliverables: ['UI kit', 'Components', 'Responsive layouts'],
    tools: ['Figma', 'Canva', 'Design systems'],
    ai: 'Offer color, type and microcopy options. I choose and refine what fits the brand.',
  },
  {
    title: 'Prototype',
    text: 'Link screens into a clickable prototype, gather feedback and iterate.',
    deliverables: ['Clickable prototype', 'Feedback notes', 'Revised screens'],
    tools: ['Figma', 'Prototyping'],
    ai: 'Draft test scripts and group feedback into themes to review.',
  },
  {
    title: 'Build & ship',
    text: 'Build the approved design with Vue, React or Nuxt and Tailwind CSS, then release it.',
    deliverables: ['Responsive pages', 'Reusable components', 'Release'],
    tools: ['Vue', 'React', 'Nuxt', 'Tailwind', 'Git & GitHub'],
    ai: 'Scaffold repetitive components, explain errors and review code. I test every change.',
  },
]

export const toolGroups = [
  { name: 'Design', tools: [['Figma', 'figma'], ['Canva', 'canva'], ['Prototyping', 'proto'], ['Wireframing', 'wire']] },
  { name: 'Languages', tools: [['HTML', 'html'], ['CSS', 'css'], ['JavaScript', 'js']] },
  { name: 'Frameworks', tools: [['Vue.js', 'vue'], ['React.js', 'react'], ['Nuxt.js', 'nuxt']] },
  { name: 'Styling & UI', tools: [['Tailwind CSS', 'tailwind'], ['Bootstrap', 'bootstrap'], ['shadcn/ui', 'shadcn']] },
  { name: 'Back-end & data', tools: [['Laravel', 'laravel'], ['Supabase', 'supabase']] },
  { name: 'CMS & e-commerce', tools: [['WordPress', 'wordpress'], ['Elementor', 'elementor'], ['WooCommerce', 'woo']] },
  { name: 'Workflow', tools: [['Git & SourceTree', 'git'], ['GitHub', 'github'], ['Trello', 'trello'], ['Agile / Scrum', 'agile']] },
]

export const about = {
  statement:
    'I’m a UI/UX Developer who designs in Figma and builds in code, so the interface you approve is the one that ships. I care about clean layouts, responsive behavior and experiences that feel easy to use.',
  facts: [
    { value: 4, suffix: '+', label: 'Years designing and building' },
    { value: 8, suffix: '', label: 'Featured projects' },
    { value: 22, suffix: '', label: 'Tools in my stack' },
  ],
}

export const experience = [
  {
    date: 'Oct 2024 — Present',
    title: 'UI/UX Developer',
    text: 'Design interfaces in Figma and build them as responsive web applications, turning prototypes into working front-end products.',
    tags: ['Figma', 'Vue.js', 'React.js', 'Nuxt.js', 'Tailwind CSS'],
  },
  {
    date: 'Oct 2022 — Oct 2024',
    title: 'UI/UX Designer',
    text: 'Created wireframes, user flows and prototypes for web products.',
    tags: ['Figma', 'Wireframing', 'Prototyping', 'Canva'],
  },
  {
    date: 'Graduated 2022',
    title: 'BS Information System',
    text: 'Bachelor’s degree in Information System.',
    tags: [],
  },
]

export const faq = [
  ['Where are you based?', 'I’m based in San Juan City, Metro Manila, Philippines.'],
  [
    'What do you do on a project?',
    'I handle Figma design and prototyping and the front-end development, so the interface that gets approved is the one that gets built.',
  ],
  [
    'Which tools do you use?',
    'Figma and Canva for design; HTML, CSS, JavaScript, Vue, React, Nuxt, Tailwind CSS, Bootstrap and shadcn/ui on the front end; Laravel and Supabase on the back end; and WordPress with Elementor and WooCommerce for CMS and e-commerce work.',
  ],
  [
    'How can we get in touch?',
    'Email jeraldesguerra5@gmail.com, call 0917 372 6490, or message me on LinkedIn or GitHub using the links on this page.',
  ],
]
