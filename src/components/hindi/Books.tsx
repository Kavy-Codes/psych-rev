import { useState } from 'react';

const BOOKS = [
  {
    title: 'Arooh Bhag-2',
    subtitle: 'काव्य खंड (Poetry Section)',
    type: 'kavya' as const,
    chapters: [
      { num: 1, title: 'Aatmaparichay, Ek Geet', hindi: 'आत्मपरिचय, एक गीत', author: 'Harivansh Rai Bachchan', hindiAuthor: 'हरिवंश राय बच्चन', form: 'Geet', lines: '40', emoji: '📖' },
      { num: 2, title: 'Patang', hindi: 'पतंग', author: 'Agyeya', hindiAuthor: 'अज्ञेय', form: 'Kavita', lines: '16', emoji: '🪁' },
      { num: 3, title: 'Kavita Ke Bahane, Baat Seedhi Thi Par', hindi: 'कविता के बहाने, बात सीधी थी पर', author: 'Vinod Kumar Shukla', hindiAuthor: 'विनोद कुमार शुक्ला', form: 'Kavita', lines: '16', emoji: '✍️' },
      { num: 4, title: 'Kaimre Mein Band Apahij', hindi: 'कैमरे में बंद अपाहिज', author: 'Vijender Singh Malik', hindiAuthor: 'विजेंद्र सिंह मालिक', form: 'Kavita', lines: '18', emoji: '📷' },
      { num: 5, title: 'Usha', hindi: 'उषा', author: 'Mahadevi Verma', hindiAuthor: 'महादेवी वर्मा', form: 'Kavita', lines: '20', emoji: '🌅' },
      { num: 6, title: 'Badal Raag', hindi: 'बादल राग', author: 'Bhairav Prasad Gupta', hindiAuthor: 'भैरव प्रसाद गुप्ता', form: 'Geet', lines: '18', emoji: '🌧️' },
      { num: 7, title: 'Kavitawali (Uttar Kand)', hindi: 'कवितावली (उत्तर कांड)', author: 'Tulsidas', hindiAuthor: 'तुलसीदास', form: 'Doha/Chaupai', lines: '36', emoji: '📜' },
      { num: 8, title: 'Rubaiyan', hindi: 'रुबाइयाँ', author: 'Nazir Akbarabadi', hindiAuthor: 'नज़ीर अकबराबादी', form: 'Rubai', lines: '16', emoji: '🌙' },
      { num: 9, title: 'Chhota Mera Khet, Bagulon Ke Pankh', hindi: 'छोटा मेरा खेत, बगुलों के पंख', author: 'Bhawani Prasad Mishra', hindiAuthor: 'भवानी प्रसाद मिश्र', form: 'Kavita', lines: '18', emoji: '🌾' },
    ],
  },
  {
    title: 'Arooh Bhag-2',
    subtitle: 'गद्य खंड (Prose Section)',
    type: 'gadya' as const,
    chapters: [
      { num: 10, title: 'Bhaktin', hindi: 'भक्तिन', author: 'Vishwanath Tripathi', hindiAuthor: 'विश्वनाथ त्रिपाठी', form: 'Katha', lines: '24', emoji: '🙏' },
      { num: 11, title: 'Bazaar Darshan', hindi: 'बाज़ार दर्शन', author: 'Dr. Ram Vilas Sharma', hindiAuthor: 'डॉ. रामविलास शर्मा', form: 'Nibandh', lines: '20', emoji: '🏪' },
      { num: 12, title: 'Kaale Megha Paani De', hindi: 'काले मेघा पानी दे', author: 'Harishankar Parsai', hindiAuthor: 'हरिशंकर परसाई', form: 'Vyangya', lines: '18', emoji: '⛈️' },
      { num: 13, title: 'Pahalwan Ki Dholak', hindi: 'पहलवान की ढोलक', author: 'Jainendra Kumar', hindiAuthor: 'जैनेंद्र कुमार', form: 'Katha', lines: '22', emoji: '🥁' },
      { num: 14, title: 'Shirish Ke Phool', hindi: 'शिरीष के फूल', author: 'Haldhar Nag', hindiAuthor: 'हलधर नाग', form: 'Kavita', lines: '20', emoji: '🌸' },
      { num: 15, title: 'Shram Vibhajan Aur Jaati-Pratha', hindi: 'श्रम विभाजन और जाति-प्रथा', author: 'Dr. B.R. Ambedkar', hindiAuthor: 'डॉ. बी.आर. अंबेडकर', form: 'Nibandh', lines: '22', emoji: '⚖️' },
    ],
  },
  {
    title: 'Vitan Bhag-2',
    subtitle: 'Novel Excerpts',
    type: 'vitan' as const,
    chapters: [
      { num: 16, title: 'Silver Wedding', hindi: 'सिल्वर वैडिंग', author: 'Yashpal', hindiAuthor: 'यशपाल', form: 'Upanyas', lines: '48', emoji: '💒' },
      { num: 17, title: 'Joojh', hindi: 'जूझ', author: 'Gulzar', hindiAuthor: 'गुलज़ार', form: 'Aatmkatha', lines: '42', emoji: '⚔️' },
      { num: 18, title: 'Ateet Mein Dabey Paon', hindi: 'अतीत में दबे पाँव', author: 'Asha Purna Devi', hindiAuthor: 'आशापूर्णा देवी', form: 'Aatmkatha', lines: '40', emoji: '🏛️' },
    ],
  },
];

const TYPE_META = {
  kavya: { label: 'Poetry', color: 'violet', icon: '📝' },
  gadya: { label: 'Prose', color: 'emerald', icon: '📄' },
  vitan: { label: 'Novel', color: 'amber', icon: '📚' },
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
            selected.num <= 9 ? 'Kaavya Khand (Poetry)' :
            selected.num <= 15 ? 'Gadya Khand (Prose)' : 'Vitan'
          } />
          <InfoRow label="Book" value={
            selected.num <= 15 ? 'Arooh Bhag-2' : 'Vitan Bhag-2'
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
        <p className="text-zinc-500 text-[11px]">Complete syllabus — all poems, prose, and novels</p>
        <div className="flex gap-2 mt-3">
          <span className="pill bg-violet-500/15 text-violet-300 border border-violet-500/20 text-[9px] font-bold">9 Poems</span>
          <span className="pill bg-emerald-500/15 text-emerald-300 border border-emerald-500/20 text-[9px] font-bold">6 Prose</span>
          <span className="pill bg-amber-500/15 text-amber-300 border border-amber-500/20 text-[9px] font-bold">3 Novels</span>
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
