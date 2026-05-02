'use client';

import React, { useState, useCallback } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import { CaseData, ChatMessage, Phase, Language } from '@/types';
import Stopwatch from '@/components/Stopwatch';
import PreparationPhase from '@/components/PreparationPhase';
import ChatPhase from '@/components/ChatPhase';
import VivaPhase from '@/components/VivaPhase';
import FeedbackPhase from '@/components/FeedbackPhase';
import { getCaseById } from '@/data/cases';

export default function ChatPage() {
  const params = useParams();
  const caseId = decodeURIComponent(params.caseId as string);
  const caseData = getCaseById(caseId);

  const [phase, setPhase] = useState<Phase>('preparation');
  const [language, setLanguage] = useState<Language>('en');
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([]);
  const [vivaMessages, setVivaMessages] = useState<ChatMessage[]>([]);

  const [prepRunning, setPrepRunning] = useState(true);
  const [chatRunning, setChatRunning] = useState(false);
  const [vivaRunning, setVivaRunning] = useState(false);

  const handleStartChat = useCallback(() => {
    setPrepRunning(false);
    setPhase('chat');
    setChatRunning(true);
  }, []);

  const handleChatComplete = useCallback((messages: ChatMessage[]) => {
    setChatRunning(false);
    setChatMessages(messages);
    setPhase('viva');
    setVivaRunning(true);
  }, []);

  const handleVivaComplete = useCallback((messages: ChatMessage[]) => {
    setVivaRunning(false);
    setVivaMessages(messages);
    setPhase('feedback');
  }, []);

  if (!caseData) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Case Not Found</h1>
          <p className="text-gray-600 mb-6">The requested case could not be found.</p>
          <Link href="/" className="bg-blue-600 text-white hover:bg-blue-700 rounded-lg font-semibold px-6 py-3 transition-colors">Back to Cases</Link>
        </div>
      </main>
    );
  }

  const phaseLabels: Record<Phase, string> = {
    preparation: 'Preparation',
    chat: 'History-Taking',
    viva: 'VIVA Examination',
    feedback: 'Performance Feedback',
  };

  return (
    <main className="min-h-screen flex flex-col">
      {/* Header Bar */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 sm:p-6 sticky top-0 z-50 bg-white shadow-lg">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <Link
              href={`/case/${encodeURIComponent(caseId)}`}
              className="text-gray-500 hover:text-gray-700"
            >
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <div className="min-w-0">
              <h1 className="text-xl sm:text-2xl font-bold text-gray-800 truncate">
                {phaseLabels[phase]}
              </h1>
              <p className="text-sm text-gray-500 truncate">{caseData.case_name}</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            {phase === 'preparation' && <Stopwatch isRunning={prepRunning} />}
            {phase === 'chat' && <Stopwatch isRunning={chatRunning} />}
            {phase === 'viva' && <Stopwatch isRunning={vivaRunning} />}

            {/* Phase indicator dots */}
            <div className="flex items-center gap-1">
              {(['preparation', 'chat', 'viva', 'feedback'] as Phase[]).map((p) => {
                const phaseOrder = ['preparation', 'chat', 'viva', 'feedback'];
                const currentIdx = phaseOrder.indexOf(phase);
                const dotIdx = phaseOrder.indexOf(p);
                const isActive = p === phase;
                const isPast = phase === 'feedback' || dotIdx < currentIdx;
                return (
                  <div
                    key={p}
                    className={`w-3 h-3 rounded-full ${
                      isActive ? 'bg-blue-600' : isPast ? 'bg-gray-300' : 'bg-gray-200'
                    }`}
                    title={phaseLabels[p]}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Phase Content */}
      <div className="flex-1 flex">
        {phase === 'preparation' && (
          <PreparationPhase caseData={caseData} onStartChat={handleStartChat} />
        )}
        {phase === 'chat' && (
          <ChatPhase
            caseData={caseData}
            caseId={caseId}
            language={language}
            onLanguageChange={setLanguage}
            onComplete={handleChatComplete}
          />
        )}
        {phase === 'viva' && (
          <VivaPhase
            caseData={caseData}
            caseId={caseId}
            chatMessages={chatMessages}
            onComplete={handleVivaComplete}
          />
        )}
        {phase === 'feedback' && (
          <FeedbackPhase
            caseData={caseData}
            caseId={caseId}
            chatMessages={chatMessages}
            vivaMessages={vivaMessages}
          />
        )}
      </div>
    </main>
  );
}
