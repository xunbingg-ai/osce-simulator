import { CaseData } from "@/types";
import case001HealthMaint from './case-001-health-maint';
import case002MetabolicSyndrome from './case-002-metabolic-syndrome';
import case003ACS from './case-003-acs';
import case004HFAS from './case-004-hf-as';
import case005AorticDissection from './case-005-aortic-dissection';
import case006Hypertension from './case-006-hypertension';
import case007HypertensiveEncephalopathy from './case-007-hypertensive-encephalopathy';
import case008AFMS from './case-008-af-ms';
import case009Syncope from './case-009-syncope';
import case010Pericarditis from './case-010-pericarditis';
import case011Tamponade from './case-011-tamponade';
import case012Endocarditis from './case-012-endocarditis';
import case013LimbIschemia from './case-013-limb-ischemia';
import case014PE from './case-014-pe';
import case015COPD from './case-015-copd';
import case016Asthma from './case-016-asthma';
import case017PleuralEffusion from './case-017-pleural-effusion';
import case018LungCA from './case-018-lung-ca';
import case019CAP from './case-019-cap';
import case020PUD from './case-020-pud';
import case021IBD from './case-021-ibd';
import case022Diverticulitis from './case-022-diverticulitis';
import case023Celiac from './case-023-celiac';
import case024Cirrhosis from './case-024-cirrhosis';
import case025Pancreatitis from './case-025-pancreatitis';
import case026Hepatitis from './case-026-hepatitis';
import case027PainlessJaundice from './case-027-painless-jaundice';
import case028Glomerulonephritis from './case-028-glomerulonephritis';
import case029NephroticSyndrome from './case-029-nephrotic-syndrome';
import case030AKI from './case-030-aki';
import case031Osteoarthritis from './case-031-osteoarthritis';
import case032LowBackPain from './case-032-low-back-pain';
import case033Gout from './case-033-gout';
import case034RA from './case-034-ra';
import case035Cushing from './case-035-cushing';
import case036TIA from './case-036-tia';
import case037Alzheimer from './case-037-alzheimer';
import case038TemporalArteritis from './case-038-temporal-arteritis';
import case039Parkinson from './case-039-parkinson';
import case040Anaphylaxis from './case-040-anaphylaxis';
import case041UTISepsis from './case-041-uti-sepsis';
import case042NeutropenicFever from './case-042-neutropenic-fever';
import case043Meningitis from './case-043-meningitis';
import case044Tuberculosis from './case-044-tuberculosis';
import case045Syphilis from './case-045-syphilis';
import case046HIVPJP from './case-046-hiv-pjp';
import case047SIADH from './case-047-siadh';
import case048Hypothyroidism from './case-048-hypothyroidism';
import case049AdrenalInsufficiency from './case-049-adrenal-insufficiency';
import case050Hypercalcemia from './case-050-hypercalcemia';
import case051Diabetes from './case-051-diabetes';
import case052DKA from './case-052-dka';
import case053Graves from './case-053-graves';
import case054IronDeficiencyAnemia from './case-054-iron-deficiency-anemia';
import case055SymptomaticAnemia from './case-055-symptomatic-anemia';
import case056ITP from './case-056-itp';
import case057PolycythemiaVera from './case-057-polycythemia-vera';
import case058SickleCellCrisis from './case-058-sickle-cell-crisis';
import case059AlcoholWithdrawal from './case-059-alcohol-withdrawal';
import case060OpioidOverdose from './case-060-opioid-overdose';
import casePMGPC2Fatigue from './case-pmgp-c2-fatigue';

export const allCases: CaseData[] = [
  case001HealthMaint,
  case002MetabolicSyndrome,
  case003ACS,
  case004HFAS,
  case005AorticDissection,
  case006Hypertension,
  case007HypertensiveEncephalopathy,
  case008AFMS,
  case009Syncope,
  case010Pericarditis,
  case011Tamponade,
  case012Endocarditis,
  case013LimbIschemia,
  case014PE,
  case015COPD,
  case016Asthma,
  case017PleuralEffusion,
  case018LungCA,
  case019CAP,
  case020PUD,
  case021IBD,
  case022Diverticulitis,
  case023Celiac,
  case024Cirrhosis,
  case025Pancreatitis,
  case026Hepatitis,
  case027PainlessJaundice,
  case028Glomerulonephritis,
  case029NephroticSyndrome,
  case030AKI,
  case031Osteoarthritis,
  case032LowBackPain,
  case033Gout,
  case034RA,
  case035Cushing,
  case036TIA,
  case037Alzheimer,
  case038TemporalArteritis,
  case039Parkinson,
  case040Anaphylaxis,
  case041UTISepsis,
  case042NeutropenicFever,
  case043Meningitis,
  case044Tuberculosis,
  case045Syphilis,
  case046HIVPJP,
  case047SIADH,
  case048Hypothyroidism,
  case049AdrenalInsufficiency,
  case050Hypercalcemia,
  case051Diabetes,
  case052DKA,
  case053Graves,
  case054IronDeficiencyAnemia,
  case055SymptomaticAnemia,
  case056ITP,
  case057PolycythemiaVera,
  case058SickleCellCrisis,
  case059AlcoholWithdrawal,
  case060OpioidOverdose,
  casePMGPC2Fatigue,
];

export const regularCases: CaseData[] = allCases.filter(c => c.type === "regular");
export const generalCases: CaseData[] = allCases.filter(c => c.type === "general");

export function getCaseById(caseId: string): CaseData | undefined {
  return allCases.find(c => c.case_id === caseId);
}
