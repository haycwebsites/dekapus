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
}

export interface HeroConfig {
  title: LocaleString;
  subtitle: LocaleString;
  viewMenuButton: LocaleString;
  backgroundImage1: string;
  backgroundImage2: string;
  slideLogo: string;
}

export interface AboutConfig {
  sectionTitle: LocaleString;
  title: LocaleString;
  description1: LocaleString;
  description2: LocaleString;
  closingLine: LocaleString;
  chefName: LocaleString;
  chefThumb: string;
  chefSign: string;
  aboutImage1: string;
  aboutImage2: string;
}

/** Full-bleed statement block on the About page (below main about copy) */
export interface AboutStatementConfig {
  sectionTitle: LocaleString;
  headline: LocaleString;
  paragraph1: LocaleString;
  paragraph2: LocaleString;
  backgroundImage: string;
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
  sectionTitle: LocaleString;
  title: LocaleString;
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
  title: { el: 'Max Restaurant', en: 'Max Restaurant' },
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
  home: { el: 'Home', en: 'Home' },
  home1: { el: 'Αρχική 1', en: 'Home 1' },
  home2: { el: 'Αρχική 2', en: 'Home 2' },
  about: { el: 'About', en: 'About' },
  events: { el: 'Dekapus Method', en: 'Dekapus Method' },
  pages: { el: 'Σελίδες', en: 'Pages' },
  menu: { el: 'Μενού', en: 'Menu' },
  reservation: { el: 'Κράτηση', en: 'Reservation' },
  gallery: { el: 'Γκαλερί', en: 'Gallery' },
  services: { el: 'Situations I Work In', en: 'Situations I Work In' },
  team: { el: 'Engagement', en: 'Engagement' },
  blog: { el: 'Ιστολόγιο', en: 'Blog' },
  blogPost: { el: 'Άρθρο', en: 'Blog Post' },
  contact: { el: 'Contact', en: 'Contact' },
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
};

export const heroConfig: HeroConfig = {
  title: { el: 'Crafting Atmospheres.', en: 'Crafting Atmospheres.' },
  subtitle: { el: 'Aligning Systems, Space & Human Behaviour.', en: 'Aligning Systems, Space & Human Behaviour.' },
  viewMenuButton: { el: 'Μάθετε Περισσότερα', en: 'Learn More' },
  backgroundImage1: '/images/slide1.jpg',
  backgroundImage2: '/images/slide2.jpg',
  slideLogo: '/images/slide-logo.png',
};

export const aboutConfig: AboutConfig = {
  sectionTitle: { el: 'Εισαγωγή', en: 'About' },
  title: { el: 'Δεν προέρχομαι από τον χώρο του consulting. Προέρχομαι από τον χώρο όπου η φιλοξενία δοκιμάζεται καθημερινά.', en: 'I did not come from the consulting world. I came from the environments where hospitality is tested daily.' },
  description1: { el: 'Έχω εργαστεί μέσα σε χώρους που λειτουργούν υπό πίεση, σε ρυθμούς πραγματικούς, με ανθρώπους, όχι με θεωρίες. Για περισσότερα από τριάντα χρόνια βρίσκομαι μέσα σε εστιατόρια, bars, clubs και ξενοδοχεία. Όχι ως παρατηρητής, αλλά ως μέρος του συστήματος. Έμαθα να διαβάζω χώρους πριν “ανοίξουν”. Να καταλαβαίνω ομάδες πριν κουραστούν. Να αντιλαμβάνομαι πότε ένα concept χάνει τον ρυθμό του — ακόμα κι αν όλα φαίνονται σωστά. Η εμπειρία μου δεν είναι ακαδημαϊκή. Είναι βιωματική, πρακτική και ανθρώπινη.', en: 'I have worked inside spaces under real pressure, real rhythm, and real human dynamics - not theoretical models. For more than thirty years, I have operated inside restaurants, bars, clubs, and hotels. Not as an observer, but as part of the system. I learned to read spaces before they open. To sense teams before they reach exhaustion. To recognize when a concept loses its rhythm - even when everything appears correct. My experience is not academic. It is lived, practical, and human.' },
  description2: { el: 'Πιστεύω ότι η φιλοξενία είναι ζωντανός οργανισμός. Όταν πιεστεί λάθος, αντιδρά. Όταν ευθυγραμμιστεί σωστά, λειτουργεί αβίαστα. Η δουλειά μου δεν είναι να “βελτιώνω” χώρους. Είναι να τους επαναφέρω στη φυσική τους ισορροπία.', en: 'I see hospitality as a living organism. When pressure is misapplied, it resists. When alignment is right, it flows. My work is not about improving spaces. It is about restoring their natural balance.' },
  closingLine: { el: 'Η DEKAPUS υπάρχει για να εργάζεται εκεί όπου η λεπτομέρεια, ο άνθρωπος και η ατμόσφαιρα δεν μπορούν να αντιμετωπιστούν ξεχωριστά.', en: 'DEKAPUS exists to work where detail, people, and atmosphere cannot be treated separately.' },
  chefName: { el: 'ΤΖΑΚΛΙΝ ΡΟΚΙ', en: 'JACKLIN ROCKY' },
  chefThumb: '/images/about-thumb.jpg',
  chefSign: '/images/chef-sign.png',
  aboutImage1: '/images/about-img1.jpg',
  aboutImage2: '/images/about-img2.jpg',
};

export const aboutStatementConfig: AboutStatementConfig = {
  sectionTitle: { el: 'This is not consulting.', en: 'This is not consulting.' },
  headline: { el: 'It is the ability to read a space, sense pressure before it escalates, and restore balance before systems break.', en: 'It is the ability to read a space, sense pressure before it escalates, and restore balance before systems break.' },
  paragraph1: { el: 'I am invited when something feels off but cannot be named. When teams are competent yet strained. When concepts are correct yet no longer alive.', en: 'I am invited when something feels off but cannot be named. When teams are competent yet strained. When concepts are correct yet no longer alive.' },
  paragraph2: { el: 'My work happens quietly, inside the rhythm of the operation. Not through frameworks or reports, but through presence, adjustment, and precise intervention.', en: 'My work happens quietly, inside the rhythm of the operation. Not through frameworks or reports, but through presence, adjustment, and precise intervention.' },
  backgroundImage: '/images/engagement-section.jpg',
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
  sectionTitle: { el: 'Δεν πρόκειται απλά για consulting.', en: 'This is not just consulting.' },
  title: { el: 'Προκειται για αντιληψη, παρεμβαση και ακριβη συντονισμο.', en: 'It is perception, intervention, and precise tuning.' },
  learnMoreButton: { el: 'Μάθετε Περισσότερα', en: 'Learn More' },
  backgroundImage: '/images/counter-bg.jpg',
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
      label: { el: 'ΟΙ ΣΕΦΣ ΜΑΣ', en: 'OUR CHEFS' },
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
  title: { el: 'ΚΑΝΣΤΕ ΚΡΑΤΗΣΗ', en: 'MAKE A RESERVATION' },
  namePlaceholder: { el: 'Όνομα *', en: 'Name *' },
  phonePlaceholder: { el: 'Τηλέφωνο *', en: 'Phone Number *' },
  tablePlaceholder: { el: 'Επιλέξτε Τραπέζι *', en: 'Choose Your Table *' },
  timePlaceholder: { el: 'Επιλέξτε Ώρα *', en: 'Choose Your Time *' },
  datePlaceholder: { el: 'Επιλέξτε Ημερομηνία *', en: 'Choose Date *' },
  guestsPlaceholder: { el: 'Αριθμός Ατόμων *', en: 'Number of Guests *' },
  messagePlaceholder: { el: 'Σχόλια', en: 'Comments' },
  backgroundImage: '/images/book-table-bg.jpg',
};

export const eventsConfig: EventsConfig = {
  sectionTitle: { el: 'Τελευταίες Εκδηλώσεις', en: 'Latest Events' },
  title: { el: 'ΜΗΝ ΧΑΣΕΤΕ', en: 'DO NOT MISS' },
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
  description: { el: 'Εγγραφείτε με το email σας για να λαμβάνετε ενημερώσεις για τις εκδηλώσεις μας', en: 'Sign up with your email to get updates fresh updates about our events' },
  placeholder: { el: 'Εισάγετε το Email σας', en: 'Enter Your Email Address' },
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
  preBulletsLine: { el: 'Η ευθυγράμμιση ξεκινά πριν από την παρέμβαση.', en: 'Alignment begins before intervention.' },
  introLine: { el: 'Η επικοινωνία συνήθως ξεκινά όταν κάτι δεν ευθυγραμμίζεται.', en: 'Contact usually begins when something does not align.' },
  introItem1: { el: 'Όταν ένας χώρος λειτουργεί αλλά δεν αναπνέει.', en: 'When a space functions but does not breathe.' },
  introItem2: { el: 'Όταν όλα μοιάζουν σωστά, αλλά κάτι λείπει.', en: 'When everything looks right, yet something feels missing.' },
  introItem3: { el: 'Όταν χρειάζεται καθαρότητα πριν από τη δράση.', en: 'When clarity is needed before action.' },
  closingWhisper: { el: 'Αν αναγνωρίζεις αυτή τη στιγμή, μια συζήτηση αρκεί για να ξεκινήσει.', en: 'If you recognize this moment, a conversation is enough to begin.' },
  address: { el: 'Τοποθεσία', en: 'Location' },
  addressValue: { el: 'Athens Greece', en: 'Athens Greece' },
  phone: { el: 'Τηλέφωνο', en: 'Phone' },
  email: { el: 'Email', en: 'Email' },
  emailValue: { el: 'dpaxinos@dekapus.com.gr', en: 'dpaxinos@dekapus.com.gr' },
  namePlaceholder: { el: 'Το Όνομά σας', en: 'Your Name' },
  emailPlaceholder: { el: 'Το Email σας', en: 'Your Email' },
  subjectPlaceholder: { el: 'Θέμα', en: 'Subject' },
  messagePlaceholder: { el: 'Το Μήνυμά σας', en: 'Your Message' },
  sendMessage: { el: 'Αποστολή Μηνύματος', en: 'Send Message' },
  workingHours: { el: 'Ωρες Λειτουργίας', en: 'Working Hours' },
  workingHoursValue: { el: 'Δευ - Παρ: 9ΠΜ - 10ΜΜ', en: 'Mon - Fri: 9AM - 10PM' },
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
  emailSubscribe: { el: 'Το email σας', en: 'Your email' },
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
};

export const digitalProductsConfig: DigitalProductsConfig = {
  enabled: false,
  products: [],
};
