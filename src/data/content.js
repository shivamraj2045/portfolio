export const profile = {
  name: "Shivam Raj",
  title: "B.Tech Computer Science Engineering Student",
  tagline: "Developer | Problem Solver | Tech Enthusiast",
  description:
    "I am a Computer Science student passionate about software development, problem-solving, and building practical technology projects.",
  location: "India",
  email: "rajshivamkumar145@gmail.com",
  profileImage: "/profile.jpeg",
  resumeUrl: "/resume.pdf",
  availability: "Open to internships & collaboration",
  quickFacts: ["B.Tech CSE", "3rd Year", "India"],
};

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const socials = [
  {
    label: "GitHub",
    href: "https://github.com/shivam-raj145",
    icon: "github",
  },
  {
    label: "LinkedIn",
    href: "#",
    icon: "linkedin",
    placeholder: true,
  },
  {
    label: "LeetCode",
    href: "#",
    icon: "code",
    placeholder: true,
  },
];

export const about = {
  paragraphs: [
    "I'm Shivam Raj, a B.Tech Computer Science Engineering student at Shivalik College of Engineering, Dehradun, Uttarakhand.",
    "I'm passionate about software development, problem-solving, and building practical technology projects. I enjoy working with data structures and algorithms, exploring backend development, and understanding how reliable systems are designed.",
    "My goal is to grow into a strong software engineer by shipping thoughtful projects, collaborating with technical teams, and continuously learning modern tools and technologies.",
  ],
  highlights: [
    { label: "Degree", value: "B.Tech Computer Science Engineering" },
    { label: "College", value: "Shivalik College of Engineering" },
    { label: "Location", value: "Dehradun, Uttarakhand" },
    { label: "Current Year", value: "3rd Year" },
  ],
  interests: [
    "Software Development",
    "Data Structures & Algorithms",
    "Backend Development",
    "Technology",
  ],
  goal:
    "Build practical, reliable software and grow into a backend-focused software engineer.",
};

export const experience = [
  {
    role: "Joint Secretary",
    organization: "ACM Student Chapter",
    period: "1 Year",
    summary:
      "Contributed to the chapter's coordination and technical activities before being promoted to Technical Head.",
    points: [
      "Supported the planning and coordination of chapter activities.",
      "Assisted with technical events and student engagement.",
      "Collaborated with the core team on chapter initiatives.",
    ],
  },
  {
    role: "Technical Head",
    organization: "ACM Student Chapter",
    period: "6 Months",
    summary:
      "Leading technical initiatives after serving as Joint Secretary for one year.",
    points: [
      "Promoted from Joint Secretary to Technical Head.",
      "Led technical initiatives and coordinated with the chapter team.",
      "Planned and supported technical events and student activities.",
      "Participated in technical events, hackathons, and peer learning sessions.",
      "Collaborated with team members on technology-focused projects and discussions.",
    ],
  },
  {
    role: "IT Team Member",
    organization: "International-Level College Hackathon",
    period: "Event",
    summary:
      "Managed an international-level college hackathon as part of the IT team.",
    points: [
      "Managed the international-level college hackathon as part of the IT team.",
      "Coordinated technical support and event operations with the IT team.",
    ],
  },
];

export const skillGroups = [
  {
    title: "Programming Languages",
    icon: "code",
    skills: ["Java", "C++", "C", "Python", "JavaScript", "SQL"],
  },
  {
    title: "Frontend",
    icon: "monitor",
    skills: ["HTML", "CSS", "JavaScript", "Bootstrap", "Tailwind CSS"],
  },
  {
    title: "Backend",
    icon: "server",
    skills: ["Node.js", "Express.js", "EJS", "REST APIs"],
  },
  {
    title: "Databases",
    icon: "database",
    skills: ["MongoDB", "MySQL", "PostgreSQL"],
  },
  {
    title: "Tools",
    icon: "wrench",
    skills: ["Git", "GitHub", "VS Code", "Linux"],
  },
  {
    title: "Core CS",
    icon: "cpu",
    skills: ["DSA", "DBMS", "OOP", "Operating Systems", "Computer Networks"],
  },
];

export const projects = [
  {
    title: "Trinetra",
    category: "Patent · Space Technology · LEO PNT",
    description:
      "An innovative project related to Low Earth Orbit (LEO)-based Positioning, Navigation, and Timing (PNT) technology, exploring advancements in satellite-based navigation and positioning systems with a focus on improving navigation reliability and positioning capabilities.",
    image: "/projects/trinetra.svg",
    tags: ["Patent", "Space Technology", "LEO PNT"],
    github: "#",
    demo: "#",
  },
  {
    title: "EcoSwap",
    category: "AI / IoT / Sustainability",
    description:
      "An AI and IoT-based waste management and segregation project focused on sustainability.",
    image: "/projects/ecoswap.svg",
    tags: ["AI", "IoT", "Sustainability"],
    github: "#",
    demo: "#",
  },
  {
    title: "Ultrasound",
    category: "Medical Technology",
    description:
      "An ultrasound-related technology project in the medical technology space.",
    image: "/projects/ultrasound.svg",
    tags: ["Medical Technology"],
    github: "#",
    demo: "#",
  },
  {
    title: "Student Management System",
    category: "Java / Software Development",
    description:
      "A Java-based student information management application.",
    image: "/projects/student-management.svg",
    tags: ["Java", "Software Development"],
    github: "#",
    demo: "#",
  },
];

export const education = [
  {
    degree: "B.Tech Computer Science Engineering",
    institution: "Shivalik College of Engineering",
    location: "Dehradun, Uttarakhand",
    period: "Present",
    status: "Currently pursuing 3rd year",
    cgpa: null,
  },
  {
    degree: "Class XII",
    institution: "S. N. N. R. College",
    location: "Chamtha, Begusarai, Bihar",
    period: "Senior Secondary",
    status: "Completed",
    cgpa: null,
  },
  {
    degree: "Class X",
    institution: "St. Paul's School",
    location: "Begusarai, Bihar",
    period: "Secondary",
    status: "Completed",
    cgpa: null,
  },
];

export const achievements = [
  {
    title: "Technical Head — ACM Student Chapter",
    tag: "Leadership",
    description:
      "Promoted from Joint Secretary after one year and now leading technical initiatives with the chapter team.",
    icon: "users",
  },
  {
    title: "Hackathon Participation",
    tag: "Hackathons",
    description:
      "Participated in hackathons and technical events, learning through collaboration and fast-paced building.",
    icon: "trophy",
  },
  {
    title: "Technical Project Work",
    tag: "Technical",
    description:
      "Built projects across AI/IoT, medical technology, and Java-based record management.",
    icon: "cpu",
  },
  {
    title: "Certifications",
    tag: "this feature added soon",
    description: "",
    icon: "badge",
    placeholder: true,
  },
];

export const codingProfiles = [
  {
    platform: "GitHub",
    handle: "@shivam-raj145",
    href: "https://github.com/shivam-raj145",
    icon: "github",
    description: "Projects, experiments, and open-source work.",
  },
  {
    platform: "LeetCode",
    handle: "",
    href: "#",
    icon: "code",
    description: "Data structures and algorithms practice.",
    placeholder: true,
  },
  {
    platform: "LinkedIn",
    handle: "",
    href: "#",
    icon: "linkedin",
    description: "Professional profile and networking.",
    placeholder: true,
  },
  {
    platform: "Codeforces",
    handle: "",
    href: "#",
    icon: "terminal",
    description: "Competitive programming profile, if available.",
    placeholder: true,
  },
];

export const contact = {
  heading: "Let's Connect",
  description:
    "I'm open to internship opportunities, collaboration, and interesting software development projects.",
  email: "rajshivamkumar145@gmail.com",
  location: "India",
  availability: "Open to internship opportunities",
};
