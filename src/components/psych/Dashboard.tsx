import { useMemo, useState } from 'react';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { flashcards } from '../../data/psych/flashcards';
import { ProgressRing } from '../ProgressRing';

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
  const [showBlueprint, setShowBlueprint] = useState(true);
  const [dismissedTip, setDismissedTip] = useState(false);

  const totalCards = flashcards.length;
  const masteredCount = Object.values(mastered).filter(v => v === 'mastered').length;
  const progressPct = totalCards > 0 ? Math.round((masteredCount / totalCards) * 100) : 0;

  const nextAction = useMemo(() => {
    if (masteredCount === 0) return { text: 'Start with Flashcards', sub: 'Begin active recall — the #1 study technique', tab: 'cards', emoji: '🚀' };
    if (progressPct < 30) return { text: 'Keep Studying Cards', sub: `${masteredCount}/${totalCards} mastered — you're building momentum!`, tab: 'cards', emoji: '📈' };
    if (quizScore === 0) return { text: 'Try a Mock Quiz', sub: 'Test what you know — identify weak spots', tab: 'quiz', emoji: '🎯' };
    if (progressPct < 60) return { text: 'Review Weak Cards', sub: 'Focus on shaky ones — breakthrough is close', tab: 'cards', emoji: '💪' };
    return { text: 'You\'re doing great!', sub: 'Consistency is the key to mastery 🏆', tab: 'cards', emoji: '🌟' };
  }, [masteredCount, totalCards, progressPct, quizScore]);

  return (
    <div className="h-full overflow-y-auto no-scrollbar px-4 pt-3 pb-6 space-y-4">

      {/* Hero: Progress + Countdown */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-indigo-600 via-violet-600 to-indigo-700 p-5 shadow-xl shadow-indigo-500/15 animate-slide-up glow-indigo">
        <div className="absolute inset-0 opacity-[0.06]">
          <div className="absolute -top-14 -right-14 w-44 h-44 rounded-full bg-white" />
          <div className="absolute -bottom-10 -left-10 w-32 h-32 rounded-full bg-white" />
        </div>
        <div className="relative">
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="text-white/50 text-[10px] font-semibold uppercase tracking-widest mb-0.5">Your Progress</p>
              <p className="text-white text-3xl font-black">{progressPct}<span className="text-lg text-white/50">%</span></p>
              <p className="text-white/40 text-[10px] mt-0.5">{masteredCount}/{totalCards} cards mastered</p>
            </div>
            <ProgressRing value={progressPct} size={64} strokeWidth={5} color="#c4b5fd" label="done" />
          </div>
          {/* Progress bar */}
          <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
            <div className="h-full bg-white/80 rounded-full transition-all duration-1000 ease-out" style={{ width: `${progressPct}%` }} />
          </div>
          <div className="flex items-center justify-between mt-2">
            <p className="text-white/30 text-[10px]">{quizScore > 0 ? `Best quiz: ${quizScore}` : 'No quizzes yet'}</p>
            {progressPct >= 80 && <p className="text-amber-300 text-[10px] font-bold animate-glow-pulse">🔥 Almost there!</p>}
          </div>
        </div>
      </div>

      {/* Primary CTA */}
      <button
        onClick={() => onNavigate(nextAction.tab)}
        className="w-full p-4 rounded-2xl glass-card border border-zinc-700/30 text-left press-lift group animate-slide-up stagger-1"
      >
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-indigo-500/15 border border-indigo-500/25 flex items-center justify-center shrink-0 group-active:bg-indigo-500/25 transition-colors text-lg">
            {nextAction.emoji}
          </div>
          <div className="flex-1">
            <p className="text-white font-bold text-sm">{nextAction.text}</p>
            <p className="text-zinc-500 text-[11px] mt-0.5">{nextAction.sub}</p>
          </div>
          <svg className="w-5 h-5 text-zinc-600 group-hover:text-zinc-400 transition-all duration-300 group-hover:translate-x-1 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </button>

      {/* Quick Actions */}
      <div className="grid grid-cols-2 gap-2.5 animate-slide-up stagger-2">
        <QuickCard emoji="📝" label="Mock Quiz" sub="35 questions" color="rose" onClick={() => onNavigate('quiz')} />
        <QuickCard emoji="📖" label="Key Terms" sub="40+ definitions" color="emerald" onClick={() => onNavigate('glossary')} />
        <QuickCard emoji="📋" label="Chapter Notes" sub="Quick revision" color="violet" onClick={() => onNavigate('notes')} />
        <QuickCard emoji="📄" label="PDF Reference" sub="All 4 PDFs" color="amber" onClick={onOpenPdf} />
      </div>

      {/* Exam Blueprint */}
      <div className="animate-slide-up stagger-3">
        <button
          onClick={() => setShowBlueprint(!showBlueprint)}
          className="flex items-center justify-between w-full py-2 group"
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
          <div className="space-y-1.5 mt-1 animate-slide-up">
            {CHAPTERS.map((ch, i) => {
              const pct = (ch.marks / 70) * 100;
              const cardCount = flashcards.filter(c => c.chapter === ch.num).length;
              const cc = colorClasses[ch.color];
              return (
                <button
                  key={ch.num}
                  onClick={() => onSelectChapter(ch.num)}
                  className={`w-full flex items-center gap-2.5 p-2.5 rounded-xl ${cc.bg} border border-zinc-800/20 press-scale transition-all`}
                  style={{ animationDelay: `${i * 0.04}s` }}
                >
                  <span className="text-sm shrink-0">{ch.emoji}</span>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <span className="text-zinc-300 text-[11px] font-semibold truncate">{ch.name}</span>
                      <span className={`pill text-[9px] ${cc.pill} shrink-0 ml-1`}>{ch.marks}M</span>
                    </div>
                    <div className="flex items-center gap-2 mt-1">
                      <div className="flex-1 h-1 bg-zinc-800/50 rounded-full overflow-hidden">
                        <div className={`h-full bg-gradient-to-r ${cc.bar} rounded-full transition-all duration-700`} style={{ width: `${pct}%` }} />
                      </div>
                      <span className="text-zinc-600 text-[9px] shrink-0">{cardCount} cards</span>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        )}
      </div>

      {/* Tip */}
      {!dismissedTip && (
        <div className="flex items-start gap-2 p-3 rounded-xl glass-warm animate-slide-up stagger-4">
          <span className="text-sm shrink-0 mt-0.5">💡</span>
          <div className="flex-1">
            <p className="text-zinc-400 text-[11px] leading-relaxed">
              <span className="text-amber-400 font-semibold">Pro tip:</span> Spaced repetition works! Review cards at increasing intervals for long-term retention.
            </p>
          </div>
          <button onClick={() => setDismissedTip(true)} className="text-zinc-600 text-[10px] shrink-0 mt-0.5 press-scale">✕</button>
        </div>
      )}
    </div>
  );
}

function QuickCard({ emoji, label, sub, color, onClick }: {
  emoji: string; label: string; sub: string; color: string; onClick: () => void;
}) {
  const bgMap: Record<string, string> = {
    rose: 'bg-rose-500/8 border-rose-500/15 hover:bg-rose-500/12',
    emerald: 'bg-emerald-500/8 border-emerald-500/15 hover:bg-emerald-500/12',
    violet: 'bg-violet-500/8 border-violet-500/15 hover:bg-violet-500/12',
    amber: 'bg-amber-500/8 border-amber-500/15 hover:bg-amber-500/12',
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
      className={`p-3.5 rounded-xl ${bgMap[color]} border text-left press-lift transition-all duration-200`}
    >
      <span className="text-xl">{emoji}</span>
      <p className={`text-xs font-bold mt-2 ${textMap[color]}`}>{label}</p>
      <p className="text-zinc-600 text-[10px] mt-0.5">{sub}</p>
    </button>
  );
}
