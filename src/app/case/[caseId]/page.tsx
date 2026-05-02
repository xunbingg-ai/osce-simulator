import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import { getCaseById } from '@/data/cases';
import PhaseOverview from '@/components/PhaseOverview';

interface CasePageProps {
  params: { caseId: string };
}

export default async function CasePage({ params }: CasePageProps) {
  const { caseId } = await params;
  const caseData = getCaseById(decodeURIComponent(caseId));

  if (!caseData) {
    notFound();
  }

  return (
    <main className="min-h-screen">
      <div className="container mx-auto px-6 py-8">
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Cases</span>
          </Link>
        </div>

        <PhaseOverview caseId={caseData.case_id} />
      </div>
    </main>
  );
}
