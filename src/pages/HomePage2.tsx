import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { HeroSlider } from '../components/sections/HeroSlider';
import { AboutSection } from '../components/sections/AboutSection';
import { ServicesSection } from '../components/sections/ServicesSection';
import { CounterSection } from '../components/sections/CounterSection';
import { MenuPreview } from '../components/sections/MenuPreview';
import { EventsSection } from '../components/sections/EventsSection';
import { TestimonialsSection } from '../components/sections/TestimonialsSection';
import { Newsletter } from '../components/sections/Newsletter';

export function HomePage2() {
  return (
    <>
      <Header variant="home" />
      <main>
        <HeroSlider />
        <ServicesSection />
        <AboutSection />
        <MenuPreview />
        <CounterSection />
        <EventsSection />
        <TestimonialsSection />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}
