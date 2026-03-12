import { useEffect, useState, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import { useHayc } from '../../hayc/config-context';

function AnimatedCounter({ value, inView }: { value: number; inView: boolean }) {
  const [count, setCount] = useState(0);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (inView && !hasAnimated.current) {
      hasAnimated.current = true;
      const duration = 2000;
      const steps = 60;
      const increment = value / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }
  }, [inView, value]);

  return <span>{count.toLocaleString()}</span>;
}

export function CounterSection() {
  const { t, img, config, cp } = useHayc();
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });

  return (
    <section 
      ref={ref}
      className="py-20 bg-cover bg-center bg-fixed relative"
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

        {/* Counters Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {config.counterConfig.items.map((counter, index) => (
            <div key={index} className="text-center">
              <img 
                src={img(counter.icon)} 
                alt={t(counter.label)}
                className="mx-auto h-16 mb-4"
              />
              <div className="text-4xl md:text-5xl font-bold text-[#c8a97e] mb-2">
                <AnimatedCounter value={counter.value} inView={inView} />
              </div>
              <h6 {...cp(`counterConfig.items.${index}.label`)} className="text-white/80 uppercase text-sm tracking-wider">
                {t(counter.label)}
              </h6>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
