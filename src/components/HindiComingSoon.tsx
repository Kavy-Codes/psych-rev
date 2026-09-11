interface Props {
  onBack: () => void;
}

export function HindiComingSoon({ onBack }: Props) {
  return (
    <div className="min-h-[100dvh] flex flex-col items-center justify-center px-6 py-10 bg-zinc-950">
      <div className="text-center animate-slide-up">
        <div className="text-6xl mb-6">📝</div>
        <h1 className="text-white font-black text-2xl mb-2">हिंदी (आधार)</h1>
        <p className="text-zinc-500 text-sm mb-1">Hindi Elective — Code 322</p>
        <p className="text-zinc-400 text-xs mb-8 max-w-xs mx-auto leading-relaxed">
          आरोह भाग-2, वितान भाग-2, अभिव्यक्ति और माध्यम — फ्लैशकार्ड्स, क्विज़, नोट्स, माइंड मैप्स और बहुत कुछ जल्द आ रहा है।
        </p>

        {/* What's coming */}
        <div className="w-full max-w-xs space-y-2 mb-8">
          {[
            { emoji: '🃏', text: '67 फ्लैशकार्ड्स — पाठ-वार महत्वपूर्ण तथ्य' },
            { emoji: '📝', text: '35 क्विज़ प्रश्न — MCQ, A-R, परीक्षण-आधारित' },
            { emoji: '📖', text: '18 पाठों के सारांश — परीक्षा-केंद्रित' },
            { emoji: '🔤', text: '42 व्याकरण पद — अलंकार, छंद, समास' },
            { emoji: '✍️', text: 'लेखन प्रारूप — निबंध, पत्र, विज्ञापन' },
            { emoji: '🗺️', text: 'माइंड मैप्स — 8 पाठों के वृक्ष' },
            { emoji: '📄', text: 'PDF संदर्भ — NCERT पुस्तकें, सैंपल पेपर' },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-zinc-900/40 border border-zinc-800/30 animate-slide-up" style={{ animationDelay: `${i * 0.05}s`, animationFillMode: 'both' }}>
              <span className="text-lg shrink-0">{item.emoji}</span>
              <span className="text-zinc-400 text-[11px] text-left">{item.text}</span>
            </div>
          ))}
        </div>

        <button
          onClick={onBack}
          className="px-6 py-2.5 rounded-xl bg-zinc-800 text-zinc-300 font-semibold text-sm active:scale-95 transition-all"
        >
          ← विषय बदलें
        </button>
      </div>
    </div>
  );
}
