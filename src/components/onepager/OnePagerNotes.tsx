import { useEffect, useMemo, useState, type ReactNode } from 'react';
import {
  BookOpen,
  Check,
  Copy,
  FileText,
  HelpCircle,
  Lightbulb,
  Printer,
  Quote,
  Sparkles,
  Target,
  Users,
} from 'lucide-react';
import type { OnePagerNote, OnePagerSubject } from '../../data/onepager';
import { ONE_PAGER_SUBJECTS, getOnePagerNotes } from '../../data/onepager';

interface Props {
  subject: OnePagerSubject;
}

const SUBJECT_LABELS: Record<OnePagerSubject, string> = {
  english: 'English Core',
  psych: 'Psychology',
  socio: 'Sociology',
  hindi: 'Hindi Elective',
};

const SUBJECT_CODES: Record<OnePagerSubject, string> = {
  english: '301',
  psych: '337',
  socio: '039',
  hindi: '322',
};

type CopyMode = 'compact' | 'full';

function buildPlainText(note: OnePagerNote, mode: CopyMode = 'full'): string {
  const full = mode === 'full';
  const lines: string[] = [];
  lines.push('CBSE CLASS 12 — ' + SUBJECT_LABELS[note.subject] + ' (' + SUBJECT_CODES[note.subject] + ')');
  lines.push(note.book + (note.section ? ' — ' + note.section : ''));
  lines.push((note.subject === 'english' ? note.chapterLabel.toUpperCase() : 'CHAPTER ' + note.chapter) + ': ' + note.title);
  if (note.author) lines.push('Author: ' + note.author);
  lines.push('');
  lines.push('SUMMARY');
  lines.push(note.summary);
  lines.push('');
  lines.push('KEY POINTS');
  note.keyPoints.forEach((point) => lines.push('- ' + point));
  if (note.keyTerms && note.keyTerms.length) {
    lines.push('');
    lines.push('KEY TERMS');
    note.keyTerms.forEach((term) => lines.push(term.term + ': ' + term.definition));
  }
  if (note.devices && note.devices.length) {
    lines.push('');
    lines.push('LITERARY DEVICES');
    lines.push(note.devices.join(', '));
  }
  if (full && note.keyPeople && note.keyPeople.length) {
    lines.push('');
    lines.push('KEY PEOPLE / THINKERS');
    note.keyPeople.forEach((person) => lines.push(person.name + ': ' + person.contribution));
  }
  if (full && note.characterSketch) {
    lines.push('');
    lines.push('CHARACTER SKETCH');
    lines.push(note.characterSketch);
  }
  if (note.quotes && note.quotes.length) {
    lines.push('');
    lines.push('IMPORTANT QUOTES');
    note.quotes.forEach((quote) => {
      lines.push('"' + quote.text + '"');
      if (full) lines.push('  ' + quote.explanation);
    });
  }
  if (full && note.examQuestions && note.examQuestions.length) {
    lines.push('');
    lines.push('EXAM QUESTIONS');
    note.examQuestions.forEach((qa, index) => {
      lines.push('Q' + (index + 1) + '. ' + qa.question);
      lines.push('A. ' + qa.answer);
      lines.push('');
    });
  }
  if (note.wordMeanings && note.wordMeanings.length) {
    lines.push('');
    lines.push('WORD MEANINGS');
    note.wordMeanings.forEach((word) => lines.push(word.word + ' — ' + word.meaning));
  }
  if (note.examTips && note.examTips.length) {
    lines.push('');
    lines.push('EXAM TIPS');
    note.examTips.forEach((tip) => lines.push('- ' + tip));
  }
  return lines.join('\n');
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

const PRINT_HEADINGS = new Set([
  'SUMMARY', 'KEY POINTS', 'KEY TERMS', 'LITERARY DEVICES',
  'KEY PEOPLE / THINKERS', 'CHARACTER SKETCH', 'IMPORTANT QUOTES',
  'EXAM QUESTIONS', 'WORD MEANINGS', 'EXAM TIPS',
]);

function buildPrintHtml(note: OnePagerNote): string {
  const body = buildPlainText(note, 'full')
    .split('\n')
    .map((line) => {
      if (!line.trim()) return '<div style="height:8px"></div>';
      const safe = escapeHtml(line);
      if (PRINT_HEADINGS.has(line.trim())) {
        return '<h2 style="font-size:14px;letter-spacing:.08em;margin:16px 0 6px;border-bottom:1px solid #ddd;padding-bottom:4px">' + safe + '</h2>';
      }
      if (line.startsWith('Q') && line.includes('.')) {
        return '<p style="margin:10px 0 3px;font-weight:700">' + safe + '</p>';
      }
      return '<p style="margin:3px 0;line-height:1.55">' + safe + '</p>';
    })
    .join('');
  return '<!doctype html><html><head><title>' + escapeHtml(note.title) + '</title>' +
    '<style>body{font-family:Georgia,"Times New Roman",serif;max-width:760px;margin:32px auto;padding:0 24px;color:#111;font-size:13px}' +
    'h1{font-size:22px;margin:0 0 4px}h2{font-family:Arial,sans-serif}p{margin:3px 0}' +
    '@media print{body{margin:0;padding:14mm}}</style></head><body>' +
    '<h1>' + escapeHtml(note.title) + '</h1>' +
    '<p style="color:#555;margin-bottom:18px">' + escapeHtml(note.book) + (note.section ? ' — ' + escapeHtml(note.section) : '') + (note.author ? ' · ' + escapeHtml(note.author) : '') + '</p>' +
    body + '</body></html>';
}

export function OnePagerNotes({ subject }: Props) {
  const notes = useMemo(() => getOnePagerNotes(subject), [subject]);
  const meta = ONE_PAGER_SUBJECTS.find((item) => item.id === subject);
  const [selectedId, setSelectedId] = useState(notes[0]?.id ?? '');
  const [copied, setCopied] = useState(false);
  const [copyMode, setCopyMode] = useState<CopyMode>('compact');

  useEffect(() => {
    if (!copied) return;
    const timer = setTimeout(() => setCopied(false), 1800);
    return () => clearTimeout(timer);
  }, [copied]);

  const note = notes.find((item) => item.id === selectedId) || notes[0];
  if (!note) return null;

  const subjectLabel = meta?.name || SUBJECT_LABELS[subject];

  const copyNotes = async () => {
    const text = buildPlainText(note, copyMode);
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
    } catch {
      const textarea = document.createElement('textarea');
      textarea.value = text;
      textarea.style.position = 'fixed';
      textarea.style.opacity = '0';
      document.body.appendChild(textarea);
      textarea.focus();
      textarea.select();
      try {
        document.execCommand('copy');
        setCopied(true);
      } finally {
        document.body.removeChild(textarea);
      }
    }
  };

  const printNotes = () => {
    const win = window.open('', '_blank');
    if (!win) {
      copyNotes();
      return;
    }
    win.document.write(buildPrintHtml(note));
    win.document.close();
    win.focus();
    setTimeout(() => win.print(), 250);
  };

  return (
    <div className="flex flex-col h-full">
      {/* Chapter strip */}
      <div className="shrink-0 px-4 pt-2 pb-2">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <span className={`pill border text-[9px] font-bold ${meta?.border || 'border-amber-500/20'} ${meta?.bg || 'bg-amber-500/[0.04]'} ${meta?.accent || 'text-amber-300'}`}>
              {subjectLabel}
            </span>
            <span className="text-zinc-600 text-[10px] font-semibold">
              {notes.length} chapters
            </span>
          </div>
          <span className="text-zinc-600 text-[10px]">
            {notes.findIndex((item) => item.id === note.id) + 1}/{notes.length}
          </span>
        </div>
        <div className="flex gap-1.5 overflow-x-auto no-scrollbar pb-1">
          {notes.map((item) => {
            const active = item.id === note.id;
            return (
              <button
                key={item.id}
                onClick={() => setSelectedId(item.id)}
                className={`shrink-0 px-3 py-1.5 rounded-lg text-[11px] font-semibold whitespace-nowrap transition-all ${
                  active
                    ? 'bg-amber-500 text-zinc-950 shadow-lg shadow-amber-500/20'
                    : 'bg-zinc-800/60 text-zinc-400 border border-zinc-700/50 active:bg-zinc-700/60'
                }`}
              >
                {item.chapterLabel}
              </button>
            );
          })}
        </div>
      </div>

      {/* Scrollable note sheet */}
      <div className="flex-1 min-h-0 overflow-y-auto no-scrollbar px-4 pb-6">
        <div key={note.id} className="animate-fade-in space-y-3">
          {/* Header */}
          <div className="rounded-2xl bg-gradient-to-br from-amber-500/15 via-zinc-900/40 to-orange-500/10 border border-amber-500/15 p-4">
            <div className="flex items-center gap-1.5 flex-wrap mb-2">
              <span className="pill bg-amber-500/15 text-amber-300 border border-amber-500/20 text-[9px] font-bold">
                {note.book}
              </span>
              {note.section && (
                <span className="pill bg-zinc-800/70 text-zinc-400 border border-zinc-700/50 text-[9px] font-semibold">
                  {note.section}
                </span>
              )}
              {note.marks ? (
                <span className="pill bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 text-[9px] font-bold">
                  {note.marks} marks
                </span>
              ) : null}
            </div>
            <h2 className="text-white font-black text-base leading-tight">{note.title}</h2>
            <p className="text-zinc-400 text-[11px] mt-1">
              {note.subject === 'english' ? note.chapterLabel : 'Chapter ' + note.chapter}
              {note.author ? ' · ' + note.author : ''}
            </p>
            <div className="flex items-center gap-1.5 mt-3 mb-1">
              <span className="text-[9px] text-zinc-500 uppercase font-bold tracking-wide">Copy size</span>
              <button
                onClick={() => setCopyMode('compact')}
                className={`px-2 py-0.5 rounded-full text-[9px] font-bold border transition-colors ${
                  copyMode === 'compact'
                    ? 'bg-amber-500/15 text-amber-300 border-amber-500/25'
                    : 'bg-zinc-800/50 text-zinc-500 border-zinc-700/40'
                }`}
              >
                1.5–2 pages
              </button>
              <button
                onClick={() => setCopyMode('full')}
                className={`px-2 py-0.5 rounded-full text-[9px] font-bold border transition-colors ${
                  copyMode === 'full'
                    ? 'bg-amber-500/15 text-amber-300 border-amber-500/25'
                    : 'bg-zinc-800/50 text-zinc-500 border-zinc-700/40'
                }`}
              >
                Full
              </button>
            </div>
            <div className="flex gap-2 mt-2">
              <button
                onClick={copyNotes}
                className={`flex-1 flex items-center justify-center gap-1.5 py-2 rounded-xl text-[11px] font-bold transition-all ${
                  copied
                    ? 'bg-emerald-500 text-white'
                    : 'bg-amber-500 text-zinc-950 active:bg-amber-400'
                }`}
              >
                {copied ? <Check className="w-3.5 h-3.5" strokeWidth={2.5} /> : <Copy className="w-3.5 h-3.5" strokeWidth={2.5} />}
                {copied ? 'Copied for register' : 'Copy notes'}
              </button>
              <button
                onClick={printNotes}
                className="flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-zinc-800/70 border border-zinc-700/50 text-zinc-300 text-[11px] font-bold active:bg-zinc-700/70 transition-colors"
              >
                <Printer className="w-3.5 h-3.5" strokeWidth={2} />
                Print
              </button>
            </div>
          </div>

          {/* Summary */}
          <Section icon={<FileText className="w-3.5 h-3.5" />} title={note.subject === 'english' && note.section === 'Poetry' ? 'Central Idea & Summary' : 'Summary'}>
            <p className="text-[12px] text-zinc-300 leading-relaxed">{note.summary}</p>
          </Section>

          {/* Key points */}
          <Section icon={<Sparkles className="w-3.5 h-3.5" />} title="Key Points" badge={note.keyPoints.length}>
            <ul className="space-y-1.5">
              {note.keyPoints.map((point, index) => (
                <li key={index} className="flex gap-2 text-[12px] text-zinc-400">
                  <span className="text-amber-400 mt-0.5 shrink-0">•</span>
                  <span className="leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>
          </Section>

          {/* Key terms */}
          {note.keyTerms && note.keyTerms.length > 0 && (
            <Section icon={<BookOpen className="w-3.5 h-3.5" />} title="Key Terms" badge={note.keyTerms.length}>
              <div className="space-y-2">
                {note.keyTerms.map((term, index) => (
                  <div key={index} className="p-2.5 rounded-lg bg-zinc-800/40 border border-zinc-700/30">
                    <p className="text-[11px] text-amber-300 font-bold mb-0.5">{term.term}</p>
                    <p className="text-[11px] text-zinc-400 leading-relaxed">{term.definition}</p>
                  </div>
                ))}
              </div>
            </Section>
          )}

          {/* Literary devices */}
          {note.devices && note.devices.length > 0 && (
            <Section icon={<PenLineIcon />} title="Literary Devices">
              <div className="flex flex-wrap gap-1.5">
                {note.devices.map((device, index) => (
                  <span key={index} className="px-2 py-1 rounded-full bg-rose-500/10 border border-rose-500/20 text-[10px] text-rose-300 font-semibold">
                    {device}
                  </span>
                ))}
              </div>
            </Section>
          )}

          {/* Key people */}
          {note.keyPeople && note.keyPeople.length > 0 && (
            <Section icon={<Users className="w-3.5 h-3.5" />} title={note.subject === 'socio' ? 'Key Thinkers' : 'Key People / Characters'} badge={note.keyPeople.length}>
              <div className="space-y-2">
                {note.keyPeople.map((person, index) => (
                  <div key={index} className="p-2.5 rounded-lg bg-zinc-800/40 border border-zinc-700/30">
                    <p className="text-[11px] text-amber-300 font-bold mb-0.5">{person.name}</p>
                    <p className="text-[11px] text-zinc-400 leading-relaxed">{person.contribution}</p>
                  </div>
                ))}
              </div>
            </Section>
          )}

          {/* Character sketch */}
          {note.characterSketch && (
            <Section icon={<Users className="w-3.5 h-3.5" />} title="Character Sketch">
              <p className="text-[12px] text-zinc-400 leading-relaxed">{note.characterSketch}</p>
            </Section>
          )}

          {/* Quotes */}
          {note.quotes && note.quotes.length > 0 && (
            <Section icon={<Quote className="w-3.5 h-3.5" />} title="Important Quotes" badge={note.quotes.length}>
              <div className="space-y-2">
                {note.quotes.map((quote, index) => (
                  <div key={index} className="p-2.5 rounded-lg bg-amber-500/5 border border-amber-500/10">
                    <p className="text-[11px] text-amber-200 font-medium italic leading-relaxed">“{quote.text}”</p>
                    <p className="text-[11px] text-zinc-500 leading-relaxed mt-1">{quote.explanation}</p>
                  </div>
                ))}
              </div>
            </Section>
          )}

          {/* Exam questions */}
          {note.examQuestions && note.examQuestions.length > 0 && (
            <Section icon={<HelpCircle className="w-3.5 h-3.5" />} title="Exam Questions" badge={note.examQuestions.length}>
              <div className="space-y-2.5">
                {note.examQuestions.map((qa, index) => (
                  <div key={index} className="rounded-xl bg-zinc-800/40 border border-zinc-700/30 overflow-hidden">
                    <div className="flex items-start gap-2 px-3 py-2.5 bg-zinc-800/30">
                      <span className="pill bg-amber-500/15 text-amber-300 text-[9px] font-bold shrink-0 mt-0.5">Q{index + 1}</span>
                      <p className="text-[11px] text-zinc-200 font-semibold leading-relaxed">{qa.question}</p>
                    </div>
                    <div className="px-3 py-2.5">
                      <p className="text-[10px] text-amber-400/80 font-bold uppercase tracking-wide mb-1">Answer</p>
                      <p className="text-[11px] text-zinc-400 leading-relaxed">{qa.answer}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Section>
          )}

          {/* Word meanings */}
          {note.wordMeanings && note.wordMeanings.length > 0 && (
            <Section icon={<BookOpen className="w-3.5 h-3.5" />} title="Word Meanings" badge={note.wordMeanings.length}>
              <div className="grid grid-cols-1 gap-1.5">
                {note.wordMeanings.map((word, index) => (
                  <div key={index} className="flex items-start gap-2 text-[11px]">
                    <span className="text-rose-300 font-bold shrink-0">{word.word}</span>
                    <span className="text-zinc-500 leading-relaxed">— {word.meaning}</span>
                  </div>
                ))}
              </div>
            </Section>
          )}

          {/* Exam tips */}
          {note.examTips && note.examTips.length > 0 && (
            <Section icon={<Lightbulb className="w-3.5 h-3.5" />} title="Exam Tips">
              <div className="space-y-1.5">
                {note.examTips.map((tip, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <Target className="w-3 h-3 text-emerald-400 shrink-0 mt-0.5" strokeWidth={2} />
                    <span className="text-[11px] text-zinc-400 leading-relaxed">{tip}</span>
                  </div>
                ))}
              </div>
            </Section>
          )}

          <p className="text-center text-zinc-700 text-[9px] pt-2 pb-2">
            CBSE 2025-26 · {subjectLabel} · One Pager Notes
          </p>
        </div>
      </div>
    </div>
  );
}

function Section({
  icon,
  title,
  badge,
  children,
}: {
  icon: ReactNode;
  title: string;
  badge?: number;
  children: ReactNode;
}) {
  return (
    <div className="rounded-xl bg-zinc-900/40 border border-zinc-800/40 overflow-hidden">
      <div className="flex items-center gap-2 px-3 py-2.5 border-b border-zinc-800/40">
        <span className="text-amber-400">{icon}</span>
        <span className="text-[11px] font-bold text-zinc-300">{title}</span>
        {badge !== undefined && (
          <span className="pill bg-zinc-800/60 text-zinc-500 text-[9px] font-bold px-1.5">{badge}</span>
        )}
      </div>
      <div className="px-3 py-3">{children}</div>
    </div>
  );
}

function PenLineIcon() {
  return (
    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.862 4.487z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 7.125L16.862 4.487" />
    </svg>
  );
}
