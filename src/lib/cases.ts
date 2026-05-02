import { CaseData } from '@/types';
import { allCases, getCaseById, regularCases, generalCases } from '@/data/cases';

export async function fetchCases(): Promise<{ success: boolean; data: CaseData[] }> {
  return { success: true, data: allCases };
}

export async function fetchCaseById(caseId: string): Promise<{ success: boolean; data: CaseData | null }> {
  const caseData = getCaseById(decodeURIComponent(caseId));
  return caseData
    ? { success: true, data: caseData }
    : { success: false, data: null };
}

export { allCases, getCaseById, regularCases, generalCases };
