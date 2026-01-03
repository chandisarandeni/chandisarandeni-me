export const hero = {
  name: '👨‍💻 Chandisa Randeni',
  role: '🎓 Undergraduate · Developer Student',
  tagline: '🚀 Building practical products with modern stacks and reliable delivery.',
  summary:
    'I am a student developer with experience on real-world projects using modern technologies. I enjoy learning new skills, solving problems, and building practical applications. I am eager to grow my experience, improve my knowledge, and contribute to meaningful projects as part of a professional team.',
  location: '🌍 Remote / Global',
  availability: '✅ Accepting new projects',
  email: 'chandisarandeni@gmail.com',
  github: 'https://github.com/chandisarandeni',
  linkedin: 'https://www.linkedin.com/in/chandisarandeni',
  profileImage: 'src/assets/profile.jpg',
}

export const terminalEntries = [
  {
    prompt: '💻 whoami',
    output: 'Chandisa — undergraduate developer focused on practical products and calm delivery.',
  },
  {
    prompt: '📄 cat mission.txt',
    output: 'Ship useful software: clean UI, reliable APIs, and automation that keeps teams fast.',
  },
  {
    prompt: '📂 ls values/',
    output: 'clarity / delivery / curiosity / ownership / pragmatism / collaboration',
  },
]

export const projects = [
  {
    name: '🧪 Lab Ticket',
    description:
      'Optimized blood tube issuing system for Cancer Hospital, reducing manual effort and processing time.',
    stack: ['Electron', 'Express', 'Node.js', 'QR scanning'],
    link: 'https://github.com/chandisarandeni/lab-ticket',
    status: '📅 2025 May - 2025 Jun',
  },
  {
    name: '🎨 Animix',
    description: 'Open-source CSS/JS animation platform for developers.',
    stack: ['React', 'Tailwind', 'Animations'],
    link: 'https://animix-dev.vercel.app/',
    status: '📅 2025 Apr',
  },
  {
    name: '🔐 SaltGuard',
    description: 'Password salting and hashing demo CLI to teach secure storage techniques.',
    stack: ['Node.js', 'Express', 'CLI'],
    link: 'https://github.com/chandisarandeni/express-password-salting',
    status: '📅 2025 Jan - 2025 Mar',
  },
  {
    name: '☀️ SanrooLK Desktop',
    description:
      'WPF + MongoDB app for product, sales, and maintenance management for a solar company.',
    stack: ['WPF', 'MongoDB', '.NET'],
    link: 'https://github.com/chandisarandeni/SanrooLK-Desktop-Application',
    status: '🎓 First-year final project',
  },
]

export const skills = {
  languages: [
    '🟦 TypeScript',
    '🟨 JavaScript',
    '☕ Java',
    '💠 C#',
    '🗄️ SQL',
  ],
  frontend: [
    '⚛️ React',
    '🖥️ Electron',
    '⚡ NextJS',
    '🎨 Tailwind',
    '⚡ Vite',
  ],
  backend: [
    '🟢 Node.js',
    '🚂 Express',
    '🟣 NestJS',
    '🐘 Laravel',
    '🔗 REST APIs',
  ],
  databases: [
    '🍃 MongoDB',
    '🗄️ MySQL',
    '🐘 PostgreSQL',
  ],
  devops: [
    '⚙️ GitHub Actions',
    '🚀 CI/CD basics',
    '🔄 API integration',
  ],
}

export const tools = [
  '🧠 VS Code',
  '📮 Postman',
  '🎨 Figma',
  '🐙 GitHub',
  '📝 Notion',
]

export const education = [
  {
    title: '🎓 Undergraduate',
    place: '🏫 National Institute of Business Management (NIBM)',
    years: '📅 2024 Jan - Present',
    notes:
      '👨‍🏫 Tutor: Providing tutoring support for programming modules; ' +
      '📘 Year 2: (Reading); ' +
      '🏆 Year 1: GPA 3.91 out of 4.0;',
  },
  {
    title: '🎓 Diploma in Information Technology',
    place: '🏫 IMBS Green Campus',
    years: '📅 2024 - 2025',
    notes: '🥇 Awarded Prof. Sarath Amunugama Gold Medal; 📊 GPA: 4.0 out of 4.0',
  },
  {
    title: '🛡️ Certificate in Cyber Security and Networking',
    place: '🏫 Nextgen Campus',
    years: '📅 2021',
    notes: '🔐 Focused on security and networking fundamentals',
  },
  {
    title: '🌐 Introduction to Networking (CCNA 1 v7)',
    place: '🏫 SLIIT',
    years: '📅 2020 - 2021',
    notes: '📡 Completed CCNA 1 v7 track',
  },
]

export const achievements = [
  {
    title: '🏅 Prof. Sarath Amunugama Gold Medal',
    place: 'IMBS Green Campus',
    year: '📅 2025',
    note: '🥇 Best Performance 2025',
  },
  {
    title: '🌍 UNESCO Project',
    place: 'Colombo Children’s Book Society',
    year: '📅 2015',
    note: '📚 Contributed to community education initiative',
  },
]

export const experience = [
  {
    company: 'SanrooLK Solar',
    role: 'Software Engineer (Intern)',
    period: 'dY". 2025 Jul - Present',
    location: 'Remote / Hybrid',
    impact: [
      'Delivering updates to the sales and maintenance desktop app used by field teams.',
      'Refined product, sales, and ticketing flows to remove double entry and speed up handoffs.',
      'Set up release notes and smoke-test checklists so technicians can adopt new builds safely.',
    ],
    stack: ['.NET', 'WPF', 'MongoDB', 'Desktop ops'],
  },
  {
    company: 'Lab Ticket (Cancer Hospital)',
    role: 'Full-stack Developer',
    period: 'dY". 2025 May - 2025 Jun',
    location: 'On-site',
    impact: [
      'Built an Electron + Express tool that issues QR-coded blood tubes to reduce manual work.',
      'Automated label printing and audit trails so nurses can trace every tube.',
      'Coordinated with lab staff to tune the UI for high-volume morning batches.',
    ],
    stack: ['Electron', 'Express', 'Node.js', 'QR scanning'],
  },
  {
    company: 'Animix',
    role: 'Open-source Maintainer',
    period: 'dY". 2025 Apr - Present',
    location: 'Remote',
    impact: [
      'Created a CSS/JS animation library with playground examples for frontend teams.',
      'Documented patterns and added contribution guidelines to onboard new maintainers.',
      'Ship fixes and improvements weekly based on community feedback.',
    ],
    stack: ['React', 'Tailwind CSS', 'Animations', 'Docs'],
  },
]
