import React, { useState } from 'react';
import { distinctions } from '../data/distinctions';

interface Props {
  chapterFilter: number;
}

export function Distinctions({ chapterFilter }: Props) {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const filtered = chapterFilter === 0
    ? distinctions
    : distinctions.filter(d => d.chapter === chapterFilter);

  return (
    <div className="flex flex-col h-full px-4 pt-2 pb-4 gap-2 overflow-y-auto no-scrollbar">
      <p className="text-zinc-600 text-[10px] shrink-0">{filtered.length} comparisons — tap to expand</p>

      {filtered.map(d => {
        const isOpen = expandedId === d.id;
        return (
          <div key={d.id} className="rounded-xl border border-zinc-800/30 overflow-hidden bg-zinc-900/30">
            <button
              onClick={() => setExpandedId(isOpen ? null : d.id)}
              className="w-full flex items-center gap-2 p-3 text-left active:bg-zinc-800/30 transition-colors"
            >
              <span className="pill bg-indigo-500/15 text-indigo-300 border border-indigo-500/20 text-[9px] shrink-0">
                Ch {d.chapter}
              </span>
              <span className="text-white text-[13px] font-semibold flex-1 truncate">{d.title}</span>
              <svg
                className={`w-3.5 h-3.5 text-zinc-600 shrink-0 transition-transform ${isOpen ? 'rotate-90' : ''}`}
                fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {isOpen && (
              <div className="border-t border-zinc-800/30">
                <div className="grid grid-cols-[auto_1fr_1fr] text-[11px]">
                  <div className="p-2" />
                  <div className="p-2 font-semibold text-indigo-400 text-[10px] uppercase tracking-wide">Option A</div>
                  <div className="p-2 font-semibold text-violet-400 text-[10px] uppercase tracking-wide">Option B</div>
                  {d.rows.map((row, i) => (
                    <React.Fragment key={i}>
                      <div className={`p-2 text-zinc-500 font-medium border-t border-zinc-800/20 ${i % 2 === 0 ? 'bg-zinc-900/20' : ''}`}>{row.label}</div>
                      <div className={`p-2 text-zinc-300 leading-relaxed border-t border-zinc-800/20 ${i % 2 === 0 ? 'bg-zinc-900/20' : ''}`}>{row.col1}</div>
                      <div className={`p-2 text-zinc-300 leading-relaxed border-t border-zinc-800/20 ${i % 2 === 0 ? 'bg-zinc-900/20' : ''}`}>{row.col2}</div>
                    </React.Fragment>
                  ))}
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
