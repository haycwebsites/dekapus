import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useHayc } from '../../hayc/config-context';

export function AboutSection() {
  const { t, img, config, cp } = useHayc();
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    const saved = localStorage.getItem('theme');
    return saved === 'light' ? 'light' : 'dark';
  });

  useEffect(() => {
    const root = document.documentElement;
    const syncThemeFromDom = () => {
      setTheme(root.getAttribute('data-theme') === 'light' ? 'light' : 'dark');
    };

    syncThemeFromDom();
    const observer = new MutationObserver(syncThemeFromDom);
    observer.observe(root, { attributes: true, attributeFilter: ['data-theme'] });

    return () => observer.disconnect();
  }, []);

  const heroSrc = isHomePage ? config.homeIntroConfig.heroImage : config.aboutConfig.portraitImage;

  if (!isHomePage) {
    const a = config.aboutConfig;
    return (
      <section className="py-20 lg:py-28 bg-black">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div className="max-w-xl lg:max-w-none">
              <h1 {...cp('aboutConfig.founderName')} className="font-serif text-3xl md:text-4xl font-semibold text-white tracking-tight">
                {t(a.founderName)}
              </h1>
              <p {...cp('aboutConfig.founderRole')} className="mt-2 font-serif text-lg md:text-xl italic text-white/55">
                {t(a.founderRole)}
              </p>
              <div className="mt-10 space-y-6 font-serif text-white/90 text-base md:text-lg leading-relaxed">
                <p {...cp('aboutConfig.intro1')}>{t(a.intro1)}</p>
                <p {...cp('aboutConfig.intro2')}>{t(a.intro2)}</p>
                <p {...cp('aboutConfig.intro3')}>{t(a.intro3)}</p>
                <p {...cp('aboutConfig.intro4')}>{t(a.intro4)}</p>
              </div>
            </div>
            <div className="lg:sticky lg:top-28">
              <img
                {...cp('aboutConfig.portraitImage')}
                src={img(a.portraitImage)}
                alt={t(a.sectionImageAlt)}
                className="w-full max-w-md mx-auto lg:max-w-none aspect-[3/4] object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-[#141414]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="mb-8">
              <h3
                {...cp('homeIntroConfig.sectionTitle')}
                className="font-['Great_Vibes'] text-4xl text-[#c8a97e] mb-2"
              >
                {t(config.homeIntroConfig.sectionTitle)}
              </h3>
            </div>

            <p
              {...cp('homeIntroConfig.description1')}
              className="text-white/70 mb-4 leading-relaxed"
            >
              {t(config.homeIntroConfig.description1)}
            </p>
            <p
              {...cp('homeIntroConfig.description2')}
              className="text-white/70 leading-relaxed mb-4"
            >
              {t(config.homeIntroConfig.description2)}
            </p>
            <p {...cp('homeIntroConfig.description3')} className="text-white/70 mb-4 leading-relaxed">
              {t(config.homeIntroConfig.description3)}
            </p>
            <p {...cp('homeIntroConfig.description4')} className="text-white/70 mb-8 leading-relaxed">
              {t(config.homeIntroConfig.description4)}
            </p>

            <div className="flex items-center justify-start gap-4 p-4 bg-white/5 rounded-lg">
              <img
                {...cp('brandConfig.signatureAlt')}
                src={img(theme === 'light' ? config.brandConfig.signatureDark : config.brandConfig.signatureLight)}
                alt={t(config.brandConfig.signatureAlt)}
                className="h-12 object-contain"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4">
            <img
              {...cp('homeIntroConfig.heroImage')}
              src={img(heroSrc)}
              alt={t(config.aboutConfig.sectionImageAlt)}
              className="w-full rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
