import { useEffect, useMemo, useState, type ReactNode } from 'react';
import { Check, Copy, Download, Loader2 } from 'lucide-react';
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

function chapterHeading(note: OnePagerNote): string {
  return note.subject === 'english' ? note.chapterLabel.toUpperCase() : 'CHAPTER ' + note.chapter;
}

function buildPlainText(note: OnePagerNote): string {
  const lines: string[] = [];
  lines.push('CBSE CLASS 12 — ' + SUBJECT_LABELS[note.subject] + ' (' + SUBJECT_CODES[note.subject] + ')');
  lines.push(note.book + (note.section ? ' — ' + note.section : ''));
  lines.push(chapterHeading(note) + ': ' + note.title);
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
  if (note.keyPeople && note.keyPeople.length) {
    lines.push('');
    lines.push('KEY PEOPLE / THINKERS');
    note.keyPeople.forEach((person) => lines.push(person.name + ': ' + person.contribution));
  }
  if (note.characterSketch) {
    lines.push('');
    lines.push('CHARACTER SKETCH');
    lines.push(note.characterSketch);
  }
  if (note.quotes && note.quotes.length) {
    lines.push('');
    lines.push('IMPORTANT QUOTES');
    note.quotes.forEach((quote) => {
      lines.push('"' + quote.text + '"');
      lines.push('  ' + quote.explanation);
    });
  }
  if (note.examQuestions && note.examQuestions.length) {
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

function buildPrintHtml(note: OnePagerNote): string {
  const subject = SUBJECT_LABELS[note.subject];
  const code = SUBJECT_CODES[note.subject];
  const sections: string[] = [];

  const addSection = (title: string, body: string) => {
    if (!body) return;
    sections.push(
      '<section class="section"><h2><span class="num">' +
        String(sections.length + 1).padStart(2, '0') +
        '</span>' +
        escapeHtml(title) +
        '</h2>' +
        body +
        '</section>'
    );
  };

  addSection('Summary', '<p>' + escapeHtml(note.summary) + '</p>');
  addSection(
    'Key Points',
    '<ul>' + note.keyPoints.map((point) => '<li>' + escapeHtml(point) + '</li>').join('') + '</ul>'
  );
  if (note.keyTerms && note.keyTerms.length) {
    addSection(
      'Key Terms',
      note.keyTerms
        .map((term) => '<p><strong>' + escapeHtml(term.term) + ':</strong> ' + escapeHtml(term.definition) + '</p>')
        .join('')
    );
  }
  if (note.devices && note.devices.length) {
    addSection('Literary Devices', '<p>' + note.devices.map(escapeHtml).join(' · ') + '</p>');
  }
  if (note.keyPeople && note.keyPeople.length) {
    addSection(
      note.subject === 'socio' ? 'Key Thinkers' : 'Key People / Characters',
      note.keyPeople
        .map((person) => '<p><strong>' + escapeHtml(person.name) + ':</strong> ' + escapeHtml(person.contribution) + '</p>')
        .join('')
    );
  }
  if (note.characterSketch) {
    addSection('Character Sketch', '<p>' + escapeHtml(note.characterSketch) + '</p>');
  }
  if (note.quotes && note.quotes.length) {
    addSection(
      'Important Quotes',
      note.quotes
        .map(
          (quote) =>
            '<div class="quote"><p class="quote-text">“' +
            escapeHtml(quote.text) +
            '”</p>' +
            '<p class="quote-exp">' + escapeHtml(quote.explanation) + '</p>' +
            '</div>'
        )
        .join('')
    );
  }
  if (note.examQuestions && note.examQuestions.length) {
    addSection(
      'Exam Questions',
      note.examQuestions
        .map(
          (qa, index) =>
            '<div class="qa"><p class="q">Q' +
            (index + 1) +
            '. ' +
            escapeHtml(qa.question) +
            '</p><p class="a"><strong>Ans.</strong> ' +
            escapeHtml(qa.answer) +
            '</p></div>'
        )
        .join('')
    );
  }
  if (note.wordMeanings && note.wordMeanings.length) {
    addSection(
      'Word Meanings',
      note.wordMeanings
        .map((word) => '<p><strong>' + escapeHtml(word.word) + '</strong> — ' + escapeHtml(word.meaning) + '</p>')
        .join('')
    );
  }
  if (note.examTips && note.examTips.length) {
    addSection('Exam Tips', '<ol>' + note.examTips.map((tip) => '<li>' + escapeHtml(tip) + '</li>').join('') + '</ol>');
  }

  const meta = [
    chapterHeading(note),
    note.author ? 'Author: ' + note.author : '',
    note.marks ? note.marks + ' marks' : '',
  ].filter(Boolean).map(escapeHtml).join(' &nbsp;·&nbsp; ');

  return '<!doctype html><html><head><meta charset="utf-8"><title>' + escapeHtml(note.title) + '</title>' +
    '<style>' +
    '@page{size:210mm 297mm;margin:16mm 15mm}' +
    'body{font-family:Georgia,"Times New Roman",serif;font-size:10.8pt;line-height:1.55;color:#111;margin:0}' +
    '.doc-top{display:flex;justify-content:space-between;font-family:Arial,Helvetica,sans-serif;font-size:8pt;font-weight:700;text-transform:uppercase;letter-spacing:.12em;color:#555;border-bottom:1px solid #111;padding-bottom:3mm}' +
    '.book{margin-top:6mm;font-family:Arial,Helvetica,sans-serif;font-size:8.5pt;font-weight:700;text-transform:uppercase;letter-spacing:.16em;color:#8a5a00}' +
    'h1{font-size:23pt;line-height:1.15;margin:2mm 0 2mm;font-weight:700}' +
    '.meta{font-family:Arial,Helvetica,sans-serif;font-size:8.5pt;color:#555}' +
    '.rule{border-top:3px double #111;margin:4mm 0 6mm}' +
    '.section{margin-top:5.5mm}' +
    '.section h2{font-family:Arial,Helvetica,sans-serif;font-size:8.5pt;font-weight:700;text-transform:uppercase;letter-spacing:.14em;border-bottom:1px solid #bbb;padding-bottom:1.2mm;margin:0 0 2mm;color:#222;break-after:avoid}' +
    '.num{color:#a16207;margin-right:3mm}' +
    'p{margin:0 0 2mm}' +
    'ul,ol{margin:0 0 2mm;padding-left:5mm}' +
    'li{margin-bottom:1.4mm}' +
    'strong{font-weight:700}' +
    '.quote{margin:0 0 2.5mm;padding-left:3mm;border-left:2px solid #d6b25e}' +
    '.quote-text{margin:0;font-style:italic}' +
    '.quote-exp{margin:1mm 0 0;color:#555;font-size:9.5pt}' +
    '.qa{margin-bottom:3mm;break-inside:avoid}' +
    '.q{font-weight:700;margin-bottom:1mm}' +
    '.a{margin:0}' +
    '.footer{margin-top:8mm;padding-top:2mm;border-top:1px solid #ccc;font-family:Arial,Helvetica,sans-serif;font-size:8pt;color:#777;display:flex;justify-content:space-between}' +
    '@media screen{body{padding:16mm 15mm;max-width:840px;margin:0 auto}}' +
    '@media print{html,body{width:210mm;margin:0}}' +
    '</style></head><body>' +
    '<div class="doc-top"><span>CBSE Class 12 · ' + escapeHtml(subject) + ' (' + code + ')</span><span>Session 2025–26</span></div>' +
    '<div class="book">' + escapeHtml(note.book) + (note.section ? ' · ' + escapeHtml(note.section) : '') + '</div>' +
    '<h1>' + escapeHtml(note.title) + '</h1>' +
    '<div class="meta">' + meta + '</div>' +
    '<div class="rule"></div>' +
    sections.join('') +
    '<div class="footer"><span>One Pager Notes · StudyRev</span><span>Full notes</span></div>' +
    '</body></html>';
}

export function OnePagerNotes({ subject }: Props) {
  const notes = useMemo(() => getOnePagerNotes(subject), [subject]);
  const meta = ONE_PAGER_SUBJECTS.find((item) => item.id === subject);
  const [selectedId, setSelectedId] = useState(notes[0]?.id ?? '');
  const [copied, setCopied] = useState(false);
  const [pdfBusy, setPdfBusy] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const timer = setTimeout(() => setCopied(false), 1800);
    return () => clearTimeout(timer);
  }, [copied]);

  const note = notes.find((item) => item.id === selectedId) || notes[0];
  if (!note) return null;

  const subjectLabel = meta?.name || SUBJECT_LABELS[subject];
  const copyText = buildPlainText(note);

  const copyNotes = async () => {
    try {
      await navigator.clipboard.writeText(copyText);
      setCopied(true);
    } catch {
      const textarea = document.createElement('textarea');
      textarea.value = copyText;
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

  const openPrintFallback = () => {
    const win = window.open('', '_blank');
    if (!win) {
      copyNotes();
      return;
    }
    win.document.write(buildPrintHtml(note));
    win.document.close();
    win.focus();
    setTimeout(() => win.print(), 400);
  };

  const savePdf = async () => {
    if (pdfBusy) return;
    setPdfBusy(true);
    let frame: HTMLIFrameElement | null = null;
    try {
      const [{ jsPDF }, html2canvasModule] = await Promise.all([
        import('jspdf'),
        import('html2canvas'),
      ]);
      const html2canvas = html2canvasModule.default;

      frame = document.createElement('iframe');
      frame.style.position = 'fixed';
      frame.style.left = '-10000px';
      frame.style.top = '0';
      frame.style.width = '180mm';
      frame.style.height = '297mm';
      frame.style.border = '0';
      frame.style.opacity = '0';
      frame.setAttribute('scrolling', 'no');
      frame.style.overflow = 'hidden';
      frame.srcdoc = buildPrintHtml(note);
      const loaded = new Promise<void>((resolve) => {
        const timer = window.setTimeout(resolve, 2500);
        frame!.onload = () => {
          window.clearTimeout(timer);
          resolve();
        };
      });
      document.body.appendChild(frame);
      await loaded;

      const doc = frame.contentDocument;
      if (!doc) throw new Error('Could not prepare the PDF document.');
      const body = doc.body;
      body.style.margin = '0';
      body.style.padding = '0';
      body.style.width = '180mm';
      body.style.maxWidth = 'none';
      body.style.background = '#fffdf8';
      await doc.fonts.ready;

      const scale = 2;
      const canvas = await html2canvas(body, {
        scale,
        backgroundColor: '#fffdf8',
        useCORS: true,
        logging: false,
      });

      const scaleY = canvas.height / body.scrollHeight;
      const cssPerMm = body.scrollWidth / 180;
      const pageHeightCss = 265 * cssPerMm;
      const totalHeightCss = body.scrollHeight;
      const bodyRect = body.getBoundingClientRect();
      const breakpointMap = new Map<number, boolean>();
      const addBreakpoint = (y: number, canExtend: boolean) => {
        if (!Number.isFinite(y) || y < 0) return;
        breakpointMap.set(y, (breakpointMap.get(y) ?? false) || canExtend);
      };
      addBreakpoint(0, false);
      addBreakpoint(totalHeightCss, false);
      body
        .querySelectorAll<HTMLElement>(
          '.doc-top, .book, h1, .meta, .rule, .section, .section > p, .section > ul > li, .section > ol > li, .section > .quote, .section > .qa, .footer'
        )
        .forEach((node) => {
          const rect = node.getBoundingClientRect();
          const top = rect.top - bodyRect.top;
          const bottom = rect.bottom - bodyRect.top;
          if (top >= 0) addBreakpoint(top, false);
          if (bottom >= 0) addBreakpoint(bottom, true);
        });
      const breakpoints = [...breakpointMap.entries()]
        .map(([y, canExtend]) => ({ y, canExtend }))
        .sort((a, b) => a.y - b.y);

      const pageRanges: { start: number; end: number }[] = [];
      let start = 0;
      let guard = 0;
      while (start < totalHeightCss - 1 && guard < 200) {
        guard += 1;
        const limit = start + pageHeightCss;
        if (limit >= totalHeightCss - 1) {
          pageRanges.push({ start, end: totalHeightCss });
          break;
        }
        let end = 0;
        let canExtend = false;
        for (const point of breakpoints) {
          if (point.y > start + 12 && point.y <= limit) {
            end = point.y;
            canExtend = point.canExtend;
          }
        }
        if (!end) end = limit;
        else if (canExtend) end = Math.min(limit, end + 7);
        pageRanges.push({ start, end });
        start = end;
      }
      if (!pageRanges.length) pageRanges.push({ start: 0, end: totalHeightCss });

      const pdf = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4', compress: true });
      pdf.setProperties({
        title: note.title + ' — One Pager Notes',
        subject: 'CBSE Class 12 ' + subjectLabel,
        creator: 'StudyRev',
      });

      pageRanges.forEach((range, index) => {
        if (index > 0) pdf.addPage('a4', 'portrait');
        const sliceHeightPx = Math.max(1, Math.round((range.end - range.start) * scaleY));
        const slice = document.createElement('canvas');
        slice.width = canvas.width;
        slice.height = sliceHeightPx;
        const ctx = slice.getContext('2d');
        if (!ctx) throw new Error('Could not render the PDF page.');
        ctx.fillStyle = '#fffdf8';
        ctx.fillRect(0, 0, slice.width, slice.height);
        ctx.drawImage(
          canvas,
          0,
          Math.round(range.start * scaleY),
          canvas.width,
          sliceHeightPx,
          0,
          0,
          slice.width,
          slice.height
        );
        const image = slice.toDataURL('image/jpeg', 0.95);
        const heightMm = Math.min(265, (range.end - range.start) / cssPerMm);
        pdf.addImage(image, 'JPEG', 15, 16, 180, heightMm);
        pdf.setFont('helvetica', 'normal');
        pdf.setFontSize(8);
        pdf.setTextColor(120, 120, 120);
        pdf.text(index + 1 + ' / ' + pageRanges.length, 105, 289, { align: 'center' });
      });

      const titlePart = /[a-z0-9]/i.test(note.title) ? note.title : 'chapter-' + note.chapter;
      const filename = (subjectLabel + '-' + titlePart)
        .replace(/[^a-z0-9]+/gi, '-')
        .replace(/^-+|-+$/g, '')
        .toLowerCase();
      pdf.save(filename + '-a4.pdf');
    } catch {
      openPrintFallback();
    } finally {
      if (frame) frame.remove();
      setPdfBusy(false);
    }
  };

  const sections: { title: string; content: ReactNode }[] = [];
  sections.push({
    title: note.subject === 'english' && note.section === 'Poetry' ? 'Central Idea & Summary' : 'Summary',
    content: <p>{note.summary}</p>,
  });
  sections.push({
    title: 'Key Points',
    content: (
      <ul className="list-disc pl-5 space-y-1.5 marker:text-zinc-400">
        {note.keyPoints.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>
    ),
  });
  if (note.keyTerms && note.keyTerms.length) {
    sections.push({
      title: 'Key Terms',
      content: (
        <div className="space-y-1.5">
          {note.keyTerms.map((term, index) => (
            <p key={index}>
              <strong className="font-semibold text-zinc-900">{term.term}:</strong> {term.definition}
            </p>
          ))}
        </div>
      ),
    });
  }
  if (note.devices && note.devices.length) {
    sections.push({
      title: 'Literary Devices',
      content: <p>{note.devices.join(' · ')}</p>,
    });
  }
  if (note.keyPeople && note.keyPeople.length) {
    sections.push({
      title: note.subject === 'socio' ? 'Key Thinkers' : 'Key People / Characters',
      content: (
        <div className="space-y-2">
          {note.keyPeople.map((person, index) => (
            <p key={index}>
              <strong className="font-semibold text-zinc-900">{person.name}:</strong> {person.contribution}
            </p>
          ))}
        </div>
      ),
    });
  }
  if (note.characterSketch) {
    sections.push({
      title: 'Character Sketch',
      content: <p>{note.characterSketch}</p>,
    });
  }
  if (note.quotes && note.quotes.length) {
    sections.push({
      title: 'Important Quotes',
      content: (
        <div className="space-y-2.5">
          {note.quotes.map((quote, index) => (
            <div key={index} className="border-l-2 border-amber-500/60 pl-3">
              <p className="italic">“{quote.text}”</p>
              <p className="text-[11px] text-zinc-500 mt-1">{quote.explanation}</p>
            </div>
          ))}
        </div>
      ),
    });
  }
  if (note.examQuestions && note.examQuestions.length) {
    sections.push({
      title: 'Exam Questions',
      content: (
        <div className="space-y-3">
          {note.examQuestions.map((qa, index) => (
            <div key={index}>
              <p className="font-semibold text-zinc-900">Q{index + 1}. {qa.question}</p>
              <p className="mt-1"><strong className="font-semibold text-zinc-900">Ans.</strong> {qa.answer}</p>
            </div>
          ))}
        </div>
      ),
    });
  }
  if (note.wordMeanings && note.wordMeanings.length) {
    sections.push({
      title: 'Word Meanings',
      content: (
        <div className="space-y-1">
          {note.wordMeanings.map((word, index) => (
            <p key={index}>
              <strong className="font-semibold text-zinc-900">{word.word}</strong> — {word.meaning}
            </p>
          ))}
        </div>
      ),
    });
  }
  if (note.examTips && note.examTips.length) {
    sections.push({
      title: 'Exam Tips',
      content: (
        <ol className="list-decimal pl-5 space-y-1.5 marker:text-zinc-400">
          {note.examTips.map((tip, index) => (
            <li key={index}>{tip}</li>
          ))}
        </ol>
      ),
    });
  }

  return (
    <div className="flex flex-col h-full">
      {/* App toolbar */}
      <div className="shrink-0 px-4 pt-2 pb-2">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <span className={`pill border text-[9px] font-bold ${meta?.border || 'border-amber-500/20'} ${meta?.bg || 'bg-amber-500/[0.04]'} ${meta?.accent || 'text-amber-300'}`}>
              {subjectLabel}
            </span>
            <span className="pill bg-zinc-800/70 border border-zinc-700/50 text-zinc-400 text-[9px] font-bold">
              PDF preview
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

        <div className="flex items-center justify-between gap-2 mt-2">
          <span className="text-[9px] text-zinc-500 uppercase font-bold tracking-wide">Full note · all sections</span>
          <span className="text-zinc-600 text-[9px] font-semibold whitespace-nowrap">A4 PDF</span>
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
            {copied ? 'Copied for register' : 'Copy for register'}
          </button>
          <button
            onClick={savePdf}
            disabled={pdfBusy}
            className="flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-zinc-800/70 border border-zinc-700/50 text-zinc-300 text-[11px] font-bold active:bg-zinc-700/70 transition-colors disabled:opacity-50"
          >
            {pdfBusy ? <Loader2 className="w-3.5 h-3.5 animate-spin" strokeWidth={2} /> : <Download className="w-3.5 h-3.5" strokeWidth={2} />}
            {pdfBusy ? 'Building A4…' : 'Save A4 PDF'}
          </button>
        </div>
      </div>

      {/* Paper preview */}
      <div className="flex-1 min-h-0 overflow-y-auto no-scrollbar px-3 pb-8">
        <div className="mx-auto w-full max-w-[800px]">
          <p className="text-center text-zinc-600 text-[9px] uppercase tracking-[0.18em] font-semibold mb-2">
            Document preview — copy exactly this into your register
          </p>
          <article
            key={note.id}
            className="select-text bg-[#fffdf8] text-zinc-900 rounded-sm border border-zinc-300/60 shadow-[0_24px_70px_-24px_rgba(0,0,0,0.9)] px-5 py-6 sm:px-9 sm:py-9 animate-fade-in"
          >
            <div className="flex items-center justify-between gap-3 border-b border-zinc-900 pb-2">
              <span className="text-[8px] sm:text-[9px] font-bold uppercase tracking-[0.16em] text-zinc-600">
                CBSE Class 12 · {subjectLabel} ({SUBJECT_CODES[note.subject]})
              </span>
              <span className="text-[8px] sm:text-[9px] font-bold uppercase tracking-[0.16em] text-zinc-600">2025–26</span>
            </div>

            <div className="mt-5">
              <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-amber-700">
                {note.book}{note.section ? ' · ' + note.section : ''}
              </p>
              <h1 className="font-serif text-[24px] sm:text-[30px] leading-[1.12] font-bold text-zinc-900 mt-1.5">
                {note.title}
              </h1>
              <div className="flex flex-wrap gap-x-4 gap-y-1 text-[10px] sm:text-[11px] text-zinc-500 mt-2 font-sans">
                <span>{subject === 'english' ? note.chapterLabel : 'Chapter ' + note.chapter}</span>
                {note.author && <span>Author: {note.author}</span>}
                {note.marks ? <span>{note.marks} marks</span> : null}
              </div>
            </div>

            <div className="mt-4 border-t-[3px] border-double border-zinc-900" />

            <div className="mt-5 space-y-5 font-serif text-[12px] sm:text-[12.5px] leading-[1.7] text-zinc-800">
              {sections.map((section, index) => (
                <section key={section.title}>
                  <div className="flex items-baseline gap-3 border-b border-zinc-300 pb-1.5 mb-2.5">
                    <span className="text-[9px] font-black text-amber-700 tabular-nums font-sans">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <h2 className="text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.16em] text-zinc-800 font-sans">
                      {section.title}
                    </h2>
                  </div>
                  {section.content}
                </section>
              ))}
            </div>

            <div className="mt-8 border-t border-zinc-300 pt-3 flex items-center justify-between gap-3 text-[8px] sm:text-[9px] uppercase tracking-[0.12em] text-zinc-500 font-sans">
              <span>One Pager Notes · StudyRev</span>
              <span>Full notes</span>
            </div>
          </article>
          <p className="text-center text-zinc-600 text-[9px] mt-3 mb-2">
            Save PDF downloads a true A4 document.
          </p>
        </div>
      </div>
    </div>
  );
}
