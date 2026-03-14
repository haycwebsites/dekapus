import { Link, useLocation, useParams } from 'react-router-dom';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { PageBanner } from '../components/layout/PageBanner';
import { useHayc } from '../hayc/config-context';

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
  const dekapusMethodContent = {
    title: 'THE DEKAPUS METHOD™ - PHILOSOPHY & FRAMEWORK',
    intro:
      'Every space speaks before it operates. Rhythm, tension, silence, and movement reveal what reports and KPIs cannot. Observation comes before decision-making.',
    section1Title: 'Perception & Space Reading',
    section1Body:
      'Every space speaks before it operates. Rhythm, tension, silence, and movement reveal what reports and KPIs cannot. Observation comes before decision-making.',
    section2Title: 'Atmosphere & Energy',
    section2Body:
      "Atmosphere is not decoration. It is the result of choices, timing, and human presence. When atmosphere is right, systems support. When it isn't, systems suffocate.",
    section3Title: 'Human Flow & Behaviour',
    section3Body:
      'People do not move randomly. Their movement, reactions, and fatigue reveal the true health of a space. The DEKAPUS Method™ reads flow before correcting it.',
    section4Title: 'Operational Systems',
    section4Body:
      'Processes exist to support experience - not suppress it. Systems are redesigned only after understanding what they must serve.',
    section5Title: 'Timing & Intervention',
    section5Body:
      'Effective intervention is not about intensity. It is about timing. DEKAPUS works with precision, not urgency.',
  };
  const myWorkContent = {
    title: 'Pre-opening & Concept Birth',
    intro:
      'When a concept needs identity, rhythm, and internal coherence before opening its doors.',
    section1Title: 'When a Space Feels "Off"',
    section1Body:
      "When everything looks right, but something doesn't work - and no one can clearly define it.",
    section2Title: 'Operational Chaos Behind a Beautiful Front',
    section2Body:
      'When image is strong, but daily reality exhausts people and systems.',
    section3Title: 'Team Fatigue & Loss of Rhythm',
    section3Body: 'When teams function, but no longer breathe.',
    section4Title: 'Repositioning & Reset',
    section4Body: 'When a space needs realignment without losing its soul.',
    section5Title: '',
    section5Body: '',
  };
  const engagementContent = {
    title: 'When It Makes Sense to Work Together',
    intro:
      'Working with DEKAPUS does not start with packages or hours. It starts with alignment. I do not take on every project. I engage where intervention has real meaning.',
    list1Title: 'Collaboration works best when:',
    list1Items: [
      'There is a clear need, not simple curiosity',
      'The owner or decision-maker is involved',
      'There is willingness to hear and address difficult truths',
      'The space is treated as a living system, not a problem to fix',
    ],
    section2Title: 'How the Process Usually Unfolds',
    section2Body:
      'Every engagement is different in duration and form. However, most begin with:',
    processItems: [
      {
        title: 'Observation & Space Reading',
        body: 'No immediate action. Understanding comes first.',
      },
      {
        title: 'Perceptual Alignment',
        body: 'Clarifying what is truly happening - beyond assumptions and numbers.',
      },
      {
        title: 'Targeted Intervention',
        body: 'Fewer moves. Greater precision.',
      },
      {
        title: 'Stabilization & Support',
        body: 'Until the space functions autonomously, with natural rhythm.',
      },
    ],
    section3Title: 'What This Is Not',
    section3Body: 'DEKAPUS is not:',
    list2Items: [
      'Fast consulting',
      'Pre-made templates',
      'Surface-level intervention',
      'Optimization without understanding',
    ],
    closing:
      'Collaboration works when there is trust in time, process, and people.',
  };
  const standardCustomContent =
    location.pathname === '/dekapus-method'
      ? dekapusMethodContent
      : location.pathname === '/my-work'
        ? myWorkContent
        : null;
  const isEngagementPage = location.pathname === '/engagement';

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
                      {isEngagementPage ? engagementContent.title : standardCustomContent ? standardCustomContent.title : t(post.title)}
                    </h1>
                  </div>
                  <img
                    src={img(sectionHeroImage)}
                    alt={t(post.title)}
                    className="w-full h-96 object-cover"
                  />
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
                        <div>
                          <h2 className="text-xl md:text-2xl font-semibold text-white mb-2">
                            {standardCustomContent.section1Title}
                          </h2>
                          <p className="text-white/70 leading-relaxed">{standardCustomContent.section1Body}</p>
                        </div>
                        <div>
                          <h2 className="text-xl md:text-2xl font-semibold text-white mb-2">
                            {standardCustomContent.section2Title}
                          </h2>
                          <p className="text-white/70 leading-relaxed">{standardCustomContent.section2Body}</p>
                        </div>
                        <img
                          src={img(
                            location.pathname === '/dekapus-method'
                              ? '/images/slide1.jpg'
                              : location.pathname === '/my-work'
                                ? '/images/newsletter-bg.jpg'
                                : sectionHeroImage
                          )}
                          alt={t(post.title)}
                          className="w-full h-96 object-cover"
                        />
                        <div>
                          <h2 className="text-xl md:text-2xl font-semibold text-white mb-2">
                            {standardCustomContent.section3Title}
                          </h2>
                          <p className="text-white/70 leading-relaxed">{standardCustomContent.section3Body}</p>
                        </div>
                        <div>
                          <h2 className="text-xl md:text-2xl font-semibold text-white mb-2">
                            {standardCustomContent.section4Title}
                          </h2>
                          <p className="text-white/70 leading-relaxed">{standardCustomContent.section4Body}</p>
                        </div>
                        {standardCustomContent.section5Title && standardCustomContent.section5Body && (
                          <div>
                            <h2 className="text-xl md:text-2xl font-semibold text-white mb-2">
                              {standardCustomContent.section5Title}
                            </h2>
                            <p className="text-white/70 leading-relaxed">{standardCustomContent.section5Body}</p>
                          </div>
                        )}
                      </div>
                    )}

                    {isEngagementPage && (
                      <div className="space-y-8">
                        <div>
                          <h2 className="text-xl md:text-2xl font-semibold text-white mb-3">
                            {engagementContent.list1Title}
                          </h2>
                          <ul className="space-y-3">
                            {engagementContent.list1Items.map((item) => (
                              <li key={item} className="rounded-md border border-white/10 bg-white/5 px-4 py-3 text-white/80 leading-relaxed">
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h2 className="text-xl md:text-2xl font-semibold text-white mb-2">
                            {engagementContent.section2Title}
                          </h2>
                          <p className="text-white/70 leading-relaxed mb-4">
                            {engagementContent.section2Body}
                          </p>
                          <ul className="space-y-3">
                            {engagementContent.processItems.map((item) => (
                              <li key={item.title} className="rounded-md border border-white/10 bg-white/5 px-4 py-3">
                                <h3 className="text-white font-semibold mb-1">{item.title}</h3>
                                <p className="text-white/70 leading-relaxed">{item.body}</p>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <img
                          src={img('/images/slide2.jpg')}
                          alt={t(post.title)}
                          className="w-full h-96 object-cover"
                        />

                        <div>
                          <h2 className="text-xl md:text-2xl font-semibold text-white mb-2">
                            {engagementContent.section3Title}
                          </h2>
                          <p className="text-white/70 leading-relaxed mb-4">
                            {engagementContent.section3Body}
                          </p>
                          <ul className="space-y-3">
                            {engagementContent.list2Items.map((item) => (
                              <li key={item} className="rounded-md border border-white/10 bg-white/5 px-4 py-3 text-white/80 leading-relaxed">
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <p className="text-white/80 leading-relaxed">
                          {engagementContent.closing}
                        </p>
                      </div>
                    )}

                  </div>
                </div>

              </article>

              {/* Sidebar */}
              <aside className="lg:sticky lg:top-36 self-start">
                {/* All offerings */}
                <div className="bg-[#1a1a1a] rounded-lg p-6">
                  <h4 className="text-white font-semibold mb-4">All offerings</h4>
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
              </aside>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
