import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { HeroSlider } from '../components/sections/HeroSlider';
import { AboutSection } from '../components/sections/AboutSection';
import { ServicesSection } from '../components/sections/ServicesSection';
import { CounterSection } from '../components/sections/CounterSection';
import { MenuPreview } from '../components/sections/MenuPreview';
import { BookTableSection } from '../components/sections/BookTableSection';
import { EventsSection } from '../components/sections/EventsSection';
import { TestimonialsSection } from '../components/sections/TestimonialsSection';
import { BlogSection } from '../components/sections/BlogCard';
import { Newsletter } from '../components/sections/Newsletter';

export function HomePage() {
  return (
    <>
      <Header variant="home" />
      <main>
        <HeroSlider />
        <AboutSection />
        <ServicesSection />
        <CounterSection />
        <MenuPreview />
        <BookTableSection />
        <EventsSection />
        <TestimonialsSection />
        <BlogSection />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}
