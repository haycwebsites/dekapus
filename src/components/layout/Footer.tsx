import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import { useHayc } from '../../hayc/config-context';
import { Input } from '../ui/input';
import { Button } from '../ui/button';

export function Footer() {
  const { t, img, config, cp } = useHayc();

  const workingHours = [
    { day: config.footerConfig.mondayTuesday, hours: '09.00 - 22.00' },
    { day: config.footerConfig.wednesday, hours: '08.30 - 20.30' },
    { day: config.footerConfig.thursdayFriday, hours: '09.45 - 19.55' },
    { day: config.footerConfig.saturday, hours: '10.00 - 20.45' },
    { day: config.footerConfig.sunday, hours: '08.00 - 19.10' },
    { day: config.footerConfig.publicHolidays, hours: t(config.footerConfig.closed) },
  ];

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
    { label: config.navigationConfig.menu, path: '/menu' },
    { label: config.navigationConfig.about, path: '/about' },
    { label: config.navigationConfig.blog, path: '/blog' },
    { label: config.navigationConfig.contact, path: '/contact' },
  ];

  return (
    <footer className="bg-[#1a1a1a] text-white">
      {/* Top Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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

          {/* Working Time */}
          <div>
            <h3 {...cp('footerConfig.workingTime')} className="text-lg font-semibold mb-6 text-[#c8a97e]">{t(config.footerConfig.workingTime)}</h3>
            <table className="w-full text-sm">
              <tbody>
                {workingHours.map((item, index) => (
                  <tr key={index} className="border-b border-white/10 last:border-0">
                    <td className="py-2 text-white/70">{typeof item.day === 'string' ? item.day : t(item.day)}</td>
                    <td className="py-2 text-white/50 text-right">{item.hours}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="mt-6">
              <div className="flex gap-2">
                <Input 
                  type="email" 
                  placeholder={t(config.footerConfig.emailSubscribe)}
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                />
                <Button className="bg-[#c8a97e] hover:bg-[#b89a6f] text-white">
                  <span {...cp('navigationConfig.bookNow')}>{t(config.navigationConfig.bookNow)}</span>
                </Button>
              </div>
            </div>
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
              <a 
                key={index}
                href="#"
                className="aspect-square overflow-hidden rounded-lg group"
              >
                <img 
                  src={img(imgSrc)} 
                  alt={`Instagram ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </a>
            ))}
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
