import { useState, useEffect, useCallback, useRef, type ReactNode } from 'react';
import { SubjectSelector } from './components/SubjectSelector';
import { Dashboard as PsychDashboard } from './components/psych/Dashboard';
import { Flashcards as PsychFlashcards } from './components/psych/Flashcards';
import { MindMaps as PsychMindMaps } from './components/psych/MindMaps';
import { Distinctions } from './components/psych/Distinctions';
import { Matcher } from './components/psych/Matcher';
import { Quiz as PsychQuiz } from './components/psych/Quiz';
import { PdfDrawer } from './components/PdfDrawer';
import { Glossary as PsychGlossary } from './components/psych/Glossary';
import { ChapterNotes as PsychChapterNotes } from './components/psych/ChapterNotes';
import { HindiDashboard } from './components/hindi/Dashboard';
import { HindiFlashcards } from './components/hindi/Flashcards';
import { HindiQuiz } from './components/hindi/Quiz';
import { HindiGlossary } from './components/hindi/Glossary';
import { HindiMindMaps } from './components/hindi/MindMaps';
import { HindiWriting } from './components/hindi/Writing';
import { HindiChapterNotes } from './components/hindi/ChapterNotes';
import { HindiRevisionNotes } from './components/hindi/RevisionNotes';
import { HindiBooks } from './components/hindi/Books';
import { InstallBanner } from './components/InstallBanner';

type Subject = 'psych' | 'hindi' | null;
type Tab = 'home' | 'cards' | 'notes' | 'glossary' | 'quiz' | 'matcher' | 'maps' | 'distinctions' | 'writing' | 'revisions' | 'books';

const PSYCH_TIPS = [
  "Gardner's 8 intelligences — frequent 4/6 marker.",
  "Selye's GAS: Alarm → Resistance → Exhaustion.",
  "Positive = excesses. Negative = deficits.",
  "Lazarus: Primary = what? Secondary = coping?",
  "Type A → CHD. Type C → Cancer.",
  "Diathesis + Stress = Disorder.",
  "Conformity ≠ Obedience.",
  "Big Five = OCEAN.",
];

const HINDI_TIPS = [
  'Aatmaparichay — Bachchan\'s autobiographical poem',
  'Patang — Alok Dhanva\'s freedom poem',
  'Kavitawali — Tulsidas, Ramcharitmanas',
  'Kaimre Mein Band Apahij — Raghubir Sahay',
  'Badal Raag — Nirala\'s nature poetry',
  'Bhaktin — Mahadevi Verma\'s memoir',
  'Bazaar Darshan — Jainendra Kumar\'s satire',
  'Anuprast Alankar — repetition of sound',
];

const PSYCH_NAV: { id: Tab; label: string; icon: ReactNode }[] = [
  { id: 'home', label: 'Home', icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" /></svg> },
  { id: 'cards', label: 'Cards', icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L12 12.75 6.429 9.75m11.142 0l4.179 2.25-9.75 5.25-9.75-5.25 4.179-2.25" /></svg> },
  { id: 'notes', label: 'Notes', icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25v14.25m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" /></svg> },
  { id: 'quiz', label: 'Quiz', icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" /></svg> },
  { id: 'glossary', label: 'Terms', icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25v14.25m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" /></svg> },
  { id: 'matcher', label: 'Match', icon: <span className="text-lg leading-none">🧩</span> },
  { id: 'maps', label: 'Maps', icon: <span className="text-lg leading-none">🗺️</span> },
  { id: 'distinctions', label: 'Compare', icon: <span className="text-lg leading-none">⚖️</span> },
];

const HINDI_NAV: { id: Tab; label: string; icon: ReactNode }[] = [
  { id: 'revisions', label: 'Start', icon: <span className="text-lg leading-none">📚</span> },
  { id: 'home', label: 'Home', icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" /></svg> },
  { id: 'books', label: 'Books', icon: <span className="text-lg leading-none">📖</span> },
  { id: 'cards', label: 'Cards', icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L12 12.75 6.429 9.75m11.142 0l4.179 2.25-9.75 5.25-9.75-5.25 4.179-2.25" /></svg> },
  { id: 'notes', label: 'Notes', icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25v14.25m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" /></svg> },
  { id: 'quiz', label: 'Quiz', icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" /></svg> },
  { id: 'glossary', label: 'Terms', icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25v14.25m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" /></svg> },
  { id: 'maps', label: 'Maps', icon: <span className="text-lg leading-none">🗺️</span> },
  { id: 'writing', label: 'Writing', icon: <span className="text-lg leading-none">✍️</span> },
];

export default function App() {
  const [subject, setSubject] = useState<Subject>(() => {
    const saved = localStorage.getItem('studyrev-subject');
    return (saved === 'psych' || saved === 'hindi') ? saved : null;
  });
  const [activeTab, setActiveTab] = useState<Tab>('home');
  const [chapterFilter, setChapterFilter] = useState(0);
  const [chapterEnd, setChapterEnd] = useState(0);
  const [pdfOpen, setPdfOpen] = useState(false);
  const [tipIndex, setTipIndex] = useState(0);
  const [contentKey, setContentKey] = useState(0);

  const tips = subject === 'hindi' ? HINDI_TIPS : PSYCH_TIPS;

  useEffect(() => {
    const interval = setInterval(() => setTipIndex(i => (i + 1) % tips.length), 8000);
    return () => clearInterval(interval);
  }, [tips.length]);

  const navScrollRef = useRef<HTMLDivElement>(null);

  // Auto-scroll nav to center active tab
  useEffect(() => {
    if (!navScrollRef.current) return;
    const container = navScrollRef.current;
    const activeEl = container.querySelector(`[data-tab="${activeTab}"]`);
    if (activeEl) {
      const containerRect = container.getBoundingClientRect();
      const elRect = activeEl.getBoundingClientRect();
      const scrollLeft = elRect.left - containerRect.left - (containerRect.width / 2) + (elRect.width / 2);
      container.scrollTo({ left: Math.max(0, scrollLeft), behavior: 'smooth' });
    }
  }, [activeTab]);

  const isPsych = subject === 'psych';
  const isHindi = subject === 'hindi';
  const nav = isHindi ? HINDI_NAV : PSYCH_NAV;

  const selectSubject = useCallback((s: Subject) => {
    setSubject(s);
    if (s) localStorage.setItem('studyrev-subject', s);
  }, []);

  const navigate = useCallback((tab: Tab) => {
    setActiveTab(tab);
    setContentKey(k => k + 1);
  }, []);

  const renderContent = () => {
    if (isHindi) {
      switch (activeTab) {
        case 'home': return <HindiDashboard onNavigate={(t) => navigate(t as Tab)} onSelectChapter={(ch) => { setChapterFilter(ch); setChapterEnd(ch); navigate('cards'); }} onOpenPdf={() => setPdfOpen(true)} />;
        case 'cards': return <HindiFlashcards chapterRange={[chapterFilter, chapterEnd]} />;
        case 'notes': return <HindiChapterNotes />;
        case 'glossary': return <HindiGlossary />;
        case 'quiz': return <HindiQuiz chapterRange={[chapterFilter, chapterEnd]} />;
        case 'maps': return <HindiMindMaps />;
        case 'writing': return <HindiWriting />;
        case 'revisions': return <HindiRevisionNotes />;
        case 'books': return <HindiBooks />;
        default: return <HindiDashboard onNavigate={(t) => navigate(t as Tab)} onSelectChapter={(ch) => { setChapterFilter(ch); setChapterEnd(ch); navigate('cards'); }} onOpenPdf={() => setPdfOpen(true)} />;
      }
    }
    // Psychology
    switch (activeTab) {
      case 'home': return <PsychDashboard onNavigate={(t) => navigate(t as Tab)} onSelectChapter={(ch) => { setChapterFilter(ch); setChapterEnd(ch); navigate('cards'); }} onOpenPdf={() => setPdfOpen(true)} />;
      case 'cards': return <PsychFlashcards chapterRange={[chapterFilter, chapterEnd]} />;
      case 'notes': return <PsychChapterNotes />;
      case 'glossary': return <PsychGlossary chapterRange={[chapterFilter, chapterEnd]} />;
      case 'quiz': return <PsychQuiz chapterRange={[chapterFilter, chapterEnd]} />;
      case 'matcher': return <Matcher chapterRange={[chapterFilter, chapterEnd]} />;
      case 'maps': return <PsychMindMaps />;
      case 'distinctions': return <Distinctions />;
      default: return <PsychDashboard onNavigate={(t) => navigate(t as Tab)} onSelectChapter={(ch) => { setChapterFilter(ch); setChapterEnd(ch); navigate('cards'); }} onOpenPdf={() => setPdfOpen(true)} />;
    }
  };

  // Subject selector
  if (!subject) {
    return <SubjectSelector onSelect={selectSubject} />;
  }

  const subjectName = isHindi ? 'Hindi Core' : 'Psychology';
  const subjectCode = isHindi ? '302' : '337';

  return (
    <div className="h-[100dvh] flex flex-col bg-zinc-950 text-zinc-100 overflow-hidden select-none">
      {/* Header */}
      <header className="shrink-0 safe-top">
        <div className="flex items-center justify-between px-4 py-2">
          <div className="flex items-center gap-2">
            <button
              onClick={() => { setSubject(null); localStorage.removeItem('studyrev-subject'); setActiveTab('home'); setChapterFilter(0); setChapterEnd(0); }}
              className="text-zinc-600 active:text-zinc-300 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <div>
              <h1 className={`font-black text-lg tracking-tight leading-none ${isHindi ? 'text-rose-400' : 'text-gradient'}`}>{subjectName}</h1>
              <p className="text-zinc-600 text-[10px] mt-0.5">{isHindi ? 'Hindi Core' : 'Psychology'} — {subjectCode}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <p className="text-zinc-600 text-[10px] max-w-[140px] truncate hidden sm:block">{tips[tipIndex]}</p>
          </div>
        </div>

      </header>

      {/* Tip Banner */}
      <div className="sm:hidden px-4 py-1.5 border-b border-zinc-800/20 shrink-0 overflow-hidden">
        <p className="text-zinc-600 text-[10px] text-center leading-tight truncate">
          {tips[tipIndex]}
        </p>
      </div>

      {/* Content */}
      <main className="flex-1 min-h-0 overflow-hidden">
        <div key={contentKey} className="h-full animate-fade-in">
          {renderContent()}
        </div>
      </main>

      {/* Bottom Nav */}
      <nav className="shrink-0 safe-bottom bg-zinc-900/95 backdrop-blur-xl border-t border-zinc-800/40">
        <div ref={navScrollRef} className="flex overflow-x-auto no-scrollbar">
          {nav.map(item => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                data-tab={item.id}
                onClick={() => navigate(item.id)}
                className={`flex flex-col items-center justify-center gap-0.5 py-2 px-4 min-w-[60px] shrink-0 transition-all duration-300 relative ${
                  isActive
                    ? isHindi ? 'text-rose-400' : 'text-indigo-400'
                    : 'text-zinc-500'
                }`}
              >
                <div className={`transition-transform duration-300 ${isActive ? 'scale-110' : 'scale-100'}`}>
                  {item.icon}
                </div>
                <span className={`text-[9px] leading-none mt-0.5 transition-all duration-300 ${isActive ? 'font-bold' : 'font-medium'}`}>{item.label}</span>
                {isActive && (
                  <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-6 h-[2px] rounded-full transition-all duration-300 ${isHindi ? 'bg-rose-400' : 'bg-indigo-400'}`} />
                )}
              </button>
            );
          })}
        </div>
      </nav>

      <PdfDrawer isOpen={pdfOpen} onClose={() => setPdfOpen(false)} />
      <InstallBanner />
    </div>
  );
}
