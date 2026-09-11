interface ChapterInfo {
  num: number;
  name: string;
}

interface RangeProps {
  mode: 'range';
  chapters: ChapterInfo[];
  from: number;
  to: number;
  onFromChange: (n: number) => void;
  onToChange: (n: number) => void;
  onAll: () => void;
  isHindi: boolean;
}

interface SingleProps {
  mode: 'single';
  chapters: ChapterInfo[];
  selected: number;
  onSelect: (n: number) => void;
  onAll: () => void;
  isHindi: boolean;
}

type Props = RangeProps | SingleProps;

const HINDI_SECTIONS = [
  {
    label: 'अंतरा — काव्य खंड',
    sublabel: 'Antra Poetry',
    emoji: '📝',
    range: [1, 11] as const,
  },
  {
    label: 'अंतरा — गद्य खंड',
    sublabel: 'Antra Prose',
    emoji: '📄',
    range: [12, 21] as const,
  },
  {
    label: 'अंतराल',
    sublabel: 'Supplementary Reader',
    emoji: '📚',
    range: [22, 25] as const,
  },
];

function PsychPicker({ chapters, from, to, onFromChange, onToChange, onAll }: { chapters: ChapterInfo[]; from: number; to: number; onFromChange: (n: number) => void; onToChange: (n: number) => void; onAll: () => void }) {
  return (
    <div className="space-y-3">
      <button
        onClick={onAll}
        className={`w-full p-2.5 rounded-xl text-xs font-semibold text-left transition-all duration-150 ${
          from === 0
            ? 'bg-indigo-600 text-white shadow-lg'
            : 'bg-zinc-800/60 text-zinc-400 active:bg-zinc-700/60 active:scale-[0.97]'
        }`}
      >
        {chapters[0].name}
      </button>

      <div className="flex gap-2">
        <div className="flex-1">
          <p className="text-zinc-500 text-[10px] font-semibold uppercase tracking-wider mb-1">From</p>
          <div className="grid grid-cols-4 gap-1">
            {chapters.slice(1).map(c => (
              <button
                key={c.num}
                onClick={() => {
                  onFromChange(c.num);
                  if (to < c.num) onToChange(c.num);
                }}
                className={`py-1.5 rounded-lg text-[10px] font-semibold transition-all ${
                  from === c.num && from !== 0
                    ? 'bg-indigo-600 text-white'
                    : 'bg-zinc-800/50 text-zinc-400 active:bg-zinc-700/50'
                }`}
              >
                {c.num}
              </button>
            ))}
          </div>
        </div>
        <div className="flex-1">
          <p className="text-zinc-500 text-[10px] font-semibold uppercase tracking-wider mb-1">To</p>
          <div className="grid grid-cols-4 gap-1">
            {chapters.slice(1).map(c => (
              <button
                key={c.num}
                onClick={() => {
                  onToChange(c.num);
                  if (from > c.num) onFromChange(c.num);
                }}
                className={`py-1.5 rounded-lg text-[10px] font-semibold transition-all ${
                  to === c.num && from !== 0
                    ? 'bg-violet-600 text-white'
                    : 'bg-zinc-800/50 text-zinc-400 active:bg-zinc-700/50'
                }`}
              >
                {c.num}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function PsychSinglePicker({ chapters, selected, onSelect, onAll }: { chapters: ChapterInfo[]; selected: number; onSelect: (n: number) => void; onAll: () => void }) {
  return (
    <div className="space-y-3">
      <button
        onClick={onAll}
        className={`w-full p-2.5 rounded-xl text-xs font-semibold text-left transition-all duration-150 ${
          selected === 0
            ? 'bg-indigo-600 text-white shadow-lg'
            : 'bg-zinc-800/60 text-zinc-400 active:bg-zinc-700/60 active:scale-[0.97]'
        }`}
      >
        {chapters[0].name}
      </button>

      <div className="grid grid-cols-4 gap-1">
        {chapters.slice(1).map(c => (
          <button
            key={c.num}
            onClick={() => onSelect(c.num)}
            className={`py-1.5 rounded-lg text-[10px] font-semibold transition-all ${
              selected === c.num
                ? 'bg-indigo-600 text-white'
                : 'bg-zinc-800/50 text-zinc-400 active:bg-zinc-700/50'
            }`}
          >
            {c.num}
          </button>
        ))}
      </div>
    </div>
  );
}

function HindiSinglePicker({ chapters, selected, onSelect, onAll }: { chapters: ChapterInfo[]; selected: number; onSelect: (n: number) => void; onAll: () => void }) {
  return (
    <div className="space-y-3">
      <button
        onClick={onAll}
        className={`w-full p-2.5 rounded-xl text-xs font-semibold text-left transition-all duration-150 ${
          selected === 0
            ? 'bg-rose-600 text-white shadow-lg'
            : 'bg-zinc-800/60 text-zinc-400 active:bg-zinc-700/60 active:scale-[0.97]'
        }`}
      >
        {chapters[0].name}
      </button>

      {HINDI_SECTIONS.map((section) => {
        const sectionChapters = chapters.filter(
          c => c.num >= section.range[0] && c.num <= section.range[1]
        );
        return (
          <div key={section.label}>
            <div className="flex items-center gap-1.5 mb-1.5 px-1">
              <span className="text-sm">{section.emoji}</span>
              <div>
                <p className="text-zinc-300 text-[11px] font-bold leading-tight">{section.label}</p>
                <p className="text-zinc-600 text-[9px]">{section.sublabel}</p>
              </div>
            </div>
            <div className="space-y-0.5">
              {sectionChapters.map(c => (
                <button
                  key={c.num}
                  onClick={() => onSelect(c.num)}
                  className={`w-full flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-left transition-all ${
                    selected === c.num
                      ? 'bg-rose-600 text-white'
                      : 'bg-zinc-800/30 text-zinc-400 active:bg-zinc-700/40 active:scale-[0.98]'
                  }`}
                >
                  <span className={`text-[10px] font-bold w-5 text-center shrink-0 ${
                    selected === c.num ? 'text-white' : 'text-zinc-600'
                  }`}>
                    {c.num}
                  </span>
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

function HindiRangePicker({ chapters, from, to, onFromChange, onToChange, onAll }: { chapters: ChapterInfo[]; from: number; to: number; onFromChange: (n: number) => void; onToChange: (n: number) => void; onAll: () => void }) {
  return (
    <div className="space-y-3">
      <button
        onClick={onAll}
        className={`w-full p-2.5 rounded-xl text-xs font-semibold text-left transition-all duration-150 ${
          from === 0
            ? 'bg-rose-600 text-white shadow-lg'
            : 'bg-zinc-800/60 text-zinc-400 active:bg-zinc-700/60 active:scale-[0.97]'
        }`}
      >
        {chapters[0].name}
      </button>

      {from !== 0 && (
        <div className="flex items-center gap-2 px-1">
          <span className="text-rose-400 text-[10px] font-bold">FROM CH{from}</span>
          <span className="text-zinc-600 text-[10px]">→</span>
          <span className="text-pink-400 text-[10px] font-bold">TO CH{to}</span>
        </div>
      )}

      {HINDI_SECTIONS.map((section) => {
        const sectionChapters = chapters.filter(
          c => c.num >= section.range[0] && c.num <= section.range[1]
        );
        return (
          <div key={section.label}>
            <div className="flex items-center gap-1.5 mb-1.5 px-1">
              <span className="text-sm">{section.emoji}</span>
              <div>
                <p className="text-zinc-300 text-[11px] font-bold leading-tight">{section.label}</p>
                <p className="text-zinc-600 text-[9px]">{section.sublabel}</p>
              </div>
            </div>
            <div className="space-y-0.5">
              {sectionChapters.map(c => {
                const inRange = from !== 0 && c.num >= from && c.num <= to;
                const isFrom = c.num === from;
                const isTo = c.num === to;
                return (
                  <button
                    key={c.num}
                    onClick={() => {
                      if (from === 0 || (from === to)) {
                        onFromChange(c.num);
                        onToChange(c.num);
                      } else if (c.num < from) {
                        onFromChange(c.num);
                      } else if (c.num > to) {
                        onToChange(c.num);
                      } else if (c.num === from) {
                        if (from < to) onFromChange(from + 1);
                        else { onFromChange(0); onToChange(0); }
                      } else if (c.num === to) {
                        if (from < to) onToChange(to - 1);
                        else { onFromChange(0); onToChange(0); }
                      } else {
                        if (c.num > from) onToChange(c.num);
                        else onFromChange(c.num);
                      }
                    }}
                    className={`w-full flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-left transition-all ${
                      isFrom
                        ? 'bg-rose-600 text-white'
                        : isTo
                          ? 'bg-pink-600 text-white'
                          : inRange
                            ? 'bg-rose-500/15 text-rose-200 border border-rose-500/20'
                            : 'bg-zinc-800/30 text-zinc-400 active:bg-zinc-700/40 active:scale-[0.98]'
                    }`}
                  >
                    <span className={`text-[10px] font-bold w-5 text-center shrink-0 ${
                      isFrom || isTo ? 'text-white' : inRange ? 'text-rose-300' : 'text-zinc-600'
                    }`}>
                      {c.num}
                    </span>
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

export function ChapterPicker(props: Props) {
  const { chapters, isHindi, onAll } = props;

  if (props.mode === 'single') {
    if (!isHindi) return <PsychSinglePicker chapters={chapters} selected={props.selected} onSelect={props.onSelect} onAll={onAll} />;
    return <HindiSinglePicker chapters={chapters} selected={props.selected} onSelect={props.onSelect} onAll={onAll} />;
  }

  // Range mode
  if (!isHindi) return <PsychPicker chapters={chapters} from={props.from} to={props.to} onFromChange={props.onFromChange} onToChange={props.onToChange} onAll={onAll} />;
  return <HindiRangePicker chapters={chapters} from={props.from} to={props.to} onFromChange={props.onFromChange} onToChange={props.onToChange} onAll={onAll} />;
}
