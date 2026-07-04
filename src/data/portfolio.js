import {
  BrainCircuit,
  Braces,
  Code2,
  Database,
  GitBranch,
  GraduationCap,
  Layers3,
  ServerCog,
  ShieldCheck,
  Sparkles,
  Workflow,
  Wrench
} from "lucide-react";

export const navItems = [
  { label: "About", href: "#about" },
  { label: "Achievements", href: "#achievements" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Journey", href: "#journey" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" }
];

export const links = {
  email: "mailto:roopanshsaxena1524@gmail.com",
  github: "https://github.com/Roopansh15",
  linkedin: "https://linkedin.com/in/roopansh-saxena-79199427b",
  phone: "tel:+917060632049",
  resume: "/resume-roopansh-saxena.pdf"
};

export const profile = {
  name: "Roopansh Saxena",
  role: "AI and Full-Stack Builder",
  email: "roopanshsaxena1524@gmail.com",
  phone: "+91 7060632049",
  location: "544, Madhinath, Bareilly, Uttar Pradesh, 243001",
  college: "Ajay Kumar Garg Engineering College",
  degree: "B.Tech - Computer Science and Engineering"
};

export const heroSignals = [
  {
    label: "National finalist",
    value: "2x",
    detail: "Finalist at Meta x PyTorch OpenEnv Hackathon and Economic Times AI Hackathon 2.0."
  },
  {
    label: "Core systems",
    value: "Agents + RAG",
    detail: "InboxWorld, EPC Guardian, reward logic, retrieval, offline fallback, and automation."
  },
  {
    label: "Product stack",
    value: "MERN + AI",
    detail: "React, Node.js, Express, MongoDB, JWT auth, APIs, OpenAI-ready architecture, and Ollama."
  }
];

export const achievementHighlights = [
  {
    label: "Finalist @ Meta x PyTorch OpenEnv Hackathon",
    title: "InboxWorld - Teaching LLMs to Survive Corporate Triage",
    track: "AI RL LLM Hackathon",
    detail:
      "Built an OpenEnv-compatible multi-agent environment that turns email triage from a static classification task into a long-horizon agent decision problem.",
    bullets: [
      "Designed a four-agent decision pipeline with Inbox Analyst, Priority Planner, Responder Agent, and Supervisor Agent.",
      "Integrated a Gradio demo UI with Hugging Face hosted LLM inference and a local multi-agent fallback.",
      "Built a minimal Hugging Face TRL training pipeline from prompt-action-reward environment transitions.",
      "Focused the system on prioritization, response generation, escalation, safety checks, and reward modeling."
    ],
    stack: ["Python", "Gradio", "Hugging Face", "HF TRL", "OpenEnv", "Multi-Agent Systems", "Reward Modeling"],
    github: "https://github.com/Roopansh15/Meta-Hackathon-Final",
    liveDemo: "https://huggingface.co/spaces/RoopanshSaxena/FinalProject"
  },
  {
    label: "Finalist @ Economic Times AI Hackathon 2.0",
    title: "EPC Guardian - AI Intelligence Platform for Data Centre EPC Delivery",
    track: "AI National Hackathon",
    detail:
      "Built an offline-first EPC project intelligence platform for detecting specification deviations, predicting schedule impact, and supporting evidence-backed engineering decisions.",
    bullets: [
      "Developed 8 modules covering project overview, document Q&A, compliance review, schedule impact, commissioning readiness, supply-chain alerts, evidence library, and validation dashboard.",
      "Designed offline fallback by default with optional API-key-based AI and RAG extension for grounded answers and structured extraction.",
      "Validated the prototype with automated tests and a labelled retrieval benchmark.",
      "Covered compliance logic, search accuracy, commissioning blockers, schedule prediction, and supply-chain severity."
    ],
    stack: ["JavaScript", "Node.js", "REST APIs", "Rule-Based AI", "RAG-style Retrieval", "Node.js Testing", "Git/GitHub"],
    github: "https://github.com/Roopansh15/ET-Hackathon-Final"
  }
];

export const projects = [
  {
    title: "MyGPT",
    subtitle: "MERN AI assistant with secure auth and flexible model providers",
    category: "Full Stack",
    tags: ["React", "Vite", "Tailwind", "Express", "MongoDB", "JWT", "OpenAI API", "Ollama"],
    problem:
      "AI assistant demos often stop at a prompt box. The real challenge was building a usable full-stack product with authentication, protected routes, persistent state, and configurable AI providers.",
    solution:
      "Built a MERN AI assistant using React.js, Vite, Tailwind CSS, Express.js, MongoDB, and Mongoose. Implemented JWT authentication, bcrypt password hashing, protected routes, persistent login state, and a provider layer for Demo mode, OpenAI API, and local Ollama.",
    impact:
      "Shows end-to-end product ownership across secure auth, API architecture, frontend UX, database persistence, and AI-provider flexibility.",
    github: "https://github.com/Roopansh15/MyGPT",
    demoVideo: "/demos/mygpt-demo.mp4",
    accent: "cyan"
  },
  {
    title: "InboxWorld",
    subtitle: "OpenEnv-compatible multi-agent email triage environment",
    category: "AI Agents",
    tags: ["Python", "Gradio", "Hugging Face", "HF TRL", "OpenEnv", "Reward Modeling"],
    problem:
      "Corporate inbox triage is a long-horizon decision problem. Agents must prioritize, respond, escalate, and satisfy safety constraints instead of producing one-off classifications.",
    solution:
      "Created InboxWorld with a four-agent decision pipeline: Inbox Analyst, Priority Planner, Responder Agent, and Supervisor Agent. Added Gradio UI, Hugging Face hosted LLM inference, offline fallback, and TRL-ready prompt-action-reward records.",
    impact:
      "Positions the project as an agent evaluation and training environment, not just an email UI. The system connects scenarios, actions, rewards, and model behavior.",
    github: "https://github.com/Roopansh15/Meta-Hackathon-Final",
    demoVideo: "/demos/inboxworld-demo.mp4",
    accent: "emerald"
  },
  {
    title: "EPC Guardian",
    subtitle: "Offline-first AI intelligence platform for data centre EPC delivery",
    category: "Document AI",
    tags: ["JavaScript", "Node.js", "HTML/CSS", "REST APIs", "Rule-Based AI", "RAG-style Retrieval"],
    problem:
      "Data centre EPC delivery depends on matching requirements, submissions, schedules, commissioning blockers, and supply-chain signals. Late mismatch discovery creates real operational risk.",
    solution:
      "Built an offline-first platform with 8 modules: project overview, document Q&A, compliance review, schedule impact, commissioning readiness, supply-chain alerts, evidence library, and validation dashboard. Designed optional AI and RAG extension for grounded answers and structured extraction.",
    impact:
      "Applies AI to real engineering operations by detecting deviations, predicting schedule impact, supporting evidence-backed decisions, and validating the prototype through tests and retrieval benchmarks.",
    github: "https://github.com/Roopansh15/ET-Hackathon-Final",
    demoVideo: "/demos/epc-guardian-demo.mp4",
    accent: "amber"
  }
];

export const projectFilters = ["All", "Full Stack", "AI Agents", "Document AI"];

export const skillGroups = [
  {
    title: "Programming",
    icon: Code2,
    skills: ["JavaScript (ES6+)", "C++ (Learning DSA)", "Python exposure", "HTML5", "CSS3"]
  },
  {
    title: "Frontend",
    icon: Layers3,
    skills: ["React.js", "Vite", "Tailwind CSS", "Responsive Web Design", "Component Design"]
  },
  {
    title: "Backend",
    icon: ServerCog,
    skills: ["Node.js", "Express.js", "REST APIs", "Authentication (JWT)", "Server Logic"]
  },
  {
    title: "Database",
    icon: Database,
    skills: ["MongoDB", "Mongoose", "SQL", "Data Modeling", "CRUD Systems"]
  },
  {
    title: "AI / ML",
    icon: BrainCircuit,
    skills: ["LLM Apps", "Prompt Engineering", "AI Agents", "RAG", "Reward Engineering", "AI Workflow Automation"]
  },
  {
    title: "Tools",
    icon: Wrench,
    skills: ["Git", "GitHub", "Postman", "VS Code", "Hugging Face", "Docker"]
  },
  {
    title: "Core CS",
    icon: GraduationCap,
    skills: ["DSA", "OOP", "DBMS", "Operating Systems", "Computer Network"]
  },
  {
    title: "Soft Skills",
    icon: ShieldCheck,
    skills: ["Problem Solving", "Analytical Thinking", "Team Collaboration", "Communication", "Adaptability"]
  }
];

export const journey = [
  {
    date: "Foundation",
    title: "MERN stack builder",
    description:
      "Built a strong base in React, Node.js, Express, MongoDB, APIs, authentication, and practical product development."
  },
  {
    date: "Acceleration",
    title: "Hackathon finalist mindset",
    description:
      "Reached finalist stage at Meta x PyTorch OpenEnv Hackathon and Economic Times AI Hackathon 2.0."
  },
  {
    date: "AI Products",
    title: "LLM apps and assistant systems",
    description:
      "Built MyGPT with secure auth, configurable AI providers, OpenAI API support, and local Ollama development."
  },
  {
    date: "Agent Systems",
    title: "Evaluation and decision environments",
    description:
      "Built InboxWorld around multi-agent behavior, reward logic, scenario design, and training-ready transitions."
  },
  {
    date: "Now",
    title: "Real-world engineering AI",
    description:
      "Focused on EPC Guardian, offline-first document intelligence, RAG-style retrieval, validation dashboards, and engineering risk workflows."
  }
];

export const education = [
  {
    institution: "Ajay Kumar Garg Engineering College",
    location: "Ghaziabad, Uttar Pradesh",
    date: "Oct 2023",
    credential: "B.Tech - Computer Science and Engineering",
    score: "70%"
  },
  {
    institution: "Bishop Conrad Senior Secondary School",
    location: "Bareilly, Uttar Pradesh",
    date: "Jun 2022",
    credential: "Class 12 - PCM",
    score: "91.4%"
  },
  {
    institution: "Bishop Conrad Senior Secondary School",
    location: "Bareilly, Uttar Pradesh",
    date: "Jun 2020",
    credential: "Class 10",
    score: "88.8%"
  }
];

export const principles = [
  {
    icon: Workflow,
    title: "Systems before screens",
    detail: "I think through data flow, failure cases, and decision logic before polishing the interface."
  },
  {
    icon: Sparkles,
    title: "AI with utility",
    detail: "I prefer AI that automates work, evaluates choices, and creates measurable outcomes."
  },
  {
    icon: Braces,
    title: "Product-grade execution",
    detail: "I care about clean components, strong copy, responsive layouts, and credible product behavior."
  },
  {
    icon: GitBranch,
    title: "Fast learning loops",
    detail: "Hackathons trained me to prototype quickly while still communicating the core technical story."
  }
];
