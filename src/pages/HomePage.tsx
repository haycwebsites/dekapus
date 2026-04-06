import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { HeroSlider } from '../components/sections/HeroSlider';
import { AboutSection } from '../components/sections/AboutSection';
import { HomeWhatWeDoSection } from '../components/sections/HomeWhatWeDoSection';
import { CounterSection } from '../components/sections/CounterSection';
import { Newsletter } from '../components/sections/Newsletter';

export function HomePage() {
  return (
    <>
      <Header variant="home" />
      <main>
        <HeroSlider />
        <AboutSection />
        <HomeWhatWeDoSection />
        <CounterSection />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}
