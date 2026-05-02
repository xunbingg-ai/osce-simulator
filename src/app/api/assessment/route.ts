import { NextRequest, NextResponse } from 'next/server';
import { chatCompletion } from '@/lib/deepseek';
import { buildAssessmentSystemPrompt } from '@/lib/prompts';
import { getCaseById } from '@/data/cases';
import { ChatMessage } from '@/types';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { messages, caseId } = body as {
      messages: ChatMessage[];
      caseId: string;
    };

    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json(
        { success: false, error: 'Messages array is required' },
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

    const transcript = messages
      .map((m) => `${m.role.toUpperCase()}: ${m.content}`)
      .join('\n\n');

    const systemPrompt = buildAssessmentSystemPrompt(caseData, transcript);

    const result = await chatCompletion(
      [
        { role: 'system', content: systemPrompt },
        { role: 'user', content: 'Please provide the assessment now. Reply with ONLY the JSON object.' },
      ],
      { temperature: 0.3, max_tokens: 4096 }
    );

    // Parse the JSON from the AI response (handle potential markdown wrapping)
    let jsonStr = result.reply.trim();
    if (jsonStr.startsWith('```json')) {
      jsonStr = jsonStr.replace(/^```json\s*/, '').replace(/\s*```$/, '');
    } else if (jsonStr.startsWith('```')) {
      jsonStr = jsonStr.replace(/^```\s*/, '').replace(/\s*```$/, '');
    }

    const feedback = JSON.parse(jsonStr);

    return NextResponse.json({ success: true, feedback });
  } catch (error) {
    console.error('Assessment API error:', error);
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : 'Internal server error',
      },
      { status: 500 }
    );
  }
}
