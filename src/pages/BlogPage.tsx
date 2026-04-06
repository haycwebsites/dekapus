import { Link } from 'react-router-dom';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { PageBanner } from '../components/layout/PageBanner';
import { useHayc } from '../hayc/config-context';
import { Input } from '../components/ui/input';
import { Button } from '../components/ui/button';
import { Clock, MapPin, Search, Calendar } from 'lucide-react';

export function BlogPage() {
  const { t, img, config, cp } = useHayc();

  const recentPosts = config.blogConfig.items.slice(0, 3);
  const listing = config.blogListingConfig;

  return (
    <>
      <Header variant="inner" />
      <main>
        <PageBanner title={config.navigationConfig.blog} titlePath="navigationConfig.blog" />

        <section className="py-20 bg-[#141414]">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                <div className="space-y-8">
                  {config.blogConfig.items.map((post, index) => (
                    <article key={post.id} className="bg-[#1a1a1a] rounded-lg overflow-hidden group">
                      <Link to={`/blog/${post.slug}`} className="block relative overflow-hidden">
                        <img
                          src={img(post.image)}
                          alt={t(post.title)}
                          className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </Link>
                      <div className="p-6">
                        <div className="flex items-center gap-2 mb-4">
                          <span className="bg-[#c8a97e] text-white px-4 py-2 text-center">
                            <span {...cp(`blogConfig.items.${index}.date`)} className="block text-2xl font-bold leading-none">{t(post.date).split(' ')[0]}</span>
                            <span className="block text-xs uppercase">{t(post.date).split(' ')[1]}</span>
                          </span>
                        </div>
                        <Link to={`/blog/${post.slug}`}>
                          <h3 {...cp(`blogConfig.items.${index}.title`)} className="text-xl font-semibold text-white mb-3 hover:text-[#c8a97e] transition-colors">
                            {t(post.title)}
                          </h3>
                        </Link>
                        <div className="flex items-center gap-4 text-white/50 text-sm mb-4">
                          <span className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            <span {...cp('blogConfig.posted')}>{t(config.blogConfig.posted)}</span>{' '}
                            <span {...cp('blogListingConfig.samplePostTimeSuffix')}>{t(listing.samplePostTimeSuffix)}</span>
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            <span {...cp('blogListingConfig.sampleLocation')}>{t(listing.sampleLocation)}</span>
                          </span>
                        </div>
                        <p {...cp(`blogConfig.items.${index}.excerpt`)} className="text-white/60 text-sm mb-4">
                          {t(post.excerpt)}
                        </p>
                        <Link
                          to={`/blog/${post.slug}`}
                          className="inline-block px-6 py-2 border border-[#c8a97e] text-[#c8a97e] hover:bg-[#c8a97e] hover:text-white transition-colors text-sm font-medium rounded"
                        >
                          <span {...cp('commonConfig.readMore')}>{t(config.commonConfig.readMore)}</span>
                        </Link>
                      </div>
                    </article>
                  ))}
                </div>
              </div>

              <aside className="space-y-8">
                <div className="bg-[#1a1a1a] rounded-lg p-6">
                  <h4 {...cp('navigationConfig.search')} className="text-white font-semibold mb-4">{t(config.navigationConfig.search)}</h4>
                  <div className="flex gap-2">
                    <Input
                      type="text"
                      placeholder={t(config.navigationConfig.search)}
                      {...cp('navigationConfig.search')}
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                    />
                    <Button className="bg-[#c8a97e] hover:bg-[#b89a6f]">
                      <Search className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                <div className="bg-[#1a1a1a] rounded-lg p-6">
                  <h4 {...cp('blogListingConfig.categoriesTitle')} className="text-white font-semibold mb-4">
                    {t(listing.categoriesTitle)}
                  </h4>
                  <ul className="space-y-3">
                    {listing.categories.map((cat, index) => (
                      <li key={index}>
                        <a
                          href="#"
                          className="flex items-center justify-between text-white/70 hover:text-[#c8a97e] transition-colors"
                        >
                          <span {...cp(`blogListingConfig.categories.${index}.name`)}>{t(cat.name)}</span>
                          <span className="text-white/40">({cat.count})</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-[#1a1a1a] rounded-lg p-6">
                  <h4 {...cp('blogListingConfig.recentPostsTitle')} className="text-white font-semibold mb-4">
                    {t(listing.recentPostsTitle)}
                  </h4>
                  <div className="space-y-4">
                    {recentPosts.map((post) => {
                      const pi = config.blogConfig.items.findIndex((p) => p.id === post.id);
                      return (
                      <Link
                        key={post.id}
                        to={`/blog/${post.slug}`}
                        className="flex gap-3 group"
                      >
                        <img
                          src={img(post.image)}
                          alt={t(post.title)}
                          className="w-16 h-16 rounded object-cover flex-shrink-0"
                        />
                        <div>
                          <h5 {...cp(`blogConfig.items.${pi}.title`)} className="text-white text-sm group-hover:text-[#c8a97e] transition-colors line-clamp-2">
                            {t(post.title)}
                          </h5>
                          <span {...cp(`blogConfig.items.${pi}.date`)} className="text-white/50 text-xs flex items-center gap-1 mt-1">
                            <Calendar className="w-3 h-3" />
                            {t(post.date)}
                          </span>
                        </div>
                      </Link>
                      );
                    })}
                  </div>
                </div>

                <div className="bg-[#1a1a1a] rounded-lg p-6">
                  <h4 {...cp('blogListingConfig.tagsTitle')} className="text-white font-semibold mb-4">
                    {t(listing.tagsTitle)}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {listing.tags.map((tag, index) => (
                      <a
                        key={index}
                        href="#"
                        {...cp(`blogListingConfig.tags.${index}`)}
                        className="px-3 py-1 bg-white/10 text-white/70 text-sm rounded hover:bg-[#c8a97e] hover:text-white transition-colors"
                      >
                        {t(tag)}
                      </a>
                    ))}
                  </div>
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
