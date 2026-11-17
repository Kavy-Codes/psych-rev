import { ArrowRight, BookMarked, Check, Copy, FileText, Sparkles } from 'lucide-react';
import type { OnePagerSubject } from '../../data/onepager';
import { ONE_PAGER_SUBJECTS, getOnePagerNotes } from '../../data/onepager';

interface Props {
  onSelectSubject: (subject: OnePagerSubject) => void;
}

const HOW_TO = [
  { icon: BookMarked, title: 'Pick a chapter', text: 'Choose your subject, then the chapter you are revising.' },
  { icon: Copy, title: 'Copy the one-pager', text: 'Tap Copy notes — the full note is formatted for your register.' },
  { icon: Check, title: 'Write & revise', text: 'Each note fits 1.5–2 register pages and covers exam-ready points.' },
];

export function OnePagerDashboard({ onSelectSubject }: Props) {
  const total = ONE_PAGER_SUBJECTS.reduce((sum, subject) => sum + getOnePagerNotes(subject.id).length, 0);

  return (
    <div className="h-full overflow-y-auto no-scrollbar px-4 pt-3 pb-6 space-y-4">
      {/* Hero */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-amber-500 via-orange-500 to-amber-600 p-5 shadow-xl shadow-amber-500/15 animate-slide-up">
        <div className="absolute inset-0 opacity-[0.08]">
          <div className="absolute -top-14 -right-14 w-44 h-44 rounded-full bg-white" />
          <div className="absolute -bottom-10 -left-10 w-32 h-32 rounded-full bg-white" />
        </div>
        <div className="relative">
          <div className="flex items-center gap-2 mb-2">
            <span className="pill bg-black/15 text-white/90 border border-white/20 text-[9px] font-bold">CBSE 2025-26</span>
            <span className="pill bg-black/15 text-white/90 border border-white/20 text-[9px] font-bold">Copy-ready</span>
          </div>
          <h2 className="text-white text-2xl font-black leading-tight">One Pager Notes</h2>
          <p className="text-white/70 text-[12px] mt-1 max-w-[28ch]">
            Exam-focused notes you can copy straight into your register.
          </p>
          <div className="flex items-center gap-4 mt-4">
            <div>
              <p className="text-white text-2xl font-black leading-none">{total}</p>
              <p className="text-white/50 text-[10px] mt-0.5">chapter notes</p>
            </div>
            <div className="w-px h-8 bg-white/20" />
            <div>
              <p className="text-white text-2xl font-black leading-none">4</p>
              <p className="text-white/50 text-[10px] mt-0.5">subjects</p>
            </div>
            <div className="w-px h-8 bg-white/20" />
            <div>
              <p className="text-white text-2xl font-black leading-none">1.5–2</p>
              <p className="text-white/50 text-[10px] mt-0.5">register pages each</p>
            </div>
          </div>
        </div>
      </div>

      {/* Subjects */}
      <div className="animate-slide-up stagger-1">
        <div className="flex items-center gap-2 mb-2">
          <h3 className="text-zinc-300 text-xs font-bold">Choose a subject</h3>
          <span className="text-zinc-600 text-[10px]">NCERT · latest syllabus</span>
        </div>
        <div className="space-y-2.5">
          {ONE_PAGER_SUBJECTS.map((subject) => {
            const notes = getOnePagerNotes(subject.id);
            return (
              <button
                key={subject.id}
                onClick={() => onSelectSubject(subject.id)}
                className={`w-full text-left p-4 rounded-2xl border ${subject.border} ${subject.bg} press-lift group`}
              >
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-zinc-900/60 border border-zinc-700/40 flex items-center justify-center shrink-0">
                    <FileText className={`w-5 h-5 ${subject.accent}`} strokeWidth={1.75} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <h4 className="text-white font-bold text-sm">{subject.name}</h4>
                      <span className="pill bg-zinc-800/60 text-zinc-500 border border-zinc-700/40 text-[9px] font-bold">
                        {subject.code}
                      </span>
                    </div>
                    <p className="text-zinc-500 text-[11px] mt-0.5 leading-snug">{subject.description}</p>
                  </div>
                  <div className="text-right shrink-0">
                    <p className={`text-sm font-black ${subject.accent}`}>{notes.length}</p>
                    <p className="text-zinc-600 text-[9px]">chapters</p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-zinc-600 group-active:text-zinc-300 transition-colors shrink-0" strokeWidth={2} />
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* How to use */}
      <div className="animate-slide-up stagger-2">
        <div className="flex items-center gap-2 mb-2">
          <Sparkles className="w-3.5 h-3.5 text-amber-400" strokeWidth={2} />
          <h3 className="text-zinc-300 text-xs font-bold">How to use</h3>
        </div>
        <div className="rounded-2xl bg-zinc-900/40 border border-zinc-800/40 divide-y divide-zinc-800/40">
          {HOW_TO.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={step.title} className="flex items-start gap-3 p-3.5">
                <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/15 flex items-center justify-center shrink-0">
                  <Icon className="w-4 h-4 text-amber-300" strokeWidth={1.75} />
                </div>
                <div className="flex-1">
                  <p className="text-[11px] text-zinc-200 font-bold">{index + 1}. {step.title}</p>
                  <p className="text-[10px] text-zinc-500 leading-relaxed mt-0.5">{step.text}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <p className="text-center text-zinc-700 text-[9px] pt-1 pb-2">
        Based on CBSE Class 12 2025-26 syllabus · For personal study use
      </p>
    </div>
  );
}
