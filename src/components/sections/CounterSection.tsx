import { useInView } from 'react-intersection-observer';
import { useHayc } from '../../hayc/config-context';
import { Button } from '../ui/button';

export function CounterSection() {
  const { t, img, config, cp } = useHayc();
  const { ref } = useInView({ threshold: 0.3, triggerOnce: true });
  const freeCallUrl = 'https://calendly.com/dionpaxinos/30min?month=2026-04';

  return (
    <section
      ref={ref}
      className="on-dark-image-section py-20 bg-cover bg-center bg-fixed relative"
      style={{ backgroundImage: `url(${img(config.counterConfig.backgroundImage)})` }}
    >
      <div className="absolute inset-0 bg-black/70" />

      <div className="relative container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
          <p
            {...cp('counterConfig.paragraph1')}
            className="text-white/90 text-lg md:text-xl leading-relaxed mb-6"
          >
            {t(config.counterConfig.paragraph1)}
          </p>
          <p
            {...cp('counterConfig.paragraph2')}
            className="text-white/85 text-lg md:text-xl leading-relaxed mb-10"
          >
            {t(config.counterConfig.paragraph2)}
          </p>
          <Button
            asChild
            size="lg"
            className="bg-[#c8a97e] hover:bg-[#b89a6f] text-white px-8 py-6 text-lg"
          >
            <a href={freeCallUrl} target="_blank" rel="noopener noreferrer">
              <span {...cp('counterConfig.learnMoreButton')}>{t(config.counterConfig.learnMoreButton)}</span>
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
