import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { HaycProvider } from './hayc/config-context';
import { Preloader } from './components/Preloader';
import { ScrollToTop } from './components/ScrollToTop';
import { useState, useCallback, useEffect, useRef } from 'react';

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

function RouteScrollRestoration() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [pathname]);

  return null;
}

function RouteAnalytics() {
  const { pathname } = useLocation();
  const previousPathRef = useRef<string | null>(null);

  useEffect(() => {
    const apiKey = '8c5394ce-4eea-46d6-ac32-fd8eb41cc9f3';
    const endpoint = 'https://hayc.gr/api/analytics/track';

    const getSessionId = () => {
      try {
        let sessionId = sessionStorage.getItem('hayc_session_id');
        if (!sessionId) {
          sessionId = `sess_${Date.now()}_${Math.random().toString(36).slice(2, 11)}`;
          sessionStorage.setItem('hayc_session_id', sessionId);
        }
        return sessionId;
      } catch {
        return `sess_${Date.now()}_${Math.random().toString(36).slice(2, 11)}`;
      }
    };

    const detectDevice = () => {
      const ua = navigator.userAgent;
      if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) return 'Tablet';
      if (/Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(ua)) return 'Mobile';
      return 'Desktop';
    };

    const referrer = previousPathRef.current
      ? `${window.location.origin}${previousPathRef.current}`
      : document.referrer;

    fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        key: apiKey,
        type: 'pageview',
        page: pathname,
        referrer,
        timestamp: Date.now(),
        sessionId: getSessionId(),
        deviceType: detectDevice(),
      }),
    }).catch(() => {});

    previousPathRef.current = pathname;
  }, [pathname]);

  return null;
}

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const handlePreloaderComplete = useCallback(() => setIsLoading(false), []);

  return (
    <BrowserRouter>
      <HaycProvider>
        <RouteScrollRestoration />
        <RouteAnalytics />
        {isLoading && <Preloader onComplete={handlePreloaderComplete} />}
        <div className={`min-h-screen bg-black ${isLoading ? 'overflow-hidden max-h-screen' : ''}`}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/dekapus-method" element={<BlogSinglePage />} />
            <Route path="/my-work" element={<BlogSinglePage />} />
            <Route path="/home-2" element={<HomePage2 />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/engagement" element={<BlogSinglePage />} />
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
