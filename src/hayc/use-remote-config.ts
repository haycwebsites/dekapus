import {
  siteConfig,
  preloaderConfig,
  scrollToTopConfig,
  navigationConfig,
  commonConfig,
  heroConfig,
  aboutConfig,
  homeIntroConfig,
  homeWhatWeDoConfig,
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
  brandConfig,
  uiLabelsConfig,
  languageSwitcherConfig,
  blogListingConfig,
  customPagesConfig,
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
  homeWhatWeDoConfig: typeof homeWhatWeDoConfig;
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
  brandConfig: typeof brandConfig;
  uiLabelsConfig: typeof uiLabelsConfig;
  languageSwitcherConfig: typeof languageSwitcherConfig;
  blogListingConfig: typeof blogListingConfig;
  customPagesConfig: typeof customPagesConfig;
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
  homeWhatWeDoConfig,
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
  brandConfig,
  uiLabelsConfig,
  languageSwitcherConfig,
  blogListingConfig,
  customPagesConfig,
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
