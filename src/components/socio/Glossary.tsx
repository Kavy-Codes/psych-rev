import { useState, useMemo } from 'react';
import { socioGlossary, type SocioGlossaryTerm } from '../../data/socio/glossary';

interface Props {
  chapterRange: [number, number];
}

type CategoryFilter = 'all' | SocioGlossaryTerm['category'];

const CATEGORIES: { key: CategoryFilter; label: string }[] = [
  { key: 'all', label: 'All' },
  { key: 'demography', label: 'Demography' },
  { key: 'social-institution', label: 'Social Institution' },
  { key: 'inequality', label: 'Inequality' },
  { key: 'social-change', label: 'Social Change' },
  { key: 'media', label: 'Media' },
  { key: 'economy', label: 'Economy' },
  { key: 'theory', label: 'Theory' },
];

const CATEGORY_COLORS: Record<string, string> = {
  demography: 'bg-cyan-500/15 text-cyan-300 border-cyan-500/20',
  'social-institution': 'bg-teal-500/15 text-teal-300 border-teal-500/20',
  inequality: 'bg-rose-500/15 text-rose-300 border-rose-500/20',
  'social-change': 'bg-amber-500/15 text-amber-300 border-amber-500/20',
  media: 'bg-violet-500/15 text-violet-300 border-violet-500/20',
  economy: 'bg-emerald-500/15 text-emerald-300 border-emerald-500/20',
  theory: 'bg-blue-500/15 text-blue-300 border-blue-500/20',
};

export function SocioGlossary({ chapterRange }: Props) {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>('all');
  const [expandedTerm, setExpandedTerm] = useState<string | null>(null);
  const [start, end] = chapterRange;

  const filtered = useMemo(() => {
    let terms = start === 0 ? socioGlossary : socioGlossary.filter(t => {
      const term = t as SocioGlossaryTerm & { chapter?: number };
      return term.chapter !== undefined ? term.chapter >= start && term.chapter <= end : true;
    });
    if (selectedCategory !== 'all') {
      terms = terms.filter(t => t.category === selectedCategory);
    }
    if (search) {
      const q = search.toLowerCase();
      terms = terms.filter(t => t.term.toLowerCase().includes(q) || t.definition.toLowerCase().includes(q));
    }
    return terms;
  }, [start, end, selectedCategory, search]);

  return (
    <div className="flex flex-col h-full px-4 pt-2 pb-4 gap-2.5">
      <div className="relative shrink-0 animate-slide-down">
        <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <input
          type="text"
          value={search}
          onChange={e => setSearch(e.target.value)}
          placeholder="Search key terms..."
          className="w-full pl-9 pr-4 py-2.5 rounded-xl bg-zinc-900/60 border border-zinc-800/40 text-white text-sm placeholder-zinc-600 focus:outline-none focus:border-teal-500/30 transition-colors"
        />
      </div>

      {/* Category Tabs */}
      <div className="flex gap-1.5 overflow-x-auto no-scrollbar shrink-0 -mx-1 px-1">
        {CATEGORIES.map(cat => (
          <button
            key={cat.key}
            onClick={() => setSelectedCategory(cat.key)}
            className={`px-3 py-1.5 rounded-lg text-[10px] font-semibold whitespace-nowrap transition-all shrink-0 ${
              selectedCategory === cat.key
                ? 'bg-teal-500/20 text-teal-300 border border-teal-500/30'
                : 'bg-zinc-800/50 text-zinc-500 border border-zinc-700/50 active:bg-zinc-700/50'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      <p className="text-zinc-600 text-[10px] shrink-0">{filtered.length} terms</p>

      <div className="flex-1 min-h-0 overflow-y-auto no-scrollbar">
        <div className="animate-fade-in space-y-1">
          {filtered.map((t, i) => {
            const isOpen = expandedTerm === t.id;
            return (
              <button
                key={i}
                onClick={() => setExpandedTerm(isOpen ? null : t.id)}
                className="w-full text-left p-3 rounded-xl bg-zinc-900/40 border border-zinc-800/25 active:bg-zinc-800/40 transition-all"
              >
                <div className="flex items-center gap-2 mb-0.5">
                  <p className="text-white text-[13px] font-semibold flex-1">{t.term}</p>
                  <span className={`pill border text-[8px] font-bold ${CATEGORY_COLORS[t.category]}`}>
                    {t.category.replace('-', ' ')}
                  </span>
                </div>
                {isOpen ? (
                  <div className="mt-1.5 animate-slide-up">
                    <p className="text-zinc-400 text-[12px] leading-relaxed">{t.definition}</p>
                    {t.example && (
                      <div className="mt-2 p-2.5 rounded-lg bg-teal-500/5 border border-teal-500/10">
                        <p className="text-[10px] font-bold text-teal-400 mb-0.5">EXAMPLE</p>
                        <p className="text-[11px] text-zinc-400 leading-relaxed">{t.example}</p>
                      </div>
                    )}
                  </div>
                ) : (
                  <p className="text-zinc-600 text-[11px] mt-0.5 truncate">{t.definition}</p>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
