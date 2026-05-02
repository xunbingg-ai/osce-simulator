// src/components/FeedbackPhase.tsx
'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { ChatMessage, FeedbackData, CaseData } from '@/types';

interface FeedbackPhaseProps {
  caseData: CaseData;
  caseId: string;
  chatMessages: ChatMessage[];
  vivaMessages: ChatMessage[];
}

export default function FeedbackPhase({ caseData, caseId, chatMessages, vivaMessages }: FeedbackPhaseProps) {
  const [feedback, setFeedback] = useState<FeedbackData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'overview' | 'consultation' | 'viva'>('overview');

  useEffect(() => {
    const fetchFeedback = async () => {
      setLoading(true);
      setError(null);
      try {
        const allMessages = [...chatMessages, ...vivaMessages];
        const response = await fetch('/api/assessment', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            messages: allMessages,
            caseId,
          }),
        });

        const data = await response.json();

        if (!data.success) {
          throw new Error(data.error || 'Failed to generate feedback');
        }

        setFeedback(data.feedback);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load feedback');
      } finally {
        setLoading(false);
      }
    };

    fetchFeedback();
  }, [chatMessages, vivaMessages, caseId]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4" />
          <p className="text-gray-600">Generating your performance feedback...</p>
        </div>
      </div>
    );
  }

  if (error || !feedback) {
    return (
      <div className="text-center p-8">
        <p className="text-gray-600 mb-4">Failed to load feedback data.</p>
        <p className="text-red-600 text-sm mb-4">{error}</p>
        <button onClick={() => window.location.reload()} className="bg-blue-600 text-white hover:bg-blue-700 rounded-lg font-semibold px-6 py-3 transition-colors">
          Retry
        </button>
      </div>
    );
  }

  const overallColor =
    feedback.overall_performance === 'Good'
      ? 'text-green-600'
      : feedback.overall_performance === 'Satisfactory'
      ? 'text-yellow-600'
      : 'text-red-600';

  const scoreLabels: Record<string, string> = {
    language_manner_empathy: 'Language, Manner & Empathy',
    gather_information: 'Information Gathering',
    provide_information: 'Clinical Knowledge & Information',
    address_concerns: 'Addressing Patient Concerns',
  };

  return (
    <div className="max-w-6xl mx-auto p-3 sm:p-6">
      <div className="bg-white rounded-lg shadow-lg mb-6">
        <div className="p-4 sm:p-6 border-b border-gray-200">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-800">Performance Feedback</h2>
              <p className="text-gray-600">Case: {caseData.case_name}</p>
            </div>
            <div className="text-left sm:text-right">
              <div className={`text-2xl font-bold ${overallColor}`}>
                {feedback.overall_performance}
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-gray-200">
          {(['overview', 'consultation', 'viva'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-3 text-sm font-semibold border-b-2 transition-colors ${
                activeTab === tab
                  ? 'border-blue-600 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              {tab === 'overview' ? 'Overview' : tab === 'consultation' ? 'Consultation' : 'VIVA'}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="p-4 sm:p-6">
          {activeTab === 'overview' && (
            <div className="space-y-6">
              {(Object.keys(scoreLabels) as Array<keyof typeof scoreLabels>).map((key) => {
                const item = feedback[key as keyof FeedbackData] as { score: number; comment: string } | undefined;
                if (!item) return null;
                return (
                  <div key={key} className="border rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-gray-800">{scoreLabels[key]}</h4>
                      <span className="text-lg font-bold text-blue-600">{item.score}/4</span>
                    </div>
                    <p className="text-gray-600 text-sm">{item.comment}</p>
                  </div>
                );
              })}

              {feedback.strengths && Array.isArray(feedback.strengths) && feedback.strengths.length > 0 && (
                <div className="border border-green-200 rounded-lg p-4 bg-green-50">
                  <h4 className="font-semibold text-green-800 mb-2">Strengths</h4>
                  <ul className="list-disc list-inside space-y-1">
                    {(feedback.strengths as string[]).map((s, i) => (
                      <li key={i} className="text-green-700 text-sm">{s}</li>
                    ))}
                  </ul>
                </div>
              )}

              {feedback.areas_for_improvement && Array.isArray(feedback.areas_for_improvement) && feedback.areas_for_improvement.length > 0 && (
                <div className="border border-orange-200 rounded-lg p-4 bg-orange-50">
                  <h4 className="font-semibold text-orange-800 mb-2">Areas for Improvement</h4>
                  <ul className="list-disc list-inside space-y-1">
                    {(feedback.areas_for_improvement as string[]).map((s, i) => (
                      <li key={i} className="text-orange-700 text-sm">{s}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}

          {activeTab === 'consultation' && (
            <div className="space-y-4">
              <h4 className="font-semibold text-gray-800 text-lg">History-Taking Performance</h4>
              <p className="text-gray-600">{(feedback.chat_performance?.summary as string) || 'No consultation summary available.'}</p>
            </div>
          )}

          {activeTab === 'viva' && (
            <div className="space-y-4">
              <h4 className="font-semibold text-gray-800 text-lg">VIVA Performance</h4>
              <p className="text-gray-600">{(feedback.viva_performance?.summary as string) || 'No VIVA summary available.'}</p>
            </div>
          )}
        </div>
      </div>

      <div className="text-center">
        <Link href="/" className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
          Back to Cases
        </Link>
      </div>
    </div>
  );
}
