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
    label: "Timezone Synchronization"
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
    question: "Why is North Macedonia a preferred engineering hub?",
    answer: "North Macedonia offers a dense concentration of highly trained software engineers from leading technical universities. It provides a perfect timezone overlap with Western Europe (CET) and highly functional overlap with the US East Coast (EST), paired with excellent English communication skills and capital efficiency."
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
    impact: "Slashed database lock contention by 42% and sustained 18k peak peak requests per second.",
    time: "8 Hours Overlap (US EST / CET)",
    experience: "11 Years",
    roleCategory: "backend"
  },
  {
    name: "Stefan M.",
    title: "Lead Frontend Product Architect",
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=150&h=150",
    skills: ["React 19", "Next.js", "TypeScript", "Zustand", "Tailwind CSS"],
    impact: "Pioneered a robust design system for Enterprise analytics. Improved Lighthouse metrics from 61 to 98.",
    time: "8 Hours Overlap (US EST / CET)",
    experience: "9 Years",
    roleCategory: "frontend"
  },
  {
    name: "Viktor D.",
    title: "Senior Node/TypeScript Engineer",
    avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=150&h=150",
    skills: ["TypeScript", "NestJS", "GraphQL", "Redis", "Docker"],
    impact: "Re-architected legacy monolithic endpoints into serverless handlers. Slashed API response times by 350ms.",
    time: "9 Hours Overlap (US EST / CET)",
    experience: "8 Years",
    roleCategory: "fullstack"
  },
  {
    name: "Damjan S.",
    title: "Senior AI Integration & Data Engineer",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150",
    skills: ["Python", "FastAPI", "Pinecone", "LangChain", "GCP", "PostgreSQL"],
    impact: "Designed and implemented high-speed vector embedding index pipelines handling 5M daily documents.",
    time: "8 Hours Overlap (US EST / CET)",
    experience: "7 Years",
    roleCategory: "ai-data"
  }
];
