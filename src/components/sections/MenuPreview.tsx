import { useHayc } from '../../hayc/config-context';

export function MenuPreview() {
  const { t, img, config, cp } = useHayc();

  const displayItems = config.menuConfig.items.slice(0, 10);

  return (
    <section className="py-20 bg-[#141414] relative">
      <img 
        src={img(config.menuConfig.decorImage1)} 
        alt="" 
        className="absolute top-0 right-0 h-32 opacity-50"
      />
      <img 
        src={img(config.menuConfig.decorImage2)} 
        alt="" 
        className="absolute bottom-0 left-0 h-32 opacity-50"
      />
      
      <div className="container mx-auto px-4 relative">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h3 {...cp('menuConfig.sectionTitle')} className="font-['Great_Vibes'] text-4xl text-[#c8a97e] mb-2">
            {t(config.menuConfig.sectionTitle)}
          </h3>
          <h2 {...cp('menuConfig.title')} className="text-2xl md:text-3xl font-serif text-white uppercase">
            {t(config.menuConfig.title)}
          </h2>
        </div>

        {/* Menu Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {displayItems.map((item, index) => (
            <div 
              key={index} 
              className="flex items-center gap-4 p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
            >
              <img 
                src={img(item.image)} 
                alt={t(item.name)}
                className="w-20 h-20 rounded-full object-cover flex-shrink-0"
              />
              <div className="flex-grow min-w-0">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <h4 {...cp(`menuConfig.items.${index}.name`)} className="text-white font-medium uppercase text-sm">
                      {t(item.name)}
                    </h4>
                    <p {...cp(`menuConfig.items.${index}.description`)} className="text-white/50 text-xs mt-1">
                      {t(item.description)}
                    </p>
                  </div>
                  <span className="text-[#c8a97e] font-bold text-lg flex-shrink-0">
                    <sup className="text-sm">$</sup>{item.price}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
