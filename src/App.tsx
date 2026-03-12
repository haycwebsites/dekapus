import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HaycProvider } from './hayc/config-context';
import { Preloader } from './components/Preloader';
import { ScrollToTop } from './components/ScrollToTop';
import { useState, useCallback } from 'react';

import { HomePage } from './pages/HomePage';
import { HomePage2 } from './pages/HomePage2';
import { AboutPage } from './pages/AboutPage';
import { MenuPage } from './pages/MenuPage';
import { ReservationPage } from './pages/ReservationPage';
import { GalleryPage } from './pages/GalleryPage';
import { BlogPage } from './pages/BlogPage';
import { BlogSinglePage } from './pages/BlogSinglePage';
import { ContactPage } from './pages/ContactPage';
import { ContactPage2 } from './pages/ContactPage2';
import { NotFoundPage } from './pages/NotFoundPage';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const handlePreloaderComplete = useCallback(() => setIsLoading(false), []);

  return (
    <BrowserRouter>
      <HaycProvider>
        {isLoading && <Preloader onComplete={handlePreloaderComplete} />}
        <div className={`min-h-screen bg-[#141414] ${isLoading ? 'overflow-hidden max-h-screen' : ''}`}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/home-2" element={<HomePage2 />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/menu" element={<MenuPage />} />
            <Route path="/reservation" element={<ReservationPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:slug" element={<BlogSinglePage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/contact-2" element={<ContactPage2 />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>
        <ScrollToTop />
      </HaycProvider>
    </BrowserRouter>
  );
}

export default App;
