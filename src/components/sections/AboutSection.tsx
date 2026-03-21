import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useHayc } from '../../hayc/config-context';
import signature from '../../Images/signature.png';
import signatureBlack from '../../Images/signatureBlack.png';

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

  const homeIntro = {
    sectionTitle: 'Intro',
    title: 'Crafting Atmospheres. Aligning Systems, Space & Human Behaviour.',
    description1:
      'Hospitality rarely fails because of missing procedures. It fails when space, people, and rhythm fall out of alignment.',
    description2:
      'DEKAPUS operates at the point where atmosphere, operations, and human behaviour intersect — before problems become visible and after easy solutions have failed.',
  };

  return (
    <section className="py-20 bg-[#141414]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <div className="mb-8">
              <h3 {...cp('aboutConfig.sectionTitle')} className="font-['Great_Vibes'] text-4xl text-[#c8a97e] mb-2">
                {isHomePage ? homeIntro.sectionTitle : t(config.aboutConfig.sectionTitle)}
              </h3>
              {!isHomePage && (
                <h2 {...cp('aboutConfig.title')} className="text-2xl md:text-3xl font-serif text-white">
                  {t(config.aboutConfig.title)}
                </h2>
              )}
            </div>
            
            <p {...cp('aboutConfig.description1')} className="text-white/70 mb-4 leading-relaxed">
              {isHomePage ? homeIntro.description1 : t(config.aboutConfig.description1)}
            </p>
            <p {...cp('aboutConfig.description2')} className="text-white/70 mb-8 leading-relaxed">
              {isHomePage ? homeIntro.description2 : t(config.aboutConfig.description2)}
            </p>

            {/* Detail Card */}
            <div className="flex items-center justify-start gap-4 p-4 bg-white/5 rounded-lg">
              <img
                src={theme === 'light' ? signatureBlack : signature}
                alt="Signature"
                className="h-12 object-contain"
              />
            </div>
          </div>

          {/* Images */}
          <div className="grid grid-cols-1 gap-4">
            <img 
              src={img('/images/counter-bg.jpg')} 
              alt="About"
              className="w-full rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
