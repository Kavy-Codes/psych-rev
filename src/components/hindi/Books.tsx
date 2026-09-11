import { useState } from 'react';

const BOOKS = [
  {
    title: 'Antra Bhag-2',
    subtitle: 'काव्य खंड (Poetry Section)',
    type: 'kavya' as const,
    chapters: [
      { num: 1, title: 'Devsenā kā Gīt, Corneliyā kā Gīt', hindi: 'देवसेना का गीत, कार्नेलिया का गीत', author: 'Jaishankar Prasad', hindiAuthor: 'जयशंकर प्रसाद', form: 'Kavita', lines: '38', emoji: '📖' },
      { num: 2, title: 'Gīt Gāne Do Mujhe, Saroj Smṛti', hindi: 'गीत गाने दो मुझे, सरोज स्मृति', author: 'Suryakant Tripathi Nirala', hindiAuthor: 'सूर्यकांत त्रिपाठी निराला', form: 'Kavita', lines: '42', emoji: '🎶' },
      { num: 3, title: 'Yah Dīp Akelā, Mainne Dekhā Ek Būnd', hindi: 'यह दीप अकेला, मैंने देखा एक बूँद', author: 'Agyeya', hindiAuthor: 'अज्ञेय', form: 'Kavita', lines: '44', emoji: '🪔' },
      { num: 4, title: 'Banāras, Diśā', hindi: 'बनारस, दिशा', author: 'Kedarnath Singh', hindiAuthor: 'केदारनाथ सिंह', form: 'Kavita', lines: '40', emoji: '🌆' },
      { num: 5, title: 'Ek Kam, Satya', hindi: 'एक कम, सत्य', author: 'Vishnu Khare', hindiAuthor: 'विष्णु खरे', form: 'Kavita', lines: '36', emoji: '✍️' },
      { num: 6, title: 'Vasant Āyā, Todo', hindi: 'वसंत आया, तोड़ो', author: 'Raghuvir Sahay', hindiAuthor: 'रघुवीर सहाय', form: 'Kavita', lines: '42', emoji: '🌸' },
      { num: 7, title: 'Bharat-Rām kā Prem, Pad', hindi: 'भरत-राम का प्रेम, पद', author: 'Tulsidas', hindiAuthor: 'तुलसीदास', form: 'Pad', lines: '48', emoji: '🙏' },
      { num: 8, title: 'Barahmāsā', hindi: 'बारहमासा', author: 'Malik Muhammad Jayasi', hindiAuthor: 'मलिक मुहम्मद जायसी', form: 'Barahmasa', lines: '56', emoji: '🌙' },
      { num: 9, title: 'Pad', hindi: 'पद', author: 'Vidyapati', hindiAuthor: 'विद्यापति', form: 'Pad', lines: '44', emoji: '🎵' },
      { num: 10, title: 'Rāmchandrachandrikā', hindi: 'रामचंद्रचंद्रिका', author: 'Keshavdas', hindiAuthor: 'केशवदास', form: 'Kavita', lines: '52', emoji: '📜' },
      { num: 11, title: 'Kavitt, Savaiyā', hindi: 'कवित्त, सवैया', author: 'Ghananand', hindiAuthor: 'घनानंद', form: 'Kavitt/Savaiyā', lines: '46', emoji: '🪶' },
    ],
  },
  {
    title: 'Antra Bhag-2',
    subtitle: 'गद्य खंड (Prose Section)',
    type: 'gadya' as const,
    chapters: [
      { num: 12, title: 'Premghan kī Chāyā-Smṛti', hindi: 'प्रेमघन की छाया-स्मृति', author: 'Ramchandra Shukla', hindiAuthor: 'रामचंद्र शुक्ल', form: 'Jīvanī', lines: '28', emoji: '🕯️' },
      { num: 13, title: 'Sumirinī ke Manake', hindi: 'सुमिरिनी के मनके', author: 'Chandrahar Sharma Guleri', hindiAuthor: 'चंद्रधर शर्मा गुलेरी', form: 'Kathā', lines: '32', emoji: '📿' },
      { num: 14, title: 'Kachchā Chitthā', hindi: 'कच्चा चिट्ठा', author: 'Brajmohan Vyas', hindiAuthor: 'ब्रजमोहन व्यास', form: 'Vyangya', lines: '26', emoji: '✉️' },
      { num: 15, title: 'Samvadiyā', hindi: 'संवदिया', author: 'Phanishwarnath Renu', hindiAuthor: 'फणीश्वरनाथ रेणु', form: 'Kathā', lines: '34', emoji: '💬' },
      { num: 16, title: 'Gandhi, Nehru aur Yāsser Arafāt', hindi: 'गाँधी, नेहरू और यास्सेर अराफ़ात', author: 'Bhisham Sahni', hindiAuthor: 'भीष्म साहनी', form: 'Nibandh', lines: '30', emoji: '🤝' },
      { num: 17, title: 'Sher, Pahcān, Cār Hāth, Sājhā', hindi: 'शेर, पहचान, चार हाथ, साझा', author: 'Asghar Wajahat', hindiAuthor: 'असगर वजाहत', form: 'Kathā', lines: '28', emoji: '🦁' },
      { num: 18, title: 'Jahāṅ Koī Vāpasī Nahīṅ', hindi: 'जहाँ कोई वापसी नहीं', author: 'Nirmal Verma', hindiAuthor: 'निर्मल वर्मा', form: 'Nibandh', lines: '30', emoji: '🌍' },
      { num: 19, title: 'Yathāsmai Rocate Viśvam', hindi: 'यथास्मै रोचते विश्वम्', author: 'Ramvilas Sharma', hindiAuthor: 'रामविलास शर्मा', form: 'Nibandh', lines: '28', emoji: '📖' },
      { num: 20, title: 'Dūsrā Devdās', hindi: 'दूसरा देवदास', author: 'Mamta Kalia', hindiAuthor: 'ममता कालिया', form: 'Kathā', lines: '26', emoji: '💔' },
      { num: 21, title: 'Kutaj', hindi: 'कुटज', author: 'Hazari Prasad Dwivedi', hindiAuthor: 'हजारी प्रसाद द्विवेदी', form: 'Nibandh', lines: '28', emoji: '🌿' },
    ],
  },
  {
    title: 'Antrāl Bhag-2',
    subtitle: 'Supplementary Reader',
    type: 'antral' as const,
    chapters: [
      { num: 22, title: 'Sūrdās kī Jhojhī', hindi: 'सूरदास की झोपड़ी', author: 'Jainendra Kumar', hindiAuthor: 'जैनेंद्र कुमार', form: 'Kathā', lines: '42', emoji: '🏚️' },
      { num: 23, title: 'Ārohaṇ', hindi: 'आरोहण', author: 'Shri Sanjīv', hindiAuthor: 'श्री संजीव', form: 'Kathā', lines: '38', emoji: '🧗' },
      { num: 24, title: 'Biskohar kī Māṭī', hindi: 'बिस्कोहर की माटी', author: 'Vishwanath Tripathi', hindiAuthor: 'विश्वनाथ त्रिपाठी', form: 'Ātmakathā', lines: '40', emoji: '🌾' },
      { num: 25, title: 'Apnā Mālvā-Khāū-Ujārū Sabhyatā meṅ', hindi: 'अपना मालवा-खाऊ-उजाड़ू सभ्यता में', author: 'Prabhash Joshi', hindiAuthor: 'प्रभाष जोशी', form: 'Nibandh', lines: '36', emoji: '🏚️' },
    ],
  },
];

const TYPE_META = {
  kavya: { label: 'Poetry', color: 'violet', icon: '📝' },
  gadya: { label: 'Prose', color: 'emerald', icon: '📄' },
  antral: { label: 'Supplementary', color: 'amber', icon: '📚' },
};

export function HindiBooks() {
  const [expandedBook, setExpandedBook] = useState<number | null>(0);
  const [selectedChapter, setSelectedChapter] = useState<number | null>(null);

  const selected = selectedChapter !== null
    ? BOOKS.flatMap(b => b.chapters).find(c => c.num === selectedChapter)
    : null;

  if (selected) {
    return (
      <div className="h-full overflow-y-auto no-scrollbar px-4 pt-3 pb-6">
        <button
          onClick={() => setSelectedChapter(null)}
          className="flex items-center gap-1 text-zinc-500 text-xs mb-3 active:text-zinc-300 transition-colors"
        >
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
          Back to all chapters
        </button>

        <div className="rounded-2xl bg-gradient-to-br from-rose-600/20 via-pink-600/10 to-rose-700/20 border border-rose-500/15 p-5 mb-4 animate-slide-up">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-2xl">{selected.emoji}</span>
            <span className="pill bg-zinc-800/60 text-zinc-400 border border-zinc-700/40 text-[9px] font-bold">
              Chapter {selected.num}
            </span>
          </div>
          <h2 className="text-white font-black text-lg leading-tight">{selected.hindi}</h2>
          <p className="text-zinc-500 text-[11px] mt-1">{selected.title}</p>
        </div>

        <div className="space-y-3 animate-fade-in">
          <InfoRow label="Author" value={selected.author} hindi={selected.hindiAuthor} />
          <InfoRow label="Form" value={selected.form} />
          <InfoRow label="Lines" value={selected.lines} />
          <InfoRow label="Section" value={
            selected.num <= 11 ? 'Kavya Khand (Poetry)' :
            selected.num <= 21 ? 'Gadya Khand (Prose)' : 'Antral (Supplementary)'
          } />
          <InfoRow label="Book" value={
            selected.num <= 21 ? 'Antra Bhag-2' : 'Antral Bhag-2'
          } />
        </div>

        <button
          onClick={() => setSelectedChapter(null)}
          className="w-full mt-6 py-3 rounded-xl bg-rose-600 text-white text-xs font-bold active:bg-rose-700 transition-colors"
        >
          View all chapters
        </button>
      </div>
    );
  }

  return (
    <div className="h-full overflow-y-auto no-scrollbar px-4 pt-3 pb-6 space-y-3">
      {/* Header */}
      <div className="rounded-2xl bg-gradient-to-br from-rose-600/20 via-pink-600/10 to-rose-700/20 border border-rose-500/15 p-4 animate-slide-up">
        <h2 className="text-white font-black text-base mb-1">NCERT Books & Chapters</h2>
        <p className="text-zinc-500 text-[11px]">Complete syllabus — Antra (21 chapters) + Antral (4 chapters)</p>
        <div className="flex gap-2 mt-3">
          <span className="pill bg-violet-500/15 text-violet-300 border border-violet-500/20 text-[9px] font-bold">11 Poems</span>
          <span className="pill bg-emerald-500/15 text-emerald-300 border border-emerald-500/20 text-[9px] font-bold">10 Prose</span>
          <span className="pill bg-amber-500/15 text-amber-300 border border-amber-500/20 text-[9px] font-bold">4 Antral</span>
        </div>
      </div>

      {/* Books */}
      {BOOKS.map((book, i) => {
        const meta = TYPE_META[book.type];
        const isExpanded = expandedBook === i;
        return (
          <div
            key={i}
            className={`rounded-xl bg-zinc-900/40 border border-zinc-800/30 overflow-hidden animate-slide-up stagger-${i + 1}`}
          >
            <button
              onClick={() => setExpandedBook(isExpanded ? null : i)}
              className="w-full flex items-center justify-between px-4 py-3 active:bg-zinc-800/30 transition-colors"
            >
              <div className="flex items-center gap-3">
                <span className="text-lg">{meta.icon}</span>
                <div className="text-left">
                  <p className="text-white text-xs font-bold">{book.title}</p>
                  <p className="text-zinc-600 text-[10px]">{book.subtitle}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="pill bg-zinc-800/60 text-zinc-500 text-[9px] font-bold">{book.chapters.length} ch</span>
                <svg
                  className={`w-3.5 h-3.5 text-zinc-600 transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`}
                  fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </button>

            {isExpanded && (
              <div className="px-3 pb-3 space-y-1.5 animate-slide-up">
                {book.chapters.map(ch => (
                  <button
                    key={ch.num}
                    onClick={() => setSelectedChapter(ch.num)}
                    className="w-full flex items-center gap-2.5 p-2.5 rounded-xl bg-zinc-800/20 border border-zinc-800/20 active:scale-[0.98] transition-all duration-150"
                  >
                    <span className="text-sm shrink-0">{ch.emoji}</span>
                    <div className="flex-1 min-w-0 text-left">
                      <div className="flex items-center gap-1.5">
                        <span className="pill bg-zinc-800/60 text-zinc-500 text-[8px] font-bold shrink-0">Ch{ch.num}</span>
                        <span className="text-zinc-300 text-[11px] font-semibold truncate">{ch.hindi}</span>
                      </div>
                      <p className="text-zinc-600 text-[9px] mt-0.5 truncate">{ch.author}</p>
                    </div>
                    <div className="flex items-center gap-1.5 shrink-0">
                      <span className="text-zinc-700 text-[9px]">{ch.form}</span>
                      <svg className="w-3 h-3 text-zinc-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                      </svg>
                    </div>
                  </button>
                ))}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

function InfoRow({ label, value, hindi }: { label: string; value: string; hindi?: string }) {
  return (
    <div className="flex items-start gap-3 p-3 rounded-xl bg-zinc-900/40 border border-zinc-800/30">
      <span className="text-zinc-600 text-[10px] font-bold uppercase tracking-wider shrink-0 w-16">{label}</span>
      <div>
        <p className="text-zinc-300 text-[11px] font-semibold">{value}</p>
        {hindi && <p className="text-zinc-500 text-[10px] mt-0.5">{hindi}</p>}
      </div>
    </div>
  );
}
