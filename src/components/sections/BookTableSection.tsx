import { User, Phone, Clock } from 'lucide-react';
import { useHayc } from '../../hayc/config-context';
import { Input } from '../ui/input';
import { Button } from '../ui/button';

export function BookTableSection() {
  const { t, img, config, cp } = useHayc();

  return (
    <section 
      className="py-20 bg-cover bg-center relative"
      style={{ backgroundImage: `url(${img(config.bookTableConfig.backgroundImage)})` }}
    >
      <div className="absolute inset-0 bg-black/80" />
      
      <div className="relative container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h3 {...cp('bookTableConfig.sectionTitle')} className="font-['Great_Vibes'] text-4xl text-[#c8a97e] mb-2">
            {t(config.bookTableConfig.sectionTitle)}
          </h3>
          <h2 {...cp('bookTableConfig.title')} className="text-2xl md:text-3xl font-serif text-white uppercase">
            {t(config.bookTableConfig.title)}
          </h2>
        </div>

        {/* Form */}
        <form className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="relative">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#c8a97e]" />
              <Input 
                type="text"
                placeholder={t(config.bookTableConfig.namePlaceholder)}
                className="pl-12 h-14 bg-white/10 border-white/20 text-white placeholder:text-white/50"
              />
            </div>
            <div className="relative">
              <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#c8a97e]" />
              <Input 
                type="tel"
                placeholder={t(config.bookTableConfig.phonePlaceholder)}
                className="pl-12 h-14 bg-white/10 border-white/20 text-white placeholder:text-white/50"
              />
            </div>
            <div className="relative">
              <svg 
                className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#c8a97e]" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <Input 
                type="text"
                placeholder={t(config.bookTableConfig.tablePlaceholder)}
                className="pl-12 h-14 bg-white/10 border-white/20 text-white placeholder:text-white/50"
              />
            </div>
            <div className="relative">
              <Clock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#c8a97e]" />
              <Input 
                type="text"
                placeholder={t(config.bookTableConfig.timePlaceholder)}
                className="pl-12 h-14 bg-white/10 border-white/20 text-white placeholder:text-white/50"
              />
            </div>
          </div>
          <div className="text-center mt-8">
            <Button 
              type="submit"
              size="lg"
              className="bg-[#c8a97e] hover:bg-[#b89a6f] text-white px-12 h-14"
            >
              <span {...cp('commonConfig.submit')}>{t(config.commonConfig.submit)}</span>
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
}
