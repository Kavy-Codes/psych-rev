import { useState, useEffect } from 'react';
import { Brain, BookOpen, Building2, ChevronRight } from 'lucide-react';

interface Props {
  onSelect: (subject: 'psych' | 'hindi' | 'socio') => void;
}

const GREETINGS = [
  "Welcome back, scholar!",
  "Ready to ace your exams?",
  "Let's make today count!",
  "Your future self will thank you",
];

const subjects = [
  {
    id: 'psych' as const,
    name: 'Psychology',
    code: '337',
    icon: Brain,
    gradient: 'from-indigo-600 via-violet-600 to-indigo-700',
    glow: 'glow-indigo',
    border: 'border-indigo-500/20',
    bg: 'bg-indigo-500/[0.04]',
    chapters: 7,
    marks: 70,
    tagline: 'Understanding the human mind',
    desc: 'Variations, Personality, Disorders, Therapy & more',
  },
  {
    id: 'hindi' as const,
    name: 'Hindi Elective',
    code: '322',
    icon: BookOpen,
    gradient: 'from-rose-600 via-pink-600 to-rose-700',
    glow: 'glow-rose',
    border: 'border-rose-500/20',
    bg: 'bg-rose-500/[0.04]',
    chapters: 25,
    marks: 80,
    tagline: 'Antra + Antral',
    desc: '21 Poems & Prose + 4 Supplementary chapters',
  },
  {
    id: 'socio' as const,
    name: 'Sociology',
    code: '039',
    icon: Building2,
    gradient: 'from-teal-600 via-cyan-600 to-teal-700',
    glow: 'glow-teal',
    border: 'border-teal-500/20',
    bg: 'bg-teal-500/[0.04]',
    chapters: 12,
    marks: 80,
    tagline: 'Indian Society & Social Change',
    desc: 'Indian Society + Social Change & Development in India',
  },
];

export function SubjectSelector({ onSelect }: Props) {
  const [greeting] = useState(() => GREETINGS[Math.floor(Math.random() * GREETINGS.length)]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    requestAnimationFrame(() => setMounted(true));
  }, []);

  return (
    <div className="min-h-[100dvh] flex flex-col items-center justify-center px-5 py-10 bg-warm-gradient relative overflow-hidden">
      {/* Background — subtle, structural */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-indigo-500/[0.03] rounded-full blur-3xl animate-breathe" />
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-rose-500/[0.03] rounded-full blur-3xl animate-breathe" style={{ animationDelay: '1.5s' }} />

      {/* Header */}
      <div className="text-center mb-8 relative z-10">
        <div className={`transition-all duration-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <h1 className="text-gradient font-extrabold text-4xl tracking-tight leading-none mb-2">StudyRev</h1>
          <p className="text-zinc-400 text-sm mb-0.5">{greeting}</p>
          <p className="text-zinc-600 text-xs">CBSE Class 12 — Pick a subject</p>
        </div>
      </div>

      {/* Subject Cards */}
      <div className="w-full max-w-sm space-y-3 relative z-10">
        {subjects.map((s, i) => {
          const Icon = s.icon;
          return (
            <button
              key={s.id}
              onClick={() => onSelect(s.id)}
              className={`w-full text-left p-4 rounded-2xl border transition-all duration-200 press-lift ${s.border} ${s.bg} cursor-pointer group animate-slide-up stagger-${i + 1}`}
            >
              <div className="flex items-center gap-3.5">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${s.gradient} flex items-center justify-center shadow-lg shrink-0 transition-all duration-200 group-active:scale-95 ${s.glow}`}>
                  <Icon className="w-5 h-5 text-white" strokeWidth={1.75} />
                </div>
                <div className="flex-1 min-w-0">
                  <h2 className="text-white font-bold text-sm mb-0.5">{s.name}</h2>
                  <p className="text-zinc-500 text-[10px] mb-1">Code {s.code} · {s.chapters} chapters · {s.marks} marks</p>
                  <p className="text-zinc-400 text-xs">{s.tagline}</p>
                </div>
                <ChevronRight className="w-4 h-4 text-zinc-600 group-active:text-zinc-400 transition-colors shrink-0" strokeWidth={2} />
              </div>
            </button>
          );
        })}
      </div>

      {/* Footer */}
      <div className="mt-8 text-center relative z-10 animate-fade-in" style={{ animationDelay: '0.4s' }}>
        <p className="text-zinc-600 text-[10px]">As per CBSE 2025-26 syllabus</p>
      </div>
    </div>
  );
}
