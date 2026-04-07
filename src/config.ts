// =============================================================================
// Site Template Configuration
// =============================================================================
// All site content is configured here. Components render nothing when their
// primary config fields are empty strings or empty arrays.
//
// STRUCTURE RULE: All interfaces must come first, then all export consts.
// This is required for the pull-config script to work correctly.
// =============================================================================

// =============================================================================
// INTERFACES
// =============================================================================

export interface LocaleString {
  el: string;
  en: string;
}

export interface SiteConfig {
  title: LocaleString;
  description: LocaleString;
  language: string;
  keywords: LocaleString;
  ogImage: string;
  canonical: string;
  siteId: string;
  apiUrl: string;
}

export interface PreloaderConfig {
  brandName: LocaleString;
  brandSubname: LocaleString;
  yearText: LocaleString;
}

export interface ScrollToTopConfig {
  ariaLabel: LocaleString;
}

export interface NavigationConfig {
  home: LocaleString;
  home1: LocaleString;
  home2: LocaleString;
  about: LocaleString;
  events: LocaleString;
  pages: LocaleString;
  menu: LocaleString;
  reservation: LocaleString;
  gallery: LocaleString;
  services: LocaleString;
  team: LocaleString;
  blog: LocaleString;
  blogPost: LocaleString;
  contact: LocaleString;
  contact1: LocaleString;
  contact2: LocaleString;
  bookNow: LocaleString;
  search: LocaleString;
  logoHome: string;
  logoInner: string;
}

export interface CommonConfig {
  reservationPhone: LocaleString;
  phoneNumber: LocaleString;
  readMore: LocaleString;
  submit: LocaleString;
  signUp: LocaleString;
  copyright: LocaleString;
  currencySymbol: string;
}

export interface HeroConfig {
  title: LocaleString;
  subtitle: LocaleString;
  viewMenuButton: LocaleString;
  backgroundImage1: string;
  backgroundImage2: string;
  slideLogo: string;
  slideLogoAlt: LocaleString;
  slideImageAltPrefix: LocaleString;
  /** Full-bleed hero carousel images */
  slideImages: string[];
}

export interface AboutConfig {
  sectionTitle: LocaleString;
  founderName: LocaleString;
  founderRole: LocaleString;
  intro1: LocaleString;
  intro2: LocaleString;
  intro3: LocaleString;
  intro4: LocaleString;
  portraitImage: string;
  sectionImageAlt: LocaleString;
}

export interface HomeIntroConfig {
  sectionTitle: LocaleString;
  description1: LocaleString;
  description2: LocaleString;
  description3: LocaleString;
  description4: LocaleString;
  heroImage: string;
}

/** Home page: “What we do” band — image left on large screens, text right */
export interface HomeWhatWeDoConfig {
  sectionTitle: LocaleString;
  intro: LocaleString;
  items: LocaleString[];
  sectionImage: string;
  imageAlt: LocaleString;
}

/** Full-bleed “Approach” band on the About page */
export interface AboutStatementConfig {
  title: LocaleString;
  paragraph1: LocaleString;
  paragraph2: LocaleString;
  paragraph3: LocaleString;
  backgroundImage: string;
}

/** Final CTA copy on the About page */
export interface AboutClosingConfig {
  leadBold: LocaleString;
  body: LocaleString;
}

export interface ServiceItem {
  image: string;
  title: LocaleString;
}

export interface ServicesConfig {
  sectionTitle: LocaleString;
  title: LocaleString;
  orderNow: LocaleString;
  items: ServiceItem[];
}

export interface CounterItem {
  icon: string;
  value: number;
  label: LocaleString;
}

export interface CounterConfig {
  paragraph1: LocaleString;
  paragraph2: LocaleString;
  learnMoreButton: LocaleString;
  backgroundImage: string;
  items: CounterItem[];
}

export interface MenuItem {
  name: LocaleString;
  description: LocaleString;
  price: number;
  image: string;
  category: string;
}

export interface MenuConfig {
  sectionTitle: LocaleString;
  title: LocaleString;
  breakfast: LocaleString;
  breakfastTitle: LocaleString;
  warmDishes: LocaleString;
  warmDishesTitle: LocaleString;
  dinner: LocaleString;
  dinnerTitle: LocaleString;
  decorImage1: string;
  decorImage2: string;
  items: MenuItem[];
}

export interface BookTableConfig {
  sectionTitle: LocaleString;
  title: LocaleString;
  namePlaceholder: LocaleString;
  phonePlaceholder: LocaleString;
  tablePlaceholder: LocaleString;
  timePlaceholder: LocaleString;
  datePlaceholder: LocaleString;
  guestsPlaceholder: LocaleString;
  messagePlaceholder: LocaleString;
  backgroundImage: string;
  reservationTimeSlots: string[];
  reservationTableOptions: LocaleString[];
  reservationGuestOptions: string[];
  guestSingular: LocaleString;
  guestsPlural: LocaleString;
}

export interface EventItem {
  title: LocaleString;
  description: LocaleString;
  date: LocaleString;
  image: string;
}

export interface EventsConfig {
  sectionTitle: LocaleString;
  title: LocaleString;
  postedLabel: LocaleString;
  items: EventItem[];
}

export interface TestimonialItem {
  text: LocaleString;
  author: LocaleString;
}

export interface TestimonialsConfig {
  sectionTitle: LocaleString;
  title: LocaleString;
  backgroundImage: string;
  quoteImage: string;
  quoteIconAlt: LocaleString;
  items: TestimonialItem[];
}

export interface BlogPostItem {
  id: number;
  title: LocaleString;
  excerpt: LocaleString;
  date: LocaleString;
  image: string;
  slug: string;
}

export interface BlogConfig {
  sectionTitle: LocaleString;
  title: LocaleString;
  posted: LocaleString;
  items: BlogPostItem[];
}

export interface NewsletterConfig {
  title: LocaleString;
  description: LocaleString;
  placeholder: LocaleString;
  backgroundImage: string;
}

export interface TeamMember {
  name: LocaleString;
  role: LocaleString;
  image: string;
}

export interface TeamConfig {
  sectionTitle: LocaleString;
  title: LocaleString;
  members: TeamMember[];
}

export interface GalleryImage {
  src: string;
  category: string;
}

export interface GalleryConfig {
  sectionTitle: LocaleString;
  title: LocaleString;
  all: LocaleString;
  coffee: LocaleString;
  lunch: LocaleString;
  nonveg: LocaleString;
  imageAltPrefix: LocaleString;
  lightboxImageAlt: LocaleString;
  hoverExpandLabel: LocaleString;
  images: GalleryImage[];
}

export interface ContactConfig {
  sectionTitle: LocaleString;
  title: LocaleString;
  preBulletsLine: LocaleString;
  introLine: LocaleString;
  introItem1: LocaleString;
  introItem2: LocaleString;
  introItem3: LocaleString;
  closingWhisper: LocaleString;
  address: LocaleString;
  addressValue: LocaleString;
  phone: LocaleString;
  email: LocaleString;
  emailValue: LocaleString;
  namePlaceholder: LocaleString;
  emailPlaceholder: LocaleString;
  subjectPlaceholder: LocaleString;
  messagePlaceholder: LocaleString;
  sendMessage: LocaleString;
  workingHours: LocaleString;
  workingHoursValue: LocaleString;
  mapEmbedUrl: string;
}

export interface ContactFormConfig {
  nameLabel: LocaleString;
  emailLabel: LocaleString;
  messageLabel: LocaleString;
  submitButton: LocaleString;
  submitting: LocaleString;
  successTitle: LocaleString;
  successText: LocaleString;
  errorText: LocaleString;
  nameRequired: LocaleString;
  emailInvalid: LocaleString;
  messageRequired: LocaleString;
}

export interface FooterConfig {
  aboutUs: LocaleString;
  aboutDescription: LocaleString;
  quickLinks: LocaleString;
  workingTime: LocaleString;
  mondayTuesday: LocaleString;
  wednesday: LocaleString;
  thursdayFriday: LocaleString;
  saturday: LocaleString;
  sunday: LocaleString;
  publicHolidays: LocaleString;
  closed: LocaleString;
  menuCategories: LocaleString;
  appetizers: LocaleString;
  lunch: LocaleString;
  meatFish: LocaleString;
  soups: LocaleString;
  instagram: LocaleString;
  emailSubscribe: LocaleString;
  instagramImages: string[];
}

export interface NotFoundConfig {
  title: LocaleString;
  subtitle: LocaleString;
  description: LocaleString;
  backHome: LocaleString;
  image: string;
  imageAlt: LocaleString;
}

export interface BrandConfig {
  logoTaglineLight: string;
  logoTaglineDark: string;
  signatureLight: string;
  signatureDark: string;
  logoAlt: LocaleString;
  signatureAlt: LocaleString;
}

export interface UiLabelsConfig {
  themeToggleAriaLabel: LocaleString;
  switchToLightModeTitle: LocaleString;
  switchToDarkModeTitle: LocaleString;
}

export interface LanguageSwitcherConfig {
  elLabel: LocaleString;
  enLabel: LocaleString;
}

export interface BlogCategoryItem {
  name: LocaleString;
  count: number;
}

export interface BlogListingConfig {
  categoriesTitle: LocaleString;
  recentPostsTitle: LocaleString;
  tagsTitle: LocaleString;
  samplePostTimeSuffix: LocaleString;
  sampleLocation: LocaleString;
  categories: BlogCategoryItem[];
  tags: LocaleString[];
}

export interface CustomPagesDefaultArticle {
  paragraph1: LocaleString;
  paragraph2: LocaleString;
  blockquote: LocaleString;
  paragraph3: LocaleString;
}

export interface DekapusMethodPageContent {
  mainTitle: LocaleString;
  intro: LocaleString;
  intro2: LocaleString;
  intro3: LocaleString;
  whatThisMeansForYou: LocaleString;
  section1Title: LocaleString;
  section1Body: LocaleString;
  section1Body2: LocaleString;
  section1Body3: LocaleString;
  section1MeansBody: LocaleString;
  section2Title: LocaleString;
  section2Body: LocaleString;
  section2Body2: LocaleString;
  section2Body3: LocaleString;
  section2MeansBody: LocaleString;
  section3Title: LocaleString;
  section3Body: LocaleString;
  section3Body2: LocaleString;
  section3Body3: LocaleString;
  section3MeansBody: LocaleString;
  section4Title: LocaleString;
  section4Body: LocaleString;
  section4Body2: LocaleString;
  section4Body3: LocaleString;
  section4MeansBody: LocaleString;
  section5Title: LocaleString;
  section5Body: LocaleString;
  section5Body2: LocaleString;
  section5Body3: LocaleString;
  section5MeansBody: LocaleString;
}

export interface MyWorkPageContent {
  section0Title: LocaleString;
  section0Body: LocaleString;
  section1Title: LocaleString;
  section1Body: LocaleString;
  section2Title: LocaleString;
  section2Body: LocaleString;
  section3Title: LocaleString;
  section3Body: LocaleString;
  section4Title: LocaleString;
  section4Body: LocaleString;
  section5Title: LocaleString;
  section5Body: LocaleString;
}

export interface EngagementProcessItem {
  title: LocaleString;
  body: LocaleString;
}

export interface EngagementPageContent {
  title: LocaleString;
  introTitle: LocaleString;
  intro: LocaleString;
  list1Title: LocaleString;
  list1Items: EngagementProcessItem[];
  howWeWorkTitle: LocaleString;
  howWeWorkItems: EngagementProcessItem[];
  section2Title: LocaleString;
  section2Body: LocaleString;
  section2Body2: LocaleString;
  processItems: EngagementProcessItem[];
  section3Title: LocaleString;
  section3Body: LocaleString;
  list2Items: LocaleString[];
  closingCtaBody: LocaleString;
  closingCtaButtonLabel: LocaleString;
}

export interface CustomPagesOfferingImages {
  dekapusMethod: string;
  myWork: string;
  engagement: string;
}

export interface CustomPagesConfig {
  allOfferingsLabel: LocaleString;
  defaultArticle: CustomPagesDefaultArticle;
  dekapusMethod: DekapusMethodPageContent;
  myWork: MyWorkPageContent;
  engagement: EngagementPageContent;
  offeringImages: CustomPagesOfferingImages;
}

export interface DigitalProduct {
  id: string;
  type: 'course';
  title: string;
  slug: string;
  description?: string;
  thumbnail?: string;
  price: string;
  language: string;
  estimatedDurationMinutes?: number;
  chapters?: {
    id: string;
    title: string;
    lessons: { id: string; title: string }[];
  }[];
}

export interface DigitalProductsConfig {
  enabled: boolean;
  lastSyncedAt?: string;
  products: DigitalProduct[];
}

// =============================================================================
// CONSTANTS
// =============================================================================

export const siteConfig: SiteConfig = {
  title: { el: 'Εστιατόριο Max', en: 'Max Restaurant' },
  description: { el: 'Το καλύτερο εστιατόριο στην πόλη', en: 'The best restaurant in town' },
  language: 'el',
  keywords: { el: 'εστιατόριο, φαγητό, δείπνο', en: 'restaurant, food, dinner' },
  ogImage: '/images/og-image.jpg',
  canonical: '',
  siteId: 'dekapus',
  apiUrl: 'https://hayc.gr',
};

export const preloaderConfig: PreloaderConfig = {
  brandName: { el: 'DEKAPUS', en: 'DEKAPUS' },
  brandSubname: { el: '', en: '' },
  yearText: { el: 'Από το 2016', en: 'Since 2016' },
};

export const scrollToTopConfig: ScrollToTopConfig = {
  ariaLabel: { el: 'Μετάβαση στην κορυφή', en: 'Scroll to top' },
};

export const navigationConfig: NavigationConfig = {
  home: { el: 'Αρχική', en: 'Home' },
  home1: { el: 'Αρχική 1', en: 'Home 1' },
  home2: { el: 'Αρχική 2', en: 'Home 2' },
  about: { el: 'Σχετικά', en: 'About' },
  events: { el: 'Μέθοδος Dekapus', en: 'Dekapus Method' },
  pages: { el: 'Σελίδες', en: 'Pages' },
  menu: { el: 'Μενού', en: 'Menu' },
  reservation: { el: 'Κράτηση', en: 'Reservation' },
  gallery: { el: 'Γκαλερί', en: 'Gallery' },
  services: { el: 'Καταστάσεις στις οποίες εργάζομαι', en: 'Situations I Work In' },
  team: { el: 'Συμμετοχή', en: 'Engagement' },
  blog: { el: 'Ιστολόγιο', en: 'Blog' },
  blogPost: { el: 'Άρθρο', en: 'Blog Post' },
  contact: { el: 'Επικοινωνία', en: 'Contact' },
  contact1: { el: 'Επικοινωνία 1', en: 'Contact 1' },
  contact2: { el: 'Επικοινωνία 2', en: 'Contact 2' },
  bookNow: { el: 'Κράτηση Τώρα', en: 'Book Now' },
  search: { el: 'Αναζήτηση', en: 'Search' },
  logoHome: '/images/logo.png',
  logoInner: '/images/logo2.png',
};

export const commonConfig: CommonConfig = {
  reservationPhone: { el: 'ΚΡΑΤΗΣΗ:', en: 'RESERVATION:' },
  phoneNumber: { el: '0030 6932 2699 46', en: '0030 6932 2699 46' },
  readMore: { el: 'Διαβάστε Περισσότερα', en: 'Read More' },
  submit: { el: 'Υποβολή', en: 'Submit' },
  signUp: { el: 'Εγγραφή', en: 'Sign Up' },
  copyright: { el: '© 2024 - Με επιφύλαξη παντός δικαιώματος', en: '© 2024 - All Rights Reserved' },
  currencySymbol: '$',
};

export const heroConfig: HeroConfig = {
  title: { el: 'Δημιουργώντας ατμόσφαιρες.', en: 'Crafting Atmospheres.' },
  subtitle: { el: 'Ευθυγραμμίζοντας συστήματα, χώρο και ανθρώπινη συμπεριφορά.', en: 'Aligning Systems, Space & Human Behaviour.' },
  viewMenuButton: { el: "Κλείστε μια δωρεάν κλήση 10 λεπτών", en: "Book a 10' free call" },
  backgroundImage1: '/images/slide1.jpg',
  backgroundImage2: '/images/slide2.jpg',
  slideLogo: '/images/slide-logo.png',
  slideLogoAlt: { el: 'Υπογραφή', en: 'Signature' },
  slideImageAltPrefix: { el: 'Διαφάνεια', en: 'Slide' },
  slideImages: [
    '/images/dekapus-bar-site.jpg',
    '/images/dekapus-cutlerys-site.jpg',
    '/images/dekapus-fire-stove-site.jpg',
  ],
};

export const aboutConfig: AboutConfig = {
  sectionTitle: { el: 'Σχετικά', en: 'About' },
  founderName: { el: 'Διονύσης Παξινός', en: 'Dionysis Paxinos' },
  founderRole: { el: 'Ιδρυτής της DEKAPUS', en: 'Founder of DEKAPUS' },
  intro1: {
    el: 'Προέρχομαι από περιβάλλοντα όπου η φιλοξενία δοκιμάζεται καθημερινά, διαμορφωμένη μέσα από άμεση, χειροπιαστή εμπειρία.',
    en: 'I come from environments where hospitality is tested daily, shaped through direct, hands-on experience.',
  },
  intro2: {
    el: 'Για περισσότερα από τριάντα χρόνια έχω εργαστεί μέσα σε εστιατόρια, μπαρ, κλαμπ και ξενοδοχεία, λειτουργώντας υπό πραγματική πίεση, πραγματικό ρυθμό και πραγματική ανθρώπινη δυναμική.',
    en: 'For more than thirty years, I have worked inside restaurants, bars, clubs, and hotels, operating under real pressure, real rhythm, and real human dynamics.',
  },
  intro3: {
    el: 'Ως μέρος του συστήματος, ανέπτυξα την ικανότητα να διαβάζω χώρους πριν ανοίξουν, να αισθάνομαι τις ομάδες πριν φτάσουν στην εξάντληση και να αναγνωρίζω πότε ένα concept αρχίζει να χάνει τον ρυθμό του — ακόμα κι όταν όλα φαίνονται σωστά.',
    en: 'As part of the system, I developed the ability to read spaces before they open, to sense teams before they reach exhaustion, and to recognize when a concept begins to lose its rhythm — even when everything appears correct.',
  },
  intro4: {
    el: 'Η εμπειρία μου δεν είναι ακαδημαϊκή. Είναι πρακτική, λειτουργική και ανθρώπινη.',
    en: 'My experience is not academic. It is practical, operational, and human.',
  },
  portraitImage: '/images/about-portrait.png',
  sectionImageAlt: { el: 'Διονύσης Παξινός', en: 'Dionysis Paxinos' },
};

export const homeIntroConfig: HomeIntroConfig = {
  sectionTitle: { el: 'Εισαγωγή', en: 'Intro' },
  description1: {
    el: 'Δημιουργούμε εστιατόρια, μπαρ και χώρους φιλοξενίας από την αρχή — διαμορφώνοντας την ταυτότητα, τον ρυθμό και την εμπειρία τους από την πρώτη στιγμή.',
    en: 'Creating restaurants, bars, and hospitality spaces from the ground up — shaping their identity, rhythm, and experience from the very beginning.',
  },
  description2: {
    el: 'Καλούμαστε όταν κάτι δεν «κάθεται» σωστά αλλά δεν μπορεί ακόμα να ονομαστεί — όταν οι ομάδες είναι ικανές αλλά λειτουργούν υπό πίεση, όταν μια ιδέα είναι σαφής αλλά δεν αισθάνεται πλέον ζωντανή, ή όταν δημιουργείται ένας νέος χώρος φιλοξενίας και χρειάζεται κατεύθυνση, ταυτότητα και ισχυρό αίσθημα ρυθμού από την αρχή.',
    en: 'We are invited when something feels off but cannot yet be named — when teams are capable yet operating under pressure, when a concept is clear but no longer feels alive, or when a new hospitality space is being created and requires direction, identity, and a strong sense of rhythm from the very beginning.',
  },
  description3: { el: 'Η δουλειά μας ξεδιπλώνεται ήσυχα, μέσα στον ρυθμό της λειτουργίας — μέσα από παρουσία, παρατήρηση και ακριβή παρέμβαση.', en: 'Our work unfolds quietly, within the rhythm of the operation — through presence, observation, and precise intervention.' },
  description4: { el: 'Υποστηρίζει την απόδοση, ενισχύει την εμπειρία του επισκέπτη και βοηθά στη δημιουργία χώρων που αισθάνονται ευθυγραμμισμένοι, ζωντανοί και με νόημα.', en: 'It supports performance, strengthens guest experience, and helps create spaces that feel aligned, alive, and meaningful.' },
  heroImage: '/images/dekapus-vinyl-site.jpg',
};

export const homeWhatWeDoConfig: HomeWhatWeDoConfig = {
  sectionTitle: { el: 'Τι Κάνουμε', en: 'What We Do' },
  intro: {
    el: 'Ως δημιουργοί και σύμβουλοι φιλοξενίας, συνεργαζόμαστε με ιδιοκτήτες εστιατορίων, μπαρ και ξενοδοχείων για να:',
    en: 'As hospitality creators and consultants, we work with restaurant, bar, and hotel owners to:',
  },
  items: [
    {
      el: 'αναπτύσσουμε νέες ιδέες από την αρχή — ορίζοντας ταυτότητα, ρυθμό και εμπειρία επισκέπτη',
      en: 'develop new concepts from the ground up — defining identity, rhythm, and guest experience',
    },
    {
      el: 'αναδείξουμε τι δεν λειτουργεί κάτω από την επιφάνεια',
      en: 'uncover what is not working beneath the surface',
    },
    {
      el: 'βελτιώσουμε τη ροή εξυπηρέτησης και τη συνολική εμπειρία επισκέπτη',
      en: 'improve service flow and overall guest experience',
    },
    {
      el: 'ευθυγραμμίσουμε ξανά ομάδες, ατμόσφαιρα και λειτουργία',
      en: 'realign teams, atmosphere, and operations',
    },
    {
      el: 'ενισχύσουμε τη συνέπεια, την απόδοση και τη σαφήνεια σε όλη την επιχείρηση',
      en: 'strengthen consistency, performance, and clarity across the business',
    },
  ],
  sectionImage: '/images/dekapus-ice-cube-site.jpg',
  imageAlt: { el: 'Πάγος — λεπτομέρεια', en: 'Ice cube detail' },
};

export const aboutStatementConfig: AboutStatementConfig = {
  title: { el: 'Προσέγγιση', en: 'Approach' },
  paragraph1: {
    el: 'Βλέπω τη φιλοξενία ως ζωντανό οργανισμό.',
    en: 'I see hospitality as a living organism.',
  },
  paragraph2: {
    el: 'Όταν η πίεση εφαρμόζεται λάθος, αντιστέκεται. Όταν η ευθυγράμμιση είναι σωστή, ρέει.',
    en: 'When pressure is misapplied, it resists. When alignment is right, it flows.',
  },
  paragraph3: {
    el: 'Η δουλειά μου ως σύμβουλος φιλοξενίας δεν αφορά απλώς τη βελτίωση ενός εστιατορίου, μπαρ ή ξενοδοχείου. Αφορά την αποκατάσταση της ισορροπίας ανάμεσα σε ανθρώπους, κίνηση και ατμόσφαιρα — ώστε η λειτουργία να μπορεί να λειτουργεί φυσικά, να βελτιώνει την απόδοση και να ανυψώνει την εμπειρία του επισκέπτη.',
    en: 'My work as a hospitality consultant is not simply about improving a restaurant, bar, or hotel. It is about restoring balance between people, movement, and atmosphere — so the operation can function naturally, improve performance, and elevate guest experience.',
  },
  backgroundImage: '/images/about-approach.png',
};

export const servicesConfig: ServicesConfig = {
  sectionTitle: { el: 'Υπηρεσίες', en: 'Services' },
  title: { el: 'ΟΙ ΕΙΔΙΚΟΤΗΤΕΣ ΜΑΣ', en: 'OUR SPECIALITIES' },
  orderNow: { el: 'ΠΑΡΑΓΓΕΙΛΤΕ ΤΩΡΑ', en: 'ORDER NOW CALL' },
  items: [
    {
      image: '/images/srv1.png',
      title: { el: 'Σάντουιτς', en: 'Sandwiches' },
    },
    {
      image: '/images/srv2.png',
      title: { el: 'Πίτσα', en: 'Pizza' },
    },
    {
      image: '/images/srv3.png',
      title: { el: 'Φράουλα', en: 'Chers Strawberry' },
    },
    {
      image: '/images/srv4.png',
      title: { el: 'Τάκο', en: 'Taco Recipe' },
    },
  ],
};

export const counterConfig: CounterConfig = {
  paragraph1: {
    el: 'Αυτή η δουλειά ορίζεται από την Αντίληψη, την ακριβή Παρέμβαση και την ικανότητα να «κουρδίζεις» έναν χώρο μέχρι να λειτουργεί με σαφήνεια και ροή.',
    en: 'This work is defined by Perception, precise Intervention, and the ability to Tune a space until it functions with clarity and flow.',
  },
  paragraph2: {
    el: 'Αν αυτό είναι αυτό που χρειάζεται ο χώρος σας, ας ξεκινήσουμε τη συζήτηση.',
    en: "If this is what your space needs, let's begin the conversation.",
  },
  learnMoreButton: { el: "Κλείστε μια δωρεάν κλήση 10 λεπτών", en: "Book a 10' free call" },
  backgroundImage: '/images/dekapus-cutlerys-site2.jpg',
  items: [
    {
      icon: '/images/counter-ic1.png',
      value: 4372,
      label: { el: 'ΚΟΤΌΠΟΥΛΑ ΣΕΡΒΙΡΙΣΜΈΝΑ', en: 'CHICKEN SERVED' },
    },
    {
      icon: '/images/counter-ic2.png',
      value: 3795,
      label: { el: 'ΨΆΡΙΑ ΤΗΓΑΝΗΤΆ', en: 'FISH FRIED' },
    },
    {
      icon: '/images/counter-ic3.png',
      value: 394,
      label: { el: 'ΟΙ ΣΕΦ ΜΑΣ', en: 'OUR CHEFS' },
    },
    {
      icon: '/images/counter-ic4.png',
      value: 1678,
      label: { el: 'ΣΟΎΠΕΣ ΣΕΡΒΙΡΙΣΜΈΝΕΣ', en: 'SOUP SERVED' },
    },
  ],
};

export const menuConfig: MenuConfig = {
  sectionTitle: { el: 'Ειδική Εβδομάδας', en: 'This Week Special' },
  title: { el: 'Κατάλογος Μενού', en: 'Menu Card' },
  breakfast: { el: 'Πρωινό', en: 'Breakfast' },
  breakfastTitle: { el: 'Τέλειο Πρωινό', en: 'So Good Breakfast' },
  warmDishes: { el: 'Ζεστά Πιάτα', en: 'Warm Dishes' },
  warmDishesTitle: { el: 'Δοκιμάστε Κάτι Τώρα', en: 'Taste Something Now' },
  dinner: { el: 'Δείπνο', en: 'Dinner' },
  dinnerTitle: { el: 'Εξειδικευμένο Δείπνο', en: 'Specialized Dinner' },
  decorImage1: '/images/menu-card1.png',
  decorImage2: '/images/menu-card2.png',
  items: [
    {
      name: { el: 'ΧΟΙΡΙΝΟ ΓΑΡΙΔΕΣ ΠΟΛΥΣΠΟΡΟ', en: 'PORK SHRIMP MULTIGRAIN' },
      description: { el: 'Λαχανικά, τυρί, μανιτάρια, ψητά', en: 'Vegetables, cheese, Mushroom, Grill Items' },
      price: 55,
      image: '/images/menu1.jpg',
      category: 'breakfast',
    },
    {
      name: { el: 'ΧΟΙΡΙΝΟ ΓΑΡΙΔΕΣ ΠΟΛΥΣΠΟΡΟ', en: 'PORK SHRIMP MULTIGRAIN' },
      description: { el: 'Λαχανικά, τυρί, μανιτάρια, ψητά', en: 'Vegetables, cheese, Mushroom, Grill Items' },
      price: 55,
      image: '/images/menu2.jpg',
      category: 'breakfast',
    },
    {
      name: { el: 'ΛΑΧΑΝΙΚΑ ΝΤΟΜΑΤΑ ΜΙΞΕΡΦΡΟΥΤ', en: 'VEGETABLE TOMATO MIXERFRUIT' },
      description: { el: 'Λαχανικά, τυρί, μανιτάρια, ψητά', en: 'Vegetables, cheese, Mushroom, Grill Items' },
      price: 69,
      image: '/images/menu3.jpg',
      category: 'breakfast',
    },
    {
      name: { el: 'ΛΑΧΑΝΙΚΑ ΝΤΟΜΑΤΑ ΜΙΞΕΡΦΡΟΥΤ', en: 'VEGETABLE TOMATO MIXERFRUIT' },
      description: { el: 'Λαχανικά, τυρί, μανιτάρια, ψητά', en: 'Vegetables, cheese, Mushroom, Grill Items' },
      price: 69,
      image: '/images/menu4.jpg',
      category: 'breakfast',
    },
    {
      name: { el: 'ΤΑΚΟ ΣΥΝΤΑΓΗ ΜΕ ΣΛΑΙΖΕΡ', en: 'TACO RECIPE WITH SLIDER' },
      description: { el: 'Λαχανικά, τυρί, μανιτάρια, ψητά', en: 'Vegetables, cheese, Mushroom, Grill Items' },
      price: 43,
      image: '/images/menu5.jpg',
      category: 'breakfast',
    },
    {
      name: { el: 'ΤΑΚΟ ΣΥΝΤΑΓΗ ΜΕ ΣΛΑΙΖΕΡ', en: 'TACO RECIPE WITH SLIDER' },
      description: { el: 'Λαχανικά, τυρί, μανιτάρια, ψητά', en: 'Vegetables, cheese, Mushroom, Grill Items' },
      price: 43,
      image: '/images/menu6.jpg',
      category: 'warm',
    },
    {
      name: { el: 'ΦΡΑΟΥΛΑ ΜΙΚΤΑ ΦΡΟΥΤΑ', en: 'STRAWBERRY MIXED FRUIT' },
      description: { el: 'Φράουλα, τυρί, μανιτάρια, φρούτα', en: 'Strawberry, cheese, Mushroom, Fruits' },
      price: 39,
      image: '/images/menu7.jpg',
      category: 'warm',
    },
    {
      name: { el: 'ΦΡΑΟΥΛΑ ΜΙΚΤΑ ΦΡΟΥΤΑ', en: 'STRAWBERRY MIXED FRUIT' },
      description: { el: 'Φράουλα, τυρί, μανιτάρια, φρούτα', en: 'Strawberry, cheese, Mushroom, Fruits' },
      price: 39,
      image: '/images/menu8.jpg',
      category: 'warm',
    },
    {
      name: { el: 'ΑΥΓΟ ΛΑΧΑΝΙΚΑ ΦΡΟΥΤΑ ΣΑΛΑΤΑ', en: 'EGG VEGETABLE FRUIT SALAD' },
      description: { el: 'Αυγό, τυρί, μανιτάρια, λαχανικά', en: 'Egg, cheese, Mushroom, Vegetables' },
      price: 27,
      image: '/images/menu9.jpg',
      category: 'dinner',
    },
    {
      name: { el: 'ΠΑΓΩΤΟ ΑΝΑΨΥΚΤΙΚΑ', en: 'ICE CREAM COOL DRINKS' },
      description: { el: 'Αυγό, τυρί, μανιτάρια, λαχανικά', en: 'Egg, cheese, Mushroom, Vegetables' },
      price: 27,
      image: '/images/menu10.jpg',
      category: 'dinner',
    },
  ],
};

export const bookTableConfig: BookTableConfig = {
  sectionTitle: { el: 'Κλείστε Τραπέζι', en: 'Book Your Table' },
  title: { el: 'ΚΑΝΤΕ ΚΡΑΤΗΣΗ', en: 'MAKE A RESERVATION' },
  namePlaceholder: { el: 'Όνομα *', en: 'Name *' },
  phonePlaceholder: { el: 'Τηλέφωνο *', en: 'Phone Number *' },
  tablePlaceholder: { el: 'Επιλέξτε Τραπέζι *', en: 'Choose Your Table *' },
  timePlaceholder: { el: 'Επιλέξτε Ώρα *', en: 'Choose Your Time *' },
  datePlaceholder: { el: 'Επιλέξτε Ημερομηνία *', en: 'Choose Date *' },
  guestsPlaceholder: { el: 'Αριθμός Ατόμων *', en: 'Number of Guests *' },
  messagePlaceholder: { el: 'Σχόλια', en: 'Comments' },
  backgroundImage: '/images/book-table-bg.jpg',
  reservationTimeSlots: [
    '09:00',
    '10:00',
    '11:00',
    '12:00',
    '13:00',
    '14:00',
    '15:00',
    '16:00',
    '17:00',
    '18:00',
    '19:00',
    '20:00',
    '21:00',
  ],
  reservationTableOptions: [
    { el: 'Τραπέζι 1', en: 'Table 1' },
    { el: 'Τραπέζι 2', en: 'Table 2' },
    { el: 'Τραπέζι 3', en: 'Table 3' },
    { el: 'Τραπέζι 4', en: 'Table 4' },
    { el: 'Τραπέζι 5', en: 'Table 5' },
    { el: 'VIP Booth', en: 'VIP Booth' },
  ],
  reservationGuestOptions: [
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '10+',
  ],
  guestSingular: { el: 'Άτομο', en: 'Guest' },
  guestsPlural: { el: 'Άτομα', en: 'Guests' },
};

export const eventsConfig: EventsConfig = {
  sectionTitle: { el: 'Τελευταίες Εκδηλώσεις', en: 'Latest Events' },
  title: { el: 'ΜΗΝ ΧΑΣΕΤΕ', en: 'DO NOT MISS' },
  postedLabel: { el: 'Δημοσιεύθηκε ', en: 'Posted ' },
  items: [
    {
      title: { el: 'Καθημερινά Ειδικά Φαγητά για την Υγεία σας', en: 'Daily Special Foods For Your Health' },
      description: { el: 'Ένας νέος μοναχικός σε μια σταυροφορία για να υπερασπιστεί την υπόθεση των αθώων.', en: 'Michael Knight a young loner on a crusade to champion the cause of the innocent.' },
      date: { el: '20 Δεκ 2016, 10:23 πμ', en: 'Dec 20, 2016 10:23 am' },
      image: '/images/method-section.jpg',
    },
    {
      title: { el: 'Το Ειδικό Τηγανητό Κοτόπουλο με Ρύζι', en: 'The Specialty Chicken Fry With Rice Food' },
      description: { el: 'Ένας νέος μοναχικός σε μια σταυροφορία για να υπερασπιστεί την υπόθεση των αθώων.', en: 'Michael Knight a young loner on a crusade to champion the cause of the innocent.' },
      date: { el: '21 Μαρ 2016, 12:00 μμ', en: 'Mar 21, 2016 12:00 pm' },
      image: '/images/situations-work.jpg',
    },
    {
      title: { el: 'Ποτά με Γαρνιτούρα Τηγανητής Ντομάτας', en: 'Drinks With Garnish Fried Tomato Chosey' },
      description: { el: 'Ένας νέος μοναχικός σε μια σταυροφορία για να υπερασπιστεί την υπόθεση των αθώων.', en: 'Michael Knight a young loner on a crusade to champion the cause of the innocent.' },
      date: { el: '12 Μαρ 2016, 02:30 μμ', en: 'Mar 12, 2016 02:30 pm' },
      image: '/images/engagement-section.jpg',
    },
  ],
};

export const testimonialsConfig: TestimonialsConfig = {
  sectionTitle: { el: 'Οι Πελάτες μας Λένε', en: 'Our Customer Says' },
  title: { el: 'ΜΑΡΤΥΡΙΕΣ', en: 'TESTIMONIALS' },
  backgroundImage: '/images/testimonial-bg.jpg',
  quoteImage: '/images/quote.png',
  quoteIconAlt: { el: 'Εισαγωγικό', en: 'Quote' },
  items: [
    {
      text: { el: 'Αυτές οι μέρες είναι όλες χαρούμενες και ελεύθερες. Αυτές οι μέρες είναι για να τις μοιραζόμαστε μαζί. Ελάτε και ακούστε μια ιστορία για έναν άνθρωπο - έναν φτωχό βουνίσιο που μόλις και μετά βίας έτρεφε την οικογένειά του.', en: 'These days are all Happy and Free. These days are all share them with me oh baby. Come and listen to a story about a man named Jed - a poor mountaineer barely kept his family fed.' },
      author: { el: 'Γιώργος Παπαδόπουλος', en: 'John Doe' },
    },
    {
      text: { el: 'Εδώ είναι η ιστορία μιας όμορφης κυρίας που μεγάλωνε τρία πολύ όμορφα κορίτσια. Όλα είχαν χρυσά μαλλιά σαν τη μητέρα τους, η μικρότερη με μπούκλες.', en: 'Here\'s the story of a lovely lady who was bringing up three very lovely girls. All of them had hair of gold like their mother the youngest one in curls.' },
      author: { el: 'Μαρία Ιωάννου', en: 'Jane Smith' },
    },
  ],
};

export const blogConfig: BlogConfig = {
  sectionTitle: { el: 'Τα Τελευταία Νέα μας', en: 'Our Latest News' },
  title: { el: 'ΙΣΤΟΛΟΓΙΟ', en: 'BLOG' },
  posted: { el: 'Δημοσιεύθηκε', en: 'Posted' },
  items: [
    {
      id: 1,
      title: { el: 'Είμαστε το Καλύτερο Ποιοτικό Εστιατόριο', en: 'We Are Best Quality Serve Restaurant' },
      excerpt: { el: 'Ο πρώτος σύντροφος και ο Καπετάνιος του θα κάνουν ό,τι καλύτερο μπορούν για να κάνουν τους άλλους άνετους στη τροπική τους νησιωτική φωλιά.', en: 'The first mate and his Skipper too will do their very best to make the others comfortable in their tropic island nest.' },
      date: { el: '01 Ιουνίου', en: '01 June' },
      image: '/images/method-section.jpg',
      slug: 'best-quality-restaurant',
    },
    {
      id: 2,
      title: { el: 'Ειδική Συνταγή Ψητού Εστιατορίου', en: 'Special Grill Recipe Restaurant Ready' },
      excerpt: { el: 'Όλα είχαν χρυσά μαλλιά σαν τη μητέρα τους, η μικρότερη με μπούκλες. Ελάτε και παίξτε.', en: 'All of them had hair of gold like their mother the youngest one in curls. Come and play.' },
      date: { el: '29 Αυγούστου', en: '29 August' },
      image: '/images/engagement-section.jpg',
      slug: 'special-grill-recipe',
    },
  ],
};

export const newsletterConfig: NewsletterConfig = {
  title: { el: 'Ενημερωτικό Δελτίο', en: 'Newsletter' },
  description: { el: 'Εγγραφείτε με το e-mail σας για να λαμβάνετε ενημερώσεις για τις εκδηλώσεις μας', en: 'Sign up with your email to get updates fresh updates about our events' },
  placeholder: { el: 'Εισάγετε το e-mail σας', en: 'Enter Your Email Address' },
  backgroundImage: '/images/newsletter-bg.jpg',
};

export const teamConfig: TeamConfig = {
  sectionTitle: { el: 'Γνωρίστε τους Σεφ μας', en: 'Meet Our Chefs' },
  title: { el: 'Η ΟΜΑΔΑ ΜΑΣ', en: 'OUR TEAM' },
  members: [
    {
      name: { el: 'ΡΑΝΤΙ ΚΡΙΣΕΝ', en: 'RANDY CRISHEN' },
      role: { el: 'Διευθύνων Σύμβουλος', en: 'Managing Director' },
      image: '/images/team1.jpg',
    },
    {
      name: { el: 'ΑΦΤΙΑΝ ΤΖΑΝΚΙΣΚΙ', en: 'AFTIAN JANKISCKY' },
      role: { el: 'Βοηθός Διευθύνοντος', en: 'Assistant Managing Director' },
      image: '/images/team2.jpg',
    },
    {
      name: { el: 'ΚΙΝΓΚ ΚΡΟΚ', en: 'KING CROCK' },
      role: { el: 'Ανώτερος Επιβλέπων Σεφ', en: 'Senior Chief Supervisor' },
      image: '/images/team3.jpg',
    },
    {
      name: { el: 'ΚΕΝΑΝΤΙΓΟΥΙΣ', en: 'KENADYWISH' },
      role: { el: 'Επιβλέπων Σερβιτόρων', en: 'Server Supervisor' },
      image: '/images/team4.jpg',
    },
  ],
};

export const galleryConfig: GalleryConfig = {
  sectionTitle: { el: 'Γκαλερί', en: 'Gallery' },
  title: { el: 'Η ΓΚΑΛΕΡΙ ΜΑΣ', en: 'OUR GALLERY' },
  all: { el: 'Όλα', en: 'All' },
  coffee: { el: 'Καφές', en: 'Coffee' },
  lunch: { el: 'Μεσημεριανό', en: 'Lunch' },
  nonveg: { el: 'Κρεατικά', en: 'Non-Veg' },
  imageAltPrefix: { el: 'Γκαλερί', en: 'Gallery' },
  lightboxImageAlt: { el: 'Προεπισκόπηση γκαλερί', en: 'Gallery preview' },
  hoverExpandLabel: { el: '+', en: '+' },
  images: [
    {
      src: '/images/gallery1.jpg',
      category: 'breakfast',
    },
    {
      src: '/images/gallery2.jpg',
      category: 'coffee',
    },
    {
      src: '/images/gallery3.jpg',
      category: 'lunch',
    },
    {
      src: '/images/gallery4.jpg',
      category: 'dinner',
    },
    {
      src: '/images/gallery5.jpg',
      category: 'nonveg',
    },
    {
      src: '/images/gallery6.jpg',
      category: 'breakfast',
    },
    {
      src: '/images/gallery7.jpg',
      category: 'coffee',
    },
    {
      src: '/images/gallery8.jpg',
      category: 'lunch',
    },
    {
      src: '/images/gallery9.jpg',
      category: 'dinner',
    },
    {
      src: '/images/gallery10.jpg',
      category: 'nonveg',
    },
    {
      src: '/images/gallery11.jpg',
      category: 'breakfast',
    },
    {
      src: '/images/gallery12.jpg',
      category: 'coffee',
    },
  ],
};

export const contactConfig: ContactConfig = {
  sectionTitle: { el: 'Επικοινωνήστε μαζί μας', en: 'Contact Us' },
  title: { el: 'ΣΤΕΙΛΤΕ ΜΑΣ ΜΗΝΥΜΑ', en: 'SEND US A MESSAGE' },
  preBulletsLine: { el: '', en: '' },
  introLine: {
    el: 'Every space holds the potential to evolve.',
    en: 'Every space holds the potential to evolve.',
  },
  introItem1: {
    el: 'When the moment comes to create, refine, or realign,',
    en: 'When the moment comes to create, refine, or realign,',
  },
  introItem2: {
    el: 'a conversation is enough to begin.',
    en: 'a conversation is enough to begin.',
  },
  introItem3: { el: '', en: '' },
  closingWhisper: { el: '', en: '' },
  address: { el: 'Τοποθεσία', en: 'Location' },
  addressValue: { el: 'Αθήνα, Ελλάδα', en: 'Athens Greece' },
  phone: { el: 'Τηλέφωνο', en: 'Phone' },
  email: { el: 'Email', en: 'Email' },
  emailValue: { el: 'dpaxinos@dekapus.com.gr', en: 'dpaxinos@dekapus.com.gr' },
  namePlaceholder: { el: 'Το Όνομά σας', en: 'Your Name' },
  emailPlaceholder: { el: 'Το e-mail σας', en: 'Your Email' },
  subjectPlaceholder: { el: 'Θέμα', en: 'Subject' },
  messagePlaceholder: { el: 'Το Μήνυμά σας', en: 'Your Message' },
  sendMessage: { el: 'Αποστολή Μηνύματος', en: 'Send Message' },
  workingHours: { el: 'Ωρες Λειτουργίας', en: 'Working Hours' },
  workingHoursValue: { el: 'Δευ - Παρ: 9ΠΜ - 10ΜΜ', en: 'Mon - Fri: 9AM - 10PM' },
  mapEmbedUrl: 'https://www.google.com/maps?q=Athens,+Greece&output=embed',
};

export const contactFormConfig: ContactFormConfig = {
  nameLabel: { el: 'Όνομα', en: 'Name' },
  emailLabel: { el: 'Email', en: 'Email' },
  messageLabel: { el: 'Μήνυμα', en: 'Message' },
  submitButton: { el: 'Αποστολή', en: 'Send Message' },
  submitting: { el: 'Αποστολή...', en: 'Sending...' },
  successTitle: { el: 'Το μήνυμά σας στάλθηκε!', en: 'Message sent!' },
  successText: {
    el: 'Θα επικοινωνήσουμε μαζί σας σύντομα.',
    en: 'We will get back to you shortly.',
  },
  errorText: {
    el: 'Κάτι πήγε στραβά. Παρακαλώ δοκιμάστε ξανά.',
    en: 'Something went wrong. Please try again.',
  },
  nameRequired: {
    el: 'Το όνομα είναι υποχρεωτικό.',
    en: 'Name is required.',
  },
  emailInvalid: {
    el: 'Εισάγετε έγκυρο email.',
    en: 'Please enter a valid email.',
  },
  messageRequired: {
    el: 'Το μήνυμα είναι υποχρεωτικό.',
    en: 'Message is required.',
  },
};

export const footerConfig: FooterConfig = {
  aboutUs: { el: 'ΣΧΕΤΙΚΑ ΜΕ ΕΜΑΣ', en: 'ABOUT US' },
  aboutDescription: { el: 'Το DEKAPUS ευθυγραμμίζει χώρο, λειτουργία και ανθρώπινη συμπεριφορά για να αποκαθιστά ρυθμό, ενέργεια και συνοχή. Δεν προσφέρουμε πρόχειρες λύσεις — προσφέρουμε στοχευμένες παρεμβάσεις με ουσία και διάρκεια.', en: 'DEKAPUS aligns space, operations, and human behaviour to restore rhythm, energy, and coherence. We do not offer quick fixes - we deliver focused interventions with depth and lasting impact.' },
  quickLinks: { el: 'Γρήγοροι Σύνδεσμοι', en: 'Quick Links' },
  workingTime: { el: 'ΩΡΕΣ ΛΕΙΤΟΥΡΓΙΑΣ', en: 'WORKING TIME' },
  mondayTuesday: { el: 'Δευτέρα - Τρίτη', en: 'Monday - Tuesday' },
  wednesday: { el: 'Τετάρτη', en: 'Wednesday' },
  thursdayFriday: { el: 'Πέμπτη - Παρασκευή', en: 'Thursday - Friday' },
  saturday: { el: 'Σάββατο', en: 'Saturday' },
  sunday: { el: 'Κυριακή', en: 'Sunday' },
  publicHolidays: { el: 'Αργίες', en: 'Public Holidays' },
  closed: { el: 'Κλειστά', en: 'Closed' },
  menuCategories: { el: 'ΚΑΤΗΓΟΡΙΕΣ ΜΕΝΟΥ', en: 'MENU CATEGORIES' },
  appetizers: { el: 'ΟΡΕΚΤΙΚΑ', en: 'APPETIZERS' },
  lunch: { el: 'ΜΕΣΗΜΕΡΙΑΝΟ', en: 'LUNCH' },
  meatFish: { el: 'ΚΡΕΑΣ & ΨΑΡΙ', en: 'MEAT & FISH' },
  soups: { el: 'ΣΟΥΠΕΣ', en: 'SOUPS' },
  instagram: { el: 'Ακολουθήστε μας στο Instagram', en: 'Join us on Instagram' },
  emailSubscribe: { el: 'Το e-mail σας', en: 'Your email' },
  instagramImages: [
    '/images/slide1.jpg',
    '/images/slide2.jpg',
    '/images/about-img1.jpg',
    '/images/counter-bg.jpg',
    '/images/method-section.jpg',
    '/images/engagement-section.jpg',
  ],
};

export const notFoundConfig: NotFoundConfig = {
  title: { el: 'Σελίδα Δεν Βρέθηκε', en: 'Page Not Found' },
  subtitle: { el: '404', en: '404' },
  description: { el: 'Η σελίδα που ψάχνετε δεν υπάρχει.', en: 'The page you are looking for does not exist.' },
  backHome: { el: 'Επιστροφή στην Αρχική', en: 'Back to Home' },
  image: '/images/404.jpg',
  imageAlt: { el: 'Σφάλμα 404', en: '404 error' },
};

export const digitalProductsConfig: DigitalProductsConfig = {
  enabled: false,
  products: [],
};

export const brandConfig: BrandConfig = {
  logoTaglineLight: '/images/white-logo-tagline.png',
  logoTaglineDark: '/images/black-logo-tagline.png',
  signatureLight: '/images/signature.png',
  signatureDark: '/images/signature-black.png',
  logoAlt: { el: 'Λογότυπο DEKAPUS', en: 'DEKAPUS logo' },
  signatureAlt: { el: 'Υπογραφή', en: 'Signature' },
};

export const uiLabelsConfig: UiLabelsConfig = {
  themeToggleAriaLabel: { el: 'Εναλλαγή θέματος', en: 'Toggle theme' },
  switchToLightModeTitle: { el: 'Φωτεινή λειτουργία', en: 'Switch to light mode' },
  switchToDarkModeTitle: { el: 'Σκοτεινή λειτουργία', en: 'Switch to dark mode' },
};

export const languageSwitcherConfig: LanguageSwitcherConfig = {
  elLabel: { el: 'ΕΛ', en: 'ΕΛ' },
  enLabel: { el: 'EN', en: 'EN' },
};

export const blogListingConfig: BlogListingConfig = {
  categoriesTitle: { el: 'Κατηγορίες', en: 'Categories' },
  recentPostsTitle: { el: 'Πρόσφατα Άρθρα', en: 'Recent Posts' },
  tagsTitle: { el: 'Ετικέτες', en: 'Tags' },
  samplePostTimeSuffix: { el: '2016, 10:23 πμ', en: '2016, 10:23 am' },
  sampleLocation: { el: '121η Οδός, Σίδνεϊ VIC 3000', en: '121th Street, Sidney VIC 3000' },
  categories: [
    { name: { el: 'Εστιατόριο', en: 'Restaurant' }, count: 12 },
    { name: { el: 'Φαγητό & Ποτά', en: 'Food & Drinks' }, count: 8 },
    { name: { el: 'Εκδηλώσεις', en: 'Events' }, count: 5 },
    { name: { el: 'Συνταγές', en: 'Recipes' }, count: 15 },
    { name: { el: 'Νέα', en: 'News' }, count: 7 },
  ],
  tags: [
    { el: 'Εστιατόριο', en: 'Restaurant' },
    { el: 'Φαγητό', en: 'Food' },
    { el: 'Ποτά', en: 'Drinks' },
    { el: 'Εκδηλώσεις', en: 'Events' },
    { el: 'Συνταγές', en: 'Recipes' },
    { el: 'Σεφ', en: 'Chef' },
    { el: 'Δείπνο', en: 'Dinner' },
    { el: 'Μεσημεριανό', en: 'Lunch' },
  ],
};

export const customPagesConfig: CustomPagesConfig = {
  allOfferingsLabel: { el: 'ΟΛΕΣ ΟΙ ΠΡΟΣΦΟΡΕΣ', en: 'ALL OFFERINGS' },
  defaultArticle: {
    paragraph1: {
      el: 'Ο πρώτος σύντροφος και ο Καπετάνιος του θα κάνουν ό,τι καλύτερο μπορούν για να κάνουν τους άλλους άνετους στη τροπική τους νησιωτική φωλιά. Όλα είχαν χρυσά μαλλιά σαν τη μητέρα τους, η μικρότερη με μπούκλες. Ελάτε και παίξτε μαζί μας.',
      en: 'The first mate and his Skipper too will do their very best to make the others comfortable in their tropic island nest. All of them had hair of gold like their mother the youngest one in curls. Come and play with us.',
    },
    paragraph2: {
      el: 'Αυτές οι μέρες είναι όλες χαρούμενες και ελεύθερες. Αυτές οι μέρες είναι για να τις μοιραζόμαστε μαζί. Ελάτε και ακούστε μια ιστορία για έναν άνθρωπο - έναν φτωχό βουνίσιο που μόλις και μετά βίας έτρεφε την οικογένειά του. Ιδού η ιστορία μιας όμορφης κυρίας που μεγάλωνε τρία πολύ όμορφα κορίτσια.',
      en: "These days are all Happy and Free. These days are all share them with me oh baby. Come and listen to a story about a man named Jed - a poor mountaineer barely kept his family fed. Here's the story of a lovely lady who was bringing up three very lovely girls.",
    },
    blockquote: {
      el: '"Το Love Boat σύντομα θα κάνει ένα ακόμα δρομολόγιο. Το Love Boat υπόσχεται κάτι για όλους. Βάλε πλώρη για περιπέτεια, το μυαλό σου σε έναν νέο έρωτα."',
      en: '"The Love Boat soon will be making another run. The Love Boat promises something for everyone. Set a course for adventure, your mind on a new romance."',
    },
    paragraph3: {
      el: 'Κι αν οργάνωνες ένα πάρτι - και καλούσες όλους όσους γνώριζες. Θα έβλεπες το μεγαλύτερο δώρο να έρχεται από μένα και στην κάρτα θα έγραφε ευχαριστώ που είσαι φίλος. Δεν θα ήθελες να ξεφύγεις λίγο;',
      en: "And if you threw a party - invited everyone you knew. You would see the biggest gift would be from me and the card attached would say thank you for being a friend. Wouldn't you like to get away?",
    },
  },
  dekapusMethod: {
    mainTitle: { el: 'Μέθοδος DEKAPUS', en: 'DEKAPUS Method' },
    intro: {
      el: 'Η DEKAPUS Method™ είναι μια πρακτική προσέγγιση για την κατανόηση και τη βελτίωση των χώρων φιλοξενίας από μέσα.',
      en: 'The DEKAPUS Method™ is a practical approach to understanding and improving hospitality spaces from within.',
    },
    intro2: {
      el: 'Με αυτή τη μέθοδο διαβάζουμε τον χώρο, κατανοούμε τη δυναμική της ομάδας και εντοπίζουμε τι χρειάζεται να αλλάξει — λαμβάνοντας ακριβείς αποφάσεις που βελτιώνουν τόσο τις λειτουργίες όσο και την εμπειρία του επισκέπτη.',
      en: 'Through this method, we read the space, understand the dynamics of the team, and identify what needs to shift — making precise decisions that improve both operations and guest experience.',
    },
    intro3: {
      el: 'Στον πυρήνα της βασίζεται σε μία αρχή: η φιλοξενία είναι ένα ζωντανό σύστημα, όπου χώρος, άνθρωποι και ρυθμός πρέπει να ευθυγραμμίζονται για να αποδίδει πραγματικά μια επιχείρηση.',
      en: 'At its core, it is based on one principle: hospitality is a living system, where space, people, and rhythm must align for a business to truly perform.',
    },
    whatThisMeansForYou: { el: 'Τι σημαίνει αυτό για εσάς:', en: 'What this means for you:' },
    section1Title: { el: 'Αντίληψη & Ανάγνωση Χώρου', en: 'Perception & Space Reading' },
    section1Body: {
      el: 'Πριν αρχίσει να λειτουργεί, ένας χώρος έχει ήδη φανερώσει πώς θα λειτουργήσει.',
      en: 'Before a space begins to operate, it already reveals how it will function.',
    },
    section1Body2: {
      el: 'Μέσω της παρατήρησης διαβάζουμε ρυθμό, ένταση, κίνηση και σιωπή — αντιλαμβανόμενοι τι συμβαίνει κάτω από την επιφάνεια, πέρα από reports και KPIs.',
      en: 'Through observation, we read rhythm, tension, movement, and silence — sensing what is happening beneath the surface, beyond reports and KPIs.',
    },
    section1Body3: {
      el: 'Μόνο μετά από αυτή την κατανόηση λαμβάνονται αποφάσεις.',
      en: 'Only after this understanding are decisions made.',
    },
    section1MeansBody: {
      el: 'Αποκτάτε σαφήνεια για το τι πραγματικά συμβαίνει στον χώρο σας — και τι χρειάζεται να αλλάξει — χωρίς εικασίες ή περιττές παρεμβάσεις.',
      en: 'You gain clarity on what is truly happening in your space — and what needs to change — without guesswork or unnecessary intervention.',
    },
    section2Title: { el: 'Ατμόσφαιρα & Εμπειρία', en: 'Atmosphere & Experience' },
    section2Body: {
      el: 'Η ατμόσφαιρα διαμορφώνει το πώς νιώθουν οι επισκέπτες και πώς αποδίδουν οι ομάδες. Δημιουργείται μέσα από επιλογές, χρονισμό και ανθρώπινη παρουσία — και όταν είναι ευθυγραμμισμένη, όλη η εμπειρία ρέει φυσικά.',
      en: 'Atmosphere shapes how guests feel and how teams perform. It is created through choices, timing, and human presence — and when it is aligned, the entire experience flows naturally.',
    },
    section2Body2: {
      el: 'Όταν η ατμόσφαιρα είναι ευθυγραμμισμένη, τα συστήματα στηρίζουν την εμπειρία. Όταν όχι, ακόμα και ισχυρά συστήματα αρχίζουν να αποτυγχάνουν.',
      en: 'When atmosphere is aligned, systems support the experience. When it is not, even strong systems begin to fail.',
    },
    section2Body3: { el: '', en: '' },
    section2MeansBody: {
      el: 'Δημιουργείτε ένα περιβάλλον που βελτιώνει την ικανοποίηση των επισκεπτών, την παραμονή και τη συνολική αντίληψη για τον χώρο σας.',
      en: 'You create an environment that improves guest satisfaction, retention, and overall perception of your space.',
    },
    section3Title: { el: 'Ροή Ανθρώπων & Συμπεριφορά', en: 'Human Flow & Behaviour' },
    section3Body: {
      el: 'Οι άνθρωποι δεν κινούνται τυχαία.',
      en: 'People do not move randomly.',
    },
    section3Body2: {
      el: 'Ο τρόπος που κινούνται, αντιδρούν και αλληλεπιδρούν επισκέπτες και προσωπικό αποκαλύπτει την πραγματική κατάσταση της λειτουργίας σας.',
      en: 'The way guests and staff move, react, and interact reveals the true condition of your operation.',
    },
    section3Body3: { el: '', en: '' },
    section3MeansBody: {
      el: 'Κατανοείτε πού υπάρχει τριβή — στη ροή εξυπηρέτησης, στη δυναμική της ομάδας και στην εμπειρία του πελάτη — και πώς να τη διορθώσετε.',
      en: 'You understand where friction exists — in service flow, team dynamics, and customer experience — and how to correct it.',
    },
    section4Title: { el: 'Λειτουργικά Συστήματα', en: 'Operational Systems' },
    section4Body: {
      el: 'Τα συστήματα πρέπει να στηρίζουν την εμπειρία — όχι να την καταπνίγουν.',
      en: 'Systems should support the experience — not suppress it.',
    },
    section4Body2: {
      el: 'Οι διαδικασίες επανασχεδιάζονται μόνο αφού γίνει κατανοητό τι πρέπει να υπηρετούν.',
      en: 'Processes are redesigned only after understanding what they need to serve.',
    },
    section4Body3: { el: '', en: '' },
    section4MeansBody: {
      el: 'Βελτιώνετε την αποδοτικότητα και τη συνέπεια χωρίς να περιπλέκετε υπερβολικά τις λειτουργίες σας.',
      en: 'You improve efficiency and consistency without overcomplicating your operations.',
    },
    section5Title: { el: 'Χρονισμός & Παρέμβαση', en: 'Timing & Intervention' },
    section5Body: {
      el: 'Η αποτελεσματική αλλαγή δεν είναι θέμα του να κάνετε περισσότερα. Είναι θέμα του να ενεργείτε τη σωστή στιγμή.',
      en: 'Effective change is not about doing more. It is about acting at the right moment.',
    },
    section5Body2: {
      el: 'Η DEKAPUS Method™ εστιάζει στην ακριβή παρέμβαση — όχι στη βιασύνη.',
      en: 'The DEKAPUS Method™ focuses on precise intervention — not urgency.',
    },
    section5Body3: { el: '', en: '' },
    section5MeansBody: {
      el: 'Παίρνετε καλύτερες αποφάσεις, αποφεύγετε περιττές αναταραχές και βελτιώνετε την απόδοση με σαφήνεια και έλεγχο.',
      en: 'You make better decisions, avoid unnecessary disruption, and improve performance with clarity and control.',
    },
  },
  myWork: {
    section0Title: { el: 'Pre-opening & Γέννηση Concept', en: 'Pre-opening & Concept Birth' },
    section0Body: {
      el: 'Όταν ένα concept χρειάζεται ταυτότητα, ρυθμό και εσωτερική συνοχή πριν ανοίξει τις πόρτες του.',
      en: 'When a concept needs identity, rhythm, and internal coherence before opening its doors.',
    },
    section1Title: { el: 'Όταν ένας Χώρος Δείχνει "Off"', en: 'When a Space Feels "Off"' },
    section1Body: {
      el: 'Όταν όλα φαίνονται σωστά, αλλά κάτι δεν λειτουργεί — και κανείς δεν μπορεί να το ορίσει.',
      en: "When everything looks right, but something doesn't work - and no one can clearly define it.",
    },
    section2Title: { el: 'Λειτουργικό Χάος Πίσω από μια Ωραία Βιτρίνα', en: 'Operational Chaos Behind a Beautiful Front' },
    section2Body: {
      el: 'Όταν η εικόνα είναι δυνατή, αλλά η καθημερινότητα εξαντλεί ανθρώπους και συστήματα.',
      en: 'When image is strong, but daily reality exhausts people and systems.',
    },
    section3Title: { el: 'Κόπωση Ομάδας & Απώλεια Ρυθμού', en: 'Team Fatigue & Loss of Rhythm' },
    section3Body: {
      el: 'Όταν οι ομάδες λειτουργούν, αλλά δεν αναπνέουν πλέον.',
      en: 'When teams function, but no longer breathe.',
    },
    section4Title: { el: 'Επανατοποθέτηση & Επανεκκίνηση', en: 'Repositioning & Reset' },
    section4Body: {
      el: 'Όταν ένας χώρος χρειάζεται επαναπροσδιορισμό χωρίς να χάσει την ψυχή του.',
      en: 'When a space needs realignment without losing its soul.',
    },
    section5Title: { el: '', en: '' },
    section5Body: { el: '', en: '' },
  },
  engagement: {
    title: { el: 'Πότε Έχει Νόημα να Συνεργαστούμε', en: 'When It Makes Sense to Work Together' },
    introTitle: { el: 'Πού παρεμβαίνουμε', en: 'Where We Step In' },
    intro: {
      el: 'Η συνεργασία συνήθως ξεκινά όταν κάτι γίνεται αισθητό, χωρίς να έχει πλήρως κατανοηθεί μέσα σε μια επιχείρηση φιλοξενίας:',
      en: 'Collaboration usually begins when something is felt, but not fully understood within a hospitality business:',
    },
    list1Title: { el: '', en: '' },
    list1Items: [
      {
        title: {
          el: 'Προ-άνοιγμα & Ανάπτυξη Concept',
          en: 'Pre-opening & Concept Development',
        },
        body: {
          el: 'Όταν ένα concept εστιατορίου, μπαρ ή ξενοδοχείου χρειάζεται ταυτότητα, ρυθμό και λειτουργική σαφήνεια πριν το άνοιγμα.',
          en: 'When a restaurant, bar, or hotel concept needs identity, rhythm, and operational clarity before opening.',
        },
      },
      {
        title: {
          el: 'Όταν ένας Χώρος Δείχνει «Off»',
          en: 'When a Space Feels "Off"',
        },
        body: {
          el: 'Όταν όλα φαίνονται σωστά, ενώ η εμπειρία επισκέπτη ή η απόδοση δεν ευθυγραμμίζονται.',
          en: 'When everything appears correct, yet the guest experience or performance does not align.',
        },
      },
      {
        title: {
          el: 'Λειτουργική Πίεση Πίσω από Ισχυρή Εικόνα',
          en: 'Operational Pressure Behind a Strong Image',
        },
        body: {
          el: 'Όταν το concept φαίνεται σωστό, αλλά οι καθημερινές λειτουργίες εξαντλούν τις ομάδες και μειώνουν την αποδοτικότητα.',
          en: 'When the concept looks right, but daily operations exhaust teams and reduce efficiency.',
        },
      },
      {
        title: {
          el: 'Κόπωση Ομάδας & Απώλεια Ρυθμού',
          en: 'Team Fatigue & Loss of Rhythm',
        },
        body: {
          el: 'Όταν η απόδοση του προσωπικού μειώνεται και η ροή εξυπηρέτησης γίνεται ασταθής.',
          en: 'When staff performance declines and service flow becomes inconsistent.',
        },
      },
      {
        title: {
          el: 'Επανατοποθέτηση & Επανεκκίνηση',
          en: 'Repositioning & Reset',
        },
        body: {
          el: 'Όταν ένας χώρος φιλοξενίας χρειάζεται επαναπροσδιορισμό χωρίς να χάσει την ταυτότητα ή τον χαρακτήρα του.',
          en: 'When a hospitality space needs realignment without losing its identity or character.',
        },
      },
    ],
    howWeWorkTitle: { el: 'Πώς δουλεύουμε μαζί', en: 'How We Work Together' },
    howWeWorkItems: [
      {
        title: { el: 'Πραγματική δέσμευση', en: 'Real Commitment' },
        body: {
          el: 'Υπάρχει πραγματική δέσμευση να προχωρήσουμε μπροστά και να βελτιώσουμε την επιχείρηση.',
          en: 'There is a real commitment to move forward and improve the business',
        },
      },
      {
        title: { el: 'Άμεση εμπλοκή', en: 'Direct Involvement' },
        body: {
          el: 'Ο ιδιοκτήτης ή ο υπεύθυνος αποφάσεων συμμετέχει άμεσα στη διαδικασία.',
          en: 'The owner or decision-maker is directly involved in the process',
        },
      },
      {
        title: { el: 'Ειλικρινής επικοινωνία', en: 'Honest Communication' },
        body: {
          el: 'Υπάρχει ανοιχτότητα σε ειλικρινή επικοινωνία και πρακτικές λύσεις.',
          en: 'There is openness to honest communication and practical solutions',
        },
      },
      {
        title: { el: 'Σκέψη ως ζωντανό σύστημα', en: 'Living System Thinking' },
        body: {
          el: 'Η επιχείρηση αντιμετωπίζεται ως ζωντανό σύστημα — όχι απλώς ως πρόβλημα προς διόρθωση.',
          en: 'The business is approached as a living system — not just a problem to fix.',
        },
      },
    ],
    section2Title: { el: 'Η Διαδικασία', en: 'The Process' },
    section2Body: {
      el: 'Κάθε συνεργασία είναι διαφορετική, ανάλογα με τις ανάγκες του εστιατορίου, του μπαρ ή του ξενοδοχείου.',
      en: 'Every engagement is different, depending on the needs of the restaurant, bar, or hotel.',
    },
    section2Body2: {
      el: 'Ωστόσο, τα περισσότερα έργα ακολουθούν αυτά τα βασικά στάδια:',
      en: 'However, most projects follow these key stages:',
    },
    processItems: [
      {
        title: { el: 'Παρατήρηση & Ανάγνωση Χώρου', en: 'Observation & Space Reading' },
        body: {
          el: 'Κατανόηση λειτουργιών, δυναμικής ομάδας και εμπειρίας επισκέπτη πριν από οποιαδήποτε ενέργεια.',
          en: 'Understanding operations, team dynamics, and guest experience before taking action',
        },
      },
      {
        title: { el: 'Ευθυγράμμιση Αντίληψης', en: 'Perceptual Alignment' },
        body: {
          el: 'Εντοπισμός του τι συμβαίνει πραγματικά μέσα στην επιχείρηση — πέρα από αναφορές και υποθέσεις.',
          en: 'Identifying what is truly happening within the business — beyond reports and assumptions',
        },
      },
      {
        title: { el: 'Στοχευμένη Παρέμβαση', en: 'Targeted Intervention' },
        body: {
          el: 'Εφαρμογή ακριβών προσαρμογών για τη βελτίωση λειτουργιών, ροής και απόδοσης.',
          en: 'Applying precise adjustments to improve operations, flow, and performance',
        },
      },
      {
        title: { el: 'Σταθεροποίηση & Υποστήριξη', en: 'Stabilization & Support' },
        body: {
          el: 'Υποστήριξη της επιχείρησης μέχρι τα συστήματα, οι ομάδες και η ατμόσφαιρα να λειτουργούν σε ευθυγράμμιση.',
          en: 'Supporting the business until systems, teams, and atmosphere function in alignment',
        },
      },
    ],
    section3Title: { el: 'Τι Δεν Είναι Αυτή η Δουλειά', en: 'What This Work Is Not' },
    section3Body: { el: 'Η DEKAPUS δεν λειτουργεί μέσω:', en: 'DEKAPUS does not operate through:' },
    list2Items: [
      { el: 'Γρήγορη, επιφανειακή συμβουλευτική', en: 'Fast, surface-level consulting' },
      { el: 'Προκαθορισμένων προτύπων ή γενικών στρατηγικών', en: 'Pre-defined templates or generic strategies' },
      { el: 'Τυποποιημένων λύσεων αποσυνδεδεμένων από τον χώρο', en: 'Standardized solutions disconnected from the space' },
      {
        el: 'Παρεμβάσεων χωρίς πλήρη κατανόηση των λειτουργιών και των ανθρώπων',
        en: 'Interventions without full understanding of operations and people',
      },
    ],
    closingCtaBody: {
      el: 'Αυτή η δουλειά βασίζεται στην παρουσία, την παρατήρηση και το timing. Ξεδιπλώνεται μέσα από εμπιστοσύνη στη διαδικασία, στον ρυθμό και στους ανθρώπους που συμμετέχουν, δημιουργώντας διαρκή αποτελέσματα σε περιβάλλοντα φιλοξενίας.',
      en: 'This work is grounded in presence, observation, and timing. It unfolds through trust in the process, the rhythm, and the people involved, creating lasting results in hospitality environments.',
    },
    closingCtaButtonLabel: { el: 'Επικοινωνήστε μαζί μας', en: 'Contact us' },
  },
  offeringImages: {
    dekapusMethod: '/images/dekapus-gl-smoke-site.jpg',
    myWork: '/images/dekapus-fire-site.jpg',
    engagement: '/images/dekapus-ice-cube-site.jpg',
  },
};

export const aboutClosingConfig: AboutClosingConfig = {
  leadBold: {
    el: 'Αυτή η δουλειά ορίζεται από την αντίληψη, την ακριβή παρέμβαση και την ικανότητα να «κουρδίζεις» έναν χώρο μέχρι να λειτουργεί με σαφήνεια και ροή.',
    en: 'This work is defined by perception, precise intervention, and the ability to tune a space until it functions with clarity and flow.',
  },
  body: {
    el: 'Αν αυτό είναι αυτό που χρειάζεται ο χώρος σας, ας ξεκινήσουμε τη συζήτηση.',
    en: "If this is what your space needs, let's begin the conversation.",
  },
};
