import { useState, useCallback, useMemo, useEffect } from 'react';
import { hindiQuizQuestions, type HindiQuizQuestion } from '../../data/hindi/quiz';
import { useLocalStorage } from '../../hooks/useLocalStorage';

const CHAPTERS = [
  { num: 0, label: 'All' },
  { num: 1, label: 'Ch1' }, { num: 2, label: 'Ch2' }, { num: 3, label: 'Ch3' },
  { num: 4, label: 'Ch4' }, { num: 5, label: 'Ch5' }, { num: 6, label: 'Ch6' },
  { num: 7, label: 'Ch7' }, { num: 8, label: 'Ch8' }, { num: 9, label: 'Ch9' },
  { num: 10, label: 'Ch10' }, { num: 11, label: 'Ch11' }, { num: 12, label: 'Ch12' },
  { num: 13, label: 'Ch13' }, { num: 14, label: 'Ch14' }, { num: 15, label: 'Ch15' },
  { num: 16, label: 'V1' }, { num: 17, label: 'V2' }, { num: 18, label: 'V3' },
];

export function HindiQuiz({ chapterRange }: { chapterRange: [number, number] }) {
  const [bestScore, setBestScore] = useLocalStorage<number>('hindi-quiz-best', 0);
  const [selectedChapter, setSelectedChapter] = useState(chapterRange[0] || 0);
  const [started, setStarted] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [answered, setAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [completed, setCompleted] = useState(false);
  const [history, setHistory] = useState<{ qId: string; correct: boolean }[]>([]);

  // Sync with parent prop when it changes
  useEffect(() => {
    if (chapterRange[0] !== 0) setSelectedChapter(chapterRange[0]);
  }, [chapterRange[0]]);

  const questions = useMemo(() =>
    selectedChapter === 0 ? hindiQuizQuestions : hindiQuizQuestions.filter(q => q.chapter === selectedChapter),
    [selectedChapter]
  );

  const q = questions[currentIndex];

  const chapterLabel = useMemo(() => {
    if (selectedChapter === 0) return 'All chapters';
    return `Chapter ${selectedChapter}`;
  }, [selectedChapter]);

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
      <div className="h-full flex flex-col items-center justify-center px-6 gap-5 animate-slide-up">
        <div className="text-5xl animate-pop-in">⚡</div>
        <div className="text-center">
          <h2 className="text-white text-lg font-bold mb-1">Hindi Quiz</h2>
          <p className="text-zinc-500 text-sm leading-relaxed">
            {chapterLabel} — {questions.length} questions.
            <br />MCQ, assertion-reason, and passage-based.
          </p>
        </div>

        {/* Chapter Picker */}
        <div className="w-full max-w-xs">
          <div className="flex gap-1 overflow-x-auto no-scrollbar justify-center">
            {CHAPTERS.map(ch => {
              const isActive = selectedChapter === ch.num;
              return (
                <button
                  key={ch.num}
                  onClick={() => { setSelectedChapter(ch.num); setStarted(false); }}
                  className={`px-2.5 py-1.5 rounded-lg text-[10px] font-bold whitespace-nowrap transition-all shrink-0 ${
                    isActive
                      ? 'bg-rose-600 text-white shadow-lg shadow-rose-500/25'
                      : 'bg-zinc-800/50 text-zinc-500 border border-zinc-700/40 active:bg-zinc-700/50'
                  }`}
                >
                  {ch.label}
                </button>
              );
            })}
          </div>
        </div>

        {bestScore > 0 && (
          <p className="text-zinc-600 text-xs">Best score: {bestScore}/{questions.length}</p>
        )}
        <button
          onClick={start}
          className="px-8 py-3 rounded-xl bg-rose-600 text-white font-bold text-sm active:scale-95 transition-all shadow-lg shadow-rose-500/20"
        >
          Start Quiz
        </button>
      </div>
    );
  }

  if (!q && !completed) {
    return (
      <div className="flex flex-col items-center justify-center h-full gap-4 px-6 animate-fade-in">
        <div className="text-4xl">📝</div>
        <p className="text-zinc-400 text-center text-sm">इस पाठ के लिए अभी कोई प्रश्न नहीं।</p>
        <button onClick={() => setStarted(false)} className="text-rose-400 text-sm font-semibold">वापस जाएँ</button>
      </div>
    );
  }

  if (completed) {
    const pct = questions.length > 0 ? Math.round((score / questions.length) * 100) : 0;
    const emoji = pct >= 80 ? '🎉' : pct >= 50 ? '👍' : '📚';
    return (
      <div className="h-full flex flex-col items-center justify-center px-6 gap-4 animate-slide-up">
        <div className="text-5xl animate-confetti">{emoji}</div>
        <div className="text-center">
          <p className="text-white font-bold text-2xl">{score}/{questions.length}</p>
          <p className="text-zinc-500 text-sm mt-0.5">{pct}% सही</p>
        </div>

        <div className="w-full max-h-32 overflow-y-auto no-scrollbar space-y-1">
          {history.map((h, i) => (
            <div key={i} className={`flex items-center gap-2 text-[11px] px-2 py-1 rounded-lg animate-fade-in stagger-${Math.min(i + 1, 7)} ${h.correct ? 'text-emerald-400' : 'text-rose-400'}`}>
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
            फिर से कोशिश करें
          </button>
          <button
            onClick={() => setStarted(false)}
            className="px-6 py-2.5 rounded-xl bg-rose-600 text-white font-semibold text-sm active:scale-95 transition-all"
          >
            समाप्त
          </button>
        </div>
      </div>
    );
  }

  const typeLabel = q.type === 'assertion-reason' ? 'कथन-कारण' : q.type === 'passage' ? 'गद्य' : 'MCQ';
  const typeColor = q.type === 'assertion-reason' ? 'bg-amber-500/15 text-amber-300 border-amber-500/20'
    : q.type === 'passage' ? 'bg-cyan-500/15 text-cyan-300 border-cyan-500/20'
    : 'bg-rose-500/15 text-rose-300 border-rose-500/20';

  return (
    <div className="flex flex-col h-full px-4 pt-2 pb-3 gap-2.5">
      <div className="flex items-center justify-between shrink-0">
        <div className="flex items-center gap-2">
          <span className="text-zinc-500 text-xs font-mono">{currentIndex + 1}/{questions.length}</span>
          <span className={`pill border text-[9px] ${typeColor}`}>{typeLabel}</span>
        </div>
        <button onClick={() => setStarted(false)} className="text-zinc-600 text-[10px] font-semibold">बाहर</button>
      </div>

      <div className="w-full h-1 bg-zinc-800 rounded-full overflow-hidden shrink-0">
        <div
          className="h-full bg-gradient-to-r from-rose-500 to-pink-500 rounded-full transition-all duration-500"
          style={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}
        />
      </div>

      <div className="flex-1 min-h-0 overflow-y-auto no-scrollbar" key={currentIndex}>
        <div className="animate-fade-in">
          {q.passage && q.type === 'passage' && (
            <div className="p-3 rounded-xl bg-zinc-900/60 border border-zinc-800/30 mb-3">
              <p className="text-[10px] font-semibold text-zinc-500 uppercase tracking-wide mb-1">गद्य प्रश्न</p>
              <p className="text-[13px] text-zinc-300 leading-relaxed whitespace-pre-line">{q.passage}</p>
            </div>
          )}

          {q.type === 'assertion-reason' && q.passage && (
            <div className="p-3 rounded-xl bg-zinc-900/60 border border-zinc-800/30 mb-3">
              <p className="text-[10px] font-semibold text-zinc-500 uppercase tracking-wide mb-1">कथन और कारण</p>
              <p className="text-[13px] text-zinc-300 leading-relaxed whitespace-pre-line">{q.passage}</p>
            </div>
          )}

          {q.question && (
            <p className="text-white text-[15px] font-semibold leading-snug mb-3">{q.question}</p>
          )}

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
                style = 'bg-rose-600 border border-rose-500 text-white';
              }

              return (
                <button
                  key={idx}
                  onClick={() => handleAnswer(idx)}
                  disabled={answered}
                  className={`w-full text-left p-3 rounded-xl text-[13px] font-medium transition-all leading-relaxed active:scale-[0.98] disabled:active:scale-100 animate-slide-up stagger-${Math.min(idx + 1, 7)} ${style}`}
                >
                  <span className="flex items-center gap-2.5">
                    <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold shrink-0 transition-colors ${
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

          {answered && (
            <div className="mt-3 p-3 rounded-xl bg-rose-500/5 border border-rose-500/15 animate-slide-up">
              <p className="text-[10px] font-semibold text-rose-400 uppercase tracking-wide mb-1">व्याख्या</p>
              <p className="text-[12px] text-zinc-400 leading-relaxed">{q.rationale}</p>
            </div>
          )}
        </div>
      </div>

      {answered && (
        <button
          onClick={next}
          className="w-full py-3 rounded-xl bg-rose-600 text-white font-bold text-sm active:scale-95 transition-all shadow-lg shadow-rose-500/20 shrink-0 animate-slide-up"
        >
          {currentIndex < questions.length - 1 ? 'अगला →' : 'परिणाम देखें'}
        </button>
      )}
    </div>
  );
}
