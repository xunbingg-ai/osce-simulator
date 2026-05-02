'use client';

import React from 'react';
import { User, ClipboardList, Clock, AlertCircle } from 'lucide-react';
import { CaseData } from '@/types';

interface PreparationPhaseProps {
  caseData: CaseData;
  onStartChat: () => void;
}

export default function PreparationPhase({ caseData, onStartChat }: PreparationPhaseProps) {
  const p = caseData.patient;

  return (
    <div className="flex-1 max-w-6xl mx-auto px-3 sm:px-6 lg:px-8 py-4">
      <div className="bg-white rounded-xl shadow-sm border border-blue-200 p-4 sm:p-6 mb-6 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="flex items-center justify-center gap-3">
          <div className="p-2 bg-blue-100 rounded-lg">
            <ClipboardList className="w-6 h-6 text-blue-600" />
          </div>
          <div className="text-center">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-1">Preparation Phase</h2>
            <p className="text-sm text-gray-600">Review the scenario and plan your approach before entering the room</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
        {/* Patient Scenario Column */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-7 sm:p-8">
          <div className="flex items-center gap-3 mb-6 pb-4 border-b-2 border-blue-100">
            <div className="p-2 bg-blue-50 rounded-lg">
              <User className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-800">Patient Scenario</h3>
          </div>

          <div className="space-y-5">
            {/* Key demographics */}
            <div className="bg-gray-50 rounded-lg p-4 space-y-2">
              <InfoRow label="Age" value={`${p.age} years old`} />
              <InfoRow label="Gender" value={p.gender === 'M' ? 'Male' : 'Female'} />
              <InfoRow label="Occupation" value={p.occupation} />
            </div>

            {/* Chief complaint and setting */}
            <div>
              <h4 className="font-semibold text-gray-800 text-sm uppercase tracking-wider mb-2 flex items-center gap-2">
                <AlertCircle className="w-4 h-4 text-red-500" />
                Chief Complaint
              </h4>
              <div className="bg-red-50 border border-red-100 rounded-lg p-4">
                <p className="text-gray-800 font-medium">{p.chief_complaint}</p>
              </div>
            </div>

            {/* Scenario */}
            <div>
              <h4 className="font-semibold text-gray-800 text-sm uppercase tracking-wider mb-2">Scenario</h4>
              <p className="text-gray-600 text-sm leading-relaxed">{p.presentation.setting}</p>
            </div>

            {/* Vitals if available */}
            {p.symptoms.cardiovascular && (
              <div>
                <h4 className="font-semibold text-gray-800 text-sm uppercase tracking-wider mb-2">Initial Vitals (at triage)</h4>
                <div className="bg-gray-50 rounded-lg p-4 space-y-1 text-sm">
                  {typeof p.symptoms.cardiovascular === 'object' && p.symptoms.cardiovascular !== null && (
                    <>
                      {p.symptoms.cardiovascular.heart_rate && (
                        <div className="flex items-start">
                          <span className="text-gray-500 w-28 flex-shrink-0">Heart Rate:</span>
                          <span className="text-gray-700">{String(p.symptoms.cardiovascular.heart_rate)}</span>
                        </div>
                      )}
                      {p.symptoms.cardiovascular.blood_pressure && (
                        <div className="flex items-start">
                          <span className="text-gray-500 w-28 flex-shrink-0">Blood Pressure:</span>
                          <span className="text-gray-700">{String(p.symptoms.cardiovascular.blood_pressure)}</span>
                        </div>
                      )}
                    </>
                  )}
                  {typeof p.symptoms.respiratory === 'object' && p.symptoms.respiratory !== null && (
                    <>
                      {p.symptoms.respiratory.respiratory_rate && (
                        <div className="flex items-start">
                          <span className="text-gray-500 w-28 flex-shrink-0">Resp Rate:</span>
                          <span className="text-gray-700">{String(p.symptoms.respiratory.respiratory_rate)}</span>
                        </div>
                      )}
                      {p.symptoms.respiratory.oxygen_saturation && (
                        <div className="flex items-start">
                          <span className="text-gray-500 w-28 flex-shrink-0">O₂ Saturation:</span>
                          <span className="text-gray-700">{String(p.symptoms.respiratory.oxygen_saturation)}</span>
                        </div>
                      )}
                    </>
                  )}
                </div>
              </div>
            )}

            {/* Instructions */}
            <div className="bg-blue-50 border border-blue-100 rounded-lg p-4">
              <h4 className="font-semibold text-blue-800 text-sm uppercase tracking-wider mb-2 flex items-center gap-2">
                <Clock className="w-4 h-4" />
                Your Task
              </h4>
              <p className="text-blue-700 text-sm leading-relaxed">
                Take a focused history from this patient. Explore the chief complaint using open-ended questions,
                then clarify details. Remember to ask about relevant past medical history, medications, social habits,
                and the patient&apos;s own ideas, concerns, and expectations (ICE).
              </p>
            </div>
          </div>
        </div>

        {/* Communication Tips Column */}
        <div className="bg-white rounded-xl shadow-sm border border-green-100 p-7 sm:p-8 bg-gradient-to-br from-green-50 to-white">
          <div className="flex items-center gap-3 mb-6 pb-4 border-b-2 border-green-200">
            <div className="p-2 bg-green-100 rounded-lg">
              <ClipboardList className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-800">Communication Tips</h3>
          </div>
          <ul className="space-y-4">
            <TipItem>Introduce yourself and your role clearly</TipItem>
            <TipItem>Use simple, non-medical language</TipItem>
            <TipItem>Start with open-ended questions</TipItem>
            <TipItem>Show empathy and listen actively</TipItem>
            <TipItem>Explore the patient&apos;s ideas, concerns, and expectations (ICE)</TipItem>
            <TipItem>Summarize to confirm understanding</TipItem>
            <TipItem>Signpost before changing topics</TipItem>
            <TipItem>Allow silences — don&apos;t rush</TipItem>
          </ul>

          <div className="mt-8 pt-6 border-t border-green-200">
            <button
              onClick={onStartChat}
              className="w-full bg-blue-600 text-white hover:bg-blue-700 rounded-lg font-semibold py-4 text-lg flex items-center justify-center gap-2 transition-colors"
            >
              Enter the Room — Start History-Taking
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-start">
      <span className="font-semibold text-gray-700 w-28 flex-shrink-0">{label}:</span>
      <span className="text-gray-600">{value}</span>
    </div>
  );
}

function TipItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-3 text-gray-700">
      <span className="text-green-600 font-bold text-lg flex-shrink-0 mt-0.5">&bull;</span>
      <span className="leading-relaxed">{children}</span>
    </li>
  );
}
