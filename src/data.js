// ============================================================
//  EDIT YOUR PORTFOLIO CONTENT HERE
//  सारी जानकारी यहीं बदलें — नाम, projects, skills, links
// ============================================================

export const profile = {
  name: 'Deepak Mishra',
  role: 'Designer & Creative',
  tagline: 'I craft clean, bold visuals and digital experiences that tell a story.',
  location: 'India',
  email: 'deepakmishraa65@gmail.com',
  resumeUrl: '#', // अपनी resume PDF का link यहाँ डालें
  socials: {
    instagram: 'https://instagram.com/',
    behance: 'https://behance.net/',
    dribbble: 'https://dribbble.com/',
    linkedin: 'https://linkedin.com/',
    github: 'https://github.com/deepakmishraa65-a11y',
  },
}

export const about = {
  heading: 'About Me',
  paragraphs: [
    "I'm a creative designer passionate about turning ideas into striking visual stories. From branding to digital art, I love blending color, type, and motion to create work that feels alive.",
    'With a keen eye for detail and a love for clean aesthetics, I help brands and people stand out. When I\'m not designing, you\'ll find me exploring new trends, experimenting with AI tools, and sketching new concepts.',
  ],
  stats: [
    { label: 'Projects Done', value: '50+' },
    { label: 'Happy Clients', value: '30+' },
    { label: 'Years Experience', value: '3+' },
  ],
}

export const skills = [
  { name: 'Branding & Identity', level: 90 },
  { name: 'UI / UX Design', level: 85 },
  { name: 'Illustration', level: 80 },
  { name: 'Motion & Animation', level: 75 },
  { name: 'Photoshop / Figma', level: 92 },
  { name: 'AI Creative Tools', level: 88 },
]

// Projects — image: किसी भी image URL या /public में रखी image का path दें
export const projects = [
  {
    title: 'Brand Identity — Lumen',
    category: 'Branding',
    image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&q=80',
    link: '#',
  },
  {
    title: 'Mobile App UI — Flow',
    category: 'UI/UX',
    image: 'https://images.unsplash.com/photo-1559028012-481c04fa702d?w=800&q=80',
    link: '#',
  },
  {
    title: 'Poster Series — Neon Nights',
    category: 'Illustration',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80',
    link: '#',
  },
  {
    title: 'Packaging — Bloom Co.',
    category: 'Branding',
    image: 'https://images.unsplash.com/photo-1620207418302-439b387441b0?w=800&q=80',
    link: '#',
  },
  {
    title: 'Web Design — Studio Aura',
    category: 'UI/UX',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80',
    link: '#',
  },
  {
    title: 'Motion Reel — Pulse',
    category: 'Motion',
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&q=80',
    link: '#',
  },
]

export const services = [
  {
    icon: '🎨',
    title: 'Brand Design',
    desc: 'Logos, identity systems & guidelines that make brands memorable.',
  },
  {
    icon: '📱',
    title: 'UI / UX Design',
    desc: 'Beautiful, intuitive interfaces for web and mobile apps.',
  },
  {
    icon: '✨',
    title: 'Creative & AI Art',
    desc: 'Illustrations, posters and AI-powered visuals for any project.',
  },
]
