import { useMemo, useState } from 'react';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { hindiFlashcards } from '../../data/hindi/flashcards';
import { ProgressRing } from '../ProgressRing';

interface Props {
  onNavigate: (tab: string) => void;
  onSelectChapter: (ch: number) => void;
  onOpenPdf: () => void;
}

const CHAPTERS = [
  { num: 1, name: 'देवसेना का गीत', type: 'kavya', marks: 4, emoji: '📖' },
  { num: 2, name: 'गीत गाने दो मुझे', type: 'kavya', marks: 4, emoji: '🎶' },
  { num: 3, name: 'यह दीप अकेला', type: 'kavya', marks: 4, emoji: '🪔' },
  { num: 4, name: 'बनारस', type: 'kavya', marks: 4, emoji: '🌆' },
  { num: 5, name: 'एक कम, सत्य', type: 'kavya', marks: 4, emoji: '✍️' },
  { num: 6, name: 'वसंत आया', type: 'kavya', marks: 4, emoji: '🌸' },
  { num: 7, name: 'भरत-राम का प्रेम', type: 'kavya', marks: 4, emoji: '🙏' },
  { num: 8, name: 'बारहमासा', type: 'kavya', marks: 4, emoji: '🌙' },
  { num: 9, name: 'पद', type: 'kavya', marks: 4, emoji: '🎵' },
  { num: 10, name: 'रामचंद्रचंद्रिका', type: 'kavya', marks: 4, emoji: '📜' },
  { num: 11, name: 'कवित्त, सवैया', type: 'kavya', marks: 4, emoji: '🪶' },
  { num: 12, name: 'प्रेमघन की छाया-स्मृति', type: 'gadya', marks: 4, emoji: '🕯️' },
  { num: 13, name: 'सुमिरिनी के मनके', type: 'gadya', marks: 4, emoji: '📿' },
  { num: 14, name: 'कच्चा चिट्ठा', type: 'gadya', marks: 4, emoji: '✉️' },
  { num: 15, name: 'संवदिया', type: 'gadya', marks: 4, emoji: '💬' },
  { num: 16, name: 'गाँधी, नेहरू, अराफ़ात', type: 'gadya', marks: 4, emoji: '🤝' },
  { num: 17, name: 'शेर, पहचान', type: 'gadya', marks: 4, emoji: '🦁' },
  { num: 18, name: 'जहाँ कोई वापसी नहीं', type: 'gadya', marks: 4, emoji: '🌍' },
  { num: 19, name: 'यथास्मै रोचते विश्वम्', type: 'gadya', marks: 4, emoji: '📖' },
  { num: 20, name: 'दूसरा देवदास', type: 'gadya', marks: 4, emoji: '💔' },
  { num: 21, name: 'कुटज', type: 'gadya', marks: 4, emoji: '🌿' },
  { num: 22, name: 'सूरदास की झोपड़ी', type: 'antral', marks: 8, emoji: '🏚️' },
  { num: 23, name: 'आरोहण', type: 'antral', marks: 8, emoji: '🧗' },
  { num: 24, name: 'बिस्कोहर की माटी', type: 'antral', marks: 8, emoji: '🌾' },
  { num: 25, name: 'अपना मालवा', type: 'antral', marks: 8, emoji: '🏚️' },
];

export function HindiDashboard({ onNavigate, onSelectChapter, onOpenPdf }: Props) {
  const [mastered] = useLocalStorage<Record<string, string>>('hindi-flashcard-progress', {});
  const [quizScore] = useLocalStorage<number>('hindi-quiz-best', 0);
  const [showBlueprint, setShowBlueprint] = useState(true);

  const totalCards = hindiFlashcards.length;
  const masteredCount = Object.values(mastered).filter(v => v === 'mastered').length;
  const progressPct = totalCards > 0 ? Math.round((masteredCount / totalCards) * 100) : 0;

  const nextAction = useMemo(() => {
    if (masteredCount === 0) return { text: 'शुरू करें रिवीज़न से', sub: 'Start your study journey — you got this!', tab: 'revisions', emoji: '🚀' };
    if (progressPct < 30) return { text: 'फ्लैशकार्ड जारी रखें', sub: `${masteredCount}/${totalCards} mastered — building momentum!`, tab: 'cards', emoji: '📈' };
    if (quizScore === 0) return { text: 'क्विज़ दें', sub: 'Test your knowledge — identify weak spots', tab: 'quiz', emoji: '🎯' };
    if (progressPct < 60) return { text: 'कमज़ोर कार्ड दोहराएँ', sub: 'Focus on shaky ones — breakthrough is close', tab: 'cards', emoji: '💪' };
    return { text: 'बढ़िया प्रगति!', sub: 'Consistency is the key to mastery 🏆', tab: 'revisions', emoji: '🌟' };
  }, [masteredCount, totalCards, progressPct, quizScore]);

  return (
    <div className="h-full overflow-y-auto no-scrollbar px-4 pt-3 pb-6 space-y-4">

      {/* Hero: Progress */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-rose-600 via-pink-600 to-rose-700 p-5 shadow-xl shadow-rose-500/15 animate-slide-up glow-rose">
        <div className="absolute inset-0 opacity-[0.06]">
          <div className="absolute -top-14 -right-14 w-44 h-44 rounded-full bg-white" />
          <div className="absolute -bottom-10 -left-10 w-32 h-32 rounded-full bg-white" />
        </div>
        <div className="relative">
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="text-white/50 text-[10px] font-semibold uppercase tracking-widest mb-0.5">हिंदी ऐच्छिक</p>
              <p className="text-white text-3xl font-black">{progressPct}<span className="text-lg text-white/50">%</span></p>
              <p className="text-white/40 text-[10px] mt-0.5">{masteredCount}/{totalCards} cards mastered</p>
            </div>
            <ProgressRing value={progressPct} size={64} strokeWidth={5} color="#fda4af" label="done" />
          </div>
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
          <div className="w-12 h-12 rounded-xl bg-rose-500/15 border border-rose-500/25 flex items-center justify-center shrink-0 text-lg">
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
      <div className="grid grid-cols-3 gap-2.5 animate-slide-up stagger-2">
        <QuickCard emoji="📚" label="रिवीज़न" sub="25 पाठ" color="rose" onClick={() => onNavigate('revisions')} />
        <QuickCard emoji="📖" label="किताबें" sub="सभी पाठ" color="amber" onClick={() => onNavigate('books')} />
        <QuickCard emoji="📝" label="क्विज़" sub="34 प्रश्न" color="violet" onClick={() => onNavigate('quiz')} />
        <QuickCard emoji="🔤" label="शब्दावली" sub="42 शब्द" color="emerald" onClick={() => onNavigate('glossary')} />
        <QuickCard emoji="🗺️" label="माइंड मैप" sub="25 पाठ" color="cyan" onClick={() => onNavigate('maps')} />
        <QuickCard emoji="✍️" label="लेखन" sub="8 प्रारूप" color="fuchsia" onClick={() => onNavigate('writing')} />
      </div>

      {/* Blueprint */}
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
          <div className="space-y-1 mt-1 animate-slide-up">
            {CHAPTERS.map((ch, i) => {
              const cardCount = hindiFlashcards.filter(c => c.chapter === ch.num).length;
              return (
                <button
                  key={ch.num}
                  onClick={() => onSelectChapter(ch.num)}
                  className="w-full flex items-center gap-2.5 p-2.5 rounded-xl bg-rose-500/5 border border-zinc-800/20 press-scale transition-all"
                  style={{ animationDelay: `${i * 0.02}s` }}
                >
                  <span className="text-sm shrink-0">{ch.emoji}</span>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <span className="text-zinc-300 text-[11px] font-semibold truncate">{ch.name}</span>
                      <span className="pill text-[9px] bg-rose-500/15 text-rose-300 shrink-0 ml-1">{ch.marks}m</span>
                    </div>
                    <span className="text-zinc-600 text-[9px]">{cardCount} cards</span>
                  </div>
                </button>
              );
            })}
          </div>
        )}
      </div>
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
    cyan: 'bg-cyan-500/8 border-cyan-500/15 hover:bg-cyan-500/12',
    fuchsia: 'bg-fuchsia-500/8 border-fuchsia-500/15 hover:bg-fuchsia-500/12',
  };
  const textMap: Record<string, string> = {
    rose: 'text-rose-400',
    emerald: 'text-emerald-400',
    violet: 'text-violet-400',
    amber: 'text-amber-400',
    cyan: 'text-cyan-400',
    fuchsia: 'text-fuchsia-400',
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
