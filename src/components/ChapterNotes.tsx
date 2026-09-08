import { useState } from 'react';
import { chapterNotes } from '../data/glossary';

const CHAPTERS = [
  { num: 1, label: 'Ch 1' },
  { num: 2, label: 'Ch 2' },
  { num: 3, label: 'Ch 3' },
  { num: 4, label: 'Ch 4' },
  { num: 5, label: 'Ch 5' },
  { num: 6, label: 'Ch 6' },
  { num: 7, label: 'Ch 7' },
];

const colorMap: Record<string, { pill: string; border: string }> = {
  indigo: { pill: 'bg-indigo-500/15 text-indigo-300 border-indigo-500/20', border: 'border-indigo-500/10' },
  rose: { pill: 'bg-rose-500/15 text-rose-300 border-rose-500/20', border: 'border-rose-500/10' },
  emerald: { pill: 'bg-emerald-500/15 text-emerald-300 border-emerald-500/20', border: 'border-emerald-500/10' },
  amber: { pill: 'bg-amber-500/15 text-amber-300 border-amber-500/20', border: 'border-amber-500/10' },
  cyan: { pill: 'bg-cyan-500/15 text-cyan-300 border-cyan-500/20', border: 'border-cyan-500/10' },
  fuchsia: { pill: 'bg-fuchsia-500/15 text-fuchsia-300 border-fuchsia-500/20', border: 'border-fuchsia-500/10' },
  lime: { pill: 'bg-lime-500/15 text-lime-300 border-lime-500/20', border: 'border-lime-500/10' },
};

export function ChapterNotes() {
  const [selectedChapter, setSelectedChapter] = useState(1);
  const [expanded, setExpanded] = useState<number | null>(null);

  const notes = chapterNotes.filter(n => n.chapter === selectedChapter);

  return (
    <div className="flex flex-col h-full px-4 pt-2 pb-4 gap-2">
      <div className="flex gap-1.5 overflow-x-auto no-scrollbar shrink-0 animate-slide-down">
        {CHAPTERS.map(ch => (
          <button
            key={ch.num}
            onClick={() => { setSelectedChapter(ch.num); setExpanded(null); }}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all shrink-0 ${
              selectedChapter === ch.num
                ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/25'
                : 'bg-zinc-800/50 text-zinc-400 border border-zinc-700/50 active:bg-zinc-700/50'
            }`}
          >
            {ch.label}
          </button>
        ))}
      </div>

      <p className="text-zinc-600 text-[10px] shrink-0">Key points — tap to expand</p>

      <div className="flex-1 min-h-0 overflow-y-auto no-scrollbar space-y-2" key={selectedChapter}>
        <div className="animate-fade-in">
          {notes.map(n => {
            const isOpen = expanded === n.chapter;
            const c = colorMap[n.color];
            return (
              <div key={n.chapter} className={`rounded-xl border overflow-hidden transition-all ${c.border} ${isOpen ? 'bg-zinc-900/40' : 'bg-zinc-900/20'}`}>
                <button
                  onClick={() => setExpanded(isOpen ? null : n.chapter)}
                  className="w-full flex items-center gap-2.5 p-3 text-left active:bg-zinc-800/20 transition-colors"
                >
                  <span className={`pill border text-[9px] shrink-0 ${c.pill}`}>
                    {n.marks}M
                  </span>
                  <span className="text-white text-[13px] font-semibold flex-1 truncate">{n.title}</span>
                  <svg
                    className={`w-3.5 h-3.5 text-zinc-600 shrink-0 transition-transform ${isOpen ? 'rotate-90' : ''}`}
                    fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </button>

                {isOpen && (
                  <div className="px-3 pb-3 border-t border-zinc-800/20 animate-slide-up">
                    <ul className="space-y-1.5 mt-2.5">
                      {n.keyPoints.map((point, i) => (
                        <li key={i} className="flex gap-2 text-[12px] text-zinc-400">
                          <span className="text-zinc-600 mt-0.5 shrink-0">•</span>
                          <span className="leading-relaxed">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
