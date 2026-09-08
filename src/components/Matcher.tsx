import { useState, useCallback, useMemo, useEffect } from 'react';
import { matcherPairs } from '../data/matcher';
import { useLocalStorage } from '../hooks/useLocalStorage';

interface Props {
  chapterRange: [number, number];
}

interface MatchResult {
  theorist: string;
  theory: string;
  correct: boolean;
}

function shuffleArray<T>(arr: T[]): T[] {
  const shuffled = [...arr];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export function Matcher({ chapterRange }: Props) {
  const [bestScore, setBestScore] = useLocalStorage<number>('psych-matcher-best', 0);
  const [selectedTheorist, setSelectedTheorist] = useState<string | null>(null);
  const [selectedTheory, setSelectedTheory] = useState<string | null>(null);
  const [matched, setMatched] = useState<Record<string, boolean>>({});
  const [wrongPair, setWrongPair] = useState<string | null>(null);
  const [results, setResults] = useState<MatchResult[]>([]);
  const [gameComplete, setGameComplete] = useState(false);
  const [processing, setProcessing] = useState(false);
  const [start, end] = chapterRange;

  const pairs = useMemo(() => {
    return start === 0 ? matcherPairs : matcherPairs.filter(p => p.chapter >= start && p.chapter <= end);
  }, [start, end]);

  const shuffledTheorists = useMemo(() => shuffleArray(pairs.map(p => p.theorist)), [pairs]);
  const shuffledTheories = useMemo(() => shuffleArray(pairs.map(p => p.theory)), [pairs]);

  const correctPairs = useMemo(() => {
    const map: Record<string, string> = {};
    pairs.forEach(p => { map[p.theorist] = p.theory; });
    return map;
  }, [pairs]);

  useEffect(() => {
    if (!selectedTheorist || !selectedTheory || processing || gameComplete) return;

    setProcessing(true);
    const isCorrect = correctPairs[selectedTheorist] === selectedTheory;

    const timer = setTimeout(() => {
      if (isCorrect) {
        setMatched(prev => ({
          ...prev,
          [`t_${selectedTheorist}`]: true,
          [`th_${selectedTheory}`]: true,
        }));
        setResults(prev => [...prev, { theorist: selectedTheorist, theory: selectedTheory, correct: true }]);
      } else {
        setWrongPair(`${selectedTheorist}-${selectedTheory}`);
        setResults(prev => [...prev, { theorist: selectedTheorist, theory: selectedTheory, correct: false }]);
        setTimeout(() => setWrongPair(null), 600);
      }
      setSelectedTheorist(null);
      setSelectedTheory(null);
      setProcessing(false);
    }, 350);

    return () => clearTimeout(timer);
  }, [selectedTheorist, selectedTheory, processing, gameComplete, correctPairs]);

  useEffect(() => {
    const matchedCount = Object.keys(matched).filter(k => k.startsWith('t_')).length;
    if (matchedCount >= pairs.length && pairs.length > 0 && !gameComplete) {
      const score = results.filter(r => r.correct).length;
      if (score > bestScore) setBestScore(score);
      setGameComplete(true);
    }
  }, [matched, pairs.length, gameComplete, results, bestScore, setBestScore]);

  const handleSelect = useCallback((type: 'theorist' | 'theory', value: string) => {
    if (processing || gameComplete) return;
    const key = type === 'theorist' ? `t_${value}` : `th_${value}`;
    if (matched[key]) return;

    if (type === 'theorist') {
      setSelectedTheorist(prev => prev === value ? null : value);
    } else {
      setSelectedTheory(prev => prev === value ? null : value);
    }
  }, [matched, processing, gameComplete]);

  const reset = () => {
    setMatched({});
    setSelectedTheorist(null);
    setSelectedTheory(null);
    setResults([]);
    setGameComplete(false);
    setProcessing(false);
    setWrongPair(null);
  };

  const matchedCount = Object.keys(matched).filter(k => k.startsWith('t_')).length;
  const score = results.filter(r => r.correct).length;

  return (
    <div className="flex flex-col h-full px-4 pt-2 pb-4 gap-3">
      <div className="flex items-center justify-between shrink-0 animate-slide-down">
        <div className="text-xs text-zinc-500">
          Matched: <span className="text-zinc-300 font-semibold">{matchedCount}/{pairs.length}</span>
          {bestScore > 0 && <span className="ml-2 text-amber-500/80">Best: {bestScore}</span>}
        </div>
        <button
          onClick={reset}
          className="px-3 py-1 rounded-lg text-[10px] font-semibold bg-zinc-800/50 text-zinc-400 border border-zinc-700/40 active:scale-95 transition-all"
        >
          Reset
        </button>
      </div>

      <div className="w-full h-1 bg-zinc-800 rounded-full overflow-hidden shrink-0">
        <div
          className="h-full bg-gradient-to-r from-violet-500 to-indigo-500 rounded-full transition-all duration-500"
          style={{ width: `${(matchedCount / pairs.length) * 100}%` }}
        />
      </div>

      {matchedCount === 0 && !processing && (
        <p className="text-zinc-600 text-[10px] text-center shrink-0 animate-fade-in">Tap a theorist, then tap their theory →</p>
      )}

      {gameComplete ? (
        <div className="flex-1 flex flex-col items-center justify-center gap-4 animate-pop-in">
          <div className="text-5xl animate-confetti">{score === pairs.length ? '🏆' : '🧠'}</div>
          <p className="text-white font-bold text-xl">{score}/{pairs.length}</p>
          <p className="text-zinc-400 text-sm">
            {score === pairs.length ? 'Perfect match!' : 'Good effort — try again!'}
          </p>
          <button onClick={reset} className="px-6 py-3 rounded-xl bg-indigo-600 text-white font-bold text-sm active:scale-95 transition-all">
            Play Again
          </button>
        </div>
      ) : (
        <div className="flex-1 flex gap-3 min-h-0">
          <div className="flex-1 flex flex-col gap-1.5 overflow-y-auto no-scrollbar">
            <p className="text-center text-[10px] font-bold text-indigo-400 uppercase tracking-wider mb-0.5">Theorist</p>
            {shuffledTheorists.map((t, i) => {
              const isSelected = selectedTheorist === t;
              const isMatched = matched[`t_${t}`];
              const isWrong = wrongPair?.startsWith(t);
              return (
                <button
                  key={t}
                  onClick={() => handleSelect('theorist', t)}
                  disabled={isMatched}
                  className={`p-2 rounded-xl text-[11px] font-semibold text-left transition-all duration-150 animate-slide-up stagger-${Math.min(i + 1, 7)} ${
                    isMatched
                      ? 'bg-emerald-500/10 border border-emerald-500/20 text-emerald-400/60'
                      : isSelected
                      ? 'bg-indigo-600 border border-indigo-500 text-white shadow-md shadow-indigo-500/20'
                      : isWrong
                      ? 'bg-rose-500/15 border border-rose-500/30 text-rose-300'
                      : 'bg-zinc-800/40 border border-zinc-700/30 text-zinc-300 active:bg-zinc-700/50 active:scale-[0.97]'
                  }`}
                >
                  {isMatched && <span className="text-emerald-400 mr-1">✓</span>}{t}
                </button>
              );
            })}
          </div>

          <div className="flex-1 flex flex-col gap-1.5 overflow-y-auto no-scrollbar">
            <p className="text-center text-[10px] font-bold text-violet-400 uppercase tracking-wider mb-0.5">Theory</p>
            {shuffledTheories.map((t, i) => {
              const isSelected = selectedTheory === t;
              const isMatched = matched[`th_${t}`];
              const isWrong = wrongPair?.includes(t);
              return (
                <button
                  key={t}
                  onClick={() => handleSelect('theory', t)}
                  disabled={isMatched}
                  className={`p-2 rounded-xl text-[11px] font-semibold text-left transition-all duration-150 leading-snug animate-slide-up stagger-${Math.min(i + 1, 7)} ${
                    isMatched
                      ? 'bg-emerald-500/10 border border-emerald-500/20 text-emerald-400/60'
                      : isSelected
                      ? 'bg-violet-600 border border-violet-500 text-white shadow-md shadow-violet-500/20'
                      : isWrong
                      ? 'bg-rose-500/15 border border-rose-500/30 text-rose-300'
                      : 'bg-zinc-800/40 border border-zinc-700/30 text-zinc-300 active:bg-zinc-700/50 active:scale-[0.97]'
                  }`}
                >
                  {isMatched && <span className="text-emerald-400 mr-1">✓</span>}{t}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
