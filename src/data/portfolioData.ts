import { Project, SkillCategory, ExperienceItem, EducationItem, ServiceItem, SocialLink, StatItem, HighlightItem } from '../types';

import portraitImg from '../assets/images/developer_portrait.webp';
import restaurantImg from '../assets/projects/restaurant-admin-system-1.webp';
import restaurantImg2 from '../assets/projects/restaurant-admin-system-2.webp';
import restaurantImg3 from '../assets/projects/restaurant-admin-system-3.webp';
import restaurantImg4 from '../assets/projects/restaurant-admin-system-4.webp';
import restaurantImg5 from '../assets/projects/restaurant-admin-system-5.webp';
import restaurantImg6 from '../assets/projects/restaurant-admin-system-6.webp';
import restaurantImg7 from '../assets/projects/restaurant-admin-system-7.webp';
import restaurantImg8 from '../assets/projects/restaurant-admin-system-8.webp';
import restaurantImg9 from '../assets/projects/restaurant-admin-system-9.webp';
import hrmsImg1 from '../assets/projects/hrms-admin-system-1.webp';
import hrmsImg2 from '../assets/projects/hrms-admin-system-2.webp';
import hrmsImg3 from '../assets/projects/hrms-admin-system-3.webp';
import realestateImg1 from '../assets/projects/realestate-admin-system-1.webp';
import realestateImg2 from '../assets/projects/realestate-admin-system-2.webp';
import realestateImg3 from '../assets/projects/realestate-admin-system-3.webp';
import realestateImg4 from '../assets/projects/realestate-admin-system-4.webp';
import realestateImg5 from '../assets/projects/realestate-admin-system-5.webp';
import realestateImg6 from '../assets/projects/realestate-admin-system-6.webp';

const restaurantGallery = [
  restaurantImg9, // login screen
  restaurantImg,  // all-branches overview dashboard
  restaurantImg2, // sales analytics
  restaurantImg3, // menu management
  restaurantImg4, // branch dashboard - EESOME CAFE
  restaurantImg5, // branch dashboard - PRIME BBQ
  restaurantImg6, // branch dashboard - KumHo Restaurant
  restaurantImg7, // branch dashboard - Blue Moon
  restaurantImg8, // branch dashboard - Kim's Brothers
];

const realestateGallery = [
  realestateImg5, // dashboard overview - rent collected, vacancy rate, unit status
  realestateImg1, // units & vacancy grid
  realestateImg6, // add unit by location
  realestateImg2, // contracts & operations
  realestateImg3, // CRM & tenants
  realestateImg4, // lease ledger
];

const hrmsGallery = [
  hrmsImg1, // dashboard overview - employee stats, attendance, health declaration
  hrmsImg2, // departments overview & calendar
  hrmsImg3, // latest hires, top employees, HR requests processed
];

export const personalInfo = {
  name: "Jegel Cabuso",
  firstName: "Jegel",
  lastName: "Cabuso",
  initials: "JC",
  title: "Full-Stack Developer",
  status: "Available for new opportunities",
  bioShort: "Versatile Web Developer with experience building web applications using Node.js, Express.js, React, and EJS.",
  bioLong: "Versatile Web Developer and IT professional with experience in developing and maintaining web applications using Node.js, Express.js, React, and EJS. Skilled in backend development, UI component creation, version control, and production troubleshooting. Experienced in software and hardware troubleshooting, technical support, and resolving system and application issues efficiently. Proficient in Git, GitHub, and modern AI-assisted development tools, with a strong ability to adapt to new technologies, collaborate with teams, and deliver reliable technical solutions.",
  location: "Philippines",
  email: "Jeljelcabuso@gmail.com",
  portrait: portraitImg,
};

export const socialLinks: SocialLink[] = [
  {
    platform: 'GitHub',
    url: 'https://github.com/Jegel-sys',
    label: 'GitHub Profile',
    username: 'Jegel-sys'
  },
  {
    platform: 'LinkedIn',
    url: 'https://www.linkedin.com/in/jegel-cabuso-59292724a/',
    label: 'LinkedIn Profile',
    username: 'jegel-cabuso'
  },
  {
    platform: 'Email',
    url: 'https://mail.google.com/mail/?view=cm&fs=1&to=Jeljelcabuso@gmail.com',
    label: 'Send Email',
    username: 'Jeljelcabuso@gmail.com'
  }
];

export const aboutHighlights: HighlightItem[] = [
  {
    title: "Problem Solver",
    description: "I turn complex problems into simple, efficient solutions.",
    icon: "brain"
  },
  {
    title: "Continuous Learner",
    description: "Always exploring new technologies and best practices.",
    icon: "sparkles"
  },
  {
    title: "Team Player",
    description: "I believe in good communication and collaboration.",
    icon: "users"
  }
];

export const statistics: StatItem[] = [
  { value: "3+", label: "Projects Completed" },
  { value: "10+", label: "Technologies" },
  { value: "4+", label: "Years Experience" },
  { value: "3+", label: "Clients / Systems Built" }
];

export const skillCategories: SkillCategory[] = [
  {
    title: "Database Management",
    categoryKey: "database",
    skills: [
      { name: "SQL", iconName: "sql" },
      { name: "MySQL", iconName: "mysql" },
      { name: "phpMyAdmin", iconName: "phpmyadmin" },
      { name: "Relational Database Joins", iconName: "joins" },
      { name: "Data Querying & Cleanup", iconName: "query" }
    ]
  },
  {
    title: "Backend & Frontend Development",
    categoryKey: "backend",
    skills: [
      { name: "Node.js", iconName: "nodejs" },
      { name: "Express.js", iconName: "express" },
      { name: "EJS", iconName: "ejs" },
      { name: "MVC Architecture", iconName: "mvc" },
      { name: "React.js", iconName: "react" },
      { name: "TypeScript", iconName: "typescript" },
      { name: "Tailwind CSS", iconName: "tailwind" }
    ]
  },
  {
    title: "Tools & Workflows",
    categoryKey: "tools",
    skills: [
      { name: "Git", iconName: "git" },
      { name: "GitHub (pull, push, PRs)", iconName: "github" },
      { name: "Cursor AI", iconName: "cursorai" }
    ]
  },
  {
    title: "Professional Skills",
    categoryKey: "general",
    skills: [
      { name: "Software & Hardware Troubleshooting", iconName: "troubleshooting" },
      { name: "MS Office", iconName: "msoffice" }
    ]
  }
];

export const featuredProject: Project = {
  id: "restaurant-management-system",
  title: "Restaurant Management System",
  category: "Management Systems",
  description: "A multi-branch restaurant management platform that centralizes sales analytics, menu control, and daily operations across every branch. It helps owners and staff track sales, manage inventory, and process orders in real time.",
  detailedDescription: "Built as an all-in-one operations hub for multi-branch restaurant groups. Features a live sales analytics dashboard with branch-to-branch performance comparison, menu and category management, inventory tracking with low-stock alerts, order processing across dine-in, takeaway, and online channels, and role-based admin access per branch.",
  image: restaurantImg,
  images: restaurantGallery,
  technologies: ["React", "Node.js", "MySQL", "Tailwind CSS"],
  features: [
    "Multi-Branch Sales Dashboard",
    "Menu & Inventory Management",
    "Order & Billing Processing",
    "Real-Time Analytics & Reports"
  ],
  featured: true
};

export const projects: Project[] = [
  {
    id: "restaurant-management-system",
    title: "Restaurant Management System",
    category: "Management Systems",
    description: "A multi-branch restaurant platform for sales tracking, menu control, inventory, and order processing.",
    detailedDescription: "A comprehensive management suite for restaurant groups handling multiple branches, real-time sales analytics, and day-to-day operations.",
    image: restaurantImg,
    images: restaurantGallery,
    technologies: ["React", "Node.js", "MySQL", "Tailwind CSS"],
    features: [
      "Multi-branch sales dashboard with branch comparison",
      "Menu, category & inventory management",
      "Order processing across dine-in, takeaway & online",
      "Real-time revenue & profit reports"
    ],
    featured: true
  },
  {
    id: "real-estate-management-system",
    title: "Real Estate Management System",
    category: "Management Systems",
    description: "A property management platform for tracking units, vacancies, lease contracts, and tenant records across multiple locations.",
    detailedDescription: "Built as a centralized operations hub for property managers and landlords. Features unit and vacancy tracking by city and location, lease contract generation with renewal tracking, tenant CRM with KYC verification, and a rent ledger with automated overdue payment monitoring.",
    image: realestateImg5,
    images: realestateGallery,
    technologies: ["React", "Node.js", "MySQL", "Tailwind CSS"],
    features: [
      "Unit & Vacancy Management by Location",
      "Lease Contracts & Renewal Tracking",
      "Tenant CRM & KYC Verification",
      "Rent Ledger & Overdue Payment Alerts"
    ],
    featured: false
  },
  {
    id: "hrms-management-system",
    title: "HRMS - Human Resource Management System",
    category: "Web Apps",
    description: "A centralized HR platform for managing employees, attendance, staffing, and department operations.",
    detailedDescription: "Built as an all-in-one HR console for enterprises to track employee records, daily attendance and health declarations, department staffing distribution, hiring and promotions, and approval workflows for requests and certifications.",
    image: hrmsImg1,
    images: hrmsGallery,
    technologies: ["React", "Node.js", "MySQL", "Tailwind CSS"],
    features: [
      "Employee Records & Attendance Tracking",
      "Department Staffing & Org Overview",
      "Hiring, Promotions & Approval Workflows",
      "HR Requests & Calendar Management"
    ],
    featured: false
  }
];

export const experiences: ExperienceItem[] = [
  {
    position: "Web Developer",
    company: "Core System",
    date: "February 2025 – August 2026",
    description: "Full-stack web developer maintaining production systems on a modern Node.js and React stack.",
    responsibilities: [
      "Developed and maintained scalable web applications using Node.js, Express.js, React, and EJS, following the MVC architecture.",
      "Managed production code through Git and GitHub, troubleshooting live server issues as they came up.",
      "Collaborated with the team through Pull Requests for code review and merging.",
      "Leveraged Cursor AI for efficient development, code analysis, debugging, and application improvements."
    ],
    technologies: ["Node.js", "Express.js", "React", "EJS", "Git", "GitHub"]
  },
  {
    position: "Network Engineer",
    company: "D'Heights Hotel and Casino",
    date: "February 2025 – August 2026",
    description: "Deployed on-site at D'Heights Hotel and Casino (Clark, Pampanga) to support network infrastructure whenever the department was short-staffed, alongside web development duties at Core System.",
    responsibilities: [
      "Maintained computer networks and systems, including software, mainframes, VPNs, rack servers, routers, switches, and other physical hardware.",
      "Installed and configured network equipment to update or fix hardware and software issues.",
      "Updated virus protection software to keep data and communications protected.",
      "Monitored computer systems and networks to improve overall performance.",
      "Communicated networking issues to employees and management, especially when training new users.",
      "Fixed software and hardware configuration issues for users on-demand or through inspection of the systems."
    ],
    technologies: ["Network Administration", "VPN", "Routers & Switches", "Server Hardware"]
  },
  {
    position: "Savings Bookkeeper / Posting Clerk",
    company: "Saviour Bank",
    date: "June 2023 – February 2025",
    description: "Handled day-to-day savings account bookkeeping and daily transaction posting for the branch.",
    responsibilities: [
      "Maintained accurate financial records and balanced ledgers on a daily basis.",
      "Processed daily banking transactions with high attention to detail.",
      "Developed strong skills in data organization, accuracy, and systematic problem-solving."
    ],
    technologies: []
  },
  {
    position: "T-Mobile Account",
    company: "Alorica BPO",
    date: "August 2022 – February 2023",
    description: "Customer support representative handling technical troubleshooting and account concerns for the T-Mobile account.",
    responsibilities: [
      "Handled customer calls for technical troubleshooting, account concerns, and product support.",
      "Assisted customers with mobile phone sales and product recommendations based on their needs."
    ],
    technologies: []
  }
];

export const education: EducationItem[] = [
  {
    institution: "Don Honorio Ventura State University (DHVSU)",
    note: "now Pampanga State University",
    degree: "Bachelor of Science in Information Technology",
    date: "2018 – 2022"
  }
];

export const services: ServiceItem[] = [
  {
    id: "web-app",
    title: "Web Application Development",
    description: "Custom web applications built for specific business requirements with focus on security, reliability, and speed.",
    icon: "code"
  },
  {
    id: "fullstack",
    title: "Full-Stack Development",
    description: "Frontend and backend development with scalable architecture, clean code practices, and modern design principles.",
    icon: "layers"
  },
  {
    id: "hr-systems",
    title: "HR & Employee Management Systems",
    description: "Employee record, attendance, department staffing, and approval workflow systems for HR teams.",
    icon: "briefcase"
  },
  {
    id: "real-estate",
    title: "Real Estate Management",
    description: "Comprehensive property, unit, tenant, lease, and operational management systems with high reliability.",
    icon: "building"
  },
  {
    id: "api-dev",
    title: "API Development",
    description: "Build secure, documented, and scalable REST APIs that power seamless client-server data flows.",
    icon: "cpu"
  },
  {
    id: "db-integration",
    title: "Database Integration",
    description: "Design and integrate reliable, normalized MySQL database systems optimized for performance and data integrity.",
    icon: "database"
  }
];
