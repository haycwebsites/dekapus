import {
  siteConfig,
  preloaderConfig,
  scrollToTopConfig,
  navigationConfig,
  commonConfig,
  heroConfig,
  aboutConfig,
  homeIntroConfig,
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
  contactFormConfig,
  footerConfig,
  notFoundConfig,
  digitalProductsConfig,
  type DigitalProductsConfig,
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
  homeIntroConfig: typeof homeIntroConfig;
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
  contactFormConfig: typeof contactFormConfig;
  footerConfig: typeof footerConfig;
  notFoundConfig: typeof notFoundConfig;
  digitalProductsConfig?: DigitalProductsConfig;
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
  homeIntroConfig,
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
  contactFormConfig,
  footerConfig,
  notFoundConfig,
  digitalProductsConfig,
};

export async function fetchRemoteConfig(): Promise<RemoteConfig> {
  if (import.meta.env.DEV) {
    return defaultConfig;
  }
  try {
    const res = await fetch('/hayc/config.json');
    if (!res.ok) throw new Error('Failed to fetch config: ' + res.status);
    const data = await res.json();
    const merged = { ...defaultConfig, ...data };
    return merged as RemoteConfig;
  } catch (err) {
    console.warn('[HAYC] Remote config fetch failed, using default config.', err);
    return defaultConfig;
  }
}
