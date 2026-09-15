import { useState, useEffect } from 'react';
import { socioRevisionNotes, type SocioRevisionNote } from '../../data/socio/revisionNotes';

interface Props {
  singleChapter: number;
}

const SECTION_ICONS: Record<string, string> = {
  summary: '📋',
  keyConcepts: '💡',
  keyThinkers: '👤',
  importantFacts: '📚',
  examQuestions: '❓',
  examTips: '🎯',
};

export function SocioRevisionNotes({ singleChapter }: Props) {
  const [selectedChapter, setSelectedChapter] = useState(singleChapter || 1);

  useEffect(() => {
    if (singleChapter && singleChapter > 0) {
      setSelectedChapter(singleChapter);
    }
  }, [singleChapter]);

  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({
    summary: true,
    keyConcepts: true,
    keyThinkers: false,
    importantFacts: false,
    examQuestions: false,
    examTips: false,
  });

  const note = socioRevisionNotes.find(n => n.chapter === selectedChapter);
  if (!note) return null;

  const toggle = (key: string) => setExpandedSections(s => ({ ...s, [key]: !s[key] }));

  return (
    <div className="flex flex-col h-full pt-2 pb-4 gap-3">
      <div className="flex-1 min-h-0 overflow-y-auto no-scrollbar px-4" key={selectedChapter}>
        <div className="animate-fade-in space-y-2.5 pb-4">
          {/* Title card */}
          <div className="rounded-2xl bg-gradient-to-br from-teal-600/20 via-teal-500/10 to-cyan-600/20 border border-teal-500/15 p-4">
            <div className="flex items-center gap-2 mb-2">
              <span className="pill bg-teal-500/10 text-teal-300 border border-teal-500/15 text-[9px]">
                Ch {note.chapter}
              </span>
              <span className="pill bg-zinc-800/60 text-zinc-400 border border-zinc-700/40 text-[9px] font-semibold">
                Sociology
              </span>
            </div>
            <h2 className="text-white font-black text-base leading-tight">{note.title}</h2>
          </div>

          {/* Summary */}
          <CollapsibleSection
            icon={SECTION_ICONS.summary}
            title="Summary"
            isOpen={expandedSections.summary}
            onToggle={() => toggle('summary')}
            accentClass="teal"
          >
            <p className="text-[12px] text-zinc-300 leading-relaxed whitespace-pre-line">{note.summary}</p>
          </CollapsibleSection>

          {/* Key Concepts */}
          <CollapsibleSection
            icon={SECTION_ICONS.keyConcepts}
            title="Key Concepts"
            isOpen={expandedSections.keyConcepts}
            onToggle={() => toggle('keyConcepts')}
            accentClass="cyan"
            badge={note.keyConcepts.length}
          >
            <div className="space-y-2">
              {note.keyConcepts.map((kc, i) => (
                <div key={i} className="p-2.5 rounded-lg bg-teal-500/5 border border-teal-500/10">
                  <p className="text-[11px] text-teal-300 font-bold mb-0.5">{kc.term}</p>
                  <p className="text-[11px] text-zinc-400 leading-relaxed">{kc.definition}</p>
                </div>
              ))}
            </div>
          </CollapsibleSection>

          {/* Key Thinkers */}
          {note.keyThinkers.length > 0 && (
            <CollapsibleSection
              icon={SECTION_ICONS.keyThinkers}
              title="Key Thinkers"
              isOpen={expandedSections.keyThinkers}
              onToggle={() => toggle('keyThinkers')}
              accentClass="amber"
              badge={note.keyThinkers.length}
            >
              <div className="space-y-2">
                {note.keyThinkers.map((thinker, i) => (
                  <div key={i} className="p-3 rounded-xl bg-amber-500/5 border border-amber-500/10">
                    <p className="text-[11px] text-amber-300 font-bold mb-1">{thinker.name}</p>
                    <p className="text-[11px] text-zinc-400 leading-relaxed">{thinker.contribution}</p>
                  </div>
                ))}
              </div>
            </CollapsibleSection>
          )}

          {/* Important Facts */}
          {note.importantFacts.length > 0 && (
            <CollapsibleSection
              icon={SECTION_ICONS.importantFacts}
              title="Important Facts"
              isOpen={expandedSections.importantFacts}
              onToggle={() => toggle('importantFacts')}
              accentClass="emerald"
              badge={note.importantFacts.length}
            >
              <div className="space-y-1.5">
                {note.importantFacts.map((fact, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <span className="text-emerald-400 mt-0.5 shrink-0 text-xs">◆</span>
                    <span className="text-[11px] text-zinc-400 leading-relaxed">{fact}</span>
                  </div>
                ))}
              </div>
            </CollapsibleSection>
          )}

          {/* Exam Questions */}
          {note.examQuestions.length > 0 && (
            <CollapsibleSection
              icon={SECTION_ICONS.examQuestions}
              title="Exam Questions"
              isOpen={expandedSections.examQuestions}
              onToggle={() => toggle('examQuestions')}
              accentClass="rose"
              badge={note.examQuestions.length}
            >
              <div className="space-y-2">
                {note.examQuestions.map((q, i) => (
                  <QuestionCard key={i} index={i + 1} question={q.question} answer={q.answer} />
                ))}
              </div>
            </CollapsibleSection>
          )}

          {/* Exam Tips */}
          {note.examTips.length > 0 && (
            <CollapsibleSection
              icon={SECTION_ICONS.examTips}
              title="Exam Tips"
              isOpen={expandedSections.examTips}
              onToggle={() => toggle('examTips')}
              accentClass="blue"
            >
              <div className="space-y-1.5">
                {note.examTips.map((tip, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <span className="text-blue-400 mt-0.5 shrink-0 text-xs">⚡</span>
                    <span className="text-[11px] text-zinc-400 leading-relaxed">{tip}</span>
                  </div>
                ))}
              </div>
            </CollapsibleSection>
          )}
        </div>
      </div>
    </div>
  );
}

function CollapsibleSection({
  icon,
  title,
  isOpen,
  onToggle,
  accentClass,
  badge,
  children,
}: {
  icon: string;
  title: string;
  isOpen: boolean;
  onToggle: () => void;
  accentClass: string;
  badge?: number;
  children: React.ReactNode;
}) {
  const borderMap: Record<string, string> = {
    teal: 'border-teal-500/10',
    cyan: 'border-cyan-500/10',
    amber: 'border-amber-500/10',
    emerald: 'border-emerald-500/10',
    rose: 'border-rose-500/10',
    blue: 'border-blue-500/10',
  };

  return (
    <div className={`rounded-xl bg-zinc-900/40 border ${borderMap[accentClass] || 'border-zinc-800/30'} overflow-hidden`}>
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between px-3 py-2.5 active:bg-zinc-800/30 transition-colors"
      >
        <div className="flex items-center gap-2">
          <span className="text-sm">{icon}</span>
          <span className="text-[11px] font-bold text-zinc-300">{title}</span>
          {badge !== undefined && (
            <span className="pill bg-zinc-800/60 text-zinc-500 text-[9px] font-bold px-1.5">{badge}</span>
          )}
        </div>
        <svg
          className={`w-3.5 h-3.5 text-zinc-600 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {isOpen && (
        <div className="px-3 pb-3 animate-slide-up">
          {children}
        </div>
      )}
    </div>
  );
}

function QuestionCard({ index, question, answer }: { index: number; question: string; answer: string }) {
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <div className="rounded-xl bg-zinc-800/30 border border-zinc-800/30 overflow-hidden">
      <button
        onClick={() => setShowAnswer(!showAnswer)}
        className="w-full text-left px-3 py-2.5 active:bg-zinc-800/50 transition-colors"
      >
        <div className="flex items-start gap-2">
          <span className="pill bg-teal-500/15 text-teal-300 text-[9px] font-bold shrink-0 mt-0.5">Q{index}</span>
          <p className="text-[11px] text-zinc-300 font-medium leading-relaxed flex-1">{question}</p>
          <svg
            className={`w-3 h-3 text-zinc-600 shrink-0 mt-0.5 transition-transform duration-200 ${showAnswer ? 'rotate-180' : ''}`}
            fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </button>
      {showAnswer && (
        <div className="px-3 pb-2.5 pt-0 animate-slide-up">
          <div className="p-2.5 rounded-lg bg-teal-500/5 border border-teal-500/10">
            <p className="text-[11px] text-teal-300/80 leading-relaxed">{answer}</p>
          </div>
        </div>
      )}
    </div>
  );
}
