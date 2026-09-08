import { useState, useCallback } from 'react';
import { quizQuestions, type QuizQuestion } from '../data/quiz';
import { useLocalStorage } from '../hooks/useLocalStorage';

interface Props {
  chapterRange: [number, number];
}

export function Quiz({ chapterRange }: Props) {
  const [bestScore, setBestScore] = useLocalStorage<number>('psych-quiz-best', 0);
  const [started, setStarted] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [answered, setAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [completed, setCompleted] = useState(false);
  const [history, setHistory] = useState<{ qId: string; correct: boolean }[]>([]);
  const [startCh, endCh] = chapterRange;

  const questions = startCh === 0
    ? quizQuestions
    : quizQuestions.filter(q => q.chapter >= startCh && q.chapter <= endCh);

  const q = questions[currentIndex];

  const start = () => { setStarted(true); setCompleted(false); setCurrentIndex(0); setScore(0); setHistory([]); setSelected(null); setAnswered(false); };

  const handleAnswer = useCallback((idx: number) => {
    if (answered) return;
    setSelected(idx);
    setAnswered(true);
    const correct = idx === q.correct;
    if (correct) setScore(s => s + 1);
    setHistory(h => [...h, { qId: q.id, correct }]);
  }, [answered, q]);

  const next = useCallback(() => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(i => i + 1);
      setSelected(null);
      setAnswered(false);
    } else {
      if (score > bestScore) setBestScore(score);
      setCompleted(true);
    }
  }, [currentIndex, questions.length, score, bestScore, setBestScore]);

  if (!started) {
    return (
      <div className="h-full flex flex-col items-center justify-center px-6 gap-5">
        <div className="text-5xl">⚡</div>
        <div className="text-center">
          <h2 className="text-white text-lg font-bold mb-1">Mock Quiz</h2>
          <p className="text-zinc-500 text-sm leading-relaxed">
            {questions.length} questions from all chapters.
            <br />Includes MCQs, Assertion-Reason, and Case Studies.
          </p>
        </div>
        {bestScore > 0 && (
          <p className="text-zinc-600 text-xs">Best score: {bestScore}/{questions.length}</p>
        )}
        <button
          onClick={start}
          className="px-8 py-3 rounded-xl bg-indigo-600 text-white font-bold text-sm active:scale-95 transition-all shadow-lg shadow-indigo-500/20"
        >
          Start Quiz
        </button>
      </div>
    );
  }

  if (!q && !completed) {
    return (
      <div className="flex flex-col items-center justify-center h-full gap-4 px-6">
        <div className="text-4xl">📝</div>
        <p className="text-zinc-400 text-center text-sm">No questions for this chapter yet.</p>
        <button onClick={() => setStarted(false)} className="text-indigo-400 text-sm font-semibold">Go back</button>
      </div>
    );
  }

  if (completed) {
    const pct = questions.length > 0 ? Math.round((score / questions.length) * 100) : 0;
    const emoji = pct >= 80 ? '🎉' : pct >= 50 ? '👍' : '📚';
    return (
      <div className="h-full flex flex-col items-center justify-center px-6 gap-4">
        <div className="text-5xl">{emoji}</div>
        <div className="text-center">
          <p className="text-white font-bold text-2xl">{score}/{questions.length}</p>
          <p className="text-zinc-500 text-sm mt-0.5">{pct}% correct</p>
        </div>

        {/* Review */}
        <div className="w-full max-h-32 overflow-y-auto no-scrollbar space-y-1">
          {history.map((h, i) => (
            <div key={i} className={`flex items-center gap-2 text-[11px] px-2 py-1 rounded-lg ${h.correct ? 'text-emerald-400' : 'text-rose-400'}`}>
              <span className="w-4 text-center">{h.correct ? '✓' : '✗'}</span>
              <span className="text-zinc-500">Q{i + 1}</span>
            </div>
          ))}
        </div>

        <div className="flex gap-3">
          <button
            onClick={start}
            className="px-6 py-2.5 rounded-xl bg-zinc-800 text-zinc-300 font-semibold text-sm active:scale-95 transition-all"
          >
            Try Again
          </button>
          <button
            onClick={() => setStarted(false)}
            className="px-6 py-2.5 rounded-xl bg-indigo-600 text-white font-semibold text-sm active:scale-95 transition-all"
          >
            Done
          </button>
        </div>
      </div>
    );
  }

  const typeLabel = q.type === 'assertion-reason' ? 'A-R' : q.type === 'case-study' ? 'Case' : 'MCQ';
  const typeColor = q.type === 'assertion-reason' ? 'bg-amber-500/15 text-amber-300 border-amber-500/20'
    : q.type === 'case-study' ? 'bg-cyan-500/15 text-cyan-300 border-cyan-500/20'
    : 'bg-indigo-500/15 text-indigo-300 border-indigo-500/20';

  return (
    <div className="flex flex-col h-full px-4 pt-2 pb-3 gap-2.5">
      {/* Header */}
      <div className="flex items-center justify-between shrink-0">
        <div className="flex items-center gap-2">
          <span className="text-zinc-500 text-xs font-mono">{currentIndex + 1}/{questions.length}</span>
          <span className={`pill border text-[9px] ${typeColor}`}>{typeLabel}</span>
        </div>
        <button onClick={() => setStarted(false)} className="text-zinc-600 text-[10px] font-semibold">Exit</button>
      </div>

      {/* Progress */}
      <div className="w-full h-1 bg-zinc-800 rounded-full overflow-hidden shrink-0">
        <div
          className="h-full bg-gradient-to-r from-indigo-500 to-violet-500 rounded-full transition-all duration-500"
          style={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}
        />
      </div>

      {/* Question Area */}
      <div className="flex-1 min-h-0 overflow-y-auto no-scrollbar">
        {/* Case context */}
        {q.context && (
          <div className="p-3 rounded-xl bg-zinc-900/60 border border-zinc-800/30 mb-3">
            <p className="text-[10px] font-semibold text-zinc-500 uppercase tracking-wide mb-1">Case Study</p>
            <p className="text-[13px] text-zinc-300 leading-relaxed">{q.context}</p>
          </div>
        )}

        {/* A-R */}
        {q.type === 'assertion-reason' && q.context && (
          <div className="p-3 rounded-xl bg-zinc-900/60 border border-zinc-800/30 mb-3">
            <p className="text-[10px] font-semibold text-zinc-500 uppercase tracking-wide mb-1">Assertion & Reason</p>
            <p className="text-[13px] text-zinc-300 leading-relaxed whitespace-pre-line">{q.context}</p>
          </div>
        )}

        {/* Question text */}
        {q.question && (
          <p className="text-white text-[15px] font-semibold leading-snug mb-3">{q.question}</p>
        )}

        {/* Options */}
        <div className="space-y-2">
          {q.options.map((opt, idx) => {
            const isSelected = selected === idx;
            const isCorrect = idx === q.correct;
            const showResult = answered;

            let style = 'bg-zinc-900/50 border border-zinc-800/30 text-zinc-300';
            if (showResult) {
              if (isCorrect) style = 'bg-emerald-500/10 border border-emerald-500/25 text-emerald-300';
              else if (isSelected) style = 'bg-rose-500/10 border border-rose-500/25 text-rose-300';
              else style = 'bg-zinc-900/30 border border-zinc-800/20 text-zinc-600';
            } else if (isSelected) {
              style = 'bg-indigo-600 border border-indigo-500 text-white';
            }

            return (
              <button
                key={idx}
                onClick={() => handleAnswer(idx)}
                disabled={answered}
                className={`w-full text-left p-3 rounded-xl text-[13px] font-medium transition-all leading-relaxed active:scale-[0.98] disabled:active:scale-100 ${style}`}
              >
                <span className="flex items-center gap-2.5">
                  <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold shrink-0 ${
                    showResult && isCorrect ? 'bg-emerald-500 text-white' :
                    showResult && isSelected ? 'bg-rose-500 text-white' :
                    'bg-zinc-800 text-zinc-500'
                  }`}>
                    {showResult && isCorrect ? '✓' : showResult && isSelected ? '✗' : String.fromCharCode(65 + idx)}
                  </span>
                  {opt}
                </span>
              </button>
            );
          })}
        </div>

        {/* Rationale */}
        {answered && (
          <div className="mt-3 p-3 rounded-xl bg-indigo-500/5 border border-indigo-500/15">
            <p className="text-[10px] font-semibold text-indigo-400 uppercase tracking-wide mb-1">Explanation</p>
            <p className="text-[12px] text-zinc-400 leading-relaxed">{q.rationale}</p>
          </div>
        )}
      </div>

      {/* Next */}
      {answered && (
        <button
          onClick={next}
          className="w-full py-3 rounded-xl bg-indigo-600 text-white font-bold text-sm active:scale-95 transition-all shadow-lg shadow-indigo-500/20 shrink-0"
        >
          {currentIndex < questions.length - 1 ? 'Next →' : 'See Results'}
        </button>
      )}
    </div>
  );
}
