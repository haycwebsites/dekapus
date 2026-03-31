import { Link, useLocation, useParams } from 'react-router-dom';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { PageBanner } from '../components/layout/PageBanner';
import { useHayc } from '../hayc/config-context';
import { Button } from '../components/ui/button';
import dekapusMethodIntroImage from '../Images/DEKAPUS gl smoke site.jpg';
import myWorkSectionImage from '../Images/DEKAPUS fire site.jpg';
import engagementSectionImage from '../Images/DEKAPUS ice cube site.jpg';

export function BlogSinglePage() {
  const { t, img, config, cp } = useHayc();
  const { slug } = useParams();
  const location = useLocation();
  
  const post = config.blogConfig.items.find(p => p.slug === slug) || config.blogConfig.items[0];
  const postIndex = config.blogConfig.items.findIndex(p => p.slug === slug) || 0;
  const sectionTitleMap = {
    '/dekapus-method': { title: config.navigationConfig.events, path: 'navigationConfig.events' },
    '/my-work': { title: config.navigationConfig.services, path: 'navigationConfig.services' },
    '/engagement': { title: config.navigationConfig.team, path: 'navigationConfig.team' },
  } as const;
  const pageTitle = sectionTitleMap[location.pathname as keyof typeof sectionTitleMap] ?? {
    title: config.navigationConfig.blogPost,
    path: 'navigationConfig.blogPost',
  };

  const serviceLinks = [
    { label: config.navigationConfig.events, path: '/dekapus-method' },
    { label: config.navigationConfig.services, path: '/my-work' },
    { label: config.navigationConfig.team, path: '/engagement' },
  ];
  const allOfferingsLabel = { el: 'ΟΛΕΣ ΟΙ ΠΡΟΣΦΟΡΕΣ', en: 'ALL OFFERINGS' };
  const dekapusMethodContent = {
    title: { el: '', en: '' },
    intro: {
      el: 'Η DEKAPUS Method™ δημιουργήθηκε για να διαβάζει χώρους, ανθρώπους και καταστάσεις με ακρίβεια — και να παρεμβαίνει χωρίς θόρυβο. Είναι ο τρόπος με τον οποίο αντιλαμβάνομαι τη φιλοξενία ως ζωντανό σύστημα.',
      en: 'The DEKAPUS Method™ was created to read spaces, people, and situations with precision — and intervene without noise. It reflects how I understand hospitality as a living system.',
    },
    section1Title: { el: 'Αντίληψη & Ανάγνωση Χώρου', en: 'Perception & Space Reading' },
    section1Body: {
      el: 'Κάθε χώρος μιλάει πριν λειτουργήσει. Ο ρυθμός, η ένταση, οι σιωπές και οι κινήσεις αποκαλύπτουν τι πραγματικά συμβαίνει — πέρα από reports και KPIs. Η παρατήρηση προηγείται κάθε απόφασης.',
      en: 'Every space speaks before it operates. Rhythm, tension, silence, and movement reveal what reports and KPIs cannot. Observation comes before decision-making.',
    },
    section2Title: { el: 'Ατμόσφαιρα & Ενέργεια', en: 'Atmosphere & Energy' },
    section2Body: {
      el: 'Η ατμόσφαιρα δεν είναι διακόσμηση. Είναι αποτέλεσμα επιλογών, timing και ανθρώπινης παρουσίας. Όταν η ατμόσφαιρα είναι σωστή, τα συστήματα υποστηρίζουν. Όταν όχι, τα συστήματα πιέζουν.',
      en: "Atmosphere is not decoration. It is the result of choices, timing, and human presence. When atmosphere is right, systems support. When it isn't, systems suffocate.",
    },
    section3Title: { el: 'Ροή Ανθρώπων & Συμπεριφορά', en: 'Human Flow & Behaviour' },
    section3Body: {
      el: 'Οι άνθρωποι δεν κινούνται τυχαία. Ο τρόπος που κινούνται, αντιδρούν και κουράζονται είναι δομικός δείκτης υγείας ενός χώρου. Η DEKAPUS Method™ διαβάζει τη ροή πριν τη διορθώσει.',
      en: 'People do not move randomly. Their movement, reactions, and fatigue reveal the true health of a space. The DEKAPUS Method™ reads flow before correcting it.',
    },
    section4Title: { el: 'Λειτουργικά Συστήματα', en: 'Operational Systems' },
    section4Body: {
      el: 'Οι διαδικασίες υπάρχουν για να στηρίζουν την εμπειρία — όχι για να την καταπνίγουν. Τα συστήματα επανασχεδιάζονται μόνο αφού γίνει κατανοητό τι πρέπει να υπηρετούν.',
      en: 'Processes exist to support experience - not suppress it. Systems are redesigned only after understanding what they must serve.',
    },
    section5Title: { el: 'Χρονισμός & Παρέμβαση', en: 'Timing & Intervention' },
    section5Body: {
      el: 'Η σωστή παρέμβαση δεν είναι θέμα έντασης. Είναι θέμα στιγμής. Η DEKAPUS λειτουργεί με ακρίβεια, όχι βιασύνη.',
      en: 'Effective intervention is not about intensity. It is about timing. DEKAPUS works with precision, not urgency.',
    },
  };
  const myWorkContent = {
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
  };
  const engagementContent = {
    title: { el: 'Πότε Έχει Νόημα να Συνεργαστούμε', en: 'When It Makes Sense to Work Together' },
    introTitle: { el: 'Εισαγωγή', en: 'Intro' },
    intro: {
      el: 'Η συνεργασία με τη DEKAPUS δεν ξεκινά από πακέτα ή ώρες. Ξεκινά από ευθυγράμμιση. Δεν αναλαμβάνω κάθε έργο. Αναλαμβάνω καταστάσεις όπου η παρέμβαση έχει πραγματικό νόημα.',
      en: 'Working with DEKAPUS does not start with packages or hours. It starts with alignment. I do not take on every project. I engage where intervention has real meaning.',
    },
    list1Title: { el: 'Η συνεργασία μας λειτουργεί καλύτερα όταν:', en: 'Collaboration works best when:' },
    list1Items: [
      { el: 'Υπάρχει σαφής ανάγκη, όχι απλώς περιέργεια', en: 'There is a clear need, not simple curiosity' },
      { el: 'Ο ιδιοκτήτης ή decision-maker είναι παρών', en: 'The owner or decision-maker is involved' },
      { el: 'Υπάρχει διάθεση να ειπωθούν και να ακουστούν δύσκολες αλήθειες', en: 'There is willingness to hear and address difficult truths' },
      { el: 'Ο χώρος αντιμετωπίζεται ως ζωντανό σύστημα, όχι ως πρόβλημα προς διόρθωση', en: 'The space is treated as a living system, not a problem to fix' },
    ],
    section2Title: { el: 'Πώς Ξεδιπλώνεται Συνήθως η Διαδικασία', en: 'How the Process Usually Unfolds' },
    section2Body: {
      el: 'Κάθε συνεργασία έχει διαφορετική διάρκεια και μορφή. Ωστόσο, συνήθως ξεκινά με:',
      en: 'Every engagement is different in duration and form. However, most begin with:',
    },
    processItems: [
      {
        title: { el: 'Παρατήρηση & Ανάγνωση Χώρου', en: 'Observation & Space Reading' },
        body: { el: 'Χωρίς άμεσες παρεμβάσεις. Πρώτα κατανόηση.', en: 'No immediate action. Understanding comes first.' },
      },
      {
        title: { el: 'Ευθυγράμμιση Αντίληψης', en: 'Perceptual Alignment' },
        body: { el: 'Τι πραγματικά συμβαίνει — πέρα από υποθέσεις και αριθμούς.', en: 'Clarifying what is truly happening - beyond assumptions and numbers.' },
      },
      {
        title: { el: 'Στοχευμένη Παρέμβαση', en: 'Targeted Intervention' },
        body: { el: 'Λιγότερες κινήσεις, μεγαλύτερη ακρίβεια.', en: 'Fewer moves. Greater precision.' },
      },
      {
        title: { el: 'Σταθεροποίηση & Υποστήριξη', en: 'Stabilization & Support' },
        body: { el: 'Μέχρι ο χώρος να λειτουργεί αυτόνομα, με φυσικό ρυθμό.', en: 'Until the space functions autonomously, with natural rhythm.' },
      },
    ],
    section3Title: { el: 'Τι Δεν Είναι Αυτό', en: 'What This Is Not' },
    section3Body: { el: 'Το DEKAPUS δεν είναι:', en: 'DEKAPUS is not:' },
    list2Items: [
      { el: 'Γρήγορο consulting', en: 'Fast consulting' },
      { el: 'Έτοιμο template', en: 'Pre-made templates' },
      { el: 'Παρέμβαση χωρίς βάθος', en: 'Surface-level intervention' },
      { el: 'Υπηρεσία “βελτίωσης” χωρίς κατανόηση', en: 'Optimization without understanding' },
    ],
    closing: {
      el: 'Η συνεργασία λειτουργεί όταν υπάρχει εμπιστοσύνη στον χρόνο, στη διαδικασία και στους ανθρώπους.',
      en: 'Collaboration works when there is trust in time, process, and people.',
    },
  };
  const standardCustomContent =
    location.pathname === '/dekapus-method'
      ? dekapusMethodContent
      : location.pathname === '/my-work'
        ? myWorkContent
        : null;
  const isEngagementPage = location.pathname === '/engagement';
  const isMyWorkPage = location.pathname === '/my-work';
  const isOfferingPage =
    location.pathname === '/dekapus-method' ||
    location.pathname === '/my-work' ||
    location.pathname === '/engagement';

  const sectionHeroImage =
    location.pathname === '/dekapus-method'
      ? '/images/method-section.jpg'
      : location.pathname === '/my-work'
        ? '/images/situations-work.jpg'
        : location.pathname === '/engagement'
          ? '/images/engagement-section.jpg'
          : post.image;

  return (
    <>
      <Header variant="inner" />
      <main>
        <PageBanner title={pageTitle.title} titlePath={pageTitle.path} />
        
        <section className="py-20 bg-[#141414]">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Main Content */}
              <article className="lg:col-span-2">
                <div className="bg-[#1a1a1a] rounded-lg overflow-hidden">
                  <div className="p-8 pb-0">
                    <h1
                      {...cp(`blogConfig.items.${postIndex}.title`)}
                      className="text-2xl md:text-3xl font-semibold text-white mb-6"
                    >
                      {isEngagementPage
                        ? t(engagementContent.title)
                        : isMyWorkPage
                          ? t(config.navigationConfig.services)
                          : standardCustomContent && 'title' in standardCustomContent
                            ? t(standardCustomContent.title)
                            : t(post.title)}
                    </h1>
                    {standardCustomContent &&
                      'intro' in standardCustomContent &&
                      standardCustomContent.intro &&
                      !isMyWorkPage && (
                      <p className="text-white/70 leading-relaxed mb-6">
                        {t(standardCustomContent.intro)}
                      </p>
                    )}
                  </div>
                  {!isOfferingPage && (
                    <img
                      src={img(sectionHeroImage)}
                      alt={t(post.title)}
                      className="w-full h-96 object-cover"
                    />
                  )}
                  <div className="p-8">
                    <div className={`prose prose-invert max-w-none ${standardCustomContent || isEngagementPage ? 'hidden' : ''}`}>
                      <p {...cp(`blogConfig.items.${postIndex}.excerpt`)} className="text-white/70 leading-relaxed mb-4">
                        {t(post.excerpt)}
                      </p>
                      <p className="text-white/70 leading-relaxed mb-4">
                        The first mate and his Skipper too will do their very best to make the others comfortable in their tropic island nest. All of them had hair of gold like their mother the youngest one in curls. Come and play with us.
                      </p>
                      <p className="text-white/70 leading-relaxed mb-4">
                        These days are all Happy and Free. These days are all share them with me oh baby. Come and listen to a story about a man named Jed - a poor mountaineer barely kept his family fed. Here's the story of a lovely lady who was bringing up three very lovely girls.
                      </p>
                      <blockquote className="border-l-4 border-[#c8a97e] pl-6 my-8 italic text-white/80">
                        "The Love Boat soon will be making another run. The Love Boat promises something for everyone. Set a course for adventure, your mind on a new romance."
                      </blockquote>
                      <p className="text-white/70 leading-relaxed mb-4">
                        And if you threw a party - invited everyone you knew. You would see the biggest gift would be from me and the card attached would say thank you for being a friend. Wouldn't you like to get away?
                      </p>
                    </div>

                    {standardCustomContent && (
                      <div className="space-y-6">
                        {isMyWorkPage &&
                          'section0Title' in standardCustomContent &&
                          standardCustomContent.section0Title &&
                          standardCustomContent.section0Body && (
                          <div>
                            <h2 className="text-xl md:text-2xl font-semibold text-white mb-2">
                              {t(standardCustomContent.section0Title)}
                            </h2>
                            <p className="text-white/70 leading-relaxed">
                              {t(standardCustomContent.section0Body)}
                            </p>
                          </div>
                        )}
                        <div>
                          <h2 className="text-xl md:text-2xl font-semibold text-white mb-2">
                            {t(standardCustomContent.section1Title)}
                          </h2>
                          <p className="text-white/70 leading-relaxed">{t(standardCustomContent.section1Body)}</p>
                        </div>
                        <div>
                          <h2 className="text-xl md:text-2xl font-semibold text-white mb-2">
                            {t(standardCustomContent.section2Title)}
                          </h2>
                          <p className="text-white/70 leading-relaxed">{t(standardCustomContent.section2Body)}</p>
                        </div>
                        <div>
                          <h2 className="text-xl md:text-2xl font-semibold text-white mb-2">
                            {t(standardCustomContent.section3Title)}
                          </h2>
                          <p className="text-white/70 leading-relaxed">{t(standardCustomContent.section3Body)}</p>
                        </div>
                        <div>
                          <h2 className="text-xl md:text-2xl font-semibold text-white mb-2">
                            {t(standardCustomContent.section4Title)}
                          </h2>
                          <p className="text-white/70 leading-relaxed">{t(standardCustomContent.section4Body)}</p>
                        </div>
                        {t(standardCustomContent.section5Title).trim() && t(standardCustomContent.section5Body).trim() && (
                          <div>
                            <h2 className="text-xl md:text-2xl font-semibold text-white mb-2">
                              {t(standardCustomContent.section5Title)}
                            </h2>
                            <p className="text-white/70 leading-relaxed">{t(standardCustomContent.section5Body)}</p>
                          </div>
                        )}
                      </div>
                    )}

                    {isEngagementPage && (
                      <div className="space-y-8">
                        <div>
                          <h2 className="text-xl md:text-2xl font-semibold text-white mb-2">
                            {t(engagementContent.introTitle)}
                          </h2>
                          <p className="text-white/70 leading-relaxed">
                            {t(engagementContent.intro)}
                          </p>
                        </div>
                        <div>
                          <h2 className="text-xl md:text-2xl font-semibold text-white mb-3">
                            {t(engagementContent.list1Title)}
                          </h2>
                          <ul className="space-y-3">
                            {engagementContent.list1Items.map((item, index) => (
                              <li key={index} className="rounded-md border border-white/10 bg-white/5 px-4 py-3 text-white/80 leading-relaxed">
                                {t(item)}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h2 className="text-xl md:text-2xl font-semibold text-white mb-2">
                            {t(engagementContent.section2Title)}
                          </h2>
                          <p className="text-white/70 leading-relaxed mb-4">
                            {t(engagementContent.section2Body)}
                          </p>
                          <ul className="space-y-3">
                            {engagementContent.processItems.map((item, index) => (
                              <li key={index} className="rounded-md border border-white/10 bg-white/5 px-4 py-3">
                                <h3 className="text-white font-semibold mb-1">{t(item.title)}</h3>
                                <p className="text-white/70 leading-relaxed">{t(item.body)}</p>
                              </li>
                            ))}
                          </ul>
                        </div>
                        {/* Engagement image will be handled responsively below */}

                        <div>
                          <h2 className="text-xl md:text-2xl font-semibold text-white mb-2">
                            {t(engagementContent.section3Title)}
                          </h2>
                          <p className="text-white/70 leading-relaxed mb-4">
                            {t(engagementContent.section3Body)}
                          </p>
                          <ul className="space-y-3">
                            {engagementContent.list2Items.map((item, index) => (
                              <li key={index} className="rounded-md border border-white/10 bg-white/5 px-4 py-3 text-white/80 leading-relaxed">
                                {t(item)}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <p className="text-white/80 leading-relaxed">
                          {t(engagementContent.closing)}
                        </p>
                      </div>
                    )}

                  </div>
                </div>

              </article>

              {/* Sidebar */}
              <aside className="lg:sticky lg:top-36 self-start">
                {isOfferingPage ? (
                  // Large-screen image beside the text
                  <div className="bg-[#1a1a1a] rounded-lg overflow-hidden hidden lg:block">
                    <img
                      src={img(
                        location.pathname === '/dekapus-method'
                          ? dekapusMethodIntroImage
                          : location.pathname === '/my-work'
                            ? myWorkSectionImage
                            : engagementSectionImage
                      )}
                      alt={t(pageTitle.title)}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ) : (
                  // Default sidebar with all offerings
                  <div className="bg-[#1a1a1a] rounded-lg p-6">
                    <h4 className="text-2xl font-serif text-white uppercase mb-4">{t(allOfferingsLabel)}</h4>
                    <ul className="space-y-3">
                      {serviceLinks.map((serviceLink) => (
                        <li key={serviceLink.path}>
                          <Link
                            to={serviceLink.path}
                            className={`text-white/70 hover:text-[#c8a97e] transition-colors ${
                              location.pathname === serviceLink.path ? 'text-[#c8a97e]' : ''
                            }`}
                          >
                            {t(serviceLink.label)}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </aside>
            </div>
          </div>
        </section>

        {/* Mobile / tablet image placement after text */}
        {isOfferingPage && (
          <section className="py-10 bg-[#141414] lg:hidden">
            <div className="container mx-auto px-4">
              <img
                src={img(
                  location.pathname === '/dekapus-method'
                    ? dekapusMethodIntroImage
                    : location.pathname === '/my-work'
                      ? myWorkSectionImage
                      : engagementSectionImage
                )}
                alt={t(pageTitle.title)}
                className="w-full h-96 object-cover rounded-lg"
              />
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}
