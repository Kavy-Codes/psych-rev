import { useState, useEffect, useCallback, useMemo } from 'react';
import { flashcards, type Flashcard } from '../data/flashcards';
import { useLocalStorage } from '../hooks/useLocalStorage';

interface Props {
  chapterFilter: number;
}

export function Flashcards({ chapterFilter }: Props) {
  const [mastered, setMastered] = useLocalStorage<Record<string, 'mastered' | 'shaky'>>('psych-flashcard-progress', {});
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [showOnlyUnmastered, setShowOnlyUnmastered] = useState(false);
  const [direction, setDirection] = useState(0); // -1 left, 1 right

  const filteredCards = useMemo(() => {
    let cards = chapterFilter === 0 ? flashcards : flashcards.filter(c => c.chapter === chapterFilter);
    if (showOnlyUnmastered) {
      cards = cards.filter(c => !mastered[c.id] || mastered[c.id] === 'shaky');
    }
    return cards;
  }, [chapterFilter, showOnlyUnmastered, mastered]);

  const card = filteredCards[currentIndex];

  useEffect(() => {
    setCurrentIndex(0);
    setIsFlipped(false);
  }, [chapterFilter, showOnlyUnmastered]);

  const next = useCallback(() => {
    if (currentIndex < filteredCards.length - 1) {
      setDirection(1);
      setCurrentIndex(i => i + 1);
      setIsFlipped(false);
    }
  }, [currentIndex, filteredCards.length]);

  const prev = useCallback(() => {
    if (currentIndex > 0) {
      setDirection(-1);
      setCurrentIndex(i => i - 1);
      setIsFlipped(false);
    }
  }, [currentIndex]);

  const toggleFlip = useCallback(() => setIsFlipped(f => !f), []);

  const markCard = useCallback((status: 'mastered' | 'shaky') => {
    if (!card) return;
    setMastered(prev => ({ ...prev, [card.id]: status }));
    setTimeout(() => {
      setDirection(1);
      setCurrentIndex(i => Math.min(i + 1, filteredCards.length - 1));
      setIsFlipped(false);
    }, 200);
  }, [card, setMastered, filteredCards.length]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') next();
      else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') prev();
      else if (e.key === ' ' || e.key === 'Enter') { e.preventDefault(); toggleFlip(); }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [next, prev, toggleFlip]);

  // Touch swipe support
  const [touchStart, setTouchStart] = useState<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStart === null) return;
    const diff = touchStart - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) next();
      else prev();
    }
    setTouchStart(null);
  };

  const chapterColors: Record<number, string> = {
    1: 'from-indigo-600 via-indigo-500 to-violet-600',
    2: 'from-rose-600 via-rose-500 to-pink-600',
    3: 'from-emerald-600 via-emerald-500 to-teal-600',
    4: 'from-amber-600 via-amber-500 to-orange-600',
    5: 'from-cyan-600 via-cyan-500 to-blue-600',
    6: 'from-fuchsia-600 via-fuchsia-500 to-purple-600',
    7: 'from-lime-600 via-lime-500 to-green-600',
  };

  const chapterBadgeColors: Record<number, string> = {
    1: 'bg-indigo-500/20 text-indigo-300 border-indigo-500/30',
    2: 'bg-rose-500/20 text-rose-300 border-rose-500/30',
    3: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30',
    4: 'bg-amber-500/20 text-amber-300 border-amber-500/30',
    5: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/30',
    6: 'bg-fuchsia-500/20 text-fuchsia-300 border-fuchsia-500/30',
    7: 'bg-lime-500/20 text-lime-300 border-lime-500/30',
  };

  if (!card) {
    return (
      <div className="flex flex-col items-center justify-center h-full gap-4 px-6">
        <div className="text-5xl">🎉</div>
        <p className="text-zinc-400 text-center text-base font-medium">
          {showOnlyUnmastered ? 'All cards mastered!' : 'No cards for this chapter.'}
        </p>
        {showOnlyUnmastered && (
          <button
            onClick={() => setShowOnlyUnmastered(false)}
            className="px-5 py-2.5 rounded-xl bg-indigo-600 text-white font-semibold text-sm active:scale-95 transition-all"
          >
            Show All Cards
          </button>
        )}
      </div>
    );
  }

  const total = filteredCards.length;
  const masteredCount = filteredCards.filter(c => mastered[c.id] === 'mastered').length;
  const progress = total > 0 ? (masteredCount / total) * 100 : 0;

  return (
    <div className="flex flex-col h-full px-4 pt-2 pb-3 gap-2">
      {/* Header */}
      <div className="flex items-center justify-between shrink-0">
        <div className="flex items-center gap-2">
          <span className="text-zinc-500 text-xs font-mono">{currentIndex + 1}/{total}</span>
          <span className="text-zinc-600 text-[10px]">•</span>
          <span className="text-emerald-500 text-[10px] font-semibold">{masteredCount} mastered</span>
        </div>
        <button
          onClick={() => setShowOnlyUnmastered(!showOnlyUnmastered)}
          className={`px-2.5 py-1 rounded-full text-[10px] font-semibold border transition-all ${
            showOnlyUnmastered
              ? 'bg-rose-500/15 text-rose-300 border-rose-500/30'
              : 'bg-zinc-800/50 text-zinc-500 border-zinc-700/50'
          }`}
        >
          {showOnlyUnmastered ? 'Shaky Only' : 'All Cards'}
        </button>
      </div>

      {/* Progress */}
      <div className="w-full h-1 bg-zinc-800 rounded-full overflow-hidden shrink-0">
        <div
          className="h-full bg-gradient-to-r from-indigo-500 to-violet-500 rounded-full transition-all duration-700 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Flashcard */}
      <div
        className="flex-1 min-h-0 flip-card"
        onClick={toggleFlip}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div className={`flip-card-inner ${isFlipped ? 'flipped' : ''}`}>
          {/* Front */}
          <div className={`flip-card-front bg-gradient-to-br ${chapterColors[card.chapter]} p-4 sm:p-5 flex flex-col shadow-xl`}>
            <div className="flex items-center gap-1.5 mb-2 flex-wrap shrink-0">
              <span className={`pill border text-[10px] ${chapterBadgeColors[card.chapter]}`}>
                Ch {card.chapter}
              </span>
              <span className="pill bg-amber-500/20 text-amber-300 border border-amber-500/30 text-[10px]">
                {card.markWeight}
              </span>
            </div>

            <h3 className="text-white text-lg sm:text-xl font-bold leading-snug mb-1.5 shrink-0">
              {card.term}
            </h3>

            {card.theorist && (
              <p className="text-white/50 text-[11px] mb-2 shrink-0">{card.theorist}</p>
            )}

            <p className="text-white/70 text-sm leading-relaxed line-clamp-3 flex-1">
              {card.definition}
            </p>

            <div className="flex items-center justify-center gap-1.5 text-white/40 text-[10px] mt-2 shrink-0">
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              Tap to reveal · Swipe to navigate
            </div>
          </div>

          {/* Back */}
          <div className="flip-card-back bg-zinc-900 border border-zinc-700/50 p-4 flex flex-col overflow-y-auto no-scrollbar">
            <div className="flex items-center gap-1.5 mb-2 shrink-0">
              <span className={`pill border text-[10px] ${chapterBadgeColors[card.chapter]}`}>
                Ch {card.chapter}
              </span>
              <span className="text-zinc-500 text-[10px] font-semibold">KEY POINTS</span>
            </div>

            <h4 className="text-white font-bold text-base mb-2 shrink-0">{card.term}</h4>

            <ul className="space-y-1.5 mb-3">
              {card.keyPoints.map((point, i) => (
                <li key={i} className="flex gap-2 text-[13px] text-zinc-300">
                  <span className="text-indigo-400 mt-0.5 shrink-0">•</span>
                  <span className="leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>

            {card.example && (
              <div className="mt-auto p-3 rounded-xl bg-indigo-500/10 border border-indigo-500/20 shrink-0">
                <p className="text-[10px] font-bold text-indigo-400 mb-1">EXAMPLE</p>
                <p className="text-[13px] text-zinc-300 leading-relaxed">{card.example}</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-2 shrink-0">
        <button
          onClick={() => markCard('shaky')}
          className="flex-1 py-3 rounded-xl bg-rose-500/10 border border-rose-500/25 text-rose-400 font-bold text-sm active:scale-95 transition-all"
        >
          Still Shaky
        </button>
        <button
          onClick={prev}
          disabled={currentIndex === 0}
          className="px-4 py-3 rounded-xl bg-zinc-800/50 text-zinc-400 font-bold text-sm disabled:opacity-20 active:scale-95 transition-all"
        >
          ←
        </button>
        <button
          onClick={() => markCard('mastered')}
          className="flex-1 py-3 rounded-xl bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 font-bold text-sm active:scale-95 transition-all"
        >
          Mastered ✓
        </button>
      </div>
    </div>
  );
}
