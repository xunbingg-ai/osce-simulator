// src/components/ChatPhase.tsx
'use client';

import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Send } from 'lucide-react';
import { CaseData, ChatMessage, Language } from '@/types';
import LanguageToggle from './LanguageToggle';

interface ChatPhaseProps {
  caseData: CaseData;
  caseId: string;
  language: Language;
  onLanguageChange: (lang: Language) => void;
  onComplete: (messages: ChatMessage[]) => void;
}

export default function ChatPhase({
  caseData,
  caseId,
  language,
  onLanguageChange,
  onComplete,
}: ChatPhaseProps) {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showConfirmEnd, setShowConfirmEnd] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  useEffect(() => {
    if (!isLoading && !showConfirmEnd) {
      inputRef.current?.focus();
    }
  }, [isLoading, showConfirmEnd]);

  const handleSend = useCallback(async () => {
    const text = input.trim();
    if (!text || isLoading || showConfirmEnd) return;

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
      const apiMessages = messages.map((m) => ({
        role: m.role === 'assistant' ? 'assistant' as const : 'user' as const,
        content: m.content,
      }));
      apiMessages.push({ role: 'user', content: text });

      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: apiMessages,
          phase: 'chat',
          caseId,
          language,
        }),
      });

      const data = await response.json();

      if (!data.success) {
        throw new Error(data.error || 'Failed to get response');
      }

      const assistantMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: data.reply,
        timestamp: Date.now(),
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error) {
      console.error('Chat error:', error);
      const errorMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: `Error: ${error instanceof Error ? error.message : 'Failed to get response. Please try again.'}`,
        timestamp: Date.now(),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  }, [input, messages, isLoading, showConfirmEnd, caseId, language]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleConfirmEnd = () => {
    onComplete(messages);
  };

  return (
    <div className="flex-1 flex flex-col max-w-4xl mx-auto w-full px-3 sm:px-6 py-4">
      {/* Language Toggle */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <span className="text-sm font-medium text-gray-600">Language:</span>
          <LanguageToggle language={language} onChange={onLanguageChange} />
        </div>
      </div>

      {/* Messages Area */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-4 flex-1 max-h-[28rem] min-h-[20rem] overflow-y-auto">
        {messages.length === 0 && (
          <div className="text-center text-gray-400 mt-12">
            <p className="text-lg">Start the conversation with the patient</p>
            <p className="text-sm mt-2">
              {language === 'zh'
                ? '用中文开始与患者对话'
                : 'Begin by introducing yourself and asking about their concerns'}
            </p>
          </div>
        )}
        <div className="space-y-6">
          {messages.map((msg, idx) => (
            <div
              key={msg.id}
              className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div className={`flex items-start gap-2 sm:gap-3 max-w-[80%] ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
                <div
                  className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold ${
                    msg.role === 'user'
                      ? 'bg-gradient-to-br from-blue-500 to-blue-600'
                      : 'bg-gradient-to-br from-teal-500 to-teal-600'
                  }`}
                >
                  {msg.role === 'user' ? 'Dr' : 'Pt'}
                </div>
                <div
                  className={`px-4 py-3 rounded-2xl ${
                    msg.role === 'user'
                      ? 'bg-blue-500 text-white rounded-tr-sm'
                      : 'bg-gray-100 text-gray-800 rounded-tl-sm'
                  }`}
                >
                  <p className="text-base leading-relaxed whitespace-pre-wrap break-words">{msg.content}</p>
                </div>
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-teal-500 to-teal-600 flex items-center justify-center text-white text-xs font-bold">Pt</div>
                <div className="bg-gray-100 px-4 py-3 rounded-2xl rounded-tl-sm">
                  <div className="flex items-center gap-2">
                    <div className="animate-spin h-4 w-4 border-2 border-teal-500 border-t-transparent rounded-full" />
                    <span className="text-sm text-gray-500">Typing...</span>
                  </div>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Input Area */}
      {!showConfirmEnd ? (
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
          <div className="flex items-end gap-3">
            <textarea
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder={
                language === 'zh'
                  ? '输入你的问题... (Enter 发送, Shift+Enter 换行)'
                  : 'Type your questions... (Enter to send, Shift+Enter for new line)'
              }
              disabled={isLoading}
              className="flex-1 p-3 border-2 border-gray-200 rounded-xl resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-50 text-base"
              rows={2}
            />
            <button
              onClick={handleSend}
              disabled={!input.trim() || isLoading}
              className="bg-blue-600 text-white hover:bg-blue-700 rounded-lg h-10 w-10 flex items-center justify-center disabled:opacity-50 flex-shrink-0 transition-colors"
            >
              {isLoading ? (
                <div className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full" />
              ) : (
                <Send className="w-4 h-4" />
              )}
            </button>
          </div>
          <div className="flex items-center justify-between mt-3">
            <span className="text-xs text-gray-400">{input.length}/500</span>
            <button
              onClick={() => setShowConfirmEnd(true)}
              className="px-4 py-2 text-sm font-semibold text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Proceed to VIVA
            </button>
          </div>
        </div>
      ) : (
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 text-center">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Ready for VIVA?</h3>
          <p className="text-gray-600 mb-6">
            You will now proceed to the examiner Q&A session. You won&apos;t be able to return to the patient conversation.
          </p>
          <div className="flex items-center justify-center gap-4">
            <button
              onClick={() => setShowConfirmEnd(false)}
              className="px-6 py-3 text-sm font-semibold text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Return to Chat
            </button>
            <button
              onClick={handleConfirmEnd}
              className="px-8 py-3 text-lg font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
            >
              Begin VIVA Session
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
