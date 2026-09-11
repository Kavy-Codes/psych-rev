import { useState, useEffect } from 'react';
import { hindiChapterNotes, type HindiChapterNote } from '../../data/hindi/glossary';

const TYPE_LABELS: Record<string, string> = {
  kavya: 'कविता',
  gadya: 'गद्य',
  antral: 'अंतराल',
};

export function HindiChapterNotes({ singleChapter }: { singleChapter?: number }) {
  const [selectedChapter, setSelectedChapter] = useState(1);

  useEffect(() => {
    if (singleChapter && singleChapter > 0) {
      setSelectedChapter(singleChapter);
    }
  }, [singleChapter]);

  const note = hindiChapterNotes.find(n => n.chapter === selectedChapter);
  if (!note) return null;

  return (
    <div className="flex flex-col h-full px-4 pt-2 pb-4 gap-3">
      {/* Chapter tabs */}
      <div className="flex gap-1.5 overflow-x-auto no-scrollbar shrink-0 animate-slide-down">
        {hindiChapterNotes.map(n => (
          <button
            key={n.chapter}
            onClick={() => setSelectedChapter(n.chapter)}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all shrink-0 ${
              selectedChapter === n.chapter
                ? 'bg-rose-600 text-white shadow-lg shadow-rose-500/25'
                : 'bg-zinc-800/50 text-zinc-400 border border-zinc-700/50 active:bg-zinc-700/50'
            }`}
          >
            {n.chapter}
          </button>
        ))}
      </div>

      {/* Note content */}
      <div className="flex-1 min-h-0 overflow-y-auto no-scrollbar" key={selectedChapter}>
        <div className="animate-fade-in space-y-3">
          {/* Header */}
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="pill bg-rose-500/15 text-rose-300 border border-rose-500/20 text-[9px]">
                {TYPE_LABELS[note.type]}
              </span>
              <span className="pill bg-amber-500/15 text-amber-300 border border-amber-500/20 text-[9px]">
                {note.author}
              </span>
            </div>
            <h3 className="text-white font-bold text-sm">{note.title}</h3>
          </div>

          {/* Summary */}
          <div className="p-3 rounded-xl bg-zinc-900/40 border border-zinc-800/30">
            <p className="text-[10px] font-bold text-rose-400 uppercase tracking-wide mb-1.5">सारांश</p>
            <p className="text-[12px] text-zinc-300 leading-relaxed">{note.summary}</p>
          </div>

          {/* Key points */}
          <div className="p-3 rounded-xl bg-zinc-900/40 border border-zinc-800/30">
            <p className="text-[10px] font-bold text-rose-400 uppercase tracking-wide mb-1.5">मुख्य बिंदु</p>
            <ul className="space-y-1.5">
              {note.keyPoints.map((point, i) => (
                <li key={i} className="flex gap-2 text-[12px] text-zinc-400">
                  <span className="text-rose-400 mt-0.5 shrink-0">•</span>
                  <span className="leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Literary devices */}
          {note.literaryDevices.length > 0 && (
            <div className="p-3 rounded-xl bg-rose-500/5 border border-rose-500/10">
              <p className="text-[10px] font-bold text-rose-400 uppercase tracking-wide mb-1.5">साहित्यिक उपकरण</p>
              <div className="flex flex-wrap gap-1.5">
                {note.literaryDevices.map((d, i) => (
                  <span key={i} className="px-2 py-0.5 rounded-full bg-rose-500/10 border border-rose-500/20 text-[10px] text-rose-300">
                    {d}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Important questions */}
          <div className="p-3 rounded-xl bg-amber-500/5 border border-amber-500/10">
            <p className="text-[10px] font-bold text-amber-400 uppercase tracking-wide mb-1.5">महत्वपूर्ण प्रश्न</p>
            <ul className="space-y-1.5">
              {note.importantQuestions.map((q, i) => (
                <li key={i} className="flex gap-2 text-[12px] text-zinc-400">
                  <span className="text-amber-400 mt-0.5 shrink-0">Q{i + 1}.</span>
                  <span className="leading-relaxed">{q}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
