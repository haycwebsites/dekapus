import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useHayc } from '../../hayc/config-context';
import whiteLogoTagline from '../../Images/whiteLogoTagline.png';
import blackLogoTagline from '../../Images/blackLogoTagline.png';
import signature from '../../Images/signature.png';
import signatureBlack from '../../Images/signatureBlack.png';

export function Footer() {
  const { t, config, cp } = useHayc();
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

  const quickLinks = [
    { label: config.navigationConfig.home, path: '/', cpPath: 'navigationConfig.home' as const },
    { label: config.navigationConfig.events, path: '/dekapus-method', cpPath: 'navigationConfig.events' as const },
    { label: config.navigationConfig.services, path: '/my-work', cpPath: 'navigationConfig.services' as const },
    { label: config.navigationConfig.about, path: '/about', cpPath: 'navigationConfig.about' as const },
    { label: config.navigationConfig.team, path: '/engagement', cpPath: 'navigationConfig.team' as const },
    { label: config.navigationConfig.contact, path: '/contact', cpPath: 'navigationConfig.contact' as const },
  ];

  return (
    <footer className="bg-[#1a1a1a] text-white">
      {/* Top Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* About Widget */}
          <div>
            <h3 {...cp('footerConfig.aboutUs')} className="text-lg font-semibold mb-6 text-[#c8a97e]">{t(config.footerConfig.aboutUs)}</h3>
            <p {...cp('footerConfig.aboutDescription')} className="text-white/70 text-sm leading-relaxed">
              {t(config.footerConfig.aboutDescription)}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 {...cp('footerConfig.quickLinks')} className="text-lg font-semibold mb-6 text-[#c8a97e]">{t(config.footerConfig.quickLinks)}</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={link.path + index}>
                  <Link 
                    to={link.path}
                    {...cp(link.cpPath)}
                    className="text-white/70 text-sm hover:text-[#c8a97e] transition-colors"
                  >
                    {t(link.label)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Brand */}
          <div>
            <div className="flex items-center gap-6">
              <Link to="/" className="inline-block">
                <img
                  src={theme === 'light' ? blackLogoTagline : whiteLogoTagline}
                  alt="Dekapus Logo"
                  className="h-24 object-contain"
                />
              </Link>
              <img
                src={theme === 'light' ? signatureBlack : signature}
                alt="Signature"
                className="h-16 object-contain"
              />
            </div>
          </div>
        </div>

      </div>

      {/* Bottom Footer */}
      <div className="bg-[#111] py-4">
        <div className="container mx-auto px-4 text-center">
          <p {...cp('commonConfig.copyright')} className="text-white/50 text-sm">
            {t(config.commonConfig.copyright)}
          </p>
        </div>
      </div>
    </footer>
  );
}
