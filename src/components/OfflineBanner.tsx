import { useState, useEffect } from 'react';
import { WifiOff } from 'lucide-react';

export function OfflineBanner() {
  const [isOffline, setIsOffline] = useState(!navigator.onLine);

  useEffect(() => {
    const handleOnline = () => setIsOffline(false);
    const handleOffline = () => setIsOffline(true);
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);
    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  if (!isOffline) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-50 safe-top animate-slide-down">
      <div className="flex items-center justify-center gap-2 px-4 py-2 bg-zinc-800/90 backdrop-blur-sm border-b border-zinc-700/50">
        <WifiOff className="w-3.5 h-3.5 text-zinc-400" strokeWidth={1.75} />
        <span className="text-zinc-400 text-[11px] font-medium">You're offline — cached content still works</span>
      </div>
    </div>
  );
}
