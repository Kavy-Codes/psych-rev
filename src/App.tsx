import { useState, useEffect, useCallback, useMemo, useRef, type ReactNode } from 'react';
import { SubjectSelector } from './components/SubjectSelector';
import { HindiComingSoon } from './components/HindiComingSoon';
import { Dashboard } from './components/psych/Dashboard';
import { Flashcards } from './components/psych/Flashcards';
import { MindMaps } from './components/psych/MindMaps';
import { Distinctions } from './components/psych/Distinctions';
import { Matcher } from './components/psych/Matcher';
import { Quiz } from './components/psych/Quiz';
import { PdfDrawer } from './components/PdfDrawer';
import { Glossary } from './components/psych/Glossary';
import { ChapterNotes } from './components/psych/ChapterNotes';

type Subject = 'psych' | 'hindi' | null;
type PsychTab = 'home' | 'cards' | 'notes' | 'glossary' | 'quiz' | 'matcher' | 'maps' | 'distinctions';

const CHAPTERS = [
  { num: 0, name: 'All Chapters' },
  { num: 1, name: 'Ch1: Variations' },
  { num: 2, name: 'Ch2: Self & Personality' },
  { num: 3, name: 'Ch3: Life Challenges' },
  { num: 4, name: 'Ch4: Disorders' },
  { num: 5, name: 'Ch5: Therapy' },
  { num: 6, name: 'Ch6: Attitudes' },
  { num: 7, name: 'Ch7: Social Influence' },
];

const TIPS = [
  "Gardner's 8 intelligences — frequent 4/6 marker.",
  "Selye's GAS: Alarm → Resistance → Exhaustion.",
  "Positive = excesses. Negative = deficits.",
  "Lazarus: Primary = what? Secondary = coping?",
  "Type A → CHD. Type C → Cancer.",
  "Diathesis + Stress = Disorder.",
  "Conformity ≠ Obedience.",
  "Big Five = OCEAN.",
  "Define → Explain → Example.",
  "Draw diagrams in long answers.",
];

const PSYCH_NAV: { id: PsychTab; label: string; icon: ReactNode }[] = [
  { id: 'home', label: 'Home', icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" /></svg> },
  { id: 'cards', label: 'Cards', icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L12 12.75 6.429 9.75m11.142 0l4.179 2.25-9.75 5.25-9.75-5.25 4.179-2.25" /></svg> },
  { id: 'notes', label: 'Notes', icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25v14.25m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" /></svg> },
  { id: 'quiz', label: 'Quiz', icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" /></svg> },
  { id: 'glossary', label: 'Terms', icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25v14.25m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" /></svg> },
  { id: 'matcher', label: 'Match', icon: <span className="text-lg leading-none">🧩</span> },
  { id: 'maps', label: 'Maps', icon: <span className="text-lg leading-none">🗺️</span> },
  { id: 'distinctions', label: 'Compare', icon: <span className="text-lg leading-none">⚖️</span> },
];

export default function App() {
  const [subject, setSubject] = useState<Subject>(() => {
    const saved = localStorage.getItem('studyrev-subject');
    return (saved === 'psych' || saved === 'hindi') ? saved : null;
  });
  const [activeTab, setActiveTab] = useState<PsychTab>('home');
  const [chapterFilter, setChapterFilter] = useState(0);
  const [chapterEnd, setChapterEnd] = useState(0);
  const [showChapters, setShowChapters] = useState(false);
  const [pdfOpen, setPdfOpen] = useState(false);
  const [tipIndex, setTipIndex] = useState(0);
  const [contentKey, setContentKey] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setTipIndex(i => (i + 1) % TIPS.length), 8000);
    return () => clearInterval(interval);
  }, []);

  const [showScrollHint, setShowScrollHint] = useState(true);
  const navScrollRef = useRef<HTMLDivElement>(null);

  const handleNavScroll = useCallback(() => {
    if (showScrollHint) setShowScrollHint(false);
  }, [showScrollHint]);

  const chapterLabel = useMemo(() => {
    if (chapterFilter === 0) return 'All Chapters';
    if (chapterFilter === chapterEnd) return CHAPTERS.find(c => c.num === chapterFilter)?.name || 'All';
    return `Ch ${chapterFilter}–${chapterEnd}`;
  }, [chapterFilter, chapterEnd]);
  const showChapterFilter = subject === 'psych' && activeTab !== 'home' && activeTab !== 'distinctions' && activeTab !== 'maps' && activeTab !== 'notes';

  const selectSubject = useCallback((s: Subject) => {
    setSubject(s);
    if (s) localStorage.setItem('studyrev-subject', s);
  }, []);

  const navigate = useCallback((tab: PsychTab) => {
    setActiveTab(tab);
    setShowChapters(false);
    setContentKey(k => k + 1);
  }, []);

  const renderPsychContent = () => {
    switch (activeTab) {
      case 'home': return <Dashboard onNavigate={(t) => navigate(t as PsychTab)} onSelectChapter={(ch) => { setChapterFilter(ch); setChapterEnd(ch); navigate('cards'); }} onOpenPdf={() => setPdfOpen(true)} />;
      case 'cards': return <Flashcards chapterRange={[chapterFilter, chapterEnd]} />;
      case 'notes': return <ChapterNotes />;
      case 'glossary': return <Glossary chapterRange={[chapterFilter, chapterEnd]} />;
      case 'quiz': return <Quiz chapterRange={[chapterFilter, chapterEnd]} />;
      case 'matcher': return <Matcher chapterRange={[chapterFilter, chapterEnd]} />;
      case 'maps': return <MindMaps />;
      case 'distinctions': return <Distinctions />;
      default: return <Dashboard onNavigate={(t) => navigate(t as PsychTab)} onSelectChapter={(ch) => { setChapterFilter(ch); setChapterEnd(ch); navigate('cards'); }} onOpenPdf={() => setPdfOpen(true)} />;
    }
  };

  // Subject selector
  if (!subject) {
    return <SubjectSelector onSelect={selectSubject} />;
  }

  // Hindi coming soon
  if (subject === 'hindi') {
    return <HindiComingSoon onBack={() => { setSubject(null); localStorage.removeItem('studyrev-subject'); }} />;
  }

  // Psychology app (full)
  return (
    <div className="h-[100dvh] flex flex-col bg-zinc-950 text-zinc-100 overflow-hidden select-none">
      {/* Header */}
      <header className="shrink-0 safe-top">
        <div className="flex items-center justify-between px-4 py-2">
          <div className="flex items-center gap-2">
            <button
              onClick={() => { setSubject(null); localStorage.removeItem('studyrev-subject'); }}
              className="text-zinc-600 active:text-zinc-300 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <div>
              <h1 className="text-gradient font-black text-lg tracking-tight leading-none">मनोविज्ञान</h1>
              <p className="text-zinc-600 text-[10px] mt-0.5">Psychology — 337</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <p className="text-zinc-600 text-[10px] max-w-[140px] truncate hidden sm:block">{TIPS[tipIndex]}</p>
            <button
              onClick={() => setPdfOpen(true)}
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-indigo-600/15 border border-indigo-500/25 text-indigo-300 text-[11px] font-semibold active:bg-indigo-600/25 active:scale-95 transition-all"
            >
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
              </svg>
              PDFs
            </button>
          </div>
        </div>

        {/* Chapter Filter */}
        {showChapterFilter && (
          <div className="px-4 pb-2">
            <button
              onClick={() => setShowChapters(!showChapters)}
              className="flex items-center gap-1.5 text-white text-xs font-semibold active:opacity-70 transition-opacity"
            >
              <span className="pill bg-indigo-500/15 text-indigo-300 border border-indigo-500/25 text-[10px]">
                {chapterFilter === 0 ? 'ALL' : chapterFilter === chapterEnd ? `CH${chapterFilter}` : `CH${chapterFilter}–${chapterEnd}`}
              </span>
              <span className="text-zinc-400 text-[11px]">{chapterLabel.replace(/^Ch\d+:\s*/, '')}</span>
              <svg className={`w-3 h-3 text-zinc-600 transition-transform duration-200 ${showChapters ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
        )}

        {/* Chapter Range Dropdown */}
        {showChapters && (
          <>
            <div className="fixed inset-0 z-20 bg-black/30 animate-fade-in" onClick={() => setShowChapters(false)} />
            <div className="absolute left-0 right-0 z-30 bg-zinc-900 border-b border-zinc-700/50 shadow-2xl shadow-black/60 p-3 space-y-3 animate-slide-down">
              <button
                onClick={() => { setChapterFilter(0); setChapterEnd(0); setShowChapters(false); }}
                className={`w-full p-2.5 rounded-xl text-xs font-semibold text-left transition-all duration-150 ${
                  chapterFilter === 0
                    ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/20'
                    : 'bg-zinc-800/60 text-zinc-400 active:bg-zinc-700/60 active:scale-[0.97]'
                }`}
              >
                All Chapters (1–7)
              </button>

              <div className="flex gap-2">
                <div className="flex-1">
                  <p className="text-zinc-500 text-[10px] font-semibold uppercase tracking-wider mb-1">From</p>
                  <div className="grid grid-cols-4 gap-1">
                    {[1,2,3,4,5,6,7].map(n => (
                      <button
                        key={n}
                        onClick={() => {
                          setChapterFilter(n);
                          if (chapterEnd < n) setChapterEnd(n);
                        }}
                        className={`py-1.5 rounded-lg text-[11px] font-semibold transition-all ${
                          chapterFilter === n && chapterFilter !== 0
                            ? 'bg-indigo-600 text-white'
                            : 'bg-zinc-800/50 text-zinc-400 active:bg-zinc-700/50'
                        }`}
                      >
                        {n}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="flex-1">
                  <p className="text-zinc-500 text-[10px] font-semibold uppercase tracking-wider mb-1">To</p>
                  <div className="grid grid-cols-4 gap-1">
                    {[1,2,3,4,5,6,7].map(n => (
                      <button
                        key={n}
                        onClick={() => {
                          setChapterEnd(n);
                          if (chapterFilter > n) setChapterFilter(n);
                        }}
                        className={`py-1.5 rounded-lg text-[11px] font-semibold transition-all ${
                          chapterEnd === n && chapterFilter !== 0
                            ? 'bg-violet-600 text-white'
                            : 'bg-zinc-800/50 text-zinc-400 active:bg-zinc-700/50'
                        }`}
                      >
                        {n}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <button
                onClick={() => setShowChapters(false)}
                className="w-full py-2 rounded-xl bg-zinc-800/60 text-zinc-300 text-xs font-semibold active:bg-zinc-700/60 active:scale-[0.97] transition-all"
              >
                Done
              </button>
            </div>
          </>
        )}
      </header>

      {/* Tip Banner */}
      <div className="sm:hidden px-4 py-1.5 border-b border-zinc-800/20 shrink-0 overflow-hidden">
        <p className="text-zinc-600 text-[10px] text-center leading-tight truncate">
          {TIPS[tipIndex]}
        </p>
      </div>

      {/* Content */}
      <main className="flex-1 min-h-0 overflow-hidden">
        <div key={contentKey} className="h-full animate-fade-in">
          {renderPsychContent()}
        </div>
      </main>

      {/* Bottom Nav */}
      <nav className="shrink-0 safe-bottom bg-zinc-900/95 backdrop-blur-xl border-t border-zinc-800/40 relative">
        {showScrollHint && (
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-zinc-900 via-zinc-900/90 to-transparent z-10 pointer-events-none" />
        )}

        <div ref={navScrollRef} onScroll={handleNavScroll} className="flex overflow-x-auto no-scrollbar relative">
          {PSYCH_NAV.map(item => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => navigate(item.id)}
                className={`flex flex-col items-center justify-center gap-0.5 py-2 px-3 min-w-[60px] shrink-0 transition-all duration-150 relative ${
                  isActive ? 'text-indigo-400' : 'text-zinc-500 active:text-zinc-300'
                }`}
              >
                {item.icon}
                <span className="text-[9px] font-semibold leading-none mt-0.5">{item.label}</span>
                {isActive && <div className="absolute top-0 left-1/2 -translate-x-1/2 w-5 h-0.5 rounded-full bg-indigo-400 animate-scale-in" />}
              </button>
            );
          })}

          {showScrollHint && (
            <div className="flex items-center shrink-0 pr-2 pl-1 pointer-events-none">
              <div className="flex items-center gap-1 bg-indigo-500/15 border border-indigo-500/30 rounded-full px-2 py-1 scroll-hint-pill">
                <span className="text-[10px] font-bold text-indigo-300 tracking-wide">swipe</span>
                <svg className="w-3 h-3 text-indigo-400 scroll-hint-arrow" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          )}
        </div>
      </nav>

      <PdfDrawer isOpen={pdfOpen} onClose={() => setPdfOpen(false)} />
    </div>
  );
}
