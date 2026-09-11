import { useState, useEffect, useCallback, useMemo, useRef, type ReactNode } from 'react';
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
import { ChapterPickerSingle, ChapterPickerRange } from './components/ChapterPicker';
import { MotivationalBanner } from './components/MotivationalBanner';

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
  'Devsena kā Gīt — Jaishankar Prasad, chāyāvād',
  'Saroj Smṛti — Nirala\'s elegy for daughter',
  'Yah Dīp Akelā — Agyeya\'s individualism',
  'Banāras — Kedarnath Singh\'s imagery',
  'Ek Kam, Satya — Vishnu Khare\'s satire',
  'Vasant Āyā — Raghuvir Sahay\'s nature',
  'Bharat-Rām — Tulsidas, brotherhood',
  'Barahmāsā — Jayasi, folk tradition',
];

const PSYCH_CHAPTERS = [
  { num: 0, name: 'All Chapters' },
  { num: 1, name: 'Ch1: Variations' },
  { num: 2, name: 'Ch2: Self & Personality' },
  { num: 3, name: 'Ch3: Life Challenges' },
  { num: 4, name: 'Ch4: Disorders' },
  { num: 5, name: 'Ch5: Therapy' },
  { num: 6, name: 'Ch6: Attitudes' },
  { num: 7, name: 'Ch7: Social Influence' },
];

const HINDI_CHAPTERS = [
  { num: 0, name: 'All Chapters' },
  // अंतरा काव्य खंड
  { num: 1, name: 'Ch1: देवसेना का गीत' },
  { num: 2, name: 'Ch2: गीत गाने दो मुझे' },
  { num: 3, name: 'Ch3: यह दीप अकेला' },
  { num: 4, name: 'Ch4: बनारस' },
  { num: 5, name: 'Ch5: एक कम, सत्य' },
  { num: 6, name: 'Ch6: वसंत आया' },
  { num: 7, name: 'Ch7: भरत-राम का प्रेम' },
  { num: 8, name: 'Ch8: बारहमासा' },
  { num: 9, name: 'Ch9: पद' },
  { num: 10, name: 'Ch10: रामचंद्रचंद्रिका' },
  { num: 11, name: 'Ch11: कवित्त, सवैया' },
  // अंतरा गद्य खंड
  { num: 12, name: 'Ch12: प्रेमघन की छाया-स्मृति' },
  { num: 13, name: 'Ch13: सुमिरिनी के मनके' },
  { num: 14, name: 'Ch14: कच्चा चिट्ठा' },
  { num: 15, name: 'Ch15: संवदिया' },
  { num: 16, name: 'Ch16: गाँधी, नेहरू, अराफ़ात' },
  { num: 17, name: 'Ch17: शेर, पहचान' },
  { num: 18, name: 'Ch18: जहाँ कोई वापसी नहीं' },
  { num: 19, name: 'Ch19: यथास्मै रोचते विश्वम्' },
  { num: 20, name: 'Ch20: दूसरा देवदास' },
  { num: 21, name: 'Ch21: कुटज' },
  // अंतराल
  { num: 22, name: 'A1: सूरदास की झोपड़ी' },
  { num: 23, name: 'A2: आरोहण' },
  { num: 24, name: 'A3: बिस्कोहर की माटी' },
  { num: 25, name: 'A4: अपना मालवा' },
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
  const [singleChapter, setSingleChapter] = useState(0);
  const [showChapters, setShowChapters] = useState(false);
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

  const chapters = subject === 'hindi' ? HINDI_CHAPTERS : PSYCH_CHAPTERS;

  const isRangeTab = activeTab === 'cards' || activeTab === 'quiz';

  const chapterLabel = useMemo(() => {
    if (isRangeTab) {
      if (chapterFilter === 0) return chapters[0].name;
      if (chapterFilter === chapterEnd) return chapters.find(c => c.num === chapterFilter)?.name || chapters[0].name;
      return chapters.filter(c => c.num >= chapterFilter && c.num <= chapterEnd).map(c => c.name).join(', ');
    }
    if (singleChapter === 0) return chapters[0].name;
    return chapters.find(c => c.num === singleChapter)?.name || chapters[0].name;
  }, [chapterFilter, chapterEnd, singleChapter, isRangeTab, chapters]);

  const isPsych = subject === 'psych';
  const isHindi = subject === 'hindi';
  const noChapterFilterTabs: Tab[] = isHindi
    ? ['home', 'books', 'writing', 'glossary']
    : ['home', 'distinctions', 'maps', 'notes'];
  const showChapterFilter = subject !== null && !noChapterFilterTabs.includes(activeTab);
  const nav = isHindi ? HINDI_NAV : PSYCH_NAV;

  const selectSubject = useCallback((s: Subject) => {
    setSubject(s);
    if (s) localStorage.setItem('studyrev-subject', s);
  }, []);

  const navigate = useCallback((tab: Tab) => {
    setActiveTab(tab);
    setShowChapters(false);
    setContentKey(k => k + 1);
  }, []);

  const renderContent = () => {
    if (isHindi) {
      switch (activeTab) {
        case 'home': return <HindiDashboard onNavigate={(t) => navigate(t as Tab)} onSelectChapter={(ch) => { setChapterFilter(ch); setChapterEnd(ch); navigate('cards'); }} onOpenPdf={() => setPdfOpen(true)} />;
        case 'cards': return <HindiFlashcards chapterRange={[chapterFilter, chapterEnd]} />;
        case 'notes': return <HindiChapterNotes singleChapter={singleChapter} />;
        case 'glossary': return <HindiGlossary singleChapter={singleChapter} />;
        case 'quiz': return <HindiQuiz chapterRange={[chapterFilter, chapterEnd]} />;
        case 'maps': return <HindiMindMaps singleChapter={singleChapter} />;
        case 'writing': return <HindiWriting />;
        case 'revisions': return <HindiRevisionNotes singleChapter={singleChapter} />;
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

  const subjectName = isHindi ? 'Hindi Elective' : 'Psychology';
  const subjectCode = isHindi ? '322' : '337';

  return (
    <div className="h-[100dvh] flex flex-col bg-warm-gradient text-zinc-100 overflow-hidden select-none">
      {/* Header */}
      <header className="shrink-0 safe-top">
        <div className="flex items-center justify-between px-4 py-3">
          <div className="flex items-center gap-2.5">
            <button
              onClick={() => { setSubject(null); localStorage.removeItem('studyrev-subject'); setActiveTab('home'); setChapterFilter(0); setChapterEnd(0); }}
              className="text-zinc-500 active:text-zinc-200 transition-colors press-scale"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <div>
              <h1 className={`font-black text-lg tracking-tight leading-none ${isHindi ? 'text-gradient-rose' : 'text-gradient'}`}>{subjectName}</h1>
              <p className="text-zinc-500 text-[10px] mt-0.5">{isHindi ? 'Hindi Elective' : 'Psychology'} — {subjectCode}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <p className="text-zinc-600 text-[10px] max-w-[140px] truncate hidden sm:block">{tips[tipIndex]}</p>
          </div>
        </div>

        {/* Chapter Filter */}
        {showChapterFilter && (
          <div className="px-4 pb-2">
            <button
              onClick={() => setShowChapters(!showChapters)}
              className="flex items-center gap-1.5 text-white text-xs font-semibold active:opacity-70 transition-opacity"
            >
              <span className={`pill border text-[10px] ${isHindi ? 'bg-rose-500/15 text-rose-300 border-rose-500/25' : 'bg-indigo-500/15 text-indigo-300 border-indigo-500/25'}`}>
                {isRangeTab
                  ? (chapterFilter === 0 ? 'ALL' : chapterFilter === chapterEnd ? `CH${chapterFilter}` : `CH${chapterFilter}–${chapterEnd}`)
                  : (singleChapter === 0 ? 'ALL' : `CH${singleChapter}`)
                }
              </span>
              <span className="text-zinc-400 text-[11px] max-w-[180px] truncate">{chapterLabel}</span>
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
            <div className="absolute left-0 right-0 z-30 bg-zinc-900 border-b border-zinc-700/50 shadow-2xl shadow-black/60 p-3 space-y-3 animate-slide-down max-h-[60vh] overflow-y-auto no-scrollbar">
              {isRangeTab ? (
                <ChapterPickerRange
                  from={chapterFilter}
                  to={chapterEnd}
                  onFromChange={setChapterFilter}
                  onToChange={setChapterEnd}
                  onAll={() => { setChapterFilter(0); setChapterEnd(0); }}
                  isHindi={isHindi}
                />
              ) : (
                <ChapterPickerSingle
                  selected={singleChapter}
                  onSelect={(n) => { setSingleChapter(n); setShowChapters(false); }}
                  onAll={() => { setSingleChapter(0); }}
                  isHindi={isHindi}
                />
              )}

              <button
                onClick={() => setShowChapters(false)}
                className={`w-full py-2 rounded-xl text-xs font-bold transition-all ${
                  isHindi ? 'bg-rose-600 active:bg-rose-700' : 'bg-indigo-600 active:bg-indigo-700'
                } text-white`}
              >
                Done
              </button>
            </div>
          </>
        )}

      </header>

      {/* Motivational Banner */}
      <div className="shrink-0 border-b border-zinc-800/20">
        <MotivationalBanner />
      </div>

      {/* Content */}
      <main className="flex-1 min-h-0 overflow-hidden">
        <div key={contentKey} className="h-full animate-fade-in">
          {renderContent()}
        </div>
      </main>

      {/* Bottom Nav */}
      <nav className="shrink-0 safe-bottom glass border-t border-zinc-700/30">
        <div ref={navScrollRef} className="flex overflow-x-auto no-scrollbar">
          {nav.map(item => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                data-tab={item.id}
                onClick={() => navigate(item.id)}
                className={`flex flex-col items-center justify-center gap-0.5 py-2.5 px-4 min-w-[60px] shrink-0 transition-all duration-200 relative ${
                  isActive
                    ? isHindi ? 'text-rose-400' : 'text-indigo-400'
                    : 'text-zinc-500 active:text-zinc-300'
                }`}
              >
                <div className={`transition-all duration-300 ${isActive ? 'scale-110 animate-spring' : 'scale-100'}`}>
                  {item.icon}
                </div>
                <span className={`text-[9px] leading-none mt-0.5 transition-all duration-200 ${isActive ? 'font-bold' : 'font-medium'}`}>{item.label}</span>
                {isActive && (
                  <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-8 h-[2.5px] rounded-full transition-all duration-300 ${isHindi ? 'bg-rose-400 glow-rose' : 'bg-indigo-400 glow-indigo'}`} />
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
