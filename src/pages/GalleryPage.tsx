import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { PageBanner } from '../components/layout/PageBanner';
import { GalleryGrid } from '../components/sections/GalleryGrid';
import { useHayc } from '../hayc/config-context';

export function GalleryPage() {
  const { config } = useHayc();

  return (
    <>
      <Header variant="inner" />
      <main>
        <PageBanner title={config.navigationConfig.gallery} titlePath="navigationConfig.gallery" />
        <GalleryGrid />
      </main>
      <Footer />
    </>
  );
}
