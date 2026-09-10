import { useState } from 'react';

interface Props {
  onSelect: (subject: 'psych' | 'hindi') => void;
}

const subjects = [
  {
    id: 'psych' as const,
    name: 'मनोविज्ञान',
    nameEn: 'Psychology',
    code: '337',
    emoji: '🧠',
    color: 'from-indigo-600 via-violet-600 to-indigo-700',
    border: 'border-indigo-500/30',
    chapters: 7,
    marks: 70,
    tagline: 'मानव व्यवहार और मानसिक प्रक्रियाओं का अध्ययन',
  },
  {
    id: 'hindi' as const,
    name: 'हिंदी (आधार)',
    nameEn: 'Hindi Core',
    code: '302',
    emoji: '📝',
    color: 'from-rose-600 via-pink-600 to-rose-700',
    border: 'border-rose-500/30',
    chapters: 18,
    marks: 80,
    tagline: 'हिंदी साहित्य और भाषा की समृद्ध परंपरा',
    comingSoon: true,
  },
];

export function SubjectSelector({ onSelect }: Props) {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <div className="min-h-[100dvh] flex flex-col items-center justify-center px-6 py-10 bg-zinc-950">
      {/* Header */}
      <div className="text-center mb-10 animate-slide-up">
        <h1 className="text-gradient font-black text-3xl tracking-tight leading-none mb-2">StudyRev</h1>
        <p className="text-zinc-500 text-sm">CBSE Class 12 — अपना विषय चुनें</p>
      </div>

      {/* Subject Cards */}
      <div className="w-full max-w-sm space-y-4">
        {subjects.map((s, i) => (
          <button
            key={s.id}
            onClick={() => !s.comingSoon && onSelect(s.id)}
            onMouseEnter={() => setHoveredId(s.id)}
            onMouseLeave={() => setHoveredId(null)}
            disabled={s.comingSoon}
            className={`w-full text-left p-5 rounded-2xl border transition-all duration-200 animate-slide-up stagger-${i + 1} ${
              s.comingSoon
                ? 'bg-zinc-900/40 border-zinc-800/40 opacity-60 cursor-not-allowed'
                : `bg-zinc-900/80 ${s.border} active:scale-[0.97] hover:bg-zinc-800/80 cursor-pointer`
            }`}
          >
            <div className="flex items-start gap-4">
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${s.color} flex items-center justify-center text-2xl shadow-lg shrink-0`}>
                {s.emoji}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-0.5">
                  <h2 className="text-white font-bold text-base">{s.name}</h2>
                  {s.comingSoon && (
                    <span className="text-[9px] font-bold px-1.5 py-0.5 rounded-full bg-amber-500/15 text-amber-400 border border-amber-500/25">
                      जल्द आ रहा है
                    </span>
                  )}
                </div>
                <p className="text-zinc-500 text-xs mb-2">{s.nameEn} — Code {s.code}</p>
                <p className="text-zinc-400 text-[11px] leading-relaxed">{s.tagline}</p>
                <div className="flex items-center gap-3 mt-2">
                  <span className="text-zinc-600 text-[10px]">{s.chapters} पाठ</span>
                  <span className="text-zinc-700 text-[10px]">•</span>
                  <span className="text-zinc-600 text-[10px]">{s.marks} अंक</span>
                </div>
              </div>
            </div>
          </button>
        ))}
      </div>

      {/* Footer */}
      <p className="text-zinc-700 text-[10px] mt-8 animate-fade-in">
        CBSE 2025-26 सिलेबस के अनुसार
      </p>
    </div>
  );
}
