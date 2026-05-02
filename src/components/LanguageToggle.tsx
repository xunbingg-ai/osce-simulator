// src/components/LanguageToggle.tsx
'use client';

import React from 'react';
import { Language } from '@/types';

interface LanguageToggleProps {
  language: Language;
  onChange: (lang: Language) => void;
}

export default function LanguageToggle({ language, onChange }: LanguageToggleProps) {
  return (
    <div className="inline-flex rounded-lg border border-gray-200 bg-gray-50 p-1">
      <button
        type="button"
        onClick={() => onChange('en')}
        className={`px-3 py-1.5 text-sm font-semibold rounded-md transition-colors ${
          language === 'en'
            ? 'bg-white text-blue-700 shadow-sm'
            : 'text-gray-600 hover:text-gray-800'
        }`}
      >
        EN
      </button>
      <button
        type="button"
        onClick={() => onChange('zh')}
        className={`px-3 py-1.5 text-sm font-semibold rounded-md transition-colors ${
          language === 'zh'
            ? 'bg-white text-blue-700 shadow-sm'
            : 'text-gray-600 hover:text-gray-800'
        }`}
      >
        中文
      </button>
    </div>
  );
}
