import { Facebook, Twitter, Instagram } from 'lucide-react';
import { useHayc } from '../../hayc/config-context';

export function TeamSection() {
  const { t, img, config, cp } = useHayc();

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h3 {...cp('teamConfig.sectionTitle')} className="font-['Great_Vibes'] text-4xl text-[#c8a97e] mb-2">
            {t(config.teamConfig.sectionTitle)}
          </h3>
          <h2 {...cp('teamConfig.title')} className="text-2xl md:text-3xl font-serif text-white uppercase">
            {t(config.teamConfig.title)}
          </h2>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {config.teamConfig.members.map((member, index) => (
            <div key={index} className="group text-center">
              <div className="relative overflow-hidden rounded-lg mb-4">
                <img 
                  src={img(member.image)} 
                  alt={t(member.name)}
                  className="w-full aspect-[3/4] object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-[#c8a97e]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex gap-3">
                    <a 
                      href="#" 
                      className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#c8a97e] hover:bg-black hover:text-white transition-colors"
                    >
                      <Facebook className="w-4 h-4" />
                    </a>
                    <a 
                      href="#" 
                      className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#c8a97e] hover:bg-black hover:text-white transition-colors"
                    >
                      <Twitter className="w-4 h-4" />
                    </a>
                    <a 
                      href="#" 
                      className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#c8a97e] hover:bg-black hover:text-white transition-colors"
                    >
                      <Instagram className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
              <h4 {...cp(`teamConfig.members.${index}.name`)} className="text-white font-semibold uppercase mb-1">
                {t(member.name)}
              </h4>
              <p {...cp(`teamConfig.members.${index}.role`)} className="text-white/50 text-sm">
                {t(member.role)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
