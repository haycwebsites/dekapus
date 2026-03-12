import { useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useHayc } from '../../hayc/config-context';
import { Button } from '../ui/button';

export function HeroSlider() {
  const { t, img, config, cp } = useHayc();
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const slides = [
    { image: config.heroConfig.backgroundImage1 },
    { image: config.heroConfig.backgroundImage2 },
    { image: config.heroConfig.backgroundImage1 },
  ];

  const scrollPrev = () => emblaApi?.scrollPrev();
  const scrollNext = () => emblaApi?.scrollNext();

  useEffect(() => {
    if (!emblaApi) return;
    
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on('select', onSelect);
    
    const autoplay = setInterval(() => emblaApi.scrollNext(), 5000);
    
    return () => {
      emblaApi.off('select', onSelect);
      clearInterval(autoplay);
    };
  }, [emblaApi]);

  return (
    <section className="relative h-screen">
      <div className="overflow-hidden h-full" ref={emblaRef}>
        <div className="flex h-full">
          {slides.map((slide, index) => (
            <div
              key={index}
              className="flex-[0_0_100%] min-w-0 relative"
            >
              <img
                src={img(slide.image)}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40" />
              
              {/* Content Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white px-4">
                  <img 
                    src={img(config.heroConfig.slideLogo)} 
                    alt="Logo" 
                    className="mx-auto mb-8 h-24"
                  />
                  <h2 {...cp('heroConfig.title')} className="font-['Great_Vibes'] text-4xl md:text-6xl text-[#c8a97e] mb-4">
                    {t(config.heroConfig.title)}
                  </h2>
                  <p {...cp('heroConfig.subtitle')} className="text-lg md:text-xl uppercase tracking-widest mb-8">
                    {t(config.heroConfig.subtitle)}
                  </p>
                  <Button 
                    size="lg"
                    className="bg-[#c8a97e] hover:bg-[#b89a6f] text-white px-8 py-6 text-lg"
                  >
                    <span {...cp('heroConfig.viewMenuButton')}>{t(config.heroConfig.viewMenuButton)}</span>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={scrollPrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 hover:bg-[#c8a97e] flex items-center justify-center text-white transition-colors"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={scrollNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 hover:bg-[#c8a97e] flex items-center justify-center text-white transition-colors"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => emblaApi?.scrollTo(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === selectedIndex ? 'bg-[#c8a97e]' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </section>
  );
}
