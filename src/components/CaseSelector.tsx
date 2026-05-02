'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { ChevronRight } from 'lucide-react';
import { CaseData } from '@/types';

interface CaseSelectorProps {
  cases: CaseData[];
}

export default function CaseSelector({ cases }: CaseSelectorProps) {
  const router = useRouter();

  return (
    <div className="card p-8 animate-slide-up">
      <div className="text-center mb-6">
        <h2 className="text-3xl font-bold text-gray-800 mb-3">Select a Medical Case</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Choose a clinical scenario to begin your OSCE practice session
        </p>
      </div>

      {cases.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-600">No medical cases are currently available.</p>
        </div>
      ) : (
        <div className="space-y-4 flex flex-col items-center">
          {cases.map((c) => (
            <div
              key={c._id}
              className="group card border-2 border-gray-200 p-6 hover:border-gray-300 cursor-pointer w-full max-w-2xl hover:shadow-md transition-all"
              onClick={() => router.push(`/case/${encodeURIComponent(c.case_id)}`)}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{c.case_id}</h3>
                  <p className="text-sm text-gray-500">
                    {c.patient.age}-year-old {c.patient.gender === 'M' ? 'male' : 'female'} — {c.patient.chief_complaint}
                  </p>
                </div>
              </div>
              <button className="btn btn-primary w-full flex items-center justify-center gap-2 group">
                <span>Start Case</span>
                <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
