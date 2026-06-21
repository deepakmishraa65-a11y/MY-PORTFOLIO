// ============================================================
//  EDIT YOUR PORTFOLIO CONTENT HERE
//  सारी जानकारी यहीं बदलें — नाम, projects, skills, links
// ============================================================

export const profile = {
  name: 'Deepak Mishra',
  role: 'AI Engineer & Full Stack Developer',
  headline: 'Building AI that solves real-world problems.',
  tagline:
    'I design and ship intelligent products — from AI-powered platforms to full-stack systems — for startups and businesses that want to move fast.',
  location: 'India',
  email: 'deepakmishraa65@gmail.com',
  resumeUrl: '#', // अपनी resume PDF का link यहाँ डालें
  socials: {
    github: 'https://github.com/deepakmishraa65-a11y',
    linkedin: 'https://linkedin.com/',
    twitter: 'https://twitter.com/',
    instagram: 'https://instagram.com/',
  },
}

export const roles = [
  'AI Engineer',
  'Full Stack Developer',
  'Entrepreneur',
  'Product Builder',
]

export const about = {
  heading: 'About Me',
  paragraphs: [
    "I'm an AI Engineer and Full Stack Developer obsessed with turning hard, messy problems into clean, intelligent products. I work across the entire stack — from training and integrating ML models to shipping production-ready frontends and APIs.",
    "I've built and shipped AI-driven platforms across hiring, mental wellness, and enterprise operations — always with one philosophy: technology should remove friction, not add to it. When I'm not coding, I'm prototyping the next idea that could become a company.",
  ],
  philosophy: 'Ship fast. Solve real problems. Let the product speak.',
  stats: [
    { label: 'Projects Shipped', value: '15+' },
    { label: 'AI Models Integrated', value: '20+' },
    { label: 'Years Building', value: '3+' },
  ],
}

// Categorized tech stack
export const techStack = {
  Frontend: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
  Backend: ['Node.js', 'Express', 'Python', 'FastAPI', 'REST APIs'],
  'AI / ML': ['OpenAI / LLMs', 'LangChain', 'TensorFlow', 'PyTorch', 'Prompt Engineering'],
  Databases: ['MongoDB', 'PostgreSQL', 'Redis', 'Supabase'],
  DevOps: ['Docker', 'GitHub Actions', 'CI/CD', 'Nginx'],
  Cloud: ['AWS', 'Vercel', 'Google Cloud', 'Cloudflare'],
}

// Featured projects — रियल details src/data.js में update कर सकते हो
export const projects = [
  {
    title: 'HireAI',
    tagline: 'AI-powered hiring & candidate matching platform',
    category: 'AI / Web App',
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=900&q=80',
    tech: ['Next.js', 'OpenAI API', 'PostgreSQL', 'Tailwind CSS'],
    problem:
      'Recruiters waste hours manually screening resumes and miss strong candidates buried under volume.',
    impact:
      'Automated resume screening and AI-driven candidate ranking cut shortlisting time by over 70% for early users.',
    demoUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'MindSync',
    tagline: 'AI mental wellness companion with mood intelligence',
    category: 'AI / Mobile',
    image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=900&q=80',
    tech: ['React Native', 'Node.js', 'LLM', 'MongoDB'],
    problem:
      'People struggle to track and understand their emotional patterns without a judgment-free, always-available tool.',
    impact:
      'Delivers personalized, AI-guided check-ins and mood insights, helping users build consistent self-reflection habits.',
    demoUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Textile ERP',
    tagline: 'End-to-end enterprise resource planning for textile manufacturing',
    category: 'Enterprise / Web App',
    image: 'https://images.unsplash.com/photo-1565084888279-aca607ecce0c?w=900&q=80',
    tech: ['React', 'Express', 'MySQL', 'Docker'],
    problem:
      'Textile manufacturers managed inventory, orders, and production on disconnected spreadsheets, causing costly errors.',
    impact:
      'Unified inventory, production tracking, and billing into one system — reducing manual reconciliation work by 60%.',
    demoUrl: '#',
    githubUrl: '#',
  },
]

export const services = [
  {
    icon: '🤖',
    title: 'AI Product Development',
    desc: 'LLM integrations, intelligent automation, and AI-first features that ship to production.',
  },
  {
    icon: '🧱',
    title: 'Full Stack Engineering',
    desc: 'Robust, scalable web apps — from database design to polished, animated frontends.',
  },
  {
    icon: '🚀',
    title: 'Startup MVPs',
    desc: 'Fast, focused builds that help founders validate ideas and ship to real users quickly.',
  },
]

export const experience = [
  {
    year: '2024 — Present',
    title: 'Founder & AI Engineer',
    org: 'Independent / Building HireAI & MindSync',
    desc: 'Designing and building AI-native products end-to-end, from model integration to UI.',
  },
  {
    year: '2023 — 2024',
    title: 'Full Stack Developer',
    org: 'Freelance / Client Projects',
    desc: 'Delivered full stack web applications and enterprise tools, including the Textile ERP system.',
  },
  {
    year: '2022 — 2023',
    title: 'Started Learning AI & Web Development',
    org: 'Self-Taught / Online Courses',
    desc: 'Built foundational skills in JavaScript, React, Python, and machine learning fundamentals.',
  },
]

export const achievements = [
  { label: 'Projects Shipped', value: '15+' },
  { label: 'Happy Clients', value: '10+' },
  { label: 'AI Models Used', value: '20+' },
  { label: 'Lines of Code', value: '100K+' },
]

export const testimonials = [
  {
    quote:
      "Deepak doesn't just write code — he understands the problem first. HireAI's matching logic alone saved us weeks of manual screening.",
    name: 'Early Pilot Partner',
    role: 'HiringOps Lead',
  },
  {
    quote:
      'The Textile ERP system he built replaced three different spreadsheets we were juggling. Rollout was smooth and support was excellent.',
    name: 'Operations Manager',
    role: 'Textile Manufacturing Client',
  },
  {
    quote:
      "MindSync feels genuinely thoughtful — not like a generic chatbot wrapper. You can tell real care went into the AI behavior.",
    name: 'Beta User',
    role: 'MindSync Community',
  },
]
