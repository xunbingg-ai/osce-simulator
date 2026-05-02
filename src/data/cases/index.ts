import { CaseData } from '@/types';
import case003ACS from './case-003-acs';
import case004HFAS from './case-004-hf-as';
import case008AFMS from './case-008-af-ms';
import case014PE from './case-014-pe';
import case018LungCA from './case-018-lung-ca';

export const allCases: CaseData[] = [
  case003ACS,
  case004HFAS,
  case008AFMS,
  case014PE,
  case018LungCA,
];

export const regularCases: CaseData[] = allCases.filter(c => c.type === 'regular');
export const generalCases: CaseData[] = allCases.filter(c => c.type === 'general');

export function getCaseById(caseId: string): CaseData | undefined {
  return allCases.find(c => c.case_id === caseId);
}
