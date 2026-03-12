import { useHayc } from '../../hayc/config-context';
import { Input } from '../ui/input';
import { Button } from '../ui/button';

export function Newsletter() {
  const { t, img, config, cp } = useHayc();

  return (
    <section 
      className="py-16 bg-cover bg-center relative"
      style={{ backgroundImage: `url(${img(config.newsletterConfig.backgroundImage)})` }}
    >
      <div className="absolute inset-0 bg-[#c8a97e]/90" />
      
      <div className="relative container mx-auto px-4 text-center">
        <h3 {...cp('newsletterConfig.title')} className="font-['Great_Vibes'] text-4xl text-white mb-2">
          {t(config.newsletterConfig.title)}
        </h3>
        <p {...cp('newsletterConfig.description')} className="text-white/90 mb-8 max-w-xl mx-auto">
          {t(config.newsletterConfig.description)}
        </p>
        
        <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
          <Input 
            type="email"
            placeholder={t(config.newsletterConfig.placeholder)}
            className="flex-grow bg-white border-0 h-12 text-gray-800"
          />
          <Button 
            type="submit"
            className="bg-[#1a1a1a] hover:bg-black text-white h-12 px-8"
          >
            <span {...cp('commonConfig.signUp')}>{t(config.commonConfig.signUp)}</span>
          </Button>
        </form>
      </div>
    </section>
  );
}
