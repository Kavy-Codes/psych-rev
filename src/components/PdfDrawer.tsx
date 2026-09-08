import { useEffect, useState } from 'react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const BASE = import.meta.env.BASE_URL;

const PDF_FILES = [
  { name: "Revision Notes", file: `${BASE}revision-notes.pdf` },
  { name: "Psychology Material", file: `${BASE}psychology-material.pdf` },
  { name: "30 Sets Sample Papers", file: `${BASE}sample-papers-30-sets.pdf` },
  { name: "Mind Maps", file: `${BASE}mind-maps.pdf` },
];

export function PdfDrawer({ isOpen, onClose }: Props) {
  const [activePdf, setActivePdf] = useState(0);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-zinc-950 flex flex-col">
      {/* Header */}
      <div className="shrink-0 safe-top bg-zinc-900 border-b border-zinc-800/50">
        <div className="flex items-center justify-between px-4 py-3">
          <button
            onClick={onClose}
            className="flex items-center gap-2 text-zinc-400 active:text-white transition-colors"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            <span className="text-sm font-semibold">Back</span>
          </button>
          <h3 className="text-white font-bold text-sm">PDF Reference</h3>
          <div className="w-16" />
        </div>

        {/* PDF tabs */}
        <div className="px-4 pb-3 flex gap-1.5 overflow-x-auto no-scrollbar">
          {PDF_FILES.map((pdf, idx) => (
            <button
              key={idx}
              onClick={() => setActivePdf(idx)}
              className={`px-3 py-1.5 rounded-lg text-[11px] font-semibold whitespace-nowrap transition-all shrink-0 ${
                idx === activePdf
                  ? 'bg-indigo-600 text-white'
                  : 'bg-zinc-800/50 text-zinc-400 border border-zinc-700/50 active:bg-zinc-700/50'
              }`}
            >
              {pdf.name}
            </button>
          ))}
        </div>
      </div>

      {/* PDF viewer — fills remaining space */}
      <div className="flex-1 min-h-0">
        <iframe
          key={activePdf}
          src={PDF_FILES[activePdf].file}
          className="w-full h-full border-0"
          title={PDF_FILES[activePdf].name}
        />
      </div>
    </div>
  );
}
