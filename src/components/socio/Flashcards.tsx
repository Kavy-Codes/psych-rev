import { useState, useEffect, useCallback, useMemo, useRef } from 'react';
import { socioFlashcards } from '../../data/socio/flashcards';
import { useLocalStorage } from '../../hooks/useLocalStorage';

interface Props {
  chapterRange: [number, number];
}

export function SocioFlashcards({ chapterRange }: Props) {
  const [progress, setProgress] = useLocalStorage<Record<string, 'known' | 'unknown'>>('socio-flashcard-progress', {});
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [animDir, setAnimDir] = useState<1 | -1>(1);
  const [celebration, setCelebration] = useState<string | null>(null);
  const [start, end] = chapterRange;
  const touchStartRef = useRef<{ x: number; y: number } | null>(null);
  const skipTapRef = useRef(false);

  const filteredCards = useMemo(() => {
    return start === 0 ? socioFlashcards : socioFlashcards.filter(c => c.chapter >= start && c.chapter <= end);
  }, [start, end]);

  const card = filteredCards[currentIndex];

  useEffect(() => {
    setCurrentIndex(0);
    setIsFlipped(false);
  }, [start, end]);

  const goNext = useCallback(() => {
    setAnimDir(1);
    setCurrentIndex(i => (i < filteredCards.length - 1 ? i + 1 : i));
    setIsFlipped(false);
  }, [filteredCards.length]);

  const goPrev = useCallback(() => {
    setAnimDir(-1);
    setCurrentIndex(i => (i > 0 ? i - 1 : i));
    setIsFlipped(false);
  }, []);

  const toggleFlip = useCallback(() => setIsFlipped(f => !f), []);

  const markCard = useCallback((status: 'known' | 'unknown') => {
    if (!card) return;
    setProgress(prev => ({ ...prev, [card.id]: status }));
    setIsFlipped(false);
    skipTapRef.current = true;
    setAnimDir(1);
    setCurrentIndex(i => Math.min(i + 1, filteredCards.length - 1));
    if (status === 'known') {
      const msgs = ['Nailed it! 🎯', 'Keep going! 🔥', 'You got this! 💪', 'Known! ✨', 'Smart move! 🧠'];
      setCelebration(msgs[Math.floor(Math.random() * msgs.length)]);
      setTimeout(() => setCelebration(null), 1200);
    }
  }, [card, setProgress, filteredCards.length]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') goNext();
      else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') goPrev();
      else if (e.key === ' ' || e.key === 'Enter') { e.preventDefault(); toggleFlip(); }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [goNext, goPrev, toggleFlip]);

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    const touch = e.touches[0];
    touchStartRef.current = { x: touch.clientX, y: touch.clientY };
  }, []);

  const handleCardTouchEnd = useCallback((e: React.TouchEvent) => {
    if (!touchStartRef.current) return;
    const touch = e.changedTouches[0];
    const dx = touch.clientX - touchStartRef.current.x;
    const dy = touch.clientY - touchStartRef.current.y;
    touchStartRef.current = null;

    if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 50) {
      skipTapRef.current = true;
      if (dx < 0) goNext(); else goPrev();
      return;
    }
    if (skipTapRef.current) { skipTapRef.current = false; return; }
    toggleFlip();
  }, [goNext, goPrev, toggleFlip]);

  const handleCardTap = useCallback(() => {
    if (skipTapRef.current) { skipTapRef.current = false; return; }
    toggleFlip();
  }, [toggleFlip]);

  if (!card) {
    return (
      <div className="flex flex-col items-center justify-center h-full gap-4 px-6 animate-pop-in">
        <div className="text-6xl animate-celebrate">🎉</div>
        <p className="text-white text-center text-lg font-bold">
          No cards for this chapter.
        </p>
        <p className="text-zinc-500 text-center text-xs">
          Try selecting a different chapter range.
        </p>
      </div>
    );
  }

  const total = filteredCards.length;
  const knownCount = filteredCards.filter(c => progress[c.id] === 'known').length;
  const progressPct = total > 0 ? (knownCount / total) * 100 : 0;
  const slideClass = animDir === 1 ? 'card-slide-left' : 'card-slide-right';

  return (
    <div className="flex flex-col h-full px-4 pt-2 pb-2 gap-2 relative">
      {/* Header */}
      <div className="flex items-center justify-between shrink-0">
        <div className="flex items-center gap-2">
          <span className="text-zinc-500 text-xs font-mono">{currentIndex + 1}/{total}</span>
          <span className="text-zinc-600 text-[10px]">•</span>
          <span className="text-teal-500 text-[10px] font-semibold">{knownCount} known</span>
        </div>
      </div>

      {/* Progress */}
      <div className="w-full h-1 bg-zinc-800 rounded-full overflow-hidden shrink-0">
        <div
          className="h-full bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full transition-all duration-700 ease-out"
          style={{ width: `${progressPct}%` }}
        />
      </div>

      {/* Card */}
      <div
        className={`flex-1 min-h-0 flip-card ${slideClass}`}
        key={`card-${currentIndex}`}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleCardTouchEnd}
        onClick={handleCardTap}
      >
        <div className={`flip-card-inner ${isFlipped ? 'flipped' : ''}`}>
          {/* Front */}
          <div className="flip-card-front bg-gradient-to-br from-teal-600 via-teal-500 to-cyan-600 p-4 sm:p-5 flex flex-col shadow-xl">
            <div className="flex items-center gap-1.5 mb-2 flex-wrap shrink-0">
              <span className="pill border text-[10px] bg-teal-500/20 text-teal-300 border-teal-500/30">
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

            <p className="text-white/70 text-sm leading-relaxed line-clamp-4 sm:line-clamp-3 flex-1">
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
              <span className="pill border text-[10px] bg-teal-500/20 text-teal-300 border-teal-500/30">
                Ch {card.chapter}
              </span>
              <span className="text-zinc-500 text-[10px] font-semibold">KEY POINTS</span>
            </div>

            <h4 className="text-white font-bold text-base mb-2 shrink-0">{card.term}</h4>

            <ul className="space-y-1.5 mb-3">
              {card.keyPoints.map((point, i) => (
                <li key={i} className="flex gap-2 text-[13px] text-zinc-300">
                  <span className="text-teal-400 mt-0.5 shrink-0">•</span>
                  <span className="leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>

            {card.example && (
              <div className="mt-auto p-3 rounded-xl bg-teal-500/10 border border-teal-500/20 shrink-0">
                <p className="text-[10px] font-bold text-teal-400 mb-1">EXAMPLE</p>
                <p className="text-[13px] text-zinc-300 leading-relaxed">{card.example}</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Celebration Toast */}
      {celebration && (
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 z-50 animate-celebrate">
          <div className="px-4 py-2 rounded-2xl bg-teal-500/20 border border-teal-500/30 backdrop-blur-sm">
            <p className="text-teal-300 text-sm font-bold whitespace-nowrap">{celebration}</p>
          </div>
        </div>
      )}

      {/* Buttons */}
      <div
        className="flex gap-2 shrink-0"
        onTouchStart={e => e.stopPropagation()}
        onTouchEnd={e => e.stopPropagation()}
        onClick={e => e.stopPropagation()}
      >
        <button
          onClick={() => markCard('unknown')}
          className="flex-1 py-3 rounded-xl bg-rose-500/10 border border-rose-500/25 text-rose-400 font-bold text-sm active:bg-rose-500/20 active:scale-95 transition-all duration-100"
        >
          Don't Know
        </button>
        <button
          onClick={goPrev}
          disabled={currentIndex === 0}
          className="flex items-center gap-1.5 px-3 py-3 rounded-xl bg-zinc-800/50 border border-zinc-700/40 text-zinc-300 font-semibold text-xs disabled:opacity-20 active:bg-zinc-700/50 active:scale-95 transition-all duration-100"
        >
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
          Back
        </button>
        <button
          onClick={() => markCard('known')}
          className="flex-1 py-3 rounded-xl bg-teal-500/10 border border-teal-500/25 text-teal-400 font-bold text-sm active:bg-teal-500/20 active:scale-95 transition-all duration-100"
        >
          Know ✓
        </button>
      </div>
    </div>
  );
}
