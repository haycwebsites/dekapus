import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, Phone, Facebook, Twitter, Instagram, Youtube, Sun, Moon } from 'lucide-react';
import { useHayc } from '../../hayc/config-context';
import { Button } from '../ui/button';
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from '../ui/navigation-menu';
import { LanguageSwitcher } from '../LanguageSwitcher';
import whiteLogoTagline from '../../Images/whiteLogoTagline.png';

interface HeaderProps {
  variant?: 'home' | 'inner';
}

export function Header({ variant = 'inner' }: HeaderProps) {
  const { t, img, config, cp } = useHayc();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    const saved = localStorage.getItem('theme');
    return saved === 'light' ? 'light' : 'dark';
  });
  const phoneHref = 'tel:+306932269946';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const isActive = (path: string) => location.pathname === path;
  const toggleTheme = () => setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));

  const navLinks = [
    { label: t(config.navigationConfig.home), path: '/' },
    { label: t(config.navigationConfig.events), path: '/dekapus-method' },
    { label: t(config.navigationConfig.services), path: '/my-work' },
    { label: t(config.navigationConfig.about), path: '/about' },
    { label: t(config.navigationConfig.team), path: '/engagement' },
    { label: t(config.navigationConfig.contact), path: '/contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled || variant === 'inner' 
        ? 'bg-[#1a1a1a]/95 backdrop-blur-sm shadow-lg' 
        : 'bg-transparent'
    }`}>
      {/* Top Bar */}
      <div className="bg-[#c8a97e] text-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-2 text-sm">
            <div className="flex items-center gap-6">
              <span className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <a href={phoneHref} className="hover:underline" {...cp('commonConfig.phoneNumber')}>{t(config.commonConfig.phoneNumber)}</a>
              </span>
            </div>
            <div className="hidden md:flex items-center gap-4">
              <div className="flex items-center gap-3">
                <a href="#" className="hover:opacity-80 transition-opacity"><Facebook className="w-4 h-4" /></a>
                <a href="#" className="hover:opacity-80 transition-opacity"><Twitter className="w-4 h-4" /></a>
                <a href="#" className="hover:opacity-80 transition-opacity"><Instagram className="w-4 h-4" /></a>
                <a href="#" className="hover:opacity-80 transition-opacity"><Youtube className="w-4 h-4" /></a>
              </div>
              <button
                onClick={toggleTheme}
                className="w-7 h-7 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                aria-label="Toggle theme"
                title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
              >
                {theme === 'dark' ? <Sun className="w-3.5 h-3.5" /> : <Moon className="w-3.5 h-3.5" />}
              </button>
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <img
              src={whiteLogoTagline}
              alt="Restaurant Logo"
              className="h-16"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <NavigationMenu>
              <NavigationMenuList className="gap-1">
                {navLinks.map((link) => (
                  <NavigationMenuItem key={link.path + link.label}>
                    <Link
                      to={link.path}
                      className={`px-4 py-2 text-sm font-medium text-white hover:text-[#c8a97e] transition-colors ${
                        isActive(link.path) ? 'text-[#c8a97e]' : ''
                      }`}
                    >
                      {link.label}
                    </Link>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Mobile Menu Button */}
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon" className="text-white">
                <Menu className="w-6 h-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-[#1a1a1a] border-l border-white/10 w-[300px]">
              <div className="flex flex-col gap-4 mt-8">
                <button
                  onClick={toggleTheme}
                  className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                  aria-label="Toggle theme"
                  title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
                >
                  {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                </button>
                <LanguageSwitcher />
                {navLinks.map((link) => (
                  <div key={link.path + link.label}>
                    <Link
                      to={link.path}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`block px-2 py-2 text-white font-medium hover:text-[#c8a97e] ${
                        isActive(link.path) ? 'text-[#c8a97e]' : ''
                      }`}
                    >
                      {link.label}
                    </Link>
                  </div>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
