const CHAPTERS = [
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

const SECTIONS = [
  { label: 'अंतरा — काव्य खंड', emoji: '📝', from: 1, to: 11 },
  { label: 'अंतरा — गद्य खंड', emoji: '📄', from: 12, to: 21 },
  { label: 'अंतराल', emoji: '📚', from: 22, to: 25 },
];

interface Props {
  selected: number;
  onSelect: (chapterNum: number) => void;
}

export function ChapterSectionMenu({ selected, onSelect }: Props) {
  return (
    <div className="space-y-2.5 shrink-0 animate-slide-down">
      {SECTIONS.map(section => {
        const chapters = CHAPTERS.filter(c => c.num >= section.from && c.num <= section.to);
        return (
          <div key={section.label}>
            <div className="flex items-center gap-1.5 mb-1 px-1">
              <span className="text-xs">{section.emoji}</span>
              <p className="text-zinc-500 text-[10px] font-bold uppercase tracking-wider">{section.label}</p>
            </div>
            <div className="space-y-0.5">
              {chapters.map(c => (
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
