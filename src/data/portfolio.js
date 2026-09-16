// ============================================
// PORTFOLIO DATA
// Edit this file to update your portfolio content.
// ============================================

export const personalInfo = {
  name: "Aakash B",
  role: "AI/ML & Full-Stack Developer",
  greeting: "// welcome",
  headline: "Hi, I'm Aakash B.",
  tagline: "Building intelligent systems, production-ready applications, and AI-powered software.",
  description:
    "I combine AI/ML knowledge with software engineering and full-stack development to build practical, real-world applications — from machine learning pipelines to scalable backend systems.",
  email: "aakash.balasubramani02@gmail.com",
  github: "https://github.com/aakashbalasubramani02-hue",
  githubDisplay: "github.com/aakashbalasubramani02-hue",
  linkedin: "https://www.linkedin.com/in/aakash-balasubramani-994b47320",
  linkedinDisplay: "linkedin.com/in/aakash-balasubramani",
};

export const aboutParagraphs = [
  "I am pursuing an Integrated M.Sc. in Artificial Intelligence & Machine Learning at Coimbatore Institute of Technology, Coimbatore. My interests span machine learning, AI agents, backend engineering, full-stack development, cloud technologies, and building practical software products.",
  "I enjoy working on projects that combine intelligent models with real-world software systems — rather than treating machine learning as an isolated model-training task. From designing multi-agent architectures to building end-to-end web applications, I focus on creating software that is both intelligent and production-ready.",
  "I have worked with both machine learning workflows and modern software engineering technologies, building projects across AI security, autonomous agents, commerce platforms, and data science.",
];

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const skills = [
  {
    category: "Programming",
    items: ["Python", "Java", "C", "C++", "SQL", "PL/SQL"],
  },
  {
    category: "AI / Machine Learning",
    items: [
      "Machine Learning", "Scikit-learn", "TensorFlow", "PyTorch",
      "XGBoost", "Pandas", "NumPy", "K-Means", "Logistic Regression",
      "Random Forest", "Naive Bayes", "PCA", "SMOTE", "Sentiment Analysis",
    ],
  },
  {
    category: "Full-Stack / Backend",
    items: [
      "HTML", "React", "Node.js", "Express", "NestJS",
      "Flask", "FastAPI", "PostgreSQL", "Redis", "Prisma",
    ],
  },
  {
    category: "Cloud / DevOps / Tools",
    items: [
      "Docker", "Docker Compose", "Git", "GitHub",
      "Kafka", "Hugging Face", "Streamlit", "VS Code",
    ],
  },
];

export const projects = [
  {
    title: "PaSo AI",
    badge: "AI Pathology",
    subtitle: "AI Pathology Assistant",
    description:
      "An AI-powered pathology assistant leveraging deep learning for automated histopathological image analysis, achieving high diagnostic accuracy on benchmark datasets.",
    highlights: [
      "ResNet-50 architecture",
      "Grad-CAM explainability",
      "PatchCamelyon dataset",
      "CAMELYON17 evaluation",
      "ROC-AUC 0.9491",
      "Histopathological analysis",
    ],
    technologies: ["Python", "PyTorch", "ResNet-50", "Grad-CAM", "PatchCamelyon", "CAMELYON17"],
    featured: true,
  },
  {
    title: "CommerceOS",
    badge: "AI-Native Platform",
    subtitle: "AI-Native Commerce Operating System",
    description:
      "An AI-native commerce platform designed to combine CRM workflows, autonomous digital employees, customer intelligence, and business operations into a unified system.",
    highlights: [
      "Autonomous digital employees",
      "Customer relationship management",
      "Event-driven architecture",
      "AI-powered workflows",
      "Scalable backend infrastructure",
      "Business operations",
    ],
    technologies: ["NestJS", "Prisma", "PostgreSQL", "Redis", "Kafka", "Docker", "React", "AI Agents"],
    featured: true,
  },
  {
    title: "CLOTE",
    badge: "AI Trust & Verification",
    subtitle: "AI Image Trust & Verification",
    description:
      "An AI-powered image trust and verification system designed for intent-aware verification and temporal authenticity drift detection.",
    highlights: [
      "Intent-aware verification",
      "Temporal authenticity drift detection",
      "Image trust scoring",
      "AI-powered analysis",
    ],
    technologies: ["Python", "Deep Learning", "Computer Vision"],
    featured: true,
  },
  {
    title: "Sentinel-Agent",
    badge: "Security Research",
    subtitle: "Explainable Runtime Security Layer for AI Agents",
    description:
      "An AI-agent security architecture designed to defend tool-using agents against indirect prompt injection and tool-metadata poisoning.",
    highlights: [
      "Agent security",
      "Indirect prompt injection defense",
      "Tool metadata poisoning",
      "Runtime security",
      "Explainability",
      "Secure tool execution",
    ],
    technologies: [],
    featured: true,
  },
  {
    title: "GreenOrchestrator",
    badge: "Completed",
    subtitle: "Green Computing Orchestration",
    description:
      "A completed project focused on orchestrating green computing workflows and sustainable software engineering practices.",
    highlights: [
      "Green computing",
      "Sustainable orchestration",
      "Resource optimization",
    ],
    technologies: [],
    featured: false,
  },
  {
    title: "Autonomous CRM Agent",
    badge: "Agentic AI",
    subtitle: "Autonomous CRM Agent for E-Commerce",
    description:
      "An agentic AI system designed to monitor customer activity, analyze customer behavior, assist CRM operations, and provide actionable business insights.",
    highlights: [
      "Multi-agent architecture",
      "Customer activity monitoring",
      "CRM automation",
      "Customer churn prediction",
      "Business intelligence",
      "AI-driven decision support",
    ],
    technologies: [],
    featured: true,
  },
  {
    title: "AutoML Algorithm Recommender",
    badge: "Machine Learning",
    subtitle: null,
    description:
      "A machine-learning system that recommends suitable algorithms based on dataset meta-features, automating the model selection process.",
    highlights: [
      "Dataset meta-feature extraction",
      "Algorithm recommendation",
      "ML classification",
      "Automated model selection",
    ],
    technologies: ["Python", "Pandas", "Scikit-learn", "XGBoost"],
    featured: false,
  },
];

export const minorProjects = {
  title: "AI / ML Applications",
  description:
    "Academic and hands-on implementations across core machine learning techniques and data science workflows.",
  tags: [
    "Logistic Regression", "KNN", "Decision Trees", "Naive Bayes",
    "Random Forest", "XGBoost", "K-Means Clustering", "PCA",
    "SMOTE", "Sentiment Analysis",
  ],
};

export const experience = [
  {
    role: "Cloud Computing Intern",
    company: "CodeAlpha",
    period: "May 2026 – Jun 2026",
    description:
      "Gained practical exposure to cloud computing concepts and software development workflows. Worked with cloud infrastructure and development tools in a professional environment.",
  },
  {
    role: "ATS Intern",
    company: "ATS",
    period: "Internship",
    description:
      "Gained exposure to professional software development practices and workflows.",
  },
];

export const education = [
  {
    institution: "Coimbatore Institute of Technology",
    degree: "Integrated M.Sc. Artificial Intelligence & Machine Learning",
    meta: "CGPA: 7.26 / 10",
  },
  {
    institution: "Bharathi Vidhya Bhavan",
    degree: "Higher Secondary Education",
    meta: "Aggregate: 87%",
  },
];

export const buildAreas = [
  {
    icon: "⚙️",
    title: "Intelligent Systems",
    description: "Machine learning models and AI-powered applications.",
  },
  {
    icon: "🤖",
    title: "Agentic AI",
    description: "Multi-agent systems and autonomous software workflows.",
  },
  {
    icon: "🔗",
    title: "Full-Stack Applications",
    description: "End-to-end applications connecting modern frontend, backend, and databases.",
  },
  {
    icon: "📦",
    title: "Production Software",
    description: "Containerized, scalable, and maintainable applications using modern engineering practices.",
  },
];

export const exploringTopics = [
  "Agentic AI",
  "AI Security",
  "Autonomous Software Agents",
  "AI-powered CRM",
  "Full-Stack Engineering",
  "Cloud Computing",
  "Distributed Systems",
  "Production ML Systems",
];

export const achievements = [
  "Zonal-level volleyball player",
  "NCC candidate",
];
