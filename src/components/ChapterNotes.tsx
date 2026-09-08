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

  const note = chapterNotes.find(n => n.chapter === selectedChapter);
  if (!note) return null;

  const c = colorMap[note.color];

  return (
    <div className="flex flex-col h-full px-4 pt-2 pb-4 gap-3">
      {/* Chapter tabs */}
      <div className="flex gap-1.5 overflow-x-auto no-scrollbar shrink-0 animate-slide-down">
        {CHAPTERS.map(ch => (
          <button
            key={ch.num}
            onClick={() => setSelectedChapter(ch.num)}
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

      {/* Note content — always visible, no dropdown */}
      <div className="flex-1 min-h-0 overflow-y-auto no-scrollbar" key={selectedChapter}>
        <div className="animate-fade-in space-y-3">
          {/* Title */}
          <div className="flex items-center gap-2">
            <span className={`pill border text-[9px] shrink-0 ${c.pill}`}>
              {note.marks}M
            </span>
            <h3 className="text-white font-bold text-sm">{note.title}</h3>
          </div>

          {/* Key points — always expanded */}
          <div className={`rounded-xl border p-3 ${c.border} bg-zinc-900/30`}>
            <ul className="space-y-2">
              {note.keyPoints.map((point, i) => (
                <li key={i} className="flex gap-2 text-[12px] text-zinc-400">
                  <span className="text-zinc-600 mt-0.5 shrink-0">•</span>
                  <span className="leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
