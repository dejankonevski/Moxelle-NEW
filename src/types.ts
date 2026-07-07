/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface MetricPoint {
  value: string;
  label: string;
}

export interface Solution {
  id: string;
  title: string;
  description: string;
  benefits: string[];
  label: string;
}

export interface ProcessStep {
  number: number;
  duration: string;
  title: string;
  description: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface TalentProfile {
  name: string;
  title: string;
  avatar: string;
  skills: string[];
  impact: string;
  time: string;
  experience: string;
  roleCategory: 'backend' | 'frontend' | 'fullstack' | 'ai-data';
}
