import { useMemo, useState, useEffect } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { flashcards } from '../data/flashcards';
import { quizQuestions } from '../data/quiz';

interface Props {
  onNavigate: (tab: string) => void;
  onSelectChapter: (ch: number) => void;
  onOpenPdf: () => void;
}

const CHAPTERS = [
  { num: 1, name: "Variations", marks: 13, emoji: "🧠", color: "indigo" },
  { num: 2, name: "Self & Personality", marks: 13, emoji: "👤", color: "rose" },
  { num: 3, name: "Life Challenges", marks: 9, emoji: "⚡", color: "emerald" },
  { num: 4, name: "Disorders", marks: 12, emoji: "🧩", color: "amber" },
  { num: 5, name: "Therapy", marks: 9, emoji: "💊", color: "cyan" },
  { num: 6, name: "Attitudes", marks: 8, emoji: "💡", color: "fuchsia" },
  { num: 7, name: "Social Influence", marks: 6, emoji: "👥", color: "lime" },
];

const colorClasses: Record<string, { bar: string; pill: string; bg: string }> = {
  indigo: { bar: 'from-indigo-500 to-indigo-600', pill: 'bg-indigo-500/15 text-indigo-300', bg: 'bg-indigo-500/5' },
  rose: { bar: 'from-rose-500 to-rose-600', pill: 'bg-rose-500/15 text-rose-300', bg: 'bg-rose-500/5' },
  emerald: { bar: 'from-emerald-500 to-emerald-600', pill: 'bg-emerald-500/15 text-emerald-300', bg: 'bg-emerald-500/5' },
  amber: { bar: 'from-amber-500 to-amber-600', pill: 'bg-amber-500/15 text-amber-300', bg: 'bg-amber-500/5' },
  cyan: { bar: 'from-cyan-500 to-cyan-600', pill: 'bg-cyan-500/15 text-cyan-300', bg: 'bg-cyan-500/5' },
  fuchsia: { bar: 'from-fuchsia-500 to-fuchsia-600', pill: 'bg-fuchsia-500/15 text-fuchsia-300', bg: 'bg-fuchsia-500/5' },
  lime: { bar: 'from-lime-500 to-lime-600', pill: 'bg-lime-500/15 text-lime-300', bg: 'bg-lime-500/5' },
};

export function Dashboard({ onNavigate, onSelectChapter, onOpenPdf }: Props) {
  const [mastered] = useLocalStorage<Record<string, string>>('psych-flashcard-progress', {});
  const [quizScore] = useLocalStorage<number>('psych-quiz-best', 0);
  const [showBlueprint, setShowBlueprint] = useState(false);
  const [dismissedTip, setDismissedTip] = useState(false);

  const totalCards = flashcards.length;
  const masteredCount = Object.values(mastered).filter(v => v === 'mastered').length;
  const progressPct = totalCards > 0 ? Math.round((masteredCount / totalCards) * 100) : 0;

  const now = new Date();
  const examDate = new Date(now);
  examDate.setDate(examDate.getDate() + 1);
  examDate.setHours(10, 0, 0, 0);
  const diff = Math.max(0, examDate.getTime() - now.getTime());
  const hours = Math.floor(diff / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

  // What to study next
  const nextAction = useMemo(() => {
    if (masteredCount === 0) return { text: 'Start with Flashcards', sub: 'Begin active recall', tab: 'cards' };
    if (progressPct < 30) return { text: 'Keep Studying Cards', sub: `${masteredCount}/${totalCards} mastered`, tab: 'cards' };
    if (quizScore === 0) return { text: 'Try a Mock Quiz', sub: 'Test what you know', tab: 'quiz' };
    if (progressPct < 60) return { text: 'Review Weak Cards', sub: 'Focus on shaky ones', tab: 'cards' };
    return { text: 'You\'re doing great!', sub: 'Keep going 💪', tab: 'cards' };
  }, [masteredCount, totalCards, progressPct, quizScore]);

  return (
    <div className="h-full overflow-y-auto no-scrollbar px-4 pt-3 pb-6 space-y-4">

      {/* Primary: Countdown + Progress — ONE visual block */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-indigo-600 via-violet-600 to-indigo-700 p-5 shadow-xl shadow-indigo-500/15">
        <div className="absolute inset-0 opacity-[0.07]">
          <div className="absolute -top-12 -right-12 w-40 h-40 rounded-full bg-white" />
          <div className="absolute -bottom-8 -left-8 w-28 h-28 rounded-full bg-white" />
        </div>
        <div className="relative">
          <div className="flex items-end justify-between mb-3">
            <div>
              <p className="text-white/50 text-[10px] font-semibold uppercase tracking-widest mb-0.5">Exam In</p>
              <div className="flex items-baseline gap-1.5">
                <span className="text-white text-4xl font-black tabular-nums">{hours}</span>
                <span className="text-white/40 text-xs">h</span>
                <span className="text-white text-4xl font-black tabular-nums">{minutes}</span>
                <span className="text-white/40 text-xs">m</span>
              </div>
            </div>
            <div className="text-right">
              <p className="text-white/50 text-[10px] font-semibold uppercase tracking-widest mb-0.5">Progress</p>
              <p className="text-white text-2xl font-black">{progressPct}<span className="text-base text-white/50">%</span></p>
            </div>
          </div>
          {/* Progress bar */}
          <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
            <div className="h-full bg-white/80 rounded-full transition-all duration-1000 ease-out" style={{ width: `${progressPct}%` }} />
          </div>
          <p className="text-white/40 text-[10px] mt-1.5">{masteredCount}/{totalCards} cards · {quizScore > 0 ? `Best quiz: ${quizScore}` : 'No quizzes yet'}</p>
        </div>
      </div>

      {/* Primary CTA — ONE clear next action */}
      <button
        onClick={() => onNavigate(nextAction.tab)}
        className="w-full p-4 rounded-2xl bg-zinc-900/80 border border-zinc-700/40 text-left active:scale-[0.98] transition-all duration-150 group"
      >
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-xl bg-indigo-500/15 border border-indigo-500/25 flex items-center justify-center shrink-0 group-active:bg-indigo-500/25 transition-colors">
            <svg className="w-5 h-5 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </div>
          <div>
            <p className="text-white font-bold text-sm">{nextAction.text}</p>
            <p className="text-zinc-500 text-xs mt-0.5">{nextAction.sub}</p>
          </div>
        </div>
      </button>

      {/* Quick Actions — 2x2 grid, max 4 choices (Hick's Law) */}
      <div className="grid grid-cols-2 gap-2">
        <QuickCard emoji="📝" label="Mock Quiz" sub="35 questions" color="rose" onClick={() => onNavigate('quiz')} />
        <QuickCard emoji="📖" label="Key Terms" sub="40+ definitions" color="emerald" onClick={() => onNavigate('glossary')} />
        <QuickCard emoji="📋" label="Chapter Notes" sub="Quick revision" color="violet" onClick={() => onNavigate('notes')} />
        <QuickCard emoji="📄" label="PDF Reference" sub="All 4 PDFs" color="amber" onClick={onOpenPdf} />
      </div>

      {/* Chapter Weightage — collapsible (Progressive Disclosure) */}
      <div>
        <button
          onClick={() => setShowBlueprint(!showBlueprint)}
          className="flex items-center justify-between w-full py-1 group"
        >
          <div className="flex items-center gap-2">
            <h3 className="text-zinc-300 text-xs font-bold">Exam Blueprint</h3>
            <span className="text-zinc-600 text-[10px]">70 marks</span>
          </div>
          <svg className={`w-4 h-4 text-zinc-600 transition-transform duration-200 ${showBlueprint ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {showBlueprint && (
          <div className="space-y-1.5 mt-1 animate-in slide-in-from-top-2 duration-200">
            {CHAPTERS.map(ch => {
              const pct = (ch.marks / 70) * 100;
              const cardCount = flashcards.filter(c => c.chapter === ch.num).length;
              const cc = colorClasses[ch.color];
              return (
                <button
                  key={ch.num}
                  onClick={() => onSelectChapter(ch.num)}
                  className={`w-full flex items-center gap-2.5 p-2.5 rounded-xl ${cc.bg} border border-zinc-800/20 active:scale-[0.98] transition-all duration-150`}
                >
                  <span className="text-sm shrink-0">{ch.emoji}</span>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <span className="text-zinc-300 text-[11px] font-semibold truncate">{ch.name}</span>
                      <span className={`pill text-[9px] ${cc.pill} shrink-0 ml-1`}>{ch.marks}M</span>
                    </div>
                    <div className="flex items-center gap-2 mt-1">
                      <div className="flex-1 h-1 bg-zinc-800/50 rounded-full overflow-hidden">
                        <div className={`h-full bg-gradient-to-r ${cc.bar} rounded-full`} style={{ width: `${pct}%` }} />
                      </div>
                      <span className="text-zinc-600 text-[9px] shrink-0">{cardCount}</span>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        )}
      </div>

      {/* Usage hint — dismissible, shows once */}
      {!dismissedTip && (
        <div className="flex items-start gap-2 p-3 rounded-xl bg-indigo-500/5 border border-indigo-500/15">
          <span className="text-sm shrink-0 mt-0.5">💡</span>
          <div className="flex-1">
            <p className="text-zinc-400 text-[11px] leading-relaxed">
              <span className="text-zinc-300 font-semibold">Quick tip:</span> Swipe left/right on flashcards to navigate. Tap to flip. Use bottom tabs to switch sections. Chapter filter appears on every page.
            </p>
          </div>
          <button onClick={() => setDismissedTip(true)} className="text-zinc-600 text-[10px] shrink-0 mt-0.5">✕</button>
        </div>
      )}
    </div>
  );
}

function QuickCard({ emoji, label, sub, color, onClick }: {
  emoji: string; label: string; sub: string; color: string; onClick: () => void;
}) {
  const bgMap: Record<string, string> = {
    rose: 'bg-rose-500/8 border-rose-500/15',
    emerald: 'bg-emerald-500/8 border-emerald-500/15',
    violet: 'bg-violet-500/8 border-violet-500/15',
    amber: 'bg-amber-500/8 border-amber-500/15',
  };
  const textMap: Record<string, string> = {
    rose: 'text-rose-400',
    emerald: 'text-emerald-400',
    violet: 'text-violet-400',
    amber: 'text-amber-400',
  };
  return (
    <button
      onClick={onClick}
      className={`p-3 rounded-xl ${bgMap[color]} border text-left active:scale-[0.96] transition-all duration-150`}
    >
      <span className="text-lg">{emoji}</span>
      <p className={`text-xs font-bold mt-1.5 ${textMap[color]}`}>{label}</p>
      <p className="text-zinc-600 text-[10px] mt-0.5">{sub}</p>
    </button>
  );
}
