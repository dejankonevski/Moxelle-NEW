/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { MetricPoint, Solution, ProcessStep, FaqItem, TalentProfile } from './types';

export const METRIC_POINTS: MetricPoint[] = [
  {
    value: "30%+",
    label: "Average Cost Reduction"
  },
  {
    value: "21 Days",
    label: "Average Team Launch"
  },
  {
    value: "96%",
    label: "Annual Developer Retention"
  },
  {
    value: "100%",
    label: "Direct Integration"
  }
];

export const SOLUTIONS: Solution[] = [
  {
    id: "dedicated-hubs",
    title: "Dedicated Engineering Hubs",
    description: "Secure a full-time, direct remote extension of your product department. Your dedicated team operates exclusively on your proprietary codebases under your daily leadership, on your Slack and GitHub, with zero intermediary proxies.",
    benefits: [
      "100% focused on your product backlog & roadmap",
      "We manage payroll, legal compliance, and high-spec hardware",
      "Save 30% to 50% compared to local recruitment pipelines"
    ],
    label: "HUB MODEL"
  },
  {
    id: "cto-as-a-service",
    title: "Fractional Tech Leadership",
    description: "Deploy strategic technology expertise to audit legacy database locks, untangle scaling bottlenecks, design highly robust system architectures, or recruit key internal hires without the overhead of a full-time C-suite executive.",
    benefits: [
      "Deep system architecture and scaling audits",
      "Strategic roadmap design & hiring blueprints",
      "Immediate fractional availability (US/EU timezones)"
    ],
    label: "FRACTIONAL TECH"
  },
  {
    id: "api-integrations",
    title: "API Systems & Middleware",
    description: "Implement high-throughput REST, GraphQL, or gRPC interfaces. Seamlessly synchronize third-party SaaS pipelines (Stripe, Salesforce, Hubspot) and deploy resilient payment webhook adapters that sustain extreme peak loads.",
    benefits: [
      "Fault-tolerant third-party integrations",
      "Robust custom middle-tier database pipelines",
      "Zero-downtime microservice migrations"
    ],
    label: "MIDDLEWARE"
  },
  {
    id: "operational-efficiency",
    title: "Operational Efficiency & Auditing",
    description: "We deploy our elite engineering management staff to shadow and audit your active developer team absolutely free. After gathering objective roadmap performance and output data, we step in to reorganize, plan, structure, and optimize your division.",
    benefits: [
      "Free initial 14-day shadowing & engineering process audit",
      "Strategic optimization blueprints including staffing & pipeline structure",
      "Eliminate legacy code debt, redundant system overheads, and roadmap lag"
    ],
    label: "OPERATIONAL AUDIT"
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: 1,
    duration: "Day 1-3",
    title: "Roadmap Analysis",
    description: "We audit your backlogs, tech stacks, and active timezone synchronization parameters to define your ideal candidate profiles."
  },
  {
    number: 2,
    duration: "Day 4-10",
    title: "Direct Selection",
    description: "We present a hand-selected shortlist of pre-vetted senior developers with verified production-grade experience."
  },
  {
    number: 3,
    duration: "Day 11-15",
    title: "Direct Interviews",
    description: "You interview selected candidates directly to evaluate technical synergy, cultural alignment, and communication."
  },
  {
    number: 4,
    duration: "Day 21",
    title: "Sprint Kickoff",
    description: "Your new engineers join your Slack, configure local git keys, and submit their initial codebase commits."
  }
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: "How do Moxelle developers integrate into our daily workflows?",
    answer: "Your Moxelle developers act exactly like direct local hires. They participate in your daily standups, communicate inside your Slack channels, utilize your Jira boards, and push branches directly to your GitHub/GitLab repositories. There are no project manager proxies or brokers in between."
  },
  {
    question: "How is intellectual property and code security handled?",
    answer: "Airtight IP protection is our absolute baseline. Our master agreements explicitly guarantee that 100% of the code, patents, assets, and documentation written by your dedicated engineers are legally assigned directly to your firm under standard international contract frameworks."
  },
  {
    question: "How does Moxelle source and build its engineering teams?",
    answer: "Moxelle maintains active talent pipelines across highly analytical, top-tier STEM talent clusters worldwide. By vetting candidates rigorously on both technical pedigree and professional communication, we deliver perfect daily workflow alignment with Western Europe and highly functional sync with the US, combined with exceptional capital efficiency."
  },
  {
    question: "What is your typical contract length and scaling flexibility?",
    answer: "We offer highly flexible scale controls. While we focus on building stable, long-term engineering partnerships, we offer standard modular contracts with simple notice periods so you can easily adapt your team size as your roadmap priorities change."
  }
];

export const TALENT_PROFILES: TalentProfile[] = [
  {
    name: "Elena K.",
    title: "Staff Go & Cloud Architect",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=150&h=150",
    skills: ["Go", "gRPC", "PostgreSQL", "Kafka", "Kubernetes", "AWS"],
    ipGuarantee: "100% contractually assigned IP. Secured under airtight European & US legal master agreements.",
    time: "Full Daily Sync & Overlap",
    experience: "11 Years",
    roleCategory: "backend",
    status: "allocated",
    nextAvailableDate: "Oct 2026",
    backupColleague: {
      name: "Gordan T.",
      title: "Staff Go & Kubernetes Architect",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150&h=150",
      skills: ["Go", "gRPC", "PostgreSQL", "Kafka", "Docker", "AWS"],
      experience: "10 Years"
    }
  },
  {
    name: "Stefan M.",
    title: "Lead Frontend Product Architect",
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=150&h=150",
    skills: ["React 19", "Next.js", "TypeScript", "Zustand", "Tailwind CSS"],
    ipGuarantee: "Airtight source code protection. All system designs and commits are directly and immediately owned by your firm.",
    time: "Full Daily Sync & Overlap",
    experience: "9 Years",
    roleCategory: "frontend",
    status: "allocated",
    nextAvailableDate: "Nov 2026",
    backupColleague: {
      name: "Aneta V.",
      title: "Senior Frontend UI Engineer",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150&h=150",
      skills: ["React 19", "TypeScript", "Zustand", "Tailwind CSS", "NextJS"],
      experience: "8 Years"
    }
  },
  {
    name: "Viktor D.",
    title: "Senior Node/TypeScript Engineer",
    avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=150&h=150",
    skills: ["TypeScript", "NestJS", "GraphQL", "Redis", "Docker"],
    ipGuarantee: "Secure isolated hardware, strict zero-leak protocols, and full legal copyright assignment.",
    time: "Full Daily Sync & Overlap",
    experience: "8 Years",
    roleCategory: "fullstack",
    status: "available",
    backupColleague: {
      name: "Filip J.",
      title: "Senior Backend TS Engineer",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150&h=150",
      skills: ["TypeScript", "NestJS", "Express", "PostgreSQL", "Docker"],
      experience: "8 Years"
    }
  },
  {
    name: "Damjan S.",
    title: "Senior AI Integration & Data Engineer",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150",
    skills: ["Python", "FastAPI", "Pinecone", "LangChain", "GCP", "PostgreSQL"],
    ipGuarantee: "Strict confidentiality, full compliance model, and contractual source-code copyright protection.",
    time: "Full Daily Sync & Overlap",
    experience: "7 Years",
    roleCategory: "ai-data",
    status: "reserved",
    nextAvailableDate: "Onboarding Next Week",
    backupColleague: {
      name: "Zoran B.",
      title: "Senior ML & Data Engineer",
      avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=150&h=150",
      skills: ["Python", "FastAPI", "LangChain", "PyTorch", "GCP"],
      experience: "8 Years"
    }
  }
];
