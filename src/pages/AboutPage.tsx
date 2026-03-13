import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { PageBanner } from '../components/layout/PageBanner';
import { AboutSection } from '../components/sections/AboutSection';
import { AboutStatementSection } from '../components/sections/AboutStatementSection';
import { useHayc } from '../hayc/config-context';

export function AboutPage() {
  const { config } = useHayc();

  return (
    <>
      <Header variant="inner" />
      <main>
        <PageBanner title={config.navigationConfig.about} titlePath="navigationConfig.about" />
        <AboutSection />
        <AboutStatementSection />
      </main>
      <Footer />
    </>
  );
}
