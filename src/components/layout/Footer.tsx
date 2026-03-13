import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import { useHayc } from '../../hayc/config-context';

export function Footer() {
  const { t, img, config, cp } = useHayc();

  const menuCategories = [
    { label: config.footerConfig.appetizers, path: '/menu' },
    { label: config.menuConfig.breakfast, path: '/menu' },
    { label: config.footerConfig.lunch, path: '/menu' },
    { label: config.menuConfig.dinner, path: '/menu' },
    { label: config.footerConfig.meatFish, path: '/menu' },
    { label: config.footerConfig.soups, path: '/menu' },
  ];

  const quickLinks = [
    { label: config.navigationConfig.home, path: '/' },
    { label: config.navigationConfig.events, path: '/dekapus-method' },
    { label: config.navigationConfig.services, path: '/my-work' },
    { label: config.navigationConfig.about, path: '/about' },
    { label: config.navigationConfig.team, path: '/engagement' },
    { label: config.navigationConfig.contact, path: '/contact' },
  ];

  return (
    <footer className="bg-[#1a1a1a] text-white">
      {/* Top Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* About Widget */}
          <div>
            <h3 {...cp('footerConfig.aboutUs')} className="text-lg font-semibold mb-6 text-[#c8a97e]">{t(config.footerConfig.aboutUs)}</h3>
            <p {...cp('footerConfig.aboutDescription')} className="text-white/70 text-sm leading-relaxed mb-6">
              {t(config.footerConfig.aboutDescription)}
            </p>
            <div className="flex items-center gap-3">
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#c8a97e] transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#c8a97e] transition-colors"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#c8a97e] transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#c8a97e] transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 {...cp('footerConfig.quickLinks')} className="text-lg font-semibold mb-6 text-[#c8a97e]">{t(config.footerConfig.quickLinks)}</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={link.path + index}>
                  <Link 
                    to={link.path}
                    className="text-white/70 text-sm hover:text-[#c8a97e] transition-colors"
                  >
                    {t(link.label)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Menu Categories */}
          <div>
            <h3 {...cp('footerConfig.menuCategories')} className="text-lg font-semibold mb-6 text-[#c8a97e]">{t(config.footerConfig.menuCategories)}</h3>
            <ul className="space-y-3">
              {menuCategories.map((item, index) => (
                <li key={index}>
                  <Link 
                    to={item.path}
                    className="text-white/70 text-sm hover:text-[#c8a97e] transition-colors"
                  >
                    {t(item.label)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Instagram Feed */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <h3 {...cp('footerConfig.instagram')} className="text-lg font-semibold mb-6 text-[#c8a97e] text-center">{t(config.footerConfig.instagram)}</h3>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-2">
            {config.footerConfig.instagramImages.map((imgSrc, index) => (
              <div
                key={index}
                className="aspect-square overflow-hidden rounded-lg group"
              >
                <img 
                  src={img(imgSrc)} 
                  alt={`Instagram ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-[#111] py-4">
        <div className="container mx-auto px-4 text-center">
          <p className="text-white/50 text-sm">
            Copyright © 2025 All Right Reserved. Made by <a href="https://hayc.gr/" target="_blank" rel="noreferrer" className="text-[#c8a97e] hover:underline">hayc</a> with 💙
          </p>
        </div>
      </div>
    </footer>
  );
}
