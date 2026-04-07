import { Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useHayc } from '../../hayc/config-context';
import { Button } from '../ui/button';

export function EventsSection() {
  const { t, img, config, cp } = useHayc();

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h3 {...cp('eventsConfig.sectionTitle')} className="font-['Great_Vibes'] text-4xl text-[#c8a97e] mb-2">
            {t(config.eventsConfig.sectionTitle)}
          </h3>
          <h2 {...cp('eventsConfig.title')} className="text-2xl md:text-3xl font-serif text-white uppercase">
            {t(config.eventsConfig.title)}
          </h2>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {config.eventsConfig.items.map((event, index) => (
            <div 
              key={index} 
              className="group overflow-hidden"
            >
              <div className="relative overflow-hidden rounded-sm">
                <img 
                  src={img(event.image)} 
                  alt={t(event.title)}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="pt-6 border-l border-white pl-6 md:pl-8">
                <h4 {...cp(`eventsConfig.items.${index}.title`)} className="text-white font-semibold mb-3 line-clamp-2">
                  {t(event.title)}
                </h4>
                <p {...cp(`eventsConfig.items.${index}.description`)} className="text-white/60 text-sm mb-4 line-clamp-2">
                  {t(event.description)}
                </p>
                <div className="flex items-center gap-2 text-white/50 text-xs mb-4">
                  <Clock className="w-4 h-4" />
                  <span {...cp('eventsConfig.postedLabel')}>{t(config.eventsConfig.postedLabel)}</span>
                  <span {...cp(`eventsConfig.items.${index}.date`)}>{t(event.date)}</span>
                </div>
                <Link to="/reservation">
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="border-[#c8a97e] text-[#c8a97e] hover:bg-[#c8a97e] hover:text-white"
                  >
                    <span {...cp('navigationConfig.bookNow')}>{t(config.navigationConfig.bookNow)}</span>
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
