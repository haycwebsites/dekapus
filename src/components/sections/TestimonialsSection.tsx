import { useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { useHayc } from '../../hayc/config-context';

export function TestimonialsSection() {
  const { t, img, config, cp } = useHayc();
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    if (!emblaApi) return;
    
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on('select', onSelect);
    
    const autoplay = setInterval(() => emblaApi.scrollNext(), 6000);
    
    return () => {
      emblaApi.off('select', onSelect);
      clearInterval(autoplay);
    };
  }, [emblaApi]);

  return (
    <section 
      className="py-20 bg-cover bg-center bg-fixed relative"
      style={{ backgroundImage: `url(${img(config.testimonialsConfig.backgroundImage)})` }}
    >
      <div className="absolute inset-0 bg-black/80" />
      
      <div className="relative container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h3 {...cp('testimonialsConfig.sectionTitle')} className="font-['Great_Vibes'] text-4xl text-[#c8a97e] mb-2">
            {t(config.testimonialsConfig.sectionTitle)}
          </h3>
          <h2 {...cp('testimonialsConfig.title')} className="text-2xl md:text-3xl font-serif text-white uppercase">
            {t(config.testimonialsConfig.title)}
          </h2>
        </div>

        {/* Testimonials Carousel */}
        <div className="max-w-3xl mx-auto">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {config.testimonialsConfig.items.map((testimonial, index) => (
                <div 
                  key={index}
                  className="flex-[0_0_100%] min-w-0 text-center px-8"
                >
                  <p {...cp(`testimonialsConfig.items.${index}.text`)} className="text-white/80 text-lg italic leading-relaxed mb-8">
                    "{t(testimonial.text)}"
                  </p>
                  <img 
                    {...cp('testimonialsConfig.quoteIconAlt')}
                    src={img(config.testimonialsConfig.quoteImage)} 
                    alt={t(config.testimonialsConfig.quoteIconAlt)}
                    className="mx-auto h-8 mb-4"
                  />
                  <h5 {...cp(`testimonialsConfig.items.${index}.author`)} className="text-[#c8a97e] font-medium">
                    - {t(testimonial.author)}
                  </h5>
                </div>
              ))}
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {config.testimonialsConfig.items.map((_, index) => (
              <button
                key={index}
                onClick={() => emblaApi?.scrollTo(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === selectedIndex ? 'bg-[#c8a97e]' : 'bg-white/30'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
