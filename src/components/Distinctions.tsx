import { useState } from 'react';
import { distinctions } from '../data/distinctions';

const CHAPTERS = [
  { num: 1, label: 'Ch 1' },
  { num: 2, label: 'Ch 2' },
  { num: 3, label: 'Ch 3' },
  { num: 4, label: 'Ch 4' },
  { num: 6, label: 'Ch 6' },
];

export function Distinctions() {
  const [selectedChapter, setSelectedChapter] = useState(1);
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const filtered = distinctions.filter(d => d.chapter === selectedChapter);

  return (
    <div className="flex flex-col h-full px-4 pt-2 pb-4 gap-2">
      <div className="flex gap-1.5 overflow-x-auto no-scrollbar shrink-0 animate-slide-down">
        {CHAPTERS.map(ch => (
          <button
            key={ch.num}
            onClick={() => { setSelectedChapter(ch.num); setExpandedId(null); }}
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

      <p className="text-zinc-600 text-[10px] shrink-0">{filtered.length} comparisons — tap to expand</p>

      <div className="flex-1 min-h-0 overflow-y-auto no-scrollbar space-y-2" key={selectedChapter}>
        <div className="animate-fade-in">
          {filtered.map(d => {
            const isOpen = expandedId === d.id;
            return (
              <div key={d.id} className="rounded-xl border border-zinc-800/30 overflow-hidden bg-zinc-900/30">
                <button
                  onClick={() => setExpandedId(isOpen ? null : d.id)}
                  className="w-full flex items-center gap-2 p-3 text-left active:bg-zinc-800/30 transition-colors"
                >
                  <span className="text-white text-[13px] font-semibold flex-1 truncate">{d.title}</span>
                  <svg
                    className={`w-3.5 h-3.5 text-zinc-600 shrink-0 transition-transform ${isOpen ? 'rotate-90' : ''}`}
                    fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </button>

                {isOpen && (
                  <div className="border-t border-zinc-800/30 animate-slide-up">
                    <div className="grid grid-cols-[auto_1fr_1fr] text-[11px]">
                      <div className="p-2" />
                      <div className="p-2 font-semibold text-indigo-400 text-[10px] uppercase tracking-wide">Option A</div>
                      <div className="p-2 font-semibold text-violet-400 text-[10px] uppercase tracking-wide">Option B</div>
                      {d.rows.map((row, i) => (
                        <div key={i} className="contents">
                          <div className={`p-2 text-zinc-500 font-medium border-t border-zinc-800/20 ${i % 2 === 0 ? 'bg-zinc-900/20' : ''}`}>{row.label}</div>
                          <div className={`p-2 text-zinc-300 leading-relaxed border-t border-zinc-800/20 ${i % 2 === 0 ? 'bg-zinc-900/20' : ''}`}>{row.col1}</div>
                          <div className={`p-2 text-zinc-300 leading-relaxed border-t border-zinc-800/20 ${i % 2 === 0 ? 'bg-zinc-900/20' : ''}`}>{row.col2}</div>
                        </div>
                      ))}
                    </div>
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
