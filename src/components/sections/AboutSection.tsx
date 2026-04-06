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

  const heroSrc = isHomePage ? config.homeIntroConfig.heroImage : config.aboutConfig.pageHeroImage;

  return (
    <section className="py-20 bg-[#141414]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="mb-8">
              <h3
                {...(isHomePage ? cp('homeIntroConfig.sectionTitle') : cp('aboutConfig.sectionTitle'))}
                className="font-['Great_Vibes'] text-4xl text-[#c8a97e] mb-2"
              >
                {isHomePage ? t(config.homeIntroConfig.sectionTitle) : t(config.aboutConfig.sectionTitle)}
              </h3>
              {!isHomePage && (
                <h2 {...cp('aboutConfig.title')} className="text-2xl md:text-3xl font-serif text-white">
                  {t(config.aboutConfig.title)}
                </h2>
              )}
            </div>

            <p
              {...(isHomePage ? cp('homeIntroConfig.description1') : cp('aboutConfig.description1'))}
              className="text-white/70 mb-4 leading-relaxed"
            >
              {isHomePage ? t(config.homeIntroConfig.description1) : t(config.aboutConfig.description1)}
            </p>
            <p
              {...(isHomePage ? cp('homeIntroConfig.description2') : cp('aboutConfig.description2'))}
              className={`text-white/70 leading-relaxed ${isHomePage ? 'mb-4' : 'mb-8'}`}
            >
              {isHomePage ? t(config.homeIntroConfig.description2) : t(config.aboutConfig.description2)}
            </p>
            {isHomePage && (
              <>
                <p {...cp('homeIntroConfig.description3')} className="text-white/70 mb-4 leading-relaxed">
                  {t(config.homeIntroConfig.description3)}
                </p>
                <p {...cp('homeIntroConfig.description4')} className="text-white/70 mb-8 leading-relaxed">
                  {t(config.homeIntroConfig.description4)}
                </p>
              </>
            )}
            {!isHomePage && (
              <p {...cp('aboutConfig.closingLine')} className="text-white/80 leading-relaxed mb-8 italic">
                {t(config.aboutConfig.closingLine)}
              </p>
            )}

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
              {...(isHomePage ? cp('homeIntroConfig.heroImage') : cp('aboutConfig.pageHeroImage'))}
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
