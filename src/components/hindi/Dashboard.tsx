import { useMemo, useState } from 'react';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { hindiFlashcards } from '../../data/hindi/flashcards';
import { hindiQuizQuestions } from '../../data/hindi/quiz';

interface Props {
  onNavigate: (tab: string) => void;
  onSelectChapter: (ch: number) => void;
  onOpenPdf: () => void;
}

const CHAPTERS = [
  // आरोह भाग-2 — काव्य खंड
  { num: 1, name: 'आत्मपरिचय, एक गीत', type: 'kavya', marks: 4, emoji: '📖' },
  { num: 2, name: 'पतंग', type: 'kavya', marks: 4, emoji: '🪁' },
  { num: 3, name: 'कविता के बहाने, बात सीधी थी पर', type: 'kavya', marks: 4, emoji: '✍️' },
  { num: 4, name: 'कैमरे में बंद अपाहिज', type: 'kavya', marks: 4, emoji: '📷' },
  { num: 5, name: 'उषा', type: 'kavya', marks: 4, emoji: '🌅' },
  { num: 6, name: 'बादल राग', type: 'kavya', marks: 4, emoji: '🌧️' },
  { num: 7, name: 'कवितावली (उत्तर कांड)', type: 'kavya', marks: 4, emoji: '📜' },
  { num: 8, name: 'रुबाइयाँ', type: 'kavya', marks: 4, emoji: '🌙' },
  { num: 9, name: 'छोटा मेरा खेत, बगुलों के पंख', type: 'kavya', marks: 4, emoji: '🌾' },
  // आरोह भाग-2 — गद्य खंड
  { num: 10, name: 'भक्तिन', type: 'gadya', marks: 4, emoji: '🙏' },
  { num: 11, name: 'बाज़ार दर्शन', type: 'gadya', marks: 4, emoji: '🏪' },
  { num: 12, name: 'काले मेघा पानी दे', type: 'gadya', marks: 4, emoji: '⛈️' },
  { num: 13, name: 'पहलवान की ढोलक', type: 'gadya', marks: 4, emoji: '🥁' },
  { num: 14, name: 'शिरीष के फूल', type: 'gadya', marks: 4, emoji: '🌸' },
  { num: 15, name: 'श्रम विभाजन और जाति-प्रथा', type: 'gadya', marks: 4, emoji: '⚖️' },
  // वितान भाग-2
  { num: 16, name: 'सिल्वर वैडिंग', type: 'vitan', marks: 10, emoji: '💒' },
  { num: 17, name: 'जूझ', type: 'vitan', marks: 10, emoji: '⚔️' },
  { num: 18, name: 'अतीत में दबे पाँव', type: 'vitan', marks: 10, emoji: '🏛️' },
];

export function HindiDashboard({ onNavigate, onSelectChapter, onOpenPdf }: Props) {
  const [mastered] = useLocalStorage<Record<string, string>>('hindi-flashcard-progress', {});
  const [quizScore] = useLocalStorage<number>('hindi-quiz-best', 0);
  const [showBlueprint, setShowBlueprint] = useState(false);

  const totalCards = hindiFlashcards.length;
  const masteredCount = Object.values(mastered).filter(v => v === 'mastered').length;
  const progressPct = totalCards > 0 ? Math.round((masteredCount / totalCards) * 100) : 0;

  const nextAction = useMemo(() => {
    if (masteredCount === 0) return { text: 'फ्लैशकार्ड्स शुरू करें', sub: 'सक्रिय स्मरण शुरू करें', tab: 'cards' };
    if (progressPct < 30) return { text: 'कार्ड्स का अध्ययन जारी रखें', sub: `${masteredCount}/${totalCards} महारत प्राप्त`, tab: 'cards' };
    if (quizScore === 0) return { text: 'क्विज़ आज़माएँ', sub: 'अपना ज्ञान परखें', tab: 'quiz' };
    if (progressPct < 60) return { text: 'कमज़ोर कार्ड्स की समीक्षा करें', sub: 'कठिन कार्ड्स पर ध्यान दें', tab: 'cards' };
    return { text: 'बहुत बढ़िया!', sub: 'जारी रखें', tab: 'cards' };
  }, [masteredCount, totalCards, progressPct, quizScore]);

  return (
    <div className="h-full overflow-y-auto no-scrollbar px-4 pt-3 pb-6 space-y-4">

      {/* Primary: Progress */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-rose-600 via-pink-600 to-rose-700 p-5 shadow-xl shadow-rose-500/15 animate-slide-up">
        <div className="absolute inset-0 opacity-[0.07]">
          <div className="absolute -top-12 -right-12 w-40 h-40 rounded-full bg-white" />
          <div className="absolute -bottom-8 -left-8 w-28 h-28 rounded-full bg-white" />
        </div>
        <div className="relative">
          <div className="flex items-end justify-between mb-3">
            <div>
              <p className="text-white/50 text-[10px] font-semibold uppercase tracking-widest mb-0.5">हिंदी आधार</p>
              <p className="text-white text-2xl font-black">302</p>
            </div>
            <div className="text-right">
              <p className="text-white/50 text-[10px] font-semibold uppercase tracking-widest mb-0.5">प्रगति</p>
              <p className="text-white text-2xl font-black">{progressPct}<span className="text-base text-white/50">%</span></p>
            </div>
          </div>
          <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
            <div className="h-full bg-white/80 rounded-full transition-all duration-1000 ease-out" style={{ width: `${progressPct}%` }} />
          </div>
          <p className="text-white/40 text-[10px] mt-1.5">{masteredCount}/{totalCards} कार्ड्स · {quizScore > 0 ? `सर्वश्रेष्ठ क्विज़: ${quizScore}` : 'अभी तक कोई क्विज़ नहीं'}</p>
        </div>
      </div>

      {/* Primary CTA */}
      <button
        onClick={() => onNavigate(nextAction.tab)}
        className="w-full p-4 rounded-2xl bg-zinc-900/80 border border-zinc-700/40 text-left active:scale-[0.98] transition-all duration-150 group animate-slide-up stagger-1"
      >
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-xl bg-rose-500/15 border border-rose-500/25 flex items-center justify-center shrink-0 group-active:bg-rose-500/25 transition-colors">
            <svg className="w-5 h-5 text-rose-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </div>
          <div>
            <p className="text-white font-bold text-sm">{nextAction.text}</p>
            <p className="text-zinc-500 text-xs mt-0.5">{nextAction.sub}</p>
          </div>
        </div>
      </button>

      {/* Quick Actions */}
      <div className="grid grid-cols-3 gap-2 animate-slide-up stagger-2">
        <QuickCard emoji="📝" label="क्विज़" sub="35 प्रश्न" color="rose" onClick={() => onNavigate('quiz')} />
        <QuickCard emoji="📖" label="शब्दावली" sub="42 शब्द" color="emerald" onClick={() => onNavigate('glossary')} />
        <QuickCard emoji="🗺️" label="माइंड मैप" sub="18 पाठ" color="violet" onClick={() => onNavigate('maps')} />
        <QuickCard emoji="📚" label="रिवीज़न" sub="18 पाठ" color="blue" onClick={() => onNavigate('revisions')} />
        <QuickCard emoji="✍️" label="लेखन" sub="8 प्रारूप" color="amber" onClick={() => onNavigate('writing')} />
        <QuickCard emoji="📋" label="नोट्स" sub="सारांश" color="cyan" onClick={() => onNavigate('notes')} />
      </div>

      {/* Blueprint */}
      <div className="animate-slide-up stagger-3">
        <button
          onClick={() => setShowBlueprint(!showBlueprint)}
          className="flex items-center justify-between w-full py-1 group"
        >
          <div className="flex items-center gap-2">
            <h3 className="text-zinc-300 text-xs font-bold">परीक्षा रूपरेखा</h3>
            <span className="text-zinc-600 text-[10px]">80 अंक</span>
          </div>
          <svg className={`w-4 h-4 text-zinc-600 transition-transform duration-200 ${showBlueprint ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {showBlueprint && (
          <div className="space-y-1 mt-1 animate-slide-up">
            {CHAPTERS.map(ch => {
              const cardCount = hindiFlashcards.filter(c => c.chapter === ch.num).length;
              return (
                <button
                  key={ch.num}
                  onClick={() => onSelectChapter(ch.num)}
                  className="w-full flex items-center gap-2.5 p-2.5 rounded-xl bg-rose-500/5 border border-zinc-800/20 active:scale-[0.98] transition-all duration-150"
                >
                  <span className="text-sm shrink-0">{ch.emoji}</span>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <span className="text-zinc-300 text-[11px] font-semibold truncate">{ch.name}</span>
                      <span className="pill text-[9px] bg-rose-500/15 text-rose-300 shrink-0 ml-1">{ch.marks}अ</span>
                    </div>
                    <span className="text-zinc-600 text-[9px]">{cardCount} कार्ड्स</span>
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
