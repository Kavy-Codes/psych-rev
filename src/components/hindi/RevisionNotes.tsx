import { useState, useEffect } from 'react';
import { hindiRevisionNotes, type HindiRevisionNote } from '../../data/hindi/revisionNotes';

const TYPE_BADGE: Record<string, { label: string; cls: string }> = {
  kavya: { label: 'कविता', cls: 'bg-violet-500/15 text-violet-300 border-violet-500/20' },
  gadya: { label: 'गद्य', cls: 'bg-emerald-500/15 text-emerald-300 border-emerald-500/20' },
  antral: { label: 'अंतराल', cls: 'bg-amber-500/15 text-amber-300 border-amber-500/20' },
};

const SECTION_ICONS: Record<string, string> = {
  summary: '📋',
  themes: '💡',
  devices: '🎭',
  character: '👤',
  quotes: '💬',
  questions: '❓',
  tips: '🎯',
  words: '📖',
};

export function HindiRevisionNotes({ singleChapter }: { singleChapter?: number }) {
  const [selectedChapter, setSelectedChapter] = useState(1);

  useEffect(() => {
    if (singleChapter && singleChapter > 0) {
      setSelectedChapter(singleChapter);
    }
  }, [singleChapter]);

  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({
    summary: true,
    themes: true,
    devices: false,
    character: false,
    quotes: false,
    questions: false,
    tips: false,
    words: false,
  });

  const note = hindiRevisionNotes.find(n => n.chapter === selectedChapter);
  if (!note) return null;

  const toggle = (key: string) => setExpandedSections(s => ({ ...s, [key]: !s[key] }));

  return (
    <div className="flex flex-col h-full pt-2 pb-4 gap-3">
      {/* Scrollable content */}
      <div className="flex-1 min-h-0 overflow-y-auto no-scrollbar px-4" key={selectedChapter}>
        <div className="animate-fade-in space-y-2.5 pb-4">
          {/* Title card */}
          <div className="rounded-2xl bg-gradient-to-br from-rose-600/20 via-pink-600/10 to-rose-700/20 border border-rose-500/15 p-4">
            <div className="flex items-center gap-2 mb-2">
              <span className={`pill border text-[9px] font-bold ${TYPE_BADGE[note.type].cls}`}>
                {TYPE_BADGE[note.type].label}
              </span>
              <span className="pill bg-zinc-800/60 text-zinc-400 border border-zinc-700/40 text-[9px] font-semibold">
                {note.author}
              </span>
              {note.chapter <= 9 && (
                <span className="pill bg-rose-500/10 text-rose-300 border border-rose-500/15 text-[9px]">काव्य खंड</span>
              )}
              {note.chapter >= 10 && note.chapter <= 15 && (
                <span className="pill bg-emerald-500/10 text-emerald-300 border border-emerald-500/15 text-[9px]">गद्य खंड</span>
              )}
              {note.chapter >= 22 && (
                <span className="pill bg-amber-500/10 text-amber-300 border border-amber-500/15 text-[9px]">अंतराल</span>
              )}
            </div>
            <h2 className="text-white font-black text-base leading-tight">{note.title}</h2>
            <p className="text-zinc-500 text-[10px] mt-1">
              पाठ {note.chapter} · {note.chapter <= 21 ? 'अंतरा भाग-2' : 'अंतराल'}
            </p>
          </div>

          {/* Summary */}
          <CollapsibleSection
            icon={SECTION_ICONS.summary}
            title="सारांश"
            isOpen={expandedSections.summary}
            onToggle={() => toggle('summary')}
            accentClass="rose"
          >
            <p className="text-[12px] text-zinc-300 leading-relaxed whitespace-pre-line">{note.summary}</p>
          </CollapsibleSection>

          {/* Key Themes */}
          <CollapsibleSection
            icon={SECTION_ICONS.themes}
            title="मुख्य विषय"
            isOpen={expandedSections.themes}
            onToggle={() => toggle('themes')}
            accentClass="amber"
          >
            <div className="flex flex-wrap gap-1.5">
              {note.keyThemes.map((t, i) => (
                <span key={i} className="px-2.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-[10px] text-amber-300 font-semibold">
                  {t}
                </span>
              ))}
            </div>
          </CollapsibleSection>

          {/* Literary Devices */}
          {note.literaryDevices && note.literaryDevices.length > 0 && (
            <CollapsibleSection
              icon={SECTION_ICONS.devices}
              title="साहित्यिक उपकरण"
              isOpen={expandedSections.devices}
              onToggle={() => toggle('devices')}
              accentClass="violet"
            >
              <div className="space-y-1.5">
                {note.literaryDevices.map((d, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <span className="text-violet-400 mt-0.5 shrink-0 text-xs">◆</span>
                    <span className="text-[11px] text-zinc-400 leading-relaxed">{d}</span>
                  </div>
                ))}
              </div>
            </CollapsibleSection>
          )}

          {/* Character Sketch */}
          {note.characterSketch && (
            <CollapsibleSection
              icon={SECTION_ICONS.character}
              title="पात्र चित्रण"
              isOpen={expandedSections.character}
              onToggle={() => toggle('character')}
              accentClass="emerald"
            >
              <div className="p-3 rounded-xl bg-emerald-500/5 border border-emerald-500/10">
                <p className="text-[11px] text-emerald-300/80 leading-relaxed">{note.characterSketch}</p>
              </div>
            </CollapsibleSection>
          )}

          {/* Important Quotes */}
          {note.importantQuotes.length > 0 && (
            <CollapsibleSection
              icon={SECTION_ICONS.quotes}
              title="महत्वपूर्ण पंक्तियाँ"
              isOpen={expandedSections.quotes}
              onToggle={() => toggle('quotes')}
              accentClass="blue"
              badge={note.importantQuotes.length}
            >
              <div className="space-y-2">
                {note.importantQuotes.map((q, i) => (
                  <div key={i} className="p-3 rounded-xl bg-blue-500/5 border border-blue-500/10">
                    <p className="text-[12px] text-blue-300 italic font-medium leading-relaxed mb-1.5">
                      "{q.text}"
                    </p>
                    <p className="text-[10px] text-zinc-500 leading-relaxed">
                      <span className="text-blue-400 font-semibold">अर्थ:</span> {q.explanation}
                    </p>
                  </div>
                ))}
              </div>
            </CollapsibleSection>
          )}

          {/* Important Questions */}
          {note.importantQuestions.length > 0 && (
            <CollapsibleSection
              icon={SECTION_ICONS.questions}
              title="महत्वपूर्ण प्रश्न"
              isOpen={expandedSections.questions}
              onToggle={() => toggle('questions')}
              accentClass="rose"
              badge={note.importantQuestions.length}
            >
              <div className="space-y-2">
                {note.importantQuestions.map((q, i) => (
                  <QuestionCard key={i} index={i + 1} question={q.question} answer={q.answer} />
                ))}
              </div>
            </CollapsibleSection>
          )}

          {/* Exam Tips */}
          {note.examTips.length > 0 && (
            <CollapsibleSection
              icon={SECTION_ICONS.tips}
              title="परीक्षा टिप्स"
              isOpen={expandedSections.tips}
              onToggle={() => toggle('tips')}
              accentClass="amber"
            >
              <div className="space-y-1.5">
                {note.examTips.map((tip, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <span className="text-amber-400 mt-0.5 shrink-0 text-xs">⚡</span>
                    <span className="text-[11px] text-zinc-400 leading-relaxed">{tip}</span>
                  </div>
                ))}
              </div>
            </CollapsibleSection>
          )}

          {/* Word Meanings */}
          {note.wordMeanings && note.wordMeanings.length > 0 && (
            <CollapsibleSection
              icon={SECTION_ICONS.words}
              title="कठिन शब्द"
              isOpen={expandedSections.words}
              onToggle={() => toggle('words')}
              accentClass="cyan"
              badge={note.wordMeanings.length}
            >
              <div className="grid grid-cols-2 gap-1.5">
                {note.wordMeanings.map((wm, i) => (
                  <div key={i} className="p-2 rounded-lg bg-cyan-500/5 border border-cyan-500/10">
                    <p className="text-[11px] text-cyan-300 font-bold">{wm.word}</p>
                    <p className="text-[10px] text-zinc-500">{wm.meaning}</p>
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
    rose: 'border-rose-500/10',
    amber: 'border-amber-500/10',
    violet: 'border-violet-500/10',
    emerald: 'border-emerald-500/10',
    blue: 'border-blue-500/10',
    cyan: 'border-cyan-500/10',
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
          <span className="pill bg-rose-500/15 text-rose-300 text-[9px] font-bold shrink-0 mt-0.5">Q{index}</span>
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
          <div className="p-2.5 rounded-lg bg-emerald-500/5 border border-emerald-500/10">
            <p className="text-[11px] text-emerald-300/80 leading-relaxed">{answer}</p>
          </div>
        </div>
      )}
    </div>
  );
}
