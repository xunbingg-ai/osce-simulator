// src/app/api/chat/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { chatCompletion, DeepSeekMessage } from '@/lib/deepseek';
import { buildChatSystemPrompt, buildVivaSystemPrompt } from '@/lib/prompts';
import { getCaseById } from '@/data/cases';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { messages, phase, caseId, language } = body as {
      messages: DeepSeekMessage[];
      phase: 'chat' | 'viva';
      caseId: string;
      language?: 'en' | 'zh';
    };

    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json(
        { success: false, error: 'Messages array is required' },
        { status: 400 }
      );
    }

    if (!phase || !['chat', 'viva'].includes(phase)) {
      return NextResponse.json(
        { success: false, error: 'Valid phase ("chat" or "viva") is required' },
        { status: 400 }
      );
    }

    if (!caseId) {
      return NextResponse.json(
        { success: false, error: 'caseId is required' },
        { status: 400 }
      );
    }

    const caseData = getCaseById(decodeURIComponent(caseId));
    if (!caseData) {
      return NextResponse.json(
        { success: false, error: `Case not found: ${caseId}` },
        { status: 404 }
      );
    }

    const systemPrompt =
      phase === 'chat'
        ? buildChatSystemPrompt(caseData, language || 'en')
        : buildVivaSystemPrompt(caseData);

    const apiMessages: DeepSeekMessage[] = [
      { role: 'system', content: systemPrompt },
      ...messages,
    ];

    const result = await chatCompletion(apiMessages);

    return NextResponse.json({ success: true, reply: result.reply });
  } catch (error) {
    console.error('Chat API error:', error);
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : 'Internal server error',
      },
      { status: 500 }
    );
  }
}
