'use client';

import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Send } from 'lucide-react';
import { CaseData, ChatMessage } from '@/types';

interface VivaPhaseProps {
  caseData: CaseData;
  caseId: string;
  chatMessages: ChatMessage[];
  onComplete: (messages: ChatMessage[]) => void;
}

function stripPartTag(content: string): string {
  return content.replace(/\n?\[PART: (?:pe|investigations)\]\n?/g, '').trim();
}

function tagIsAfterFeedback(content: string, tag: string): boolean {
  const idx = content.indexOf(tag);
  if (idx === -1) return false;
  const beforeTag = content.substring(0, idx);
  return !beforeTag.includes('?');
}

function renderMarkdown(text: string): string {
  // Normalize Windows CRLF to LF
  const normalized = text.replace(/\r\n/g, '\n');
  return normalized
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/\*\*(.+?)\*\*/g, '<strong class="font-semibold text-gray-900">$1</strong>')
    .replace(/\*(.+?)\*/g, '<em>$1</em>')
    .replace(/^• (.+)$/gm, '<span class="block ml-2">• $1</span>')
    .replace(/\n\n/g, '<br><br>')
    .replace(/\n/g, '<br>');
}

export default function VivaPhase({ caseData, caseId, chatMessages, onComplete }: VivaPhaseProps) {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [vivaStarted, setVivaStarted] = useState(false);
  const [showPeResults, setShowPeResults] = useState(false);
  const [showInvestigationResults, setShowInvestigationResults] = useState(false);
  const [phaseComplete, setPhaseComplete] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const startViva = useCallback(async () => {
    setVivaStarted(true);
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: [
            { role: 'user', content: 'Please begin the viva examination. Ask me your first question.' },
          ],
          phase: 'viva',
          caseId,
          language: 'en',
        }),
      });

      const data = await response.json();

      if (!data.success) {
        throw new Error(data.error || 'Failed to start VIVA');
      }

      const examinerMessage: ChatMessage = {
        id: Date.now().toString(),
        role: 'examiner',
        content: data.reply,
        timestamp: Date.now(),
      };
      setMessages([examinerMessage]);

      if (data.reply.includes('[PART: pe]')) {
        setShowPeResults(true);
      }
      if (data.reply.includes('[PART: investigations]')) {
        setShowInvestigationResults(true);
      }
    } catch (error) {
      console.error('VIVA start error:', error);
    } finally {
      setIsLoading(false);
    }
  }, [caseId]);

  useEffect(() => {
    if (!isLoading && vivaStarted) {
      inputRef.current?.focus();
    }
  }, [isLoading, vivaStarted]);

  const handleSend = useCallback(async () => {
    const text = input.trim();
    if (!text || isLoading) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      content: text,
      timestamp: Date.now(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const allMessages = messages.map((m) => ({
        role: m.role === 'examiner' ? 'assistant' as const : 'user' as const,
        content: m.content,
      }));
      allMessages.push({ role: 'user', content: text });

      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: allMessages,
          phase: 'viva',
          caseId,
          language: 'en',
        }),
      });

      const data = await response.json();

      if (!data.success) {
        throw new Error(data.error || 'Failed to get response');
      }

      const examinerMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'examiner',
        content: data.reply,
        timestamp: Date.now(),
      };

      setMessages((prev) => [...prev, examinerMessage]);

      if (data.reply.includes('[PART: pe]')) {
        setShowPeResults(true);
      }
      if (data.reply.includes('[PART: investigations]')) {
        setShowInvestigationResults(true);
      }

      if (data.reply.toLowerCase().includes('viva session is now complete')) {
        setPhaseComplete(true);
      }
    } catch (error) {
      console.error('VIVA error:', error);
    } finally {
      setIsLoading(false);
    }
  }, [input, messages, isLoading, caseId]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleGetFeedback = () => {
    onComplete(messages);
  };

  if (!vivaStarted) {
    return (
      <div className="flex-1 flex items-center justify-center">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 text-center max-w-lg">
          <h3 className="text-xl font-bold text-gray-800 mb-4">VIVA Examination</h3>
          <p className="text-gray-600 mb-6">
            The AI examiner will now ask you questions about the case to assess your clinical reasoning.
            Answer each question in English. The examiner will provide brief feedback after each response.
          </p>
          <div className="text-sm text-gray-500 mb-6 text-left">
            <p className="font-medium">Reference questions include:</p>
            <ul className="list-disc list-inside mt-2">
              {caseData.questions.slice(0, 3).map((q, i) => (
                <li key={i} className="truncate">{q.question}</li>
              ))}
              {caseData.questions.length > 3 && (
                <li className="text-gray-400">...and {caseData.questions.length - 3} more</li>
              )}
            </ul>
          </div>
          <button
            onClick={startViva}
            className="bg-purple-600 text-white hover:bg-purple-700 rounded-lg font-semibold px-8 py-3 text-lg transition-colors"
          >
            Start VIVA
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex-1 flex flex-col max-w-4xl mx-auto w-full px-3 sm:px-6 py-4">
      {/* Messages Area */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-4 flex-1 max-h-[28rem] min-h-[20rem] overflow-y-auto">
        <div className="space-y-6">
          {messages.map((msg, idx) => (
            <React.Fragment key={msg.id}>
              <div
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`flex items-start gap-2 sm:gap-3 max-w-[80%] ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
                  <div
                    className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold ${
                      msg.role === 'user'
                        ? 'bg-gradient-to-br from-blue-500 to-blue-600'
                        : 'bg-gradient-to-br from-purple-500 to-purple-600'
                    }`}
                  >
                    {msg.role === 'user' ? 'You' : 'Ex'}
                  </div>
                  <div
                    className={`px-4 py-3 rounded-2xl ${
                      msg.role === 'user'
                        ? 'bg-blue-500 text-white rounded-tr-sm'
                        : 'bg-purple-50 text-gray-800 rounded-tl-sm border border-purple-200'
                    }`}
                  >
                    <p className="text-sm font-semibold text-purple-600 mb-1">
                      {msg.role === 'examiner' ? 'Examiner' : 'You'}
                    </p>
                    <p className="text-base leading-relaxed whitespace-pre-wrap break-words">{stripPartTag(msg.content)}</p>
                  </div>
                </div>
              </div>
              {msg.role === 'examiner' && msg.content.includes('[PART: pe]') && tagIsAfterFeedback(msg.content, '[PART: pe]') && caseData.pe_findings && showPeResults && (
                <div className="flex justify-start mt-2">
                  <div className="ml-11 max-w-[80%] bg-gray-50 rounded-xl border-l-4 border-teal-500 p-4">
                    <h4 className="text-sm font-bold text-teal-700 mb-2">Physical Examination Findings</h4>
                    <div className="text-sm text-gray-700 leading-relaxed" dangerouslySetInnerHTML={{ __html: renderMarkdown(caseData.pe_findings!) }} />
                  </div>
                </div>
              )}
              {msg.role === 'examiner' && msg.content.includes('[PART: investigations]') && tagIsAfterFeedback(msg.content, '[PART: investigations]') && caseData.investigations && showInvestigationResults && (
                <div className="flex justify-start mt-2">
                  <div className="ml-11 max-w-[80%] bg-gray-50 rounded-xl border-l-4 border-purple-500 p-4">
                    <h4 className="text-sm font-bold text-purple-700 mb-2">Investigation Results</h4>
                    <div className="text-sm text-gray-700 leading-relaxed" dangerouslySetInnerHTML={{ __html: renderMarkdown(caseData.investigations!) }} />
                  </div>
                </div>
              )}
              {msg.role === 'examiner' && msg.content.includes('[PART: pe]') && tagIsAfterFeedback(msg.content, '[PART: pe]') && !caseData.pe_findings && showPeResults && (
                <div className="flex justify-start mt-2">
                  <div className="ml-11 max-w-[80%] bg-gray-50 rounded-xl border-l-4 border-teal-500 p-4">
                    <p className="text-sm text-gray-500 italic">No physical examination findings data available for this case.</p>
                  </div>
                </div>
              )}
              {msg.role === 'examiner' && msg.content.includes('[PART: investigations]') && tagIsAfterFeedback(msg.content, '[PART: investigations]') && !caseData.investigations && showInvestigationResults && (
                <div className="flex justify-start mt-2">
                  <div className="ml-11 max-w-[80%] bg-gray-50 rounded-xl border-l-4 border-purple-500 p-4">
                    <p className="text-sm text-gray-500 italic">No investigation results data available for this case.</p>
                  </div>
                </div>
              )}
            </React.Fragment>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center text-white text-xs font-bold">Ex</div>
                <div className="bg-purple-50 px-4 py-3 rounded-2xl rounded-tl-sm border border-purple-200">
                  <div className="flex items-center gap-2">
                    <div className="animate-spin h-4 w-4 border-2 border-purple-500 border-t-transparent rounded-full" />
                    <span className="text-sm text-gray-500">Examiner is thinking...</span>
                  </div>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Input Area */}
      {!phaseComplete ? (
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
          <div className="flex items-end gap-3">
            <textarea
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Type your response to the examiner... (Enter to send)"
              disabled={isLoading}
              className="flex-1 p-3 border-2 border-gray-200 rounded-xl resize-none focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 disabled:bg-gray-50 text-base"
              rows={2}
            />
            <button
              onClick={handleSend}
              disabled={!input.trim() || isLoading}
              className="bg-purple-600 text-white hover:bg-purple-700 rounded-lg h-10 w-10 flex items-center justify-center disabled:opacity-50 flex-shrink-0 transition-colors"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      ) : (
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 text-center">
          <h3 className="text-xl font-bold text-gray-800 mb-2">VIVA Complete</h3>
          <p className="text-gray-600 mb-6">The examiner has finished all questions. Ready to see your feedback?</p>
          <button
            onClick={handleGetFeedback}
            className="bg-blue-600 text-white hover:bg-blue-700 rounded-lg font-semibold px-8 py-3 text-lg transition-colors"
          >
            Get Feedback
          </button>
        </div>
      )}
    </div>
  );
}
