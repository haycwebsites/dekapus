import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, ChevronDown, Phone, Calendar, Facebook, Twitter, Instagram, Youtube, Search } from 'lucide-react';
import { useHayc } from '../../hayc/config-context';
import { Button } from '../ui/button';
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet';
import { Input } from '../ui/input';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '../ui/navigation-menu';
import { LanguageSwitcher } from '../LanguageSwitcher';

interface HeaderProps {
  variant?: 'home' | 'inner';
}

export function Header({ variant = 'inner' }: HeaderProps) {
  const { t, img, config, cp } = useHayc();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    {
      label: t(config.navigationConfig.home),
      path: '/',
      children: [
        { label: t(config.navigationConfig.home1), path: '/' },
        { label: t(config.navigationConfig.home2), path: '/home-2' },
      ],
    },
    { label: t(config.navigationConfig.about), path: '/about' },
    { label: t(config.navigationConfig.events), path: '#' },
    {
      label: t(config.navigationConfig.pages),
      path: '#',
      children: [
        { label: t(config.navigationConfig.menu), path: '/menu' },
        { label: t(config.navigationConfig.reservation), path: '/reservation' },
        { label: t(config.navigationConfig.gallery), path: '/gallery' },
      ],
    },
    { label: t(config.navigationConfig.services), path: '#' },
    { label: t(config.navigationConfig.team), path: '#' },
    {
      label: t(config.navigationConfig.blog),
      path: '/blog',
      children: [
        { label: t(config.navigationConfig.blog), path: '/blog' },
        { label: t(config.navigationConfig.blogPost), path: '/blog/sample-post' },
      ],
    },
    {
      label: t(config.navigationConfig.contact),
      path: '/contact',
      children: [
        { label: t(config.navigationConfig.contact1), path: '/contact' },
        { label: t(config.navigationConfig.contact2), path: '/contact-2' },
      ],
    },
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
                <span {...cp('commonConfig.reservationPhone')}>{t(config.commonConfig.reservationPhone)}</span>
                <a href="tel:+11234567896" className="hover:underline" {...cp('commonConfig.phoneNumber')}>{t(config.commonConfig.phoneNumber)}</a>
              </span>
              <Link to="/reservation" className="flex items-center gap-2 hover:underline">
                <Calendar className="w-4 h-4" />
                <span {...cp('navigationConfig.bookNow')}>{t(config.navigationConfig.bookNow)}</span>
              </Link>
            </div>
            <div className="hidden md:flex items-center gap-4">
              <div className="flex items-center gap-3">
                <a href="#" className="hover:opacity-80 transition-opacity"><Facebook className="w-4 h-4" /></a>
                <a href="#" className="hover:opacity-80 transition-opacity"><Twitter className="w-4 h-4" /></a>
                <a href="#" className="hover:opacity-80 transition-opacity"><Instagram className="w-4 h-4" /></a>
                <a href="#" className="hover:opacity-80 transition-opacity"><Youtube className="w-4 h-4" /></a>
              </div>
              <div className="flex items-center gap-2 ml-4">
                <Input
                  type="text"
                  placeholder={t(config.navigationConfig.search)}
                  className="h-7 w-32 text-xs bg-white/20 border-white/30 placeholder:text-white/70"
                />
                <Button size="sm" variant="ghost" className="h-7 w-7 p-0 text-white hover:bg-white/20">
                  <Search className="w-3 h-3" />
                </Button>
              </div>
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
              src={img(variant === 'home' ? config.navigationConfig.logoHome : config.navigationConfig.logoInner)}
              alt="Restaurant Logo"
              className="h-12"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <NavigationMenu>
              <NavigationMenuList className="gap-1">
                {navLinks.map((link) => (
                  <NavigationMenuItem key={link.path + link.label}>
                    {link.children ? (
                      <>
                        <NavigationMenuTrigger 
                          className={`bg-transparent text-white hover:bg-white/10 hover:text-[#c8a97e] ${
                            link.children.some(c => isActive(c.path)) ? 'text-[#c8a97e]' : ''
                          }`}
                        >
                          {link.label}
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                          <ul className="w-48 p-2 bg-[#1a1a1a] border border-white/10">
                            {link.children.map((child) => (
                              <li key={child.path}>
                                <NavigationMenuLink asChild>
                                  <Link
                                    to={child.path}
                                    className={`block px-4 py-2 text-sm text-white hover:bg-[#c8a97e] hover:text-white rounded transition-colors ${
                                      isActive(child.path) ? 'bg-[#c8a97e]' : ''
                                    }`}
                                  >
                                    {child.label}
                                  </Link>
                                </NavigationMenuLink>
                              </li>
                            ))}
                          </ul>
                        </NavigationMenuContent>
                      </>
                    ) : (
                      <Link
                        to={link.path}
                        className={`px-4 py-2 text-sm font-medium text-white hover:text-[#c8a97e] transition-colors ${
                          isActive(link.path) ? 'text-[#c8a97e]' : ''
                        }`}
                      >
                        {link.label}
                      </Link>
                    )}
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
                <LanguageSwitcher />
                {navLinks.map((link) => (
                  <div key={link.path + link.label}>
                    {link.children ? (
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-white font-medium px-2">
                          {link.label}
                          <ChevronDown className="w-4 h-4" />
                        </div>
                        <div className="pl-4 space-y-1">
                          {link.children.map((child) => (
                            <Link
                              key={child.path}
                              to={child.path}
                              onClick={() => setMobileMenuOpen(false)}
                              className={`block px-2 py-2 text-sm text-white/80 hover:text-[#c8a97e] ${
                                isActive(child.path) ? 'text-[#c8a97e]' : ''
                              }`}
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <Link
                        to={link.path}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`block px-2 py-2 text-white font-medium hover:text-[#c8a97e] ${
                          isActive(link.path) ? 'text-[#c8a97e]' : ''
                        }`}
                      >
                        {link.label}
                      </Link>
                    )}
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
