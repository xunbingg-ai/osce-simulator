import React from 'react';
import CaseSelector from '@/components/CaseSelector';
import { allCases } from '@/lib/cases';

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <div className="container mx-auto px-6 py-12">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-5 text-gray-900">OSCE Simulator</h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Practice clinical communication skills with AI-simulated patients and examiners.
            Receive AI-generated performance feedback after each session.
          </p>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
          <h3 className="text-2xl md:text-3xl mb-5 text-gray-900 text-center">Welcome</h3>
          <div className="text-gray-700 text-base leading-relaxed space-y-3">
            <p>
              This AI-powered OSCE simulator helps medical students practice clinical communication skills
              in a safe, self-paced environment. Each case simulates a complete OSCE session with four phases:
              Preparation, History-Taking, VIVA examination, and Performance Feedback.
            </p>
            <p>
              Select a case below to begin. You can take as much time as you need — a stopwatch
              tracks your time for self-reflection, not for scoring.
            </p>
          </div>
        </div>

        <CaseSelector cases={allCases} />
      </div>
    </main>
  );
}
