// ============================================================
//  EDIT YOUR PORTFOLIO CONTENT HERE
//  सारी जानकारी यहीं बदलें — नाम, projects, skills, links
// ============================================================

export const profile = {
  name: 'Deepak Mishra',
  role: 'Data Analyst & Software Developer',
  headline: 'Finding the story in data. Building the software that tells it.',
  tagline:
    'I analyze data to find what actually matters, then build the software and dashboards that put those insights to work — for businesses that want clear answers, not just charts.',
  location: 'India',
  email: 'deepakmishraa65@gmail.com',
  resumeUrl: '#', // अपनी resume PDF का link यहाँ डालें
  socials: {
    github: 'https://github.com/deepakmishraa65-a11y',
    // real linkedin handle yahan add karo jab ready ho:
    // linkedin: 'https://linkedin.com/in/your-handle',
  },
}

export const roles = [
  'Data Analyst',
  'Software Developer',
  'Problem Solver',
]

export const about = {
  heading: 'About Me',
  paragraphs: [
    "I'm a Data Analyst and Software Developer who likes getting to the bottom of messy data before writing a single line of UI code. I work across the stack — querying and cleaning data, building the analysis, and then shipping the dashboards and applications that act on it.",
    "I've built systems across hiring, wellness, and enterprise operations — always starting from the same question: what does the data actually say, and what should we build because of it? When I'm not analyzing something, I'm building the tool that makes the next analysis easier.",
  ],
  philosophy: 'Ship fast. Solve real problems. Let the product speak.',
  stats: [
    { label: 'Projects Shipped', value: '15+' },
    { label: 'Years Building', value: '3+' },
    { label: 'Dashboards & Tools', value: '10+' },
  ],
}

// Categorized tech stack
export const techStack = {
  'Data & Analytics': ['SQL', 'Excel / Power BI', 'Python (Pandas, NumPy)', 'Jupyter', 'Data Visualization'],
  Frontend: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
  Backend: ['Node.js', 'Express', 'Python', 'FastAPI', 'REST APIs'],
  Databases: ['MongoDB', 'PostgreSQL', 'Redis', 'Supabase'],
  DevOps: ['Docker', 'GitHub Actions', 'CI/CD', 'Nginx'],
  Cloud: ['AWS', 'Vercel', 'Google Cloud', 'Cloudflare'],
  'AI / ML': ['OpenAI / LLMs', 'LangChain', 'Prompt Engineering'],
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
    year: '2023 — 2024 (1 Year)', // ⬅️ duration yahan edit karo
    title: 'Software Developer', // ⬅️ apna actual job title yahan likho
    org: 'Bhaskar Silkmills', // ⬅️ company ka naam
    desc: 'Designed and built the Textile ERP system — streamlining inventory, production tracking, and billing for the company.', // ⬅️ apna real role/kaam yahan likho
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

