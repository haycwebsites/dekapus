import { Facebook, Twitter } from 'lucide-react';
import { useHayc } from '../../hayc/config-context';

export function AboutSection() {
  const { t, img, config, cp } = useHayc();

  return (
    <section className="py-20 bg-[#141414]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <div className="mb-8">
              <h3 {...cp('aboutConfig.sectionTitle')} className="font-['Great_Vibes'] text-4xl text-[#c8a97e] mb-2">
                {t(config.aboutConfig.sectionTitle)}
              </h3>
              <h2 {...cp('aboutConfig.title')} className="text-2xl md:text-3xl font-serif text-white uppercase">
                {t(config.aboutConfig.title)}
              </h2>
            </div>
            
            <p {...cp('aboutConfig.description1')} className="text-white/70 mb-4 leading-relaxed">
              {t(config.aboutConfig.description1)}
            </p>
            <p {...cp('aboutConfig.description2')} className="text-white/70 mb-8 leading-relaxed">
              {t(config.aboutConfig.description2)}
            </p>

            {/* Chef Detail */}
            <div className="flex items-center gap-4 p-4 bg-white/5 rounded-lg">
              <img 
                src={img(config.aboutConfig.chefThumb)} 
                alt="Chef"
                className="w-16 h-16 rounded-full object-cover"
              />
              <div>
                <img 
                  src={img(config.aboutConfig.chefSign)} 
                  alt="Signature"
                  className="h-8 mb-2"
                />
                <h4 {...cp('aboutConfig.chefName')} className="text-white font-semibold">{t(config.aboutConfig.chefName)}</h4>
                <div className="flex gap-2 mt-2">
                  <a href="#" className="text-white/50 hover:text-[#c8a97e]">
                    <Facebook className="w-4 h-4" />
                  </a>
                  <a href="#" className="text-white/50 hover:text-[#c8a97e]">
                    <Twitter className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Images */}
          <div className="grid grid-cols-1 gap-4">
            <img 
              src={img(config.aboutConfig.aboutImage1)} 
              alt="About"
              className="w-full rounded-lg"
            />
            <img 
              src={img(config.aboutConfig.aboutImage2)} 
              alt="About"
              className="w-full rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
