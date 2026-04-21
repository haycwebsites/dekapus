import { useHayc, type Locale } from '../hayc/config-context';

const LOCALE_ORDER: Locale[] = ['el', 'en'];

export function LanguageSwitcher() {
  const { locale, setLocale, t, config, cp } = useHayc();

  return (
    <div className="flex items-center gap-1">
      {LOCALE_ORDER.map((value, i) => (
        <span key={value} className="flex items-center gap-1">
          <button
            onClick={() => setLocale(value)}
            {...cp(value === 'el' ? 'languageSwitcherConfig.elLabel' : 'languageSwitcherConfig.enLabel')}
            className={`text-xs font-medium tracking-wider transition-colors ${
              locale === value
                ? 'text-white'
                : 'text-white/40 hover:text-white/70'
            }`}
          >
            {value === 'el' ? t(config.languageSwitcherConfig.elLabel) : t(config.languageSwitcherConfig.enLabel)}
          </button>
          {i < LOCALE_ORDER.length - 1 && (
            <span className="text-white/20 text-xs">|</span>
          )}
        </span>
      ))}
    </div>
  );
}
