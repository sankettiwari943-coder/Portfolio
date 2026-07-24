export interface Project {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
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

  project: {
    id: "smart-university-management",
    title: "Smart University Management System",
    shortDesc: "A Core Python project for managing university operations including student records, faculty management, attendance, courses, and administrative tasks.",
    fullDesc: "A Core Python-based University Management System designed to simplify academic administration. The application demonstrates fundamental software engineering concepts by managing student records, faculty information, courses, attendance, and administrative operations through a clean command-line interface.",
    technologies: ["Core Python", "File Handling", "Object-Oriented Programming (OOP)", "CLI Interface"],
    githubUrl: "https://lnkd.in/gW5JTuem",
    mockupIllustration: "/assets/images/smart_university_management.png"
  } as Project,

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
    description: "I believe in continuous learning and regularly complete industry-recognized certifications to strengthen my knowledge in Artificial Intelligence, Software Development, Cloud Technologies, Cybersecurity, and emerging technologies. Instead of listing every certificate here, you can explore my complete and up-to-date certification portfolio on LinkedIn.",
    linkedinUrl: "https://www.linkedin.com/in/sanket-tiwari-5771a9380",
    buttonText: "View All Certifications on LinkedIn",
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
        keywords: ["project", "university", "management", "system", "python project", "smart"],
        answer: "Sanket's flagship project is the 'Smart University Management System' built using Core Python, OOP, and File Handling. It streamlines student records, faculty data, attendance, and administrative tasks."
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
