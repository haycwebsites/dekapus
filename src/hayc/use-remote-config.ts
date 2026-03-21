import {
  siteConfig,
  preloaderConfig,
  scrollToTopConfig,
  navigationConfig,
  commonConfig,
  heroConfig,
  aboutConfig,
  aboutStatementConfig,
  servicesConfig,
  counterConfig,
  menuConfig,
  bookTableConfig,
  eventsConfig,
  testimonialsConfig,
  blogConfig,
  newsletterConfig,
  teamConfig,
  galleryConfig,
  contactConfig,
  footerConfig,
  notFoundConfig,
} from '../config';

export interface RemoteConfig {
  version: number;
  exportedAt: string;
  siteConfig: typeof siteConfig;
  preloaderConfig: typeof preloaderConfig;
  scrollToTopConfig: typeof scrollToTopConfig;
  navigationConfig: typeof navigationConfig;
  commonConfig: typeof commonConfig;
  heroConfig: typeof heroConfig;
  aboutConfig: typeof aboutConfig;
  aboutStatementConfig: typeof aboutStatementConfig;
  servicesConfig: typeof servicesConfig;
  counterConfig: typeof counterConfig;
  menuConfig: typeof menuConfig;
  bookTableConfig: typeof bookTableConfig;
  eventsConfig: typeof eventsConfig;
  testimonialsConfig: typeof testimonialsConfig;
  blogConfig: typeof blogConfig;
  newsletterConfig: typeof newsletterConfig;
  teamConfig: typeof teamConfig;
  galleryConfig: typeof galleryConfig;
  contactConfig: typeof contactConfig;
  footerConfig: typeof footerConfig;
  notFoundConfig: typeof notFoundConfig;
}

export const defaultConfig: RemoteConfig = {
  version: 1,
  exportedAt: '',
  siteConfig,
  preloaderConfig,
  scrollToTopConfig,
  navigationConfig,
  commonConfig,
  heroConfig,
  aboutConfig,
  aboutStatementConfig,
  servicesConfig,
  counterConfig,
  menuConfig,
  bookTableConfig,
  eventsConfig,
  testimonialsConfig,
  blogConfig,
  newsletterConfig,
  teamConfig,
  galleryConfig,
  contactConfig,
  footerConfig,
  notFoundConfig,
};

export async function fetchRemoteConfig(): Promise<RemoteConfig> {
  // In development, use config.ts directly for instant updates
  if (import.meta.env.DEV) {
    return defaultConfig;
  }

  // In production, fetch from remote config.json
  try {
    const res = await fetch('/hayc/config.json');
    if (!res.ok) throw new Error('Failed to fetch config: ' + res.status);
    const data = await res.json();
    return data as RemoteConfig;
  } catch (err) {
    console.warn('[HAYC] Remote config fetch failed, using default config.', err);
    return defaultConfig;
  }
}
