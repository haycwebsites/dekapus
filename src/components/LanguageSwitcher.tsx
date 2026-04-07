import { useHayc } from '../hayc/config-context';

export function LanguageSwitcher() {
  const { t, config, cp } = useHayc();

  return (
    <div className="flex items-center gap-1">
      <span
        {...cp('languageSwitcherConfig.enLabel')}
        className="text-xs font-medium tracking-wider text-white"
      >
        {t(config.languageSwitcherConfig.enLabel)}
      </span>
    </div>
  );
}
