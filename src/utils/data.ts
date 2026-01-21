import profileImg from '../assets/profile.jpg'

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
  profileImage: profileImg,
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
    name: '⚡ Net Speed',
    description: 'Lightweight network speed test app with real-time graphs with accurate results.',
    stack: ['React', 'Tailwind', 'Node.js'],
    link: 'https://netspeed.innozoft.com/',
    status: '📅 2025 Dec - present',
  },
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
  languages: ['🟦 TypeScript', '🟨 JavaScript', '☕ Java', '💠 C#', '🗄️ SQL'],
  frontend: ['⚛️ React', '🖥️ Electron', '⚡ NextJS', '🎨 Tailwind', '⚡ Vite'],
  backend: ['🟢 Node.js', '🚂 Express', '🟣 NestJS', '🐘 Laravel', '🔗 REST APIs'],
  databases: ['🍃 MongoDB', '🗄️ MySQL', '🐘 PostgreSQL'],
  devops: ['⚙️ GitHub Actions', '🚀 CI/CD basics', '🔄 API integration'],
}

export const tools = ['🧠 VS Code', '📮 Postman', '🎨 Figma', '🐙 GitHub', '📝 Notion']

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
    company: 'Toursurv (Pvt) Ltd',
    role: 'Software Developer (Intern)',
    period: '2025 Oct - Present',
    location: 'Remote / Hybrid',
    impact: [
      'Implement functional software features based on client requirements',
      'Collaborate with cross-functional teams to deliver reliable applications',
      'Maintain and improve existing codebases for performance and usability',
    ],
    stack: ['ReactJS', 'NestJS', 'MongoDB', 'Electron'],
    projects: [
      {
        name: 'POS Master V3',
        summary: 'POS system revamp with modern UI, offline support, and multi-store management.',
      },
      {
        name: 'Kettarama Temple Web',
        summary: 'Website for Kettarama Temple with event, blog management.',
      },
    ],
  },
  {
    company: 'Thusitha ICT LK',
    role: 'Full-stack Developer',
    period: '2024 May - 2025 Jun',
    location: 'Remote',
    impact: [
      'Build and maintain the LMS web application',
      'Implement secure system for students to access course materials and track progress',
    ],
    stack: ['React', 'Node.js', 'Express', 'MongoDB'],
    projects: [
      {
        name: 'LMS platform',
        summary: 'Web app for course delivery, student progress, and secure material access.',
      },
    ],
  },
  {
    company: 'Innozoft Solutions',
    role: 'Freelance Developer / Founder',
    period: '2025 Apr - Present',
    location: 'Remote',
    impact: [
      'Controbuted to open-source projects and built public tools',
      'Developed web applications for small businesses and personal projects',
      'Managed end-to-end project delivery from requirements to deployment',
    ],
    stack: ['React', 'Tailwind CSS', 'Node.js'],
    projects: [
      {
        name: 'Animix',
        summary: 'Animation playground and component library for frontend teams.',
        link: 'https://animix.innozoft.com/',
      },
      {
        name: 'Rahukalayam',
        summary: 'Website for Rahukalayam astrology services.',
        link: 'https://rahukalam.innozoft.com/',
      },
    ],
  },
]
