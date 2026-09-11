import { useState } from 'react';

interface Props {
  onSelect: (subject: 'psych' | 'hindi') => void;
}

const subjects = [
  {
    id: 'psych' as const,
    name: 'Psychology',
    code: '337',
    emoji: '🧠',
    color: 'from-indigo-600 via-violet-600 to-indigo-700',
    border: 'border-indigo-500/30',
    chapters: 7,
    marks: 70,
    tagline: 'Study of human behaviour and mental processes',
  },
  {
    id: 'hindi' as const,
    name: 'Hindi Elective',
    code: '322',
    emoji: '📝',
    color: 'from-rose-600 via-pink-600 to-rose-700',
    border: 'border-rose-500/30',
    chapters: 18,
    marks: 80,
    tagline: 'Rich tradition of Hindi literature and language',
  },
];

export function SubjectSelector({ onSelect }: Props) {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <div className="min-h-[100dvh] flex flex-col items-center justify-center px-6 py-10 bg-zinc-950">
      {/* Header */}
      <div className="text-center mb-10 animate-slide-up">
        <h1 className="text-gradient font-black text-3xl tracking-tight leading-none mb-2">StudyRev</h1>
        <p className="text-zinc-500 text-sm">CBSE Class 12 — Select your subject</p>
      </div>

      {/* Subject Cards */}
      <div className="w-full max-w-sm space-y-4">
        {subjects.map((s, i) => (
              <button
            key={s.id}
            onClick={() => onSelect(s.id)}
            onMouseEnter={() => setHoveredId(s.id)}
            onMouseLeave={() => setHoveredId(null)}
            className={`w-full text-left p-5 rounded-2xl border transition-all duration-200 animate-slide-up stagger-${i + 1} bg-zinc-900/80 ${s.border} active:scale-[0.97] hover:bg-zinc-800/80 cursor-pointer`}
          >
            <div className="flex items-start gap-4">
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${s.color} flex items-center justify-center text-2xl shadow-lg shrink-0`}>
                {s.emoji}
              </div>
              <div className="flex-1 min-w-0">
                <h2 className="text-white font-bold text-base mb-0.5">{s.name}</h2>
                <p className="text-zinc-500 text-xs mb-2">Code {s.code}</p>
                <p className="text-zinc-400 text-[11px] leading-relaxed">{s.tagline}</p>
                <div className="flex items-center gap-3 mt-2">
                  <span className="text-zinc-600 text-[10px]">{s.chapters} chapters</span>
                  <span className="text-zinc-700 text-[10px]">•</span>
                  <span className="text-zinc-600 text-[10px]">{s.marks} marks</span>
                </div>
              </div>
            </div>
          </button>
        ))}
      </div>

      {/* Footer */}
      <p className="text-zinc-700 text-[10px] mt-8 animate-fade-in">
        As per CBSE 2025-26 syllabus
      </p>
    </div>
  );
}
