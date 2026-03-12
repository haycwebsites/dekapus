import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { PageBanner } from '../components/layout/PageBanner';
import { AboutSection } from '../components/sections/AboutSection';
import { CounterSection } from '../components/sections/CounterSection';
import { TeamSection } from '../components/sections/TeamSection';
import { TestimonialsSection } from '../components/sections/TestimonialsSection';
import { useHayc } from '../hayc/config-context';

export function AboutPage() {
  const { config } = useHayc();

  return (
    <>
      <Header variant="inner" />
      <main>
        <PageBanner title={config.navigationConfig.about} titlePath="navigationConfig.about" />
        <AboutSection />
        <CounterSection />
        <TeamSection />
        <TestimonialsSection />
      </main>
      <Footer />
    </>
  );
}
