import { Link } from 'react-router-dom';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { useHayc } from '../hayc/config-context';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Home, Search } from 'lucide-react';

export function NotFoundPage() {
  const { t, img, config, cp } = useHayc();

  return (
    <>
      <Header variant="inner" />
      <main className="min-h-[calc(100vh-200px)] flex items-center justify-center bg-[#141414] pt-32">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            {/* 404 Image or Illustration */}
            <div className="mb-8">
              <img 
                src={img(config.notFoundConfig.image)} 
                alt="404"
                className="mx-auto max-w-sm rounded-lg opacity-80"
              />
            </div>

            {/* 404 Number */}
            <h1 {...cp('notFoundConfig.subtitle')} className="text-8xl md:text-9xl font-bold text-[#c8a97e] mb-4">
              {t(config.notFoundConfig.subtitle)}
            </h1>
            
            {/* Title */}
            <h2 {...cp('notFoundConfig.title')} className="text-2xl md:text-3xl font-serif text-white mb-4">
              {t(config.notFoundConfig.title)}
            </h2>
            
            {/* Description */}
            <p {...cp('notFoundConfig.description')} className="text-white/60 mb-8 max-w-md mx-auto">
              {t(config.notFoundConfig.description)}
            </p>

            {/* Search Form */}
            <form className="flex gap-2 max-w-md mx-auto mb-8">
              <Input 
                type="text"
                placeholder={t(config.navigationConfig.search)}
                className="h-12 bg-white/10 border-white/20 text-white placeholder:text-white/50"
              />
              <Button 
                type="submit"
                className="h-12 px-6 bg-[#c8a97e] hover:bg-[#b89a6f] text-white"
              >
                <Search className="w-5 h-5" />
              </Button>
            </form>

            {/* Back to Home Button */}
            <Link to="/">
              <Button 
                size="lg"
                className="bg-[#c8a97e] hover:bg-[#b89a6f] text-white px-8"
              >
                <Home className="w-5 h-5 mr-2" />
                <span {...cp('notFoundConfig.backHome')}>{t(config.notFoundConfig.backHome)}</span>
              </Button>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
