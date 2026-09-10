import { useState } from 'react';
import { writingFormats, type WritingFormat } from '../../data/hindi/writing';

export function HindiWriting() {
  const [selectedFormat, setSelectedFormat] = useState<WritingFormat | null>(null);

  if (selectedFormat) {
    return (
      <div className="flex flex-col h-full px-4 pt-2 pb-4 gap-3">
        <button
          onClick={() => setSelectedFormat(null)}
          className="flex items-center gap-1.5 text-rose-400 text-xs font-semibold shrink-0 active:opacity-70"
        >
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
          वापस
        </button>

        <div className="flex-1 min-h-0 overflow-y-auto no-scrollbar space-y-4 animate-fade-in">
          <div>
            <h3 className="text-white font-bold text-base mb-1">{selectedFormat.type}</h3>
            <div className="flex items-center gap-2 mb-2">
              <span className="pill bg-rose-500/15 text-rose-300 border border-rose-500/30 text-[9px]">{selectedFormat.marks} अंक</span>
              <span className="pill bg-amber-500/15 text-amber-300 border border-amber-500/30 text-[9px]">{selectedFormat.wordLimit}</span>
            </div>
            <p className="text-zinc-400 text-[13px] leading-relaxed">{selectedFormat.description}</p>
          </div>

          {/* Structure */}
          <div className="p-3 rounded-xl bg-zinc-900/40 border border-zinc-800/30">
            <p className="text-[10px] font-bold text-rose-400 uppercase tracking-wide mb-2">संरचना</p>
            <ol className="space-y-1.5">
              {selectedFormat.structure.map((step, i) => (
                <li key={i} className="flex gap-2 text-[12px] text-zinc-300">
                  <span className="text-rose-400 font-bold shrink-0">{i + 1}.</span>
                  <span className="leading-relaxed">{step}</span>
                </li>
              ))}
            </ol>
          </div>

          {/* Example */}
          <div className="p-3 rounded-xl bg-rose-500/5 border border-rose-500/15">
            <p className="text-[10px] font-bold text-rose-400 uppercase tracking-wide mb-2">उदाहरण</p>
            <p className="text-[12px] text-zinc-300 leading-relaxed whitespace-pre-line">{selectedFormat.example}</p>
          </div>

          {/* Tips */}
          <div className="p-3 rounded-xl bg-amber-500/5 border border-amber-500/15">
            <p className="text-[10px] font-bold text-amber-400 uppercase tracking-wide mb-2">परीक्षा टिप्स</p>
            <ul className="space-y-1">
              {selectedFormat.tips.map((tip, i) => (
                <li key={i} className="flex gap-2 text-[12px] text-zinc-400">
                  <span className="text-amber-400 mt-0.5 shrink-0">•</span>
                  <span className="leading-relaxed">{tip}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full px-4 pt-2 pb-4 gap-3">
      <div className="shrink-0">
        <h3 className="text-white font-bold text-sm mb-0.5">लेखन प्रारूप</h3>
        <p className="text-zinc-600 text-[10px]">8 अभिव्यक्ति और माध्यम प्रारूप</p>
      </div>

      <div className="flex-1 min-h-0 overflow-y-auto no-scrollbar space-y-2">
        {writingFormats.map((fmt, i) => (
          <button
            key={fmt.id}
            onClick={() => setSelectedFormat(fmt)}
            className={`w-full text-left p-3 rounded-xl bg-zinc-900/40 border border-zinc-800/25 active:bg-zinc-800/40 transition-all animate-slide-up stagger-${Math.min(i + 1, 7)}`}
          >
            <div className="flex items-center justify-between mb-1">
              <p className="text-white text-[13px] font-semibold">{fmt.type}</p>
              <div className="flex gap-1.5">
                <span className="pill bg-rose-500/15 text-rose-300 border border-rose-500/30 text-[8px]">{fmt.marks} अंक</span>
                <span className="pill bg-amber-500/15 text-amber-300 border border-amber-500/30 text-[8px]">{fmt.wordLimit}</span>
              </div>
            </div>
            <p className="text-zinc-500 text-[11px] truncate">{fmt.description}</p>
          </button>
        ))}
      </div>
    </div>
  );
}
