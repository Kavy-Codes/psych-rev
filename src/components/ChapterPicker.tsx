const PSYCH_CHAPTERS = [
  { num: 0, name: 'All Chapters' },
  { num: 1, name: 'Ch1: Variations in Psychological Attributes' },
  { num: 2, name: 'Ch2: Self and Personality' },
  { num: 3, name: 'Ch3: Meeting Life Challenges' },
  { num: 4, name: 'Ch4: Psychological Disorders' },
  { num: 5, name: 'Ch5: Therapeutic Approaches' },
  { num: 6, name: 'Ch6: Attitude and Social Cognition' },
  { num: 7, name: 'Ch7: Social Influence and Group Processes' },
];

const HINDI_SECTIONS = [
  { label: 'अंतरा — काव्य खंड', emoji: '📝', from: 1, to: 11 },
  { label: 'अंतरा — गद्य खंड', emoji: '📄', from: 12, to: 21 },
  { label: 'अंतराल', emoji: '📚', from: 22, to: 25 },
];

const HINDI_CHAPTERS = [
  { num: 1, name: 'देवसेना का गीत' },
  { num: 2, name: 'गीत गाने दो मुझे' },
  { num: 3, name: 'यह दीप अकेला' },
  { num: 4, name: 'बनारस' },
  { num: 5, name: 'एक कम, सत्य' },
  { num: 6, name: 'वसंत आया' },
  { num: 7, name: 'भरत-राम का प्रेम' },
  { num: 8, name: 'बारहमासा' },
  { num: 9, name: 'पद' },
  { num: 10, name: 'रामचंद्रचंद्रिका' },
  { num: 11, name: 'कवित्त, सवैया' },
  { num: 12, name: 'प्रेमघन की छाया-स्मृति' },
  { num: 13, name: 'सुमिरिनी के मनके' },
  { num: 14, name: 'कच्चा चिट्ठा' },
  { num: 15, name: 'संवदिया' },
  { num: 16, name: 'गाँधी, नेहरू, अराफ़ात' },
  { num: 17, name: 'शेर, पहचान' },
  { num: 18, name: 'जहाँ कोई वापसी नहीं' },
  { num: 19, name: 'यथास्मै रोचते विश्वम्' },
  { num: 20, name: 'दूसरा देवदास' },
  { num: 21, name: 'कुटज' },
  { num: 22, name: 'सूरदास की झोपड़ी' },
  { num: 23, name: 'आरोहण' },
  { num: 24, name: 'बिस्कोहर की माटी' },
  { num: 25, name: 'अपना मालवा' },
];

// ─── Single chapter picker (for non-Flashcards/Quiz tabs) ───────────────────

interface SingleProps {
  selected: number;
  onSelect: (n: number) => void;
  onAll: () => void;
  isHindi: boolean;
}

export function ChapterPickerSingle({ selected, onSelect, onAll, isHindi }: SingleProps) {
  if (!isHindi) {
    return (
      <div className="space-y-3">
        <button
          onClick={onAll}
          className={`w-full p-2.5 rounded-xl text-xs font-semibold text-left transition-all duration-150 ${
            selected === 0 ? 'bg-indigo-600 text-white shadow-lg' : 'bg-zinc-800/60 text-zinc-400 active:bg-zinc-700/60'
          }`}
        >
          {PSYCH_CHAPTERS[0].name}
        </button>
        <div className="grid grid-cols-4 gap-1">
          {PSYCH_CHAPTERS.slice(1).map(c => (
            <button key={c.num} onClick={() => onSelect(c.num)}
              className={`py-1.5 rounded-lg text-[10px] font-semibold transition-all ${
                selected === c.num ? 'bg-indigo-600 text-white' : 'bg-zinc-800/50 text-zinc-400 active:bg-zinc-700/50'
              }`}
            >
              {c.num}
            </button>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      <button onClick={onAll}
        className={`w-full p-2.5 rounded-xl text-xs font-semibold text-left transition-all duration-150 ${
          selected === 0 ? 'bg-rose-600 text-white shadow-lg' : 'bg-zinc-800/60 text-zinc-400 active:bg-zinc-700/60'
        }`}
      >
        All Chapters
      </button>
      {HINDI_SECTIONS.map(section => {
        const chs = HINDI_CHAPTERS.filter(c => c.num >= section.from && c.num <= section.to);
        return (
          <div key={section.label}>
            <div className="flex items-center gap-1.5 mb-1.5 px-1">
              <span className="text-sm">{section.emoji}</span>
              <div>
                <p className="text-zinc-300 text-[11px] font-bold leading-tight">{section.label}</p>
              </div>
            </div>
            <div className="space-y-0.5">
              {chs.map(c => (
                <button key={c.num} onClick={() => onSelect(c.num)}
                  className={`w-full flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-left transition-all ${
                    selected === c.num
                      ? 'bg-rose-600 text-white'
                      : 'bg-zinc-800/30 text-zinc-400 active:bg-zinc-700/40 active:scale-[0.98]'
                  }`}
                >
                  <span className={`text-[10px] font-bold w-5 text-center shrink-0 ${selected === c.num ? 'text-white' : 'text-zinc-600'}`}>{c.num}</span>
                  <span className="text-[11px] truncate">{c.name}</span>
                </button>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}

// ─── Range chapter picker (for Flashcards/Quiz) ─────────────────────────────

interface RangeProps {
  from: number;
  to: number;
  onFromChange: (n: number) => void;
  onToChange: (n: number) => void;
  onAll: () => void;
  isHindi: boolean;
}

export function ChapterPickerRange({ from, to, onFromChange, onToChange, onAll, isHindi }: RangeProps) {
  if (!isHindi) {
    return (
      <div className="space-y-3">
        <button onClick={onAll}
          className={`w-full p-2.5 rounded-xl text-xs font-semibold text-left transition-all duration-150 ${
            from === 0 ? 'bg-indigo-600 text-white shadow-lg' : 'bg-zinc-800/60 text-zinc-400 active:bg-zinc-700/60'
          }`}
        >
          {PSYCH_CHAPTERS[0].name}
        </button>
        <div className="flex gap-2">
          <div className="flex-1">
            <p className="text-zinc-500 text-[10px] font-semibold uppercase tracking-wider mb-1">From</p>
            <div className="grid grid-cols-4 gap-1">
              {PSYCH_CHAPTERS.slice(1).map(c => (
                <button key={c.num} onClick={() => {
                  if (from === 0) { onFromChange(c.num); onToChange(c.num); }
                  else if (from === to) { onFromChange(c.num); if (c.num > to) onToChange(c.num); }
                  else { onFromChange(c.num); if (c.num > to) onToChange(c.num); }
                }}
                  className={`py-1.5 rounded-lg text-[10px] font-semibold transition-all ${
                    from === c.num && from !== 0 ? 'bg-indigo-600 text-white' : 'bg-zinc-800/50 text-zinc-400 active:bg-zinc-700/50'
                  }`}
                >{c.num}</button>
              ))}
            </div>
          </div>
          <div className="flex-1">
            <p className="text-zinc-500 text-[10px] font-semibold uppercase tracking-wider mb-1">To</p>
            <div className="grid grid-cols-4 gap-1">
              {PSYCH_CHAPTERS.slice(1).map(c => (
                <button key={c.num} onClick={() => {
                  if (from === 0) { onFromChange(c.num); onToChange(c.num); }
                  else { onToChange(c.num); if (c.num < from) onFromChange(c.num); }
                }}
                  className={`py-1.5 rounded-lg text-[10px] font-semibold transition-all ${
                    to === c.num && from !== 0 ? 'bg-violet-600 text-white' : 'bg-zinc-800/50 text-zinc-400 active:bg-zinc-700/50'
                  }`}
                >{c.num}</button>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      <button onClick={onAll}
        className={`w-full p-2.5 rounded-xl text-xs font-semibold text-left transition-all duration-150 ${
          from === 0 ? 'bg-rose-600 text-white shadow-lg' : 'bg-zinc-800/60 text-zinc-400 active:bg-zinc-700/60'
        }`}
      >
        All Chapters
      </button>

      {from !== 0 && (
        <div className="flex items-center gap-2 px-1">
          <span className="text-rose-400 text-[10px] font-bold">FROM CH{from}</span>
          <span className="text-zinc-600 text-[10px]">→</span>
          <span className="text-pink-400 text-[10px] font-bold">TO CH{to}</span>
        </div>
      )}

      {HINDI_SECTIONS.map(section => {
        const chs = HINDI_CHAPTERS.filter(c => c.num >= section.from && c.num <= section.to);
        return (
          <div key={section.label}>
            <div className="flex items-center gap-1.5 mb-1.5 px-1">
              <span className="text-sm">{section.emoji}</span>
              <div>
                <p className="text-zinc-300 text-[11px] font-bold leading-tight">{section.label}</p>
              </div>
            </div>
            <div className="space-y-0.5">
              {chs.map(c => {
                const inRange = from !== 0 && c.num >= from && c.num <= to;
                const isFrom = c.num === from && from !== 0;
                const isTo = c.num === to && from !== 0;
                return (
                  <button key={c.num}
                    onClick={() => {
                      if (from === 0) { onFromChange(c.num); onToChange(c.num); }
                      else if (c.num < from) onFromChange(c.num);
                      else if (c.num > to) onToChange(c.num);
                      else if (c.num === from) { if (from < to) onFromChange(from + 1); else { onFromChange(0); onToChange(0); } }
                      else if (c.num === to) { if (from < to) onToChange(to - 1); else { onFromChange(0); onToChange(0); } }
                      else { onToChange(c.num); }
                    }}
                    className={`w-full flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-left transition-all ${
                      isFrom ? 'bg-rose-600 text-white'
                        : isTo ? 'bg-pink-600 text-white'
                          : inRange ? 'bg-rose-500/15 text-rose-200 border border-rose-500/20'
                            : 'bg-zinc-800/30 text-zinc-400 active:bg-zinc-700/40 active:scale-[0.98]'
                    }`}
                  >
                    <span className={`text-[10px] font-bold w-5 text-center shrink-0 ${
                      isFrom || isTo ? 'text-white' : inRange ? 'text-rose-300' : 'text-zinc-600'
                    }`}>{c.num}</span>
                    <span className="text-[11px] truncate">{c.name}</span>
                  </button>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}
