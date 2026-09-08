import { useState, useMemo } from 'react';
import { glossary } from '../data/glossary';

interface Props {
  chapterRange: [number, number];
}

export function Glossary({ chapterRange }: Props) {
  const [search, setSearch] = useState('');
  const [expandedTerm, setExpandedTerm] = useState<string | null>(null);
  const [start, end] = chapterRange;

  const filtered = useMemo(() => {
    let terms = start === 0 ? glossary : glossary.filter(t => t.chapter >= start && t.chapter <= end);
    if (search) {
      const q = search.toLowerCase();
      terms = terms.filter(t => t.term.toLowerCase().includes(q) || t.definition.toLowerCase().includes(q));
    }
    return terms;
  }, [start, end, search]);

  const grouped = useMemo(() => {
    const map = new Map<number, typeof filtered>();
    filtered.forEach(t => {
      const arr = map.get(t.chapter) || [];
      arr.push(t);
      map.set(t.chapter, arr);
    });
    return [...map.entries()].sort(([a], [b]) => a - b);
  }, [filtered]);

  const chNames: Record<number, string> = {
    1: "Variations", 2: "Self & Personality", 3: "Life Challenges",
    4: "Disorders", 5: "Therapy", 6: "Attitudes", 7: "Social Influence"
  };

  return (
    <div className="flex flex-col h-full px-4 pt-2 pb-4 gap-2.5">
      {/* Search */}
      <div className="relative shrink-0">
        <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <input
          type="text"
          value={search}
          onChange={e => setSearch(e.target.value)}
          placeholder="Search key terms..."
          className="w-full pl-9 pr-4 py-2.5 rounded-xl bg-zinc-900/60 border border-zinc-800/40 text-white text-sm placeholder-zinc-600 focus:outline-none focus:border-indigo-500/30 transition-colors"
        />
      </div>

      <p className="text-zinc-600 text-[10px] shrink-0">{filtered.length} terms</p>

      {/* Terms */}
      <div className="flex-1 min-h-0 overflow-y-auto no-scrollbar">
        {grouped.map(([ch, terms]) => (
          <div key={ch} className="mb-3">
            <p className="text-zinc-500 text-[10px] font-semibold uppercase tracking-widest mb-1.5 sticky top-0 bg-zinc-950/90 backdrop-blur-sm py-1">
              Ch {ch} — {chNames[ch]}
            </p>
            <div className="space-y-1">
              {terms.map((t, i) => {
                const key = `${t.chapter}-${t.term}`;
                const isOpen = expandedTerm === key;
                return (
                  <button
                    key={i}
                    onClick={() => setExpandedTerm(isOpen ? null : key)}
                    className="w-full text-left p-3 rounded-xl bg-zinc-900/40 border border-zinc-800/25 active:bg-zinc-800/40 transition-all"
                  >
                    <p className="text-white text-[13px] font-semibold">{t.term}</p>
                    {isOpen && (
                      <p className="text-zinc-400 text-[12px] leading-relaxed mt-1.5">{t.definition}</p>
                    )}
                    {!isOpen && (
                      <p className="text-zinc-600 text-[11px] mt-0.5 truncate">{t.definition}</p>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
