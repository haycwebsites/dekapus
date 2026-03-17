import { useState, useEffect } from 'react';
import signature from '../Images/signature.png';
import { useHayc } from '../hayc/config-context';

export function Preloader({ onComplete }: { onComplete: () => void }) {
  const { t, config, cp } = useHayc();
  const preloaderConfig = config.preloaderConfig;

  // Null check: if config is empty, complete immediately
  if (!preloaderConfig.brandName) {
    useEffect(() => { onComplete(); }, [onComplete]);
    return null;
  }

  const [phase, setPhase] = useState<'loading' | 'fading'>('loading');

  useEffect(() => {
    const fadeTimer = setTimeout(() => setPhase('fading'), 2200);
    const completeTimer = setTimeout(() => onComplete(), 2800);
    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-[9999] bg-[#0a0a0a] flex flex-col items-center justify-center transition-opacity duration-600 ${
        phase === 'fading' ? 'opacity-0' : 'opacity-100'
      }`}
    >
      {/* Signature Logo */}
      <div className="preloader-text mb-6">
        <img src={signature} alt={t(preloaderConfig.brandName)} className="w-auto h-12 object-contain" />
      </div>

      {/* Brand Name */}
      <div className="preloader-text text-center" style={{ animationDelay: '0.2s' }}>
        <h1
          className="font-serif text-3xl md:text-4xl text-white tracking-wide mb-2"
          style={{ color: '#ffffff' }}
          {...cp('preloaderConfig.brandName')}
        >
          {t(preloaderConfig.brandName)}
        </h1>
      </div>

      {/* Loading Line */}
      <div className="mt-8 w-48 h-px bg-white/10 overflow-hidden">
        <div className="preloader-line h-full bg-gradient-to-r from-gold-500/50 via-gold-500 to-gold-500/50" />
      </div>

      {/* Year */}
      {preloaderConfig.yearText && (
        <p
          className="preloader-text mt-4 text-xs text-white/40 uppercase tracking-[0.3em]"
          style={{ animationDelay: '0.4s' }}
          {...cp('preloaderConfig.yearText')}
        >
          {t(preloaderConfig.yearText)}
        </p>
      )}
    </div>
  );
}
