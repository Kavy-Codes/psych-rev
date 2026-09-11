import { useState, useEffect } from 'react';

interface Props {
  onSelect: (subject: 'psych' | 'hindi') => void;
}

const GREETINGS = [
  "Welcome back, scholar! ✨",
  "Ready to ace your exams? 🎯",
  "Let's make today count! 📚",
  "Your future self will thank you 🌟",
];

const subjects = [
  {
    id: 'psych' as const,
    name: 'Psychology',
    code: '337',
    emoji: '🧠',
    gradient: 'from-indigo-600 via-violet-600 to-indigo-700',
    glow: 'glow-indigo',
    border: 'border-indigo-500/25',
    bg: 'bg-indigo-500/5',
    chapters: 7,
    marks: 70,
    tagline: 'Understanding the human mind',
    desc: 'Variations, Personality, Disorders, Therapy & more',
  },
  {
    id: 'hindi' as const,
    name: 'Hindi Elective',
    code: '322',
    emoji: '📝',
    gradient: 'from-rose-600 via-pink-600 to-rose-700',
    glow: 'glow-rose',
    border: 'border-rose-500/25',
    bg: 'bg-rose-500/5',
    chapters: 25,
    marks: 80,
    tagline: 'Antra + Antral',
    desc: '21 Poems & Prose + 4 Supplementary chapters',
  },
];

export function SubjectSelector({ onSelect }: Props) {
  const [greeting] = useState(() => GREETINGS[Math.floor(Math.random() * GREETINGS.length)]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    requestAnimationFrame(() => setMounted(true));
  }, []);

  return (
    <div className="min-h-[100dvh] flex flex-col items-center justify-center px-6 py-10 bg-warm-gradient relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-indigo-500/5 rounded-full blur-3xl animate-breathe" />
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-rose-500/5 rounded-full blur-3xl animate-breathe" style={{ animationDelay: '1.5s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-amber-500/3 rounded-full blur-3xl animate-breathe" style={{ animationDelay: '3s' }} />

      {/* Header */}
      <div className="text-center mb-10 relative z-10">
        <div className={`transition-all duration-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <h1 className="text-gradient font-black text-4xl tracking-tight leading-none mb-3">StudyRev</h1>
          <p className="text-zinc-400 text-sm mb-1">{greeting}</p>
          <p className="text-zinc-600 text-xs">CBSE Class 12 — Pick a subject to begin</p>
        </div>
      </div>

      {/* Subject Cards */}
      <div className="w-full max-w-sm space-y-4 relative z-10">
        {subjects.map((s, i) => (
          <button
            key={s.id}
            onClick={() => onSelect(s.id)}
            className={`w-full text-left p-5 rounded-2xl border transition-all duration-300 press-lift ${s.border} ${s.bg} cursor-pointer backdrop-blur-sm group`}
            style={{ animationDelay: `${0.1 + i * 0.12}s` }}
          >
            <div className="flex items-start gap-4">
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${s.gradient} flex items-center justify-center text-2xl shadow-lg shrink-0 transition-all duration-300 group-hover:scale-105 ${s.glow}`}>
                {s.emoji}
              </div>
              <div className="flex-1 min-w-0">
                <h2 className="text-white font-bold text-base mb-0.5">{s.name}</h2>
                <p className="text-zinc-500 text-[10px] mb-2">Code {s.code} · {s.chapters} chapters · {s.marks} marks</p>
                <p className="text-zinc-400 text-xs leading-relaxed">{s.tagline}</p>
                <p className="text-zinc-600 text-[10px] mt-1">{s.desc}</p>
              </div>
              <svg className="w-5 h-5 text-zinc-600 group-hover:text-zinc-400 transition-all duration-300 group-hover:translate-x-1 shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </button>
        ))}
      </div>

      {/* Footer */}
      <div className="mt-8 text-center relative z-10 animate-fade-in" style={{ animationDelay: '0.5s' }}>
        <p className="text-zinc-600 text-[10px]">As per CBSE 2025-26 syllabus</p>
        <p className="text-zinc-700 text-[9px] mt-1">Made with ❤️ for Class 12 students</p>
      </div>
    </div>
  );
}
