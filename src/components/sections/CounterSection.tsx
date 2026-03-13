import { useInView } from 'react-intersection-observer';
import { useHayc } from '../../hayc/config-context';

export function CounterSection() {
  const { t, img, config, cp } = useHayc();
  const { ref } = useInView({ threshold: 0.3, triggerOnce: true });

  return (
    <section 
      ref={ref}
      className="on-dark-image-section py-20 bg-cover bg-center bg-fixed relative"
      style={{ backgroundImage: `url(${img(config.counterConfig.backgroundImage)})` }}
    >
      <div className="absolute inset-0 bg-black/70" />
      
      <div className="relative container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h3 {...cp('counterConfig.sectionTitle')} className="font-['Great_Vibes'] text-4xl text-[#c8a97e] mb-2">
            {t(config.counterConfig.sectionTitle)}
          </h3>
          <h2 {...cp('counterConfig.title')} className="text-2xl md:text-3xl font-serif text-white uppercase">
            {t(config.counterConfig.title)}
          </h2>
        </div>

      </div>
    </section>
  );
}
