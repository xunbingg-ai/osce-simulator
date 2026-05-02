// src/types/index.ts

export interface HPI {
  onset: string;
  site: string;
  character: string;
  radiation: string;
  severity: string;
  time_course?: string;
  exacerbating_factors: string[];
  relieving_factors: string[];
}

export interface Symptoms {
  respiratory?: Record<string, unknown>;
  cardiovascular?: Record<string, unknown>;
  constitutional?: Record<string, unknown>;
  vte_risks?: Record<string, string>;
  others?: Record<string, unknown>;
  negatives?: Record<string, boolean>;
}

export interface PatientInfo {
  age: number;
  gender: 'M' | 'F';
  occupation: string;
  chief_complaint: string;
  presentation: {
    setting: string;
    duration: string;
    hpi: HPI;
  };
  symptoms: Symptoms;
  medical_history: {
    chronic_conditions: string[];
    negatives: string[];
  };
  drug_history: {
    allergies: string;
    medications: string[];
  };
  social_history: {
    smoking: string;
    alcohol: string;
    occupation?: string;
    family?: string;
    travel?: string;
  };
  family_history: string;
  ice: {
    ideas: string;
    concerns: string;
    expectations: string;
  };
}

export interface VivaQuestion {
  question: string;
  answer: string | string[] | Record<string, unknown>;
}

export type CaseType = 'regular' | 'general';

export interface CaseData {
  _id: string;
  case_id: string;
  case_name: string;
  type: CaseType;
  is_general_case: boolean;
  patient: PatientInfo;
  questions: VivaQuestion[];
  marking_scheme: MarkingScheme;
}

export interface MarkingCategory {
  max_score: number;
  criteria: Record<string, unknown>;
}

export interface MarkingScheme {
  total_marks: number;
  categories: {
    language_manner_empathy: MarkingCategory;
    gather_additional_information: MarkingCategory;
    provide_accurate_appropriate_information: MarkingCategory;
    addressing_patient_concerns: MarkingCategory;
  };
}

export type Phase = 'preparation' | 'chat' | 'viva' | 'feedback';
export type Language = 'en' | 'zh';

export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant' | 'examiner';
  content: string;
  timestamp: number;
}

export interface FeedbackData {
  overall_performance: string;
  chat_performance: Record<string, unknown>;
  viva_performance: Record<string, unknown>;
  language_manner_empathy: { score: number; comment: string };
  gather_information: { score: number; comment: string };
  provide_information: { score: number; comment: string };
  address_concerns: { score: number; comment: string };
  strengths?: string[];
  areas_for_improvement?: string[];
}
