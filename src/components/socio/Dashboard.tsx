import { useMemo, useState } from 'react';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { socioFlashcards } from '../../data/socio/flashcards';
import { ProgressRing } from '../ProgressRing';
import { Layers, Zap, FileText, BookOpen, ArrowRight, Sparkles } from 'lucide-react';

interface Props {
  onNavigate: (tab: string) => void;
  chapters: { num: number; name: string }[];
}

const UNITS = [
  { name: 'Indian Society: Demography & Institutions', marks: 20, chapters: [2, 3] },
  { name: 'Indian Society: Inequality & Diversity', marks: 20, chapters: [5, 6] },
  { name: 'Social Change & Development', marks: 40, chapters: [1] },
];

const TIPS = [
  'Spaced repetition works! Review cards at increasing intervals for long-term retention.',
  'Connect personal experiences to social concepts using sociological imagination.',
  'Write short notes on key thinkers — it helps in exam preparation.',
  'Group study is effective for discussing case studies and assertion-reason questions.',
  'Revise the difference between sanskritisation and westernisation regularly.',
  'Focus on Indian examples — they score better in sociology answers.',
  'Practice drawing connections between chapters for analytical questions.',
  'Read newspaper editorials to apply sociological concepts to current events.',
];

export function SocioDashboard({ onNavigate, chapters }: Props) {
  const [mastered] = useLocalStorage<Record<string, string>>('socio-flashcard-progress', {});
  const [quizScore] = useLocalStorage<number>('socio-quiz-best', 0);
  const [showBlueprint, setShowBlueprint] = useState(true);
  const [dismissedTip] = useState(false);

  const totalCards = socioFlashcards.length;
  const masteredCount = Object.values(mastered).filter(v => v === 'known').length;
  const progressPct = totalCards > 0 ? Math.round((masteredCount / totalCards) * 100) : 0;

  const nextAction = useMemo(() => {
    if (masteredCount === 0) return { text: 'Start with Flashcards', sub: 'Begin active recall — the #1 study technique', tab: 'cards', emoji: '🚀' };
    if (progressPct < 30) return { text: 'Keep Studying Cards', sub: `${masteredCount}/${totalCards} mastered — you\'re building momentum!`, tab: 'cards', emoji: '📈' };
    if (quizScore === 0) return { text: 'Try a Mock Quiz', sub: 'Test what you know — identify weak spots', tab: 'quiz', emoji: '🎯' };
    if (progressPct < 60) return { text: 'Review Weak Cards', sub: 'Focus on shaky ones — breakthrough is close', tab: 'cards', emoji: '💪' };
    return { text: 'You\'re doing great!', sub: 'Consistency is the key to mastery 🏆', tab: 'cards', emoji: '🌟' };
  }, [masteredCount, totalCards, progressPct, quizScore]);

  const randomTip = useMemo(() => TIPS[Math.floor(Math.random() * TIPS.length)], []);

  return (
    <div className="h-full overflow-y-auto no-scrollbar px-4 pt-3 pb-6 space-y-4">

      {/* Hero: Progress */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-teal-600 via-teal-500 to-cyan-600 p-5 shadow-xl shadow-teal-500/15 animate-slide-up">
        <div className="absolute inset-0 opacity-[0.06]">
          <div className="absolute -top-14 -right-14 w-44 h-44 rounded-full bg-white" />
          <div className="absolute -bottom-10 -left-10 w-32 h-32 rounded-full bg-white" />
        </div>
        <div className="relative">
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="text-white/50 text-[10px] font-semibold uppercase tracking-widest mb-0.5">Indian Society</p>
              <p className="text-white text-3xl font-black">{progressPct}<span className="text-lg text-white/50">%</span></p>
              <p className="text-white/40 text-[10px] mt-0.5">{masteredCount}/{totalCards} cards mastered</p>
            </div>
            <ProgressRing value={progressPct} size={64} strokeWidth={5} color="#5eead4" label="done" />
          </div>
          <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
            <div className="h-full bg-white/80 rounded-full transition-all duration-1000 ease-out" style={{ width: `${progressPct}%` }} />
          </div>
          <div className="flex items-center justify-between mt-2">
            <p className="text-white/30 text-[10px]">Sociology • Code 039 • 5 Chapters</p>
            {progressPct >= 80 && <p className="text-amber-300 text-[10px] font-bold animate-glow-pulse">🔥 Almost there!</p>}
          </div>
        </div>
      </div>

      {/* Primary CTA */}
      <button
        onClick={() => onNavigate(nextAction.tab)}
        className="w-full p-4 rounded-2xl card-primary text-left press-lift group animate-slide-up stagger-1"
      >
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-xl bg-teal-500/12 border border-teal-500/20 flex items-center justify-center shrink-0 group-active:bg-teal-500/20 transition-colors">
            <Sparkles className="w-5 h-5 text-teal-400" strokeWidth={1.75} />
          </div>
          <div className="flex-1">
            <p className="text-white font-bold text-sm">{nextAction.text}</p>
            <p className="text-zinc-500 text-[11px] mt-0.5">{nextAction.sub}</p>
          </div>
          <ArrowRight className="w-4 h-4 text-zinc-600 group-active:text-zinc-400 transition-colors shrink-0" strokeWidth={2} />
        </div>
      </button>

      {/* Quick Actions */}
      <div className="grid grid-cols-2 gap-2.5 animate-slide-up stagger-2">
        <QuickCard icon={<Layers className="w-5 h-5 text-teal-400" strokeWidth={1.75} />} label="Flashcards" sub="51 cards" bg="bg-teal-500/[0.06] border-teal-500/12" onClick={() => onNavigate('cards')} />
        <QuickCard icon={<Zap className="w-5 h-5 text-cyan-400" strokeWidth={1.75} />} label="Quiz" sub="50 questions" bg="bg-cyan-500/[0.06] border-cyan-500/12" onClick={() => onNavigate('quiz')} />
        <QuickCard icon={<FileText className="w-5 h-5 text-emerald-400" strokeWidth={1.75} />} label="Revision Notes" sub="Quick revision" bg="bg-emerald-500/[0.06] border-emerald-500/12" onClick={() => onNavigate('notes')} />
        <QuickCard icon={<BookOpen className="w-5 h-5 text-blue-400" strokeWidth={1.75} />} label="Glossary" sub="85+ definitions" bg="bg-blue-500/[0.06] border-blue-500/12" onClick={() => onNavigate('glossary')} />
      </div>

      {/* Exam Blueprint */}
      <div className="animate-slide-up stagger-3">
        <button
          onClick={() => setShowBlueprint(!showBlueprint)}
          className="flex items-center justify-between w-full py-2 group"
        >
          <div className="flex items-center gap-2">
            <h3 className="text-zinc-300 text-xs font-bold">Exam Blueprint</h3>
            <span className="text-zinc-600 text-[10px]">80 marks</span>
          </div>
          <svg className={`w-4 h-4 text-zinc-600 transition-transform duration-200 ${showBlueprint ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {showBlueprint && (
          <div className="space-y-1.5 mt-1 animate-slide-up">
            {UNITS.map((unit, i) => {
              const pct = (unit.marks / 80) * 100;
              const cardCount = unit.chapters.reduce((acc, ch) => acc + socioFlashcards.filter(c => c.chapter === ch).length, 0);
              return (
                <div
                  key={unit.name}
                  className="w-full flex items-center gap-2.5 p-2.5 rounded-xl bg-teal-500/5 border border-zinc-800/20"
                  style={{ animationDelay: `${i * 0.04}s` }}
                >
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <span className="text-zinc-300 text-[11px] font-semibold truncate">{unit.name}</span>
                      <span className="pill text-[9px] bg-teal-500/20 text-teal-300 border border-teal-500/30 shrink-0 ml-1">{unit.marks}M</span>
                    </div>
                    <div className="flex items-center gap-2 mt-1">
                      <div className="flex-1 h-1 bg-zinc-800/50 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full transition-all duration-700" style={{ width: `${pct}%` }} />
                      </div>
                      <span className="text-zinc-600 text-[9px] shrink-0">{cardCount} cards</span>
                    </div>
                    <p className="text-zinc-600 text-[9px] mt-0.5">Ch {unit.chapters.join(', ')}</p>
                  </div>
                </div>
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
              <span className="text-teal-400 font-semibold">Pro tip:</span> {randomTip}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

function QuickCard({ icon, label, sub, bg, onClick }: {
  icon: React.ReactNode; label: string; sub: string; bg: string; onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`p-3.5 rounded-xl border text-left press-lift transition-all duration-200 ${bg}`}
    >
      <div className="mb-2">{icon}</div>
      <p className="text-xs font-bold text-zinc-200">{label}</p>
      <p className="text-zinc-600 text-[10px] mt-0.5">{sub}</p>
    </button>
  );
}
