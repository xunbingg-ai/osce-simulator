import { CaseData } from '@/types';

const case017PleuralEffusion: CaseData = {
  _id: 'case-017-pleural-effusion',
  case_id: 'Case 017 - Productive Cough, Fever & Chest Pain',
  case_name: 'Productive Cough, Fever & Chest Pain',
  type: 'regular',
  is_general_case: false,
  patient: {
    age: 32,
    gender: 'F',
    occupation: 'not specified — presents to emergency center',
    chief_complaint: 'Productive cough, fever, and chest pain for 4 days',
    presentation: {
      setting: 'Patient presents to the emergency center complaining of a productive cough, fever, and chest pain for 4 days. She was seen 2 days ago and diagnosed with pneumonia, prescribed oral azithromycin. Despite treatment, her fever has not abated and she has developed worsening left-sided chest pain and dyspnea on exertion.',
      duration: '4 days, worsening',
      hpi: {
        onset: 'Gradual onset 4 days ago',
        site: 'Left-sided chest — worse with cough and deep inspiration',
        character: 'Productive cough (diminished with azithromycin), persistent fever, pleuritic chest pain, progressive dyspnea on exertion',
        radiation: 'No radiation described',
        severity: 'Moderate to severe — febrile (103.4°F), tachycardic, tachypneic, desaturating to 94% on room air',
        time_course: 'Progressive worsening over 4 days, despite 2 days of azithromycin',
        exacerbating_factors: ['Coughing', 'Deep inspiration (pleuritic chest pain)', 'Walking (dyspnea on exertion)'],
        relieving_factors: [],
      },
    },
    symptoms: {
      respiratory: {
        cough: 'Productive — diminished in quantity since starting azithromycin, but persistent',
        chest_pain: 'Left-sided, worse with cough and deep inspiration (pleuritic)',
        dyspnea: 'On exertion — walking around the house causes shortness of breath',
        respiratory_rate: '24 breaths/min, shallow',
        oxygen_saturation: '94% on room air',
        breath_sounds: 'Decreased in lower half of left lung posteriorly',
        percussion: 'Dullness between 5th and 8th intercostal spaces at left midclavicular line',
        crackles: 'Few inspiratory crackles in midlung fields',
        right_lung: 'Clear to auscultation',
      },
      cardiovascular: {
        heart_rate: '116 bpm',
        blood_pressure: '128/69 mm Hg',
        tachycardia: 'Sinus tachycardia',
        murmurs: 'None',
      },
      constitutional: {
        fever: '103.4 °F',
      },
      negatives: {
        cyanosis: false,
        smoking_history: false,
        occupational_exposure: false,
        recent_travel: false,
        sick_contacts: false,
      },
    },
    medical_history: {
      chronic_conditions: [],
      negatives: ['No significant medical history', 'No prior lung disease'],
    },
    drug_history: {
      allergies: 'NKDA',
      medications: ['Azithromycin (prescribed 2 days ago for pneumonia)'],
    },
    social_history: {
      smoking: 'Nonsmoker',
      alcohol: 'Not documented',
      occupation: 'Not documented',
      travel: 'No travel outside United States',
    },
    family_history: 'Not documented',
    ice: {
      ideas: 'Patient is concerned that the antibiotics are not working and wonders why she is getting worse despite treatment',
      concerns: 'Worried about the severity of her illness — persistent high fever, worsening chest pain, and new shortness of breath',
      expectations: 'Expects a change in treatment, stronger antibiotics, or additional interventions to help her recover',
    },
  },
  questions: [
    {
      question: 'What is the most likely diagnosis and what features support it?',
      answer: 'Parapneumonic effusion as a complication of community-acquired pneumonia. Supporting features: clinical diagnosis of pneumonia 2 days ago with failure to improve on azithromycin, persistent high fever (103.4°F), pleuritic chest pain, dyspnea on exertion, decreased breath sounds with dullness to percussion over the left lower lung fields (suggesting pleural fluid), hypoxemia (94% on room air), and CXR confirming a large left-sided pleural effusion. Pleural effusions occur in 40% of patients with bacterial pneumonia.',
    },
    {
      question: 'What is the next step in management and why?',
      answer: 'Diagnostic thoracentesis is the next step. This is performed to: (1) confirm that the effusion is parapneumonic (related to the pneumonia), (2) determine if the effusion is "complicated" (requiring drainage) versus "uncomplicated" (likely to resolve with antibiotics alone), and (3) guide further management. Fluid should be sent for Gram stain, culture, pH, glucose, protein, lactate dehydrogenase (LDH), and cell count with differential.',
    },
    {
      question: 'How do you distinguish a transudative from an exudative pleural effusion (Light criteria)?',
      answer: 'Light criteria classify an effusion as exudative if it meets at least one of the following: (1) pleural fluid protein/serum protein ratio >0.5; (2) pleural fluid LDH/serum LDH ratio >0.6; (3) pleural fluid LDH >2/3 the upper limit of normal for serum LDH. Transudates meet none of these criteria. Exudates result from local inflammation/increased capillary permeability (e.g., infection, malignancy, connective tissue disease). Transudates result from altered hydrostatic/oncotic forces (e.g., heart failure, cirrhosis, nephrotic syndrome).',
    },
    {
      question: 'What pleural fluid characteristics indicate the need for chest tube drainage?',
      answer: 'Indications for tube thoracostomy drainage include: (1) pH <7.20 (most sensitive indicator — normal pleural pH is 7.6); (2) positive Gram stain or culture of the pleural fluid; (3) presence of loculations; (4) empyema (frank pus in the pleural space); (5) glucose <60 mg/dL; (6) LDH >1000 U/L. These features define a "complicated" parapneumonic effusion that is unlikely to resolve with antibiotics alone and requires drainage to prevent formation of fibrous peels.',
    },
    {
      question: 'What are the most common causes of pleural effusion?',
      answer: 'The most common causes overall: (1) Heart failure — bilateral transudative effusions, best treated with diuresis. (2) Pneumonia/parapneumonic effusion — exudative, associated with parenchymal infection. (3) Malignancy — exudative, often lymphocytic or bloody, cytology positive in >50%. (4) Pulmonary embolism — can be exudative or transudative. (5) Tuberculosis — lymphocytic predominant, adenosine deaminase >40 U/L, protein >4.0 g/dL. Other causes: connective tissue disease (rheumatoid pleurisy, lupus pleuritis), pancreatitis, asbestos exposure, and chylothorax.',
    },
    {
      question: 'How is a complicated parapneumonic effusion or empyema treated?',
      answer: 'Treatment requires both antibiotics and drainage: (1) Tube thoracostomy (chest tube) for drainage — continued until drainage <50 mL/day. (2) Antibiotics — 4-6 weeks of appropriate therapy based on culture results. (3) For multiloculated/poorly draining empyema: intrapleural fibrinolytic therapy (tPA + DNase) through the chest tube. (4) If fibrinolytics fail: video-assisted thoracoscopic surgery (VATS) with debridement and drainage. (5) Surgical referral recommended within one week of failed medical therapy. Post-drainage imaging confirms complete fluid removal.',
    },
    {
      question: 'What are the complications of therapeutic thoracentesis?',
      answer: 'Complications include: (1) Reexpansion pulmonary edema — risk increases with removal of >1.5 L of fluid in one session; (2) pneumothorax — from lung puncture or air entry during the procedure; (3) hemothorax — from intercostal vessel injury; (4) infection at the puncture site; (5) liver or spleen puncture if the effusion is right-sided or left-sided, respectively, and the needle is placed too low. Ultrasound guidance reduces complication rates.',
    },
    {
      question: 'What other conditions can cause a hemorrhagic pleural effusion?',
      answer: 'The most common causes of hemorrhagic pleural effusion (in the absence of trauma) are malignancy and pulmonary embolism with infarction. Other causes include: traumatic hemothorax (hematocrit of pleural fluid >50% of peripheral blood — requires tube thoracostomy), aortic dissection rupture (acute presentation with chest/back pain and hemodynamic compromise), and anticoagulant-related bleeding. Malignancy-related effusions typically have a subacute presentation with gradually worsening dyspnea.',
    },
  ],
  marking_scheme: {
    total_marks: 20,
    categories: {
      language_manner_empathy: {
        max_score: 4,
        criteria: {
          adequate: '2-3 marks',
          outstanding: '4 marks',
          elements: [
            'Polite introduction and patient-centered communication',
            'Avoids medical jargon — explains pleural effusion, thoracentesis, and Light criteria in accessible terms',
            'Shows empathy for patient distress with persistent fever, chest pain, and dyspnea despite treatment',
            'Addresses patient anxiety about worsening symptoms and failure of initial treatment',
          ],
        },
      },
      gather_additional_information: {
        max_score: 4,
        criteria: {
          hpi_socrates: {
            Site: 'Left-sided chest pain — pleuritic',
            Onset: 'Gradual onset 4 days ago, worsened over past 2 days',
            Character: 'Productive cough, pleuritic chest pain (worse with cough/deep breath), dyspnea on exertion',
            Associated_symptoms: 'Sputum color/volume/consistency, hemoptysis, night sweats, weight loss, orthopnea, PND, leg swelling',
            Time_course: 'Progressive over 4 days despite 2 days of antibiotic therapy',
            Exacerbating_relieving: 'Worse with coughing, deep inspiration, and walking',
            Severity: 'Moderate to severe — febrile, tachycardic, tachypneic, hypoxemic',
          },
          specific_history: [
            'Response to current antibiotics — duration, adherence, symptoms that improved vs worsened',
            'Respiratory history — prior pneumonia, asthma, COPD, TB exposure',
            'Constitutional symptoms — night sweats, weight loss, fatigue',
            'Cardiac history — heart failure symptoms (orthopnea, PND, edema), chest pain',
            'Thromboembolic risk — recent surgery, immobilization, DVT symptoms, contraceptive use',
            'Travel history — TB endemic areas, fungal exposure',
            'Immunocompromised status — HIV, chemotherapy, steroids, diabetes',
          ],
          rule_out_differentials: [
            'Heart failure — bilateral effusions, S3 gallop, elevated JVP, response to diuresis',
            'Pulmonary embolism — acute dyspnea, pleuritic pain, DVT, normal CXR',
            'Malignant effusion — subacute dyspnea, weight loss, history of malignancy, bloody fluid',
            'Tuberculous pleurisy — lymphocytic effusion, ADA >40 U/L, night sweats, weight loss',
            'Connective tissue disease — rheumatoid arthritis, SLE, other systemic symptoms',
          ],
        },
      },
      provide_accurate_appropriate_information: {
        max_score: 4,
        criteria: {
          elements: [
            'Correctly identifies parapneumonic effusion as most likely diagnosis',
            'Explains need for diagnostic thoracentesis and fluid analysis (Light criteria)',
            'Discusses indications for chest tube drainage (complicated effusion criteria: pH <7.20, glucose <60, positive Gram stain, LDH >1000, frank pus)',
            'Outlines management — antibiotics, drainage, surgical options if needed',
          ],
        },
      },
      addressing_patient_concerns: {
        max_score: 4,
        criteria: {
          ice: {
            ideas: 'Patient may think the antibiotics were wrong or ineffective and that she needs stronger medication',
            concerns: 'Worried that she is getting sicker despite treatment — concerned about the need for a chest tube or hospitalization, and about the long-term impact on her health',
            expectations: 'Expects an explanation of why she has not improved, a revised treatment plan, and relief from fever, chest pain, and shortness of breath',
          },
          biopsychosocial_aspects: true,
        },
      },
    },
  },
};

export default case017PleuralEffusion;
