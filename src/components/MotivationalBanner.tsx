import { useState, useEffect } from 'react';

const MESSAGES = {
  morning: [
    { text: "Early bird catches the marks! 🌅", sub: "Your brain is freshest now" },
    { text: "Good morning, future topper! ✨", sub: "Start strong today" },
    { text: "Rise and revise! 📚", sub: "Morning study sticks best" },
  ],
  afternoon: [
    { text: "Afternoon grind! 💪", sub: "You're doing amazing" },
    { text: "Keep that momentum going! 🔥", sub: "Consistency is key" },
    { text: "Lunch break's over — let's ace this! 🎯", sub: "Stay focused" },
  ],
  evening: [
    { text: "Evening study session 🌙", sub: "Perfect time for revision" },
    { text: "Winding down with some learning 📖", sub: "Smart move" },
    { text: "Night owl mode activated 🦉", sub: "Quiet hours = deep focus" },
  ],
  night: [
    { text: "Late night scholar 🌟", sub: "Dedication shows results" },
    { text: "Burning the midnight oil? 💡", sub: "You've got this" },
    { text: "One more chapter before bed? 📚", sub: "Sleep helps memory consolidation" },
  ],
};

function getTimeOfDay(): keyof typeof MESSAGES {
  const h = new Date().getHours();
  if (h >= 5 && h < 12) return 'morning';
  if (h >= 12 && h < 17) return 'afternoon';
  if (h >= 17 && h < 21) return 'evening';
  return 'night';
}

export function MotivationalBanner({ streak = 0 }: { streak?: number }) {
  const [msg, setMsg] = useState(() => {
    const tod = getTimeOfDay();
    const msgs = MESSAGES[tod];
    return msgs[Math.floor(Math.random() * msgs.length)];
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const tod = getTimeOfDay();
      const msgs = MESSAGES[tod];
      setMsg(msgs[Math.floor(Math.random() * msgs.length)]);
    }, 30000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center gap-3 px-4 py-2.5 animate-fade-in">
      <div className="flex-1 min-w-0">
        <p className="text-white text-xs font-bold leading-tight">{msg.text}</p>
        <p className="text-zinc-500 text-[10px] mt-0.5">{msg.sub}</p>
      </div>
      {streak > 0 && (
        <div className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 shrink-0 animate-glow-pulse">
          <span className="text-sm animate-streak-fire">🔥</span>
          <span className="text-amber-400 text-[10px] font-bold">{streak}</span>
        </div>
      )}
    </div>
  );
}
