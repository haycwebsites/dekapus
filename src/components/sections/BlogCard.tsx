import { Link } from 'react-router-dom';
import { Clock, MapPin } from 'lucide-react';
import { useHayc } from '../../hayc/config-context';

export function BlogSection() {
  const { t, img, config, cp } = useHayc();

  return (
    <section className="py-20 bg-[#141414]">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h3 {...cp('blogConfig.sectionTitle')} className="font-['Great_Vibes'] text-4xl text-[#c8a97e] mb-2">
            {t(config.blogConfig.sectionTitle)}
          </h3>
          <h2 {...cp('blogConfig.title')} className="text-2xl md:text-3xl font-serif text-white uppercase">
            {t(config.blogConfig.title)}
          </h2>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {config.blogConfig.items.map((post, index) => (
            <article key={post.id} className="bg-[#1a1a1a] rounded-lg overflow-hidden group">
              <Link to={`/blog/${post.slug}`} className="block relative overflow-hidden">
                <img 
                  src={img(post.image)} 
                  alt={t(post.title)}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
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
                    <span {...cp('blogConfig.posted')}>{t(config.blogConfig.posted)}</span> 2016, 10:23 am
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    121th Street, Sidney VIC 3000
                  </span>
                </div>
                <p {...cp(`blogConfig.items.${index}.excerpt`)} className="text-white/60 text-sm mb-4 line-clamp-3">
                  {t(post.excerpt)}
                </p>
                <Link 
                  to={`/blog/${post.slug}`}
                  className="text-[#c8a97e] hover:text-white transition-colors text-sm font-medium"
                >
                  <span {...cp('commonConfig.readMore')}>{t(config.commonConfig.readMore)}</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
