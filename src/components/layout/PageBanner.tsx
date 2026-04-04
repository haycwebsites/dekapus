import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { useHayc } from '../../hayc/config-context';
import type { LocaleString } from '../../config';

interface PageBannerProps {
  title: LocaleString;
  titlePath?: string;
  breadcrumbs?: Array<{ label: LocaleString; path?: string }>;
}

export function PageBanner({ title, titlePath, breadcrumbs }: PageBannerProps) {
  const { t, img, config, cp } = useHayc();

  const defaultBreadcrumbs = [
    { label: config.navigationConfig.home, path: '/' },
    { label: title },
  ];

  const crumbs = breadcrumbs || defaultBreadcrumbs;

  return (
    <div 
      className="on-dark-image-section relative bg-cover bg-center py-24 mt-[120px]"
      style={{ backgroundImage: `url(${img('/images/page-banner.jpg')})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />
      
      {/* Content */}
      <div className="relative container mx-auto px-4 text-center">
        <h1 {...(titlePath ? cp(titlePath) : {})} className="text-4xl md:text-5xl font-serif text-white mb-4">
          {t(title)}
        </h1>
        
        {/* Breadcrumbs */}
        <nav className="flex items-center justify-center gap-2 text-sm">
          {crumbs.map((crumb, index) => (
            <span key={index} className="flex items-center gap-2">
              {index > 0 && <ChevronRight className="w-4 h-4 text-white/50" />}
              {crumb.path ? (
                <Link 
                  to={crumb.path}
                  {...(crumb.path === '/' ? cp('navigationConfig.home') : {})}
                  className="text-[#c8a97e] hover:text-white transition-colors"
                >
                  {t(crumb.label)}
                </Link>
              ) : (
                <span {...(titlePath ? cp(titlePath) : {})} className="text-white/70">{t(crumb.label)}</span>
              )}
            </span>
          ))}
        </nav>
      </div>
    </div>
  );
}
