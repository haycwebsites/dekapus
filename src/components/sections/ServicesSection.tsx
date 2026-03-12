import { useHayc } from '../../hayc/config-context';

export function ServicesSection() {
  const { t, img, config, cp } = useHayc();

  return (
    <section className="py-20 bg-[#1a1a1a]">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h3 {...cp('servicesConfig.sectionTitle')} className="font-['Great_Vibes'] text-4xl text-[#c8a97e] mb-2">
            {t(config.servicesConfig.sectionTitle)}
          </h3>
          <h2 {...cp('servicesConfig.title')} className="text-2xl md:text-3xl font-serif text-white uppercase">
            {t(config.servicesConfig.title)}
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {config.servicesConfig.items.map((service, index) => (
            <div key={index} className="group">
              <div className="relative overflow-hidden rounded-lg bg-[#c8a97e]/10 p-8 text-center">
                <img 
                  src={img(service.image)} 
                  alt={t(service.title)}
                  className="mx-auto h-24 mb-4 group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-[#c8a97e] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white text-sm font-medium">
                    <span {...cp('servicesConfig.orderNow')}>{t(config.servicesConfig.orderNow)}</span> 1800 121 9420
                  </span>
                </div>
              </div>
              <h4 {...cp(`servicesConfig.items.${index}.title`)} className="text-center text-white mt-4 font-medium uppercase">
                {t(service.title)}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
