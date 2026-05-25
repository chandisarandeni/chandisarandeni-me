import type { PortfolioData } from "@/types/portfolio";

// ============= Portfolio Content =============
export const portfolioData: PortfolioData = {
  // --------------------- Hero ------------------
  hero: {
    name: "Chandisa Randeni",
    role: "Full Stack Developer | Frontend Developer",
    tagline: "Building fast, modern web products with React, Next.js, and NestJS.",
    summary:
      "Full Stack Developer with 2+ years of freelance and internship experience delivering responsive, secure, and user-focused web products.",
    location: "Thalawathugoda, Sri Lanka",
    primaryAction: {
      label: "View Projects",
      url: "#projects",
    },
    secondaryAction: {
      label: "Contact Me",
      url: "#contact",
    },
  },

  // --------------------- About ------------------
  about: {
    title: "End-to-end engineer focused on practical results",
    paragraphs: [
      "I build full stack applications from planning to deployment, with a strong focus on maintainability, responsiveness, and real user value.",
      "My work covers frontend development, backend APIs, dashboard systems, student-focused platforms, and workflow tools across web and desktop.",
      "I am comfortable owning features end to end while collaborating with teams to gather requirements, ship clean releases, and support iterative improvements.",
    ],
    focusAreas: [
      "Frontend Development",
      "Backend API Development",
      "Dashboard and Platform Engineering",
      "Workflow Optimization",
      "Technical Mentoring",
    ],
  },

  // --------------------- Skills ------------------
  skills: {
    summary:
      "Hands-on full stack capabilities across modern JavaScript frameworks, backend services, and databases.",
    categories: [
      {
        category: "Frontend",
        items: [
          "React.js",
          "Next.js",
          "TypeScript",
          "Tailwind CSS",
          "Three.js",
        ],
      },
      {
        category: "Backend",
        items: ["Node.js", "NestJS", "REST API Development", "API Integration"],
      },
      {
        category: "Databases",
        items: ["PostgreSQL", "MongoDB", "MySQL"],
      },
      {
        category: "Tools and Delivery",
        items: ["Electron.js", "AWS", "Git", "Postman"],
      },
    ],
  },

  // --------------------- Projects ------------------
  projects: [
    {
      name: "Innozoft Official Website",
      status: "completed",
      period: "May 2025 - Jun 2025",
      role: "Frontend Developer",
      description:
        "Built the official website for Innozoft Solutions with modern, responsive layouts and interaction-focused user flows.",
      technologies: ["React.js", "Three.js", "Tailwind CSS"],
      highlights: [
        "Designed smooth animations and polished section transitions for better engagement.",
        "Created clean content architecture for service pages and product communication.",
        "Contributed to improved business visibility, helping secure new customer projects.",
      ],
      links: {
        liveUrl: "https://www.innozoft.com",
      },
    },
    {
      name: "TrackAdemic",
      status: "in-progress",
      period: "Mar 2026 - Present",
      role: "Full Stack Developer",
      description:
        "Developing a full stack educational productivity platform with student portals, analytics, and progress tracking workflows.",
      technologies: [
        "Next.js",
        "Electron.js",
        "NestJS",
        "PostgreSQL",
        "AWS",
      ],
      highlights: [
        "Building responsive web and desktop interfaces for student account workflows.",
        "Designing role-aware backend services for secure academic data handling.",
        "Deploying and maintaining iterative feature updates on managed cloud infrastructure.",
      ],
    },
    {
      name: "Lab Ticket",
      status: "completed",
      period: "May 2025 - Jun 2025",
      role: "Web Application Support",
      description:
        "Supported optimization of a blood tube issuing workflow at Apeksha Hospital, Maharagama by improving process efficiency and usability.",
      technologies: ["Workflow Optimization", "Web Application Support"],
      highlights: [
        "Reduced manual workflow bottlenecks in ticket handling steps.",
        "Improved day-to-day operator usability and process consistency.",
        "Contributed to smoother healthcare support service delivery.",
      ],
      links: {
        repositoryUrl: "https://github.com/chandisarandeni/lab-ticket",
      },
    },
    {
      name: "Professional Animix",
      status: "in-progress",
      period: "Mar 2025 - Present",
      role: "Frontend Developer",
      description:
        "Developing an open source platform for reusable CSS and JavaScript animations tailored for modern web development.",
      technologies: ["CSS", "JavaScript", "Web Animations"],
      highlights: [
        "Built reusable animation components for quicker integration into projects.",
        "Focused on developer-friendly animation previews and selection patterns.",
        "Continuously refining interaction quality and extensibility.",
      ],
      links: {
        liveUrl: "https://animix.innozoft.com/",
      },
    },
  ],

  // --------------------- Experience ------------------
  experience: [
    {
      company: "TOURSURV PVT LTD",
      role: "Full Stack Developer Intern (Hybrid)",
      location: "Sri Lanka",
      period: "Oct 2025 - Apr 2026",
      summary:
        "Contributed to full stack web and desktop application delivery across multiple company projects in a team environment.",
      achievements: [
        "Contributed to 4 projects and supported requirement gathering, frontend, and backend implementation.",
        "Completed UAT support successfully for 3 project deliveries.",
        "Delivered maintainable features under tight timelines and evolving requirements.",
      ],
      technologies: [
        "Next.js",
        "React.js",
        "TypeScript",
        "Tailwind CSS",
        "NestJS",
      ],
    },
    {
      company: "Innozoft",
      role: "Software Developer and Maintenance (Freelance)",
      location: "Sri Lanka",
      period: "Mar 2024 - Present",
      summary:
        "Building and maintaining web software products focused on usability, responsiveness, and practical business outcomes.",
      achievements: [
        "Delivered frontend and full stack solutions for real client needs.",
        "Managed feature planning, implementation, and support iterations.",
        "Built clean interfaces for dashboards, portfolio sites, and student-oriented tools.",
      ],
      technologies: ["React.js", "Next.js", "NestJS", "TypeScript", "MySQL"],
    },
    {
      company: "NIBM Worldwide Colombo 07",
      role: "Tutor (Part-Time)",
      location: "Colombo, Sri Lanka",
      period: "Jun 2025 - Present",
      summary:
        "Providing academic support for programming modules with practical sessions and technical guidance.",
      achievements: [
        "Mentored students in C, C#, Java, web development, and database fundamentals.",
        "Explained technical concepts in simple, actionable steps.",
        "Supported coursework and lab exercises with structured troubleshooting.",
      ],
      technologies: ["C", "C#", "Java", "Web Development", "Database Management"],
    },
  ],

  // --------------------- Education ------------------
  education: [
    {
      institution: "National Institute of Business Management (NIBM)",
      qualification: "BSc (Hons) Computer Science with Applied Artificial Intelligence",
      location: "Colombo 07, Sri Lanka",
      period: "2024 - Present",
      details: [
        "Undergraduate program focused on applied AI and software engineering practice.",
      ],
    },
    {
      institution: "National Institute of Business Management (NIBM)",
      qualification: "Higher National Diploma in Software Engineering",
      location: "Colombo 07, Sri Lanka",
      period: "Reading",
      details: [
        "Current GPA: 3.85/4.0.",
      ],
    },
    {
      institution: "National Institute of Business Management (NIBM)",
      qualification: "Diploma in Software Engineering",
      location: "Colombo 07, Sri Lanka",
      period: "Completed",
      details: [
        "GPA: 3.91/4.0.",
        "Certificate in Software Engineering with best performance 97.7%.",
      ],
    },
    {
      institution: "IMBS Green Campus",
      qualification: "Diploma in Information Technology",
      location: "Sri Lanka",
      period: "Jan 2024 - Jan 2025",
      details: [
        "GPA: 4.0/4.0.",
        "Awarded Prof. Sarath Amunugama Gold Medal.",
      ],
    },
    {
      institution: "NextGen Campus",
      qualification: "Certificate in Cyber Security and Networking",
      location: "Sri Lanka",
      period: "Apr 2021 - Oct 2021",
      details: [
        "Foundation in networking and security concepts.",
      ],
    },
    {
      institution: "SLIIT",
      qualification: "Introduction to Networking (CCNA1 v7)",
      location: "Sri Lanka",
      period: "Mar 2020 - Mar 2021",
      details: [
        "Completed networking fundamentals track.",
      ],
    },
  ],

  // --------------------- Achievements ------------------
  achievements: [
    {
      title: "Prof. Sarath Amunugama Gold Medal",
      issuer: "IMBS Green Campus",
      date: "2025",
      summary:
        "Recognized for outstanding academic performance in Diploma in Information Technology.",
    },
    {
      title: "IEEEXtreme 19.0 Logistics Team",
      issuer: "IEEE",
      date: "2025",
      summary:
        "Contributed to coordination and operational support during the global coding competition.",
    },
    {
      title: "IEEEXtreme 20.0 Web Master",
      issuer: "IEEE",
      date: "2026",
      summary:
        "Supported web-related responsibilities for event communication and presence.",
    },
    {
      title: "ICACIT 2026 Organizing Committee",
      issuer: "ICACIT",
      date: "2026",
      summary:
        "Participated in planning and execution activities as part of the organizing team.",
    },
    {
      title: "IEEE Student Branch NIBM",
      issuer: "IEEE",
      date: "Active",
      summary:
        "Active student branch involvement through technical and community-oriented initiatives.",
    },
  ],

  // --------------------- Contact ------------------
  contact: {
    email: "chandisarandeni@gmail.com",
    location: "Madiwela Road, Thalawathugoda, Sri Lanka",
    availability: "Open to software engineering, frontend, and full stack opportunities.",
    links: [
      { label: "GitHub", url: "https://github.com/chandisarandeni" },
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/in/chandisarandeni/",
      },
      { label: "Email", url: "mailto:chandisarandeni@gmail.com" },
    ],
  },
};

export default portfolioData;
