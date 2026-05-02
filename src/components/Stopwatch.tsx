// src/components/Stopwatch.tsx
'use client';

import React, { useEffect, useState, useRef, useCallback } from 'react';
import { Timer } from 'lucide-react';

interface StopwatchProps {
  isRunning: boolean;
  className?: string;
}

export function formatTime(totalSeconds: number): string {
  const absSeconds = Math.abs(totalSeconds);
  const mins = Math.floor(absSeconds / 60);
  const secs = Math.floor(absSeconds % 60);
  return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

export default function Stopwatch({ isRunning, className = '' }: StopwatchProps) {
  const [elapsed, setElapsed] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const clearTimer = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setElapsed((prev) => prev + 1);
      }, 1000);
    } else {
      clearTimer();
    }

    return clearTimer;
  }, [isRunning, clearTimer]);

  const getColorClass = () => {
    if (!isRunning) return 'text-gray-400';
    if (elapsed < 120) return 'text-green-600';
    if (elapsed < 360) return 'text-blue-600';
    if (elapsed < 600) return 'text-orange-500';
    return 'text-red-600';
  };

  return (
    <div className={`flex items-center gap-2 font-mono text-lg font-bold ${getColorClass()} ${className}`}>
      <Timer className="w-5 h-5" />
      <span>{formatTime(elapsed)}</span>
    </div>
  );
}
