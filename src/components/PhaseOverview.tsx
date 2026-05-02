import React from 'react';
import Link from 'next/link';

interface PhaseOverviewProps {
  caseId: string;
}

export default function PhaseOverview({ caseId }: PhaseOverviewProps) {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="card p-8 sm:p-10">
        <div className="flex items-center gap-4 mb-8">
          <div className="flex items-center justify-center w-14 h-14 bg-blue-100 rounded-full">
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">OSCE Session Overview</h1>
            <p className="text-gray-600 mt-1">Please review the session structure before starting</p>
          </div>
        </div>

        <div className="space-y-6 mb-8">
          <div className="border-l-4 border-blue-500 pl-6 py-2">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Phase 1: Preparation</h3>
            <p className="text-gray-600 leading-relaxed">
              Review the patient&apos;s history and plan your communication strategy. A stopwatch will track your preparation time.
            </p>
          </div>

          <div className="border-l-4 border-green-500 pl-6 py-2">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Phase 2: History-Taking</h3>
            <p className="text-gray-600 leading-relaxed">
              Communicate with the AI-simulated patient to gather history. You can switch between English and Chinese. The stopwatch tracks your consultation time — proceed at your own pace.
            </p>
          </div>

          <div className="border-l-4 border-purple-500 pl-6 py-2">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Phase 3: VIVA</h3>
            <p className="text-gray-600 leading-relaxed">
              An AI examiner will assess your clinical reasoning with structured questions. Respond in English.
            </p>
          </div>

          <div className="border-l-4 border-orange-500 pl-6 py-2">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Phase 4: Feedback</h3>
            <p className="text-gray-600 leading-relaxed">
              Receive AI-generated feedback on your performance, including communication skills, clinical reasoning, and areas for improvement.
            </p>
          </div>
        </div>

        <div className="text-center pt-4">
          <Link
            href={`/chat/${encodeURIComponent(caseId)}`}
            className="btn btn-primary inline-flex items-center gap-3 text-lg px-8 py-4"
          >
            Start Session
          </Link>
        </div>
      </div>
    </div>
  );
}
