import { Link, useLocation, useParams } from 'react-router-dom';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { PageBanner } from '../components/layout/PageBanner';
import { useHayc } from '../hayc/config-context';

export function BlogSinglePage() {
  const { t, img, config, cp } = useHayc();
  const { slug } = useParams();
  const location = useLocation();

  const post = config.blogConfig.items.find((p) => p.slug === slug) || config.blogConfig.items[0];
  const postIndex = config.blogConfig.items.findIndex((p) => p.slug === slug);
  const safePostIndex = postIndex >= 0 ? postIndex : 0;

  const sectionTitleMap = {
    '/dekapus-method': { title: config.navigationConfig.events, path: 'navigationConfig.events' },
    '/my-work': { title: config.navigationConfig.services, path: 'navigationConfig.services' },
    '/engagement': { title: config.navigationConfig.team, path: 'navigationConfig.team' },
  } as const;
  const pageTitle =
    sectionTitleMap[location.pathname as keyof typeof sectionTitleMap] ?? {
      title: config.navigationConfig.blogPost,
      path: 'navigationConfig.blogPost',
    };

  const serviceLinks = [
    { label: config.navigationConfig.events, path: '/dekapus-method', labelPath: 'navigationConfig.events' as const },
    { label: config.navigationConfig.services, path: '/my-work', labelPath: 'navigationConfig.services' as const },
    { label: config.navigationConfig.team, path: '/engagement', labelPath: 'navigationConfig.team' as const },
  ];

  const dm = config.customPagesConfig.dekapusMethod;
  const mw = config.customPagesConfig.myWork;
  const eg = config.customPagesConfig.engagement;
  const defArticle = config.customPagesConfig.defaultArticle;
  const offeringImgs = config.customPagesConfig.offeringImages;

  const standardCustomContent =
    location.pathname === '/dekapus-method' ? 'dekapus' : location.pathname === '/my-work' ? 'myWork' : null;
  const isEngagementPage = location.pathname === '/engagement';
  const isMyWorkPage = location.pathname === '/my-work';
  const isOfferingPage =
    location.pathname === '/dekapus-method' || location.pathname === '/my-work' || location.pathname === '/engagement';

  const sectionHeroImage =
    location.pathname === '/dekapus-method'
      ? '/images/method-section.jpg'
      : location.pathname === '/my-work'
        ? '/images/situations-work.jpg'
        : location.pathname === '/engagement'
          ? '/images/engagement-section.jpg'
          : post.image;

  const mainTitleLocale = isEngagementPage
    ? eg.title
    : isMyWorkPage
      ? config.navigationConfig.services
      : location.pathname === '/dekapus-method'
        ? dm.mainTitle
        : post.title;

  const mainTitleCp = isEngagementPage
    ? 'customPagesConfig.engagement.title'
    : isMyWorkPage
      ? 'navigationConfig.services'
      : location.pathname === '/dekapus-method'
        ? 'customPagesConfig.dekapusMethod.mainTitle'
        : `blogConfig.items.${safePostIndex}.title`;

  const offeringImageSrc =
    location.pathname === '/dekapus-method'
      ? offeringImgs.dekapusMethod
      : location.pathname === '/my-work'
        ? offeringImgs.myWork
        : offeringImgs.engagement;

  return (
    <>
      <Header variant="inner" />
      <main>
        <PageBanner title={pageTitle.title} titlePath={pageTitle.path} />

        <section className="py-20 bg-[#141414]">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <article className="lg:col-span-2">
                <div className="bg-[#1a1a1a] rounded-lg overflow-hidden">
                  <div className="p-8 pb-0">
                    <h1 {...cp(mainTitleCp)} className="text-2xl md:text-3xl font-semibold text-white mb-6">
                      {t(mainTitleLocale)}
                    </h1>
                    {standardCustomContent === 'dekapus' && (
                      <>
                        <p {...cp('customPagesConfig.dekapusMethod.intro')} className="text-white/70 leading-relaxed mb-4">
                          {t(dm.intro)}
                        </p>
                        <p {...cp('customPagesConfig.dekapusMethod.intro2')} className="text-white/70 leading-relaxed mb-4">
                          {t(dm.intro2)}
                        </p>
                        <p {...cp('customPagesConfig.dekapusMethod.intro3')} className="text-white/70 leading-relaxed mb-6">
                          {t(dm.intro3)}
                        </p>
                      </>
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
                      <p {...cp(`blogConfig.items.${safePostIndex}.excerpt`)} className="text-white/70 leading-relaxed mb-4">
                        {t(post.excerpt)}
                      </p>
                      <p {...cp('customPagesConfig.defaultArticle.paragraph1')} className="text-white/70 leading-relaxed mb-4">
                        {t(defArticle.paragraph1)}
                      </p>
                      <p {...cp('customPagesConfig.defaultArticle.paragraph2')} className="text-white/70 leading-relaxed mb-4">
                        {t(defArticle.paragraph2)}
                      </p>
                      <blockquote
                        {...cp('customPagesConfig.defaultArticle.blockquote')}
                        className="border-l-4 border-[#c8a97e] pl-6 my-8 italic text-white/80"
                      >
                        {t(defArticle.blockquote)}
                      </blockquote>
                      <p {...cp('customPagesConfig.defaultArticle.paragraph3')} className="text-white/70 leading-relaxed mb-4">
                        {t(defArticle.paragraph3)}
                      </p>
                    </div>

                    {standardCustomContent === 'myWork' && (
                      <div className="space-y-6">
                        <div>
                          <h2 {...cp('customPagesConfig.myWork.section0Title')} className="text-xl md:text-2xl font-semibold text-white mb-2">
                            {t(mw.section0Title)}
                          </h2>
                          <p {...cp('customPagesConfig.myWork.section0Body')} className="text-white/70 leading-relaxed">
                            {t(mw.section0Body)}
                          </p>
                        </div>
                        <div>
                          <h2 {...cp('customPagesConfig.myWork.section1Title')} className="text-xl md:text-2xl font-semibold text-white mb-2">
                            {t(mw.section1Title)}
                          </h2>
                          <p {...cp('customPagesConfig.myWork.section1Body')} className="text-white/70 leading-relaxed">
                            {t(mw.section1Body)}
                          </p>
                        </div>
                        <div>
                          <h2 {...cp('customPagesConfig.myWork.section2Title')} className="text-xl md:text-2xl font-semibold text-white mb-2">
                            {t(mw.section2Title)}
                          </h2>
                          <p {...cp('customPagesConfig.myWork.section2Body')} className="text-white/70 leading-relaxed">
                            {t(mw.section2Body)}
                          </p>
                        </div>
                        <div>
                          <h2 {...cp('customPagesConfig.myWork.section3Title')} className="text-xl md:text-2xl font-semibold text-white mb-2">
                            {t(mw.section3Title)}
                          </h2>
                          <p {...cp('customPagesConfig.myWork.section3Body')} className="text-white/70 leading-relaxed">
                            {t(mw.section3Body)}
                          </p>
                        </div>
                        <div>
                          <h2 {...cp('customPagesConfig.myWork.section4Title')} className="text-xl md:text-2xl font-semibold text-white mb-2">
                            {t(mw.section4Title)}
                          </h2>
                          <p {...cp('customPagesConfig.myWork.section4Body')} className="text-white/70 leading-relaxed">
                            {t(mw.section4Body)}
                          </p>
                        </div>
                        {t(mw.section5Title).trim() && t(mw.section5Body).trim() && (
                          <div>
                            <h2 {...cp('customPagesConfig.myWork.section5Title')} className="text-xl md:text-2xl font-semibold text-white mb-2">
                              {t(mw.section5Title)}
                            </h2>
                            <p {...cp('customPagesConfig.myWork.section5Body')} className="text-white/70 leading-relaxed">
                              {t(mw.section5Body)}
                            </p>
                          </div>
                        )}
                      </div>
                    )}

                    {standardCustomContent === 'dekapus' && (
                      <div className="space-y-6">
                        <div>
                          <h2 {...cp('customPagesConfig.dekapusMethod.section1Title')} className="text-xl md:text-2xl font-semibold text-white mb-2">
                            {t(dm.section1Title)}
                          </h2>
                          <p {...cp('customPagesConfig.dekapusMethod.section1Body')} className="text-white/70 leading-relaxed">
                            {t(dm.section1Body)}
                          </p>
                        </div>
                        <div>
                          <h2 {...cp('customPagesConfig.dekapusMethod.section2Title')} className="text-xl md:text-2xl font-semibold text-white mb-2">
                            {t(dm.section2Title)}
                          </h2>
                          <p {...cp('customPagesConfig.dekapusMethod.section2Body')} className="text-white/70 leading-relaxed">
                            {t(dm.section2Body)}
                          </p>
                        </div>
                        <div>
                          <h2 {...cp('customPagesConfig.dekapusMethod.section3Title')} className="text-xl md:text-2xl font-semibold text-white mb-2">
                            {t(dm.section3Title)}
                          </h2>
                          <p {...cp('customPagesConfig.dekapusMethod.section3Body')} className="text-white/70 leading-relaxed">
                            {t(dm.section3Body)}
                          </p>
                        </div>
                        <div>
                          <h2 {...cp('customPagesConfig.dekapusMethod.section4Title')} className="text-xl md:text-2xl font-semibold text-white mb-2">
                            {t(dm.section4Title)}
                          </h2>
                          <p {...cp('customPagesConfig.dekapusMethod.section4Body')} className="text-white/70 leading-relaxed">
                            {t(dm.section4Body)}
                          </p>
                        </div>
                        <div>
                          <h2 {...cp('customPagesConfig.dekapusMethod.section5Title')} className="text-xl md:text-2xl font-semibold text-white mb-2">
                            {t(dm.section5Title)}
                          </h2>
                          <p {...cp('customPagesConfig.dekapusMethod.section5Body')} className="text-white/70 leading-relaxed">
                            {t(dm.section5Body)}
                          </p>
                        </div>
                      </div>
                    )}

                    {isEngagementPage && (
                      <div className="space-y-8">
                        <div>
                          <h2 {...cp('customPagesConfig.engagement.introTitle')} className="text-xl md:text-2xl font-semibold text-white mb-2">
                            {t(eg.introTitle)}
                          </h2>
                          <p {...cp('customPagesConfig.engagement.intro')} className="text-white/70 leading-relaxed">
                            {t(eg.intro)}
                          </p>
                        </div>
                        <div>
                          <h2 {...cp('customPagesConfig.engagement.list1Title')} className="text-xl md:text-2xl font-semibold text-white mb-3">
                            {t(eg.list1Title)}
                          </h2>
                          <ul className="space-y-3">
                            {eg.list1Items.map((item, index) => (
                              <li
                                key={index}
                                {...cp(`customPagesConfig.engagement.list1Items.${index}`)}
                                className="rounded-md border border-white/10 bg-white/5 px-4 py-3 text-white/80 leading-relaxed"
                              >
                                {t(item)}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h2 {...cp('customPagesConfig.engagement.section2Title')} className="text-xl md:text-2xl font-semibold text-white mb-2">
                            {t(eg.section2Title)}
                          </h2>
                          <p {...cp('customPagesConfig.engagement.section2Body')} className="text-white/70 leading-relaxed mb-4">
                            {t(eg.section2Body)}
                          </p>
                          <ul className="space-y-3">
                            {eg.processItems.map((item, index) => (
                              <li key={index} className="rounded-md border border-white/10 bg-white/5 px-4 py-3">
                                <h3 {...cp(`customPagesConfig.engagement.processItems.${index}.title`)} className="text-white font-semibold mb-1">
                                  {t(item.title)}
                                </h3>
                                <p {...cp(`customPagesConfig.engagement.processItems.${index}.body`)} className="text-white/70 leading-relaxed">
                                  {t(item.body)}
                                </p>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h2 {...cp('customPagesConfig.engagement.section3Title')} className="text-xl md:text-2xl font-semibold text-white mb-2">
                            {t(eg.section3Title)}
                          </h2>
                          <p {...cp('customPagesConfig.engagement.section3Body')} className="text-white/70 leading-relaxed mb-4">
                            {t(eg.section3Body)}
                          </p>
                          <ul className="space-y-3">
                            {eg.list2Items.map((item, index) => (
                              <li
                                key={index}
                                {...cp(`customPagesConfig.engagement.list2Items.${index}`)}
                                className="rounded-md border border-white/10 bg-white/5 px-4 py-3 text-white/80 leading-relaxed"
                              >
                                {t(item)}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <p {...cp('customPagesConfig.engagement.closing')} className="text-white/80 leading-relaxed">
                          {t(eg.closing)}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </article>

              <aside className="lg:sticky lg:top-36 self-start">
                {isOfferingPage ? (
                  <div className="bg-[#1a1a1a] rounded-lg overflow-hidden hidden lg:block">
                    <img
                      src={img(offeringImageSrc)}
                      alt={t(pageTitle.title)}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ) : (
                  <div className="bg-[#1a1a1a] rounded-lg p-6">
                    <h4 {...cp('customPagesConfig.allOfferingsLabel')} className="text-2xl font-serif text-white uppercase mb-4">
                      {t(config.customPagesConfig.allOfferingsLabel)}
                    </h4>
                    <ul className="space-y-3">
                      {serviceLinks.map((serviceLink) => (
                        <li key={serviceLink.path}>
                          <Link
                            to={serviceLink.path}
                            {...cp(serviceLink.labelPath)}
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

        {isOfferingPage && (
          <section className="py-10 bg-[#141414] lg:hidden">
            <div className="container mx-auto px-4">
              <img
                src={img(offeringImageSrc)}
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
