export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  mockupIllustration: string;
  featuredImage?: string;
}

export interface EducationItem {
  period: string;
  degree: string;
  institution: string;
  boardOrDetails: string;
  status: string;
  icon: string;
}

export interface SkillCategory {
  category: string;
  items: { name: string; level?: string; icon?: string }[];
}

export const PORTFOLIO_DATA = {
  personalInfo: {
    name: "Sanket Tiwari",
    title: "B.Tech Computer Science & Engineering Student (2029)",
    institution: "Noida Institute of Engineering & Technology (NIET), Greater Noida",
    subtitle: "Aspiring AI Engineer • Software Engineering Enthusiast • Generative AI Explorer",
    typingRoles: [
      "Artificial Intelligence",
      "Software Engineering",
      "Generative AI",
      "Java Developer",
      "Python Developer",
      "Problem Solver"
    ],
    aboutText: [
      "Hi, I'm Sanket Tiwari.",
      "A passionate Computer Science student who enjoys building software, exploring Artificial Intelligence, Cybersecurity, and modern web technologies.",
      "I believe in learning by building real-world projects and continuously improving through coding, problem solving, and curiosity."
    ],
    status: "Available for Internships & AI Collaborations",
    location: "Greater Noida, Uttar Pradesh, India"
  },

  contacts: {
    email: "SANKETTIWARI943@GMAIL.COM",
    emailMailto: "mailto:SANKETTIWARI943@GMAIL.COM",
    phone: "+91 7881132006",
    whatsappUrl: "https://wa.me/917881132006",
    linkedin: "https://www.linkedin.com/in/sanket-tiwari-5771a9380",
    github: "https://github.com/sankettiwari943-coder",
    leetcode: "https://leetcode.com/u/sanket_xtr/",
    instagram: "https://www.instagram.com/sanketyrrr?igsh=aTY2dW41Zmh6enNq"
  },

  projects: [
    {
      id: "nexus-ai",
      title: "Nexus AI",
      category: "AI Assistant • Full Stack • Generative AI",
      description: "An intelligent AI-powered assistant built with modern full-stack technologies, featuring real-time conversations, secure authentication, Retrieval-Augmented Generation (RAG), document analysis, and an elegant responsive interface. The application combines AI, productivity, and modern UI/UX into a single seamless experience.",
      technologies: ["React", "Tailwind CSS", "FastAPI", "Python", "Firebase", "Gemini API", "RAG", "GitHub"],
      githubUrl: "https://github.com/sankettiwari943-coder/nexus-ai",
      mockupIllustration: "/assets/images/nexus_ai.png"
    },
    {
      id: "developer-portfolio",
      title: "Developer Portfolio",
      category: "Personal Brand • React • 3D Portfolio",
      description: "A premium interactive portfolio showcasing my projects, technical skills, achievements, GitHub contributions, certifications, and development journey. Designed with immersive animations, responsive layouts, and a modern futuristic interface to create a memorable user experience.",
      technologies: ["React", "Vite", "Tailwind CSS", "GSAP", "Framer Motion", "Three.js", "React Three Fiber", "GitHub", "Netlify"],
      githubUrl: "https://github.com/sankettiwari943-coder/developer-portfolio",
      mockupIllustration: "/assets/images/developer_portfolio.png"
    },
    {
      id: "2048-nexus",
      title: "2048 Nexus",
      category: "Game Development • JavaScript",
      description: "A modern reimagining of the classic 2048 puzzle game with polished animations, responsive controls, score tracking, smooth transitions, and an immersive user experience. Built from scratch with optimized game logic and an elegant futuristic interface.",
      technologies: ["HTML", "CSS", "JavaScript"],
      githubUrl: "https://github.com/sankettiwari943-coder/2048-nexus",
      mockupIllustration: "/assets/images/2048_nexus.png"
    }
  ] as Project[],

  skills: [
    {
      category: "Programming",
      items: [
        { name: "Java", level: "Advanced" },
        { name: "Python", level: "Advanced" },
        { name: "C", level: "Intermediate" },
        { name: "C++", level: "Intermediate" }
      ]
    },
    {
      category: "Web Development",
      items: [
        { name: "HTML5", level: "Expert" },
        { name: "CSS3", level: "Expert" },
        { name: "JavaScript", level: "Advanced" },
        { name: "React.js", level: "Advanced" },
        { name: "Tailwind CSS", level: "Advanced" }
      ]
    },
    {
      category: "Artificial Intelligence",
      items: [
        { name: "Artificial Intelligence", level: "Exploring" },
        { name: "Generative AI", level: "Exploring" },
        { name: "Prompt Engineering", level: "Proficient" }
      ]
    },
    {
      category: "Developer Tools & Platforms",
      items: [
        { name: "Git", level: "Proficient" },
        { name: "GitHub", level: "Proficient" },
        { name: "VS Code", level: "Expert" },
        { name: "LeetCode", level: "Active Solver" }
      ]
    }
  ] as SkillCategory[],

  education: [
    {
      period: "Passed in 2023",
      degree: "Class X",
      institution: "Little Flower School",
      boardOrDetails: "ICSE Board",
      status: "Completed",
      icon: "📜"
    },
    {
      period: "2023 - 2025",
      degree: "Class XII",
      institution: "Little Flower School",
      boardOrDetails: "PCM + Computer Science",
      status: "Completed",
      icon: "🎓"
    },
    {
      period: "2025 - 2029",
      degree: "B.Tech Computer Science & Engineering",
      institution: "Noida Institute of Engineering & Technology (NIET)",
      boardOrDetails: "Greater Noida • Class of 2029",
      status: "Currently Pursuing",
      icon: "🚀"
    }
  ] as EducationItem[],

  certificationsInfo: {
    title: "Certifications & Continuous Learning",
    description: "I believe in continuous learning and regularly complete industry-recognized certifications to strengthen my knowledge in Artificial Intelligence, Software Development, Cloud Technologies, Cybersecurity, and emerging technologies.",
    linkedinUrl: "https://www.linkedin.com/in/sanket-tiwari-5771a9380",
    linkedinButtonText: "View All Certifications on LinkedIn",
    driveUrl: "https://drive.google.com/drive/folders/1iANCj1wtB5kD6b2S9YCRKxU7TUDSw6T8?usp=drive_link",
    driveButtonText: "Google Drive Certificates",
    caption: "Explore my complete collection of certifications in AI, Generative AI, Software Development, Cloud Computing, and Cybersecurity.",
    achievementIcons: ["🏆", "🎓", "🚀", "📜"]
  },

  aiKnowledge: {
    greeting: "Hi! Welcome to Sanket's portfolio. I'm your AI guide. Feel free to ask me anything about Sanket, his skills, projects, education, certifications, or career goals.",
    faqs: [
      {
        keywords: ["who", "sanket", "about", "bio", "background", "intro"],
        answer: "Sanket Tiwari is a passionate Computer Science & Engineering student (B.Tech CSE Class of 2029) at NIET Greater Noida. He is an aspiring AI Engineer, Generative AI explorer, and software engineer focused on building real-world solutions."
      },
      {
        keywords: ["education", "college", "niet", "school", "degree", "class"],
        answer: "Sanket completed Class X (ICSE) and Class XII (PCM + CS) at Little Flower School. Currently, he is pursuing B.Tech in Computer Science & Engineering at Noida Institute of Engineering & Technology (NIET), Greater Noida (Class of 2029)."
      },
      {
        keywords: ["skill", "python", "java", "react", "c++", "programming", "language", "tech"],
        answer: "Sanket's core tech stack includes Python, Java, C, C++, JavaScript, React.js, HTML5, CSS3, Tailwind CSS, Generative AI, Prompt Engineering, Git/GitHub, and LeetCode problem solving."
      },
      {
        keywords: ["project", "nexus", "portfolio", "2048", "ai", "game", "projects", "sums"],
        answer: "Sanket has engineered three major projects: 1) Nexus AI — an intelligent RAG-powered AI assistant built with React, FastAPI, Python & Gemini API; 2) Developer Portfolio — a 3D interactive personal portfolio built with React, Three.js, GSAP & Framer Motion; 3) 2048 Nexus — a modern reimagining of the classic 2048 puzzle game with polished animations and score tracking."
      },
      {
        keywords: ["certif", "certificate", "license", "course", "learning"],
        answer: "Sanket actively pursues certifications in AI, Software Development, Cloud, and Cybersecurity. You can view his full verified certification portfolio on his LinkedIn profile."
      },
      {
        keywords: ["contact", "email", "phone", "whatsapp", "connect", "reach", "hire"],
        answer: "You can reach Sanket via Email at SANKETTIWARI943@GMAIL.COM, Phone/WhatsApp at +91 7881132006, or connect on LinkedIn (@sanket-tiwari-5771a9380) and GitHub (@sankettiwari943-coder)."
      },
      {
        keywords: ["goal", "future", "career", "aspire", "aim", "interest"],
        answer: "Sanket aims to become a leading Artificial Intelligence & Software Engineer, contributing to cutting-edge Generative AI applications, intelligent systems, and impactful open-source software."
      }
    ],
    quickChips: [
      "Tell me about Sanket",
      "Show Skills",
      "Show Projects",
      "Education",
      "Certifications",
      "Contact Details",
      "Future Goals"
    ]
  }
};
