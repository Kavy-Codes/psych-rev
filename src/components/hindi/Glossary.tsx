import { useState, useMemo } from 'react';
import { hindiGlossary, type HindiGlossaryTerm } from '../../data/hindi/glossary';

const CATEGORY_LABELS: Record<string, string> = {
  alankar: 'अलंकार',
  chhand: 'छंद',
  samas: 'समास',
  vachya: 'वाच्य',
  shabd: 'शब्द भेद',
  muhavara: 'मुहावरे',
};

const CATEGORY_COLORS: Record<string, string> = {
  alankar: 'bg-rose-500/15 text-rose-300 border-rose-500/30',
  chhand: 'bg-amber-500/15 text-amber-300 border-amber-500/30',
  samas: 'bg-violet-500/15 text-violet-300 border-violet-500/30',
  vachya: 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30',
  shabd: 'bg-cyan-500/15 text-cyan-300 border-cyan-500/30',
  muhavara: 'bg-fuchsia-500/15 text-fuchsia-300 border-fuchsia-500/30',
};

export function HindiGlossary({ singleChapter }: { singleChapter?: number }) {
  const [search, setSearch] = useState('');
  const [expandedTerm, setExpandedTerm] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filtered = useMemo(() => {
    let terms = [...hindiGlossary];
    if (selectedCategory) {
      terms = terms.filter(t => t.category === selectedCategory);
    }
    if (search) {
      const q = search.toLowerCase();
      terms = terms.filter(t => t.term.toLowerCase().includes(q) || t.definition.toLowerCase().includes(q));
    }
    return terms;
  }, [search, selectedCategory]);

  const grouped = useMemo(() => {
    const map = new Map<string, HindiGlossaryTerm[]>();
    filtered.forEach(t => {
      const arr = map.get(t.category) || [];
      arr.push(t);
      map.set(t.category, arr);
    });
    return [...map.entries()].sort(([a], [b]) => a.localeCompare(b));
  }, [filtered]);

  return (
    <div className="flex flex-col h-full px-4 pt-2 pb-4 gap-2.5">
      {/* Search */}
      <div className="relative shrink-0 animate-slide-down">
        <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <input
          type="text"
          value={search}
          onChange={e => setSearch(e.target.value)}
          placeholder="शब्द खोजें..."
          className="w-full pl-9 pr-4 py-2.5 rounded-xl bg-zinc-900/60 border border-zinc-800/40 text-white text-sm placeholder-zinc-600 focus:outline-none focus:border-rose-500/30 transition-colors"
        />
      </div>

      {/* Category filter */}
      <div className="flex gap-1.5 overflow-x-auto no-scrollbar shrink-0">
        <button
          onClick={() => setSelectedCategory(null)}
          className={`px-2.5 py-1 rounded-lg text-[10px] font-semibold whitespace-nowrap transition-all shrink-0 ${
            !selectedCategory
              ? 'bg-rose-600 text-white'
              : 'bg-zinc-800/50 text-zinc-400 border border-zinc-700/50'
          }`}
        >
          सभी
        </button>
        {Object.entries(CATEGORY_LABELS).map(([key, label]) => (
          <button
            key={key}
            onClick={() => setSelectedCategory(selectedCategory === key ? null : key)}
            className={`px-2.5 py-1 rounded-lg text-[10px] font-semibold whitespace-nowrap transition-all shrink-0 ${
              selectedCategory === key
                ? 'bg-rose-600 text-white'
                : 'bg-zinc-800/50 text-zinc-400 border border-zinc-700/50'
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      <p className="text-zinc-600 text-[10px] shrink-0">{filtered.length} शब्द</p>

      {/* Terms */}
      <div className="flex-1 min-h-0 overflow-y-auto no-scrollbar">
        <div className="animate-fade-in">
          {grouped.map(([cat, terms]) => (
            <div key={cat} className="mb-3">
              <p className="text-zinc-500 text-[10px] font-semibold uppercase tracking-widest mb-1.5 sticky top-0 bg-zinc-950/90 backdrop-blur-sm py-1">
                {CATEGORY_LABELS[cat] || cat}
              </p>
              <div className="space-y-1">
                {terms.map((t, i) => {
                  const key = `${t.category}-${t.term}`;
                  const isOpen = expandedTerm === key;
                  return (
                    <button
                      key={i}
                      onClick={() => setExpandedTerm(isOpen ? null : key)}
                      className="w-full text-left p-3 rounded-xl bg-zinc-900/40 border border-zinc-800/25 active:bg-zinc-800/40 transition-all"
                    >
                      <div className="flex items-center gap-2">
                        <p className="text-white text-[13px] font-semibold">{t.term}</p>
                        <span className={`pill border text-[8px] ${CATEGORY_COLORS[t.category]}`}>
                          {CATEGORY_LABELS[t.category]}
                        </span>
                      </div>
                      {isOpen && (
                        <p className="text-zinc-400 text-[12px] leading-relaxed mt-1.5 animate-slide-up">{t.definition}</p>
                      )}
                      {!isOpen && (
                        <p className="text-zinc-600 text-[11px] mt-0.5 truncate">{t.definition}</p>
                      )}
                      {isOpen && t.example && (
                        <div className="mt-2 p-2 rounded-lg bg-rose-500/5 border border-rose-500/15">
                          <p className="text-[10px] font-bold text-rose-400 mb-0.5">उदाहरण</p>
                          <p className="text-[11px] text-zinc-400">{t.example}</p>
                        </div>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
