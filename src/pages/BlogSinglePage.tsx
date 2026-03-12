import { Link, useParams } from 'react-router-dom';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { PageBanner } from '../components/layout/PageBanner';
import { useHayc } from '../hayc/config-context';
import { Input } from '../components/ui/input';
import { Button } from '../components/ui/button';
import { Textarea } from '../components/ui/textarea';
import { User, MessageCircle, Tag, Search, Calendar, Facebook, Twitter, Linkedin } from 'lucide-react';

export function BlogSinglePage() {
  const { t, img, config, cp } = useHayc();
  const { slug } = useParams();
  
  const post = config.blogConfig.items.find(p => p.slug === slug) || config.blogConfig.items[0];
  const postIndex = config.blogConfig.items.findIndex(p => p.slug === slug) || 0;
  const recentPosts = config.blogConfig.items.filter(p => p.id !== post.id).slice(0, 3);

  const categories = [
    { name: 'Restaurant', count: 12 },
    { name: 'Food & Drinks', count: 8 },
    { name: 'Events', count: 5 },
    { name: 'Recipes', count: 15 },
    { name: 'News', count: 7 },
  ];

  return (
    <>
      <Header variant="inner" />
      <main>
        <PageBanner title={config.navigationConfig.blogPost} titlePath="navigationConfig.blogPost" />
        
        <section className="py-20 bg-[#141414]">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Main Content */}
              <article className="lg:col-span-2">
                <div className="bg-[#1a1a1a] rounded-lg overflow-hidden">
                  <img 
                    src={img(post.image)} 
                    alt={t(post.title)}
                    className="w-full h-96 object-cover"
                  />
                  <div className="p-8">
                    <div className="flex items-center gap-4 text-white/50 text-sm mb-4">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {t(post.date)}
                      </span>
                      <span className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        Admin
                      </span>
                      <span className="flex items-center gap-1">
                        <MessageCircle className="w-4 h-4" />
                        5 Comments
                      </span>
                    </div>
                    
                    <h1 {...cp(`blogConfig.items.${postIndex}.title`)} className="text-2xl md:text-3xl font-semibold text-white mb-6">
                      {t(post.title)}
                    </h1>
                    
                    <div className="prose prose-invert max-w-none">
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

                    {/* Tags & Share */}
                    <div className="flex flex-wrap items-center justify-between gap-4 mt-8 pt-8 border-t border-white/10">
                      <div className="flex items-center gap-2">
                        <Tag className="w-4 h-4 text-[#c8a97e]" />
                        <span className="text-white/50 text-sm">Tags:</span>
                        <a href="#" className="text-white/70 hover:text-[#c8a97e] text-sm">Restaurant,</a>
                        <a href="#" className="text-white/70 hover:text-[#c8a97e] text-sm">Food,</a>
                        <a href="#" className="text-white/70 hover:text-[#c8a97e] text-sm">Events</a>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-white/50 text-sm">Share:</span>
                        <a href="#" className="text-white/50 hover:text-[#c8a97e]"><Facebook className="w-4 h-4" /></a>
                        <a href="#" className="text-white/50 hover:text-[#c8a97e]"><Twitter className="w-4 h-4" /></a>
                        <a href="#" className="text-white/50 hover:text-[#c8a97e]"><Linkedin className="w-4 h-4" /></a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Author Box */}
                <div className="bg-[#1a1a1a] rounded-lg p-6 mt-8 flex gap-6">
                  <img 
                    src="/images/about-author.jpg" 
                    alt="Author"
                    className="w-24 h-24 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="text-white font-semibold mb-2">About Author</h4>
                    <p className="text-white/60 text-sm">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                  </div>
                </div>

                {/* Comments Section */}
                <div className="mt-8">
                  <h3 className="text-xl font-semibold text-white mb-6">Leave a Comment</h3>
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <Input 
                        type="text"
                        placeholder="Your Name"
                        className="h-12 bg-white/10 border-white/20 text-white placeholder:text-white/50"
                      />
                      <Input 
                        type="email"
                        placeholder="Your Email"
                        className="h-12 bg-white/10 border-white/20 text-white placeholder:text-white/50"
                      />
                    </div>
                    <Textarea 
                      placeholder="Your Comment"
                      className="min-h-40 bg-white/10 border-white/20 text-white placeholder:text-white/50 resize-none"
                    />
                    <Button 
                      type="submit"
                      className="bg-[#c8a97e] hover:bg-[#b89a6f] text-white px-8"
                    >
                      Post Comment
                    </Button>
                  </form>
                </div>
              </article>

              {/* Sidebar */}
              <aside className="space-y-8">
                {/* Search */}
                <div className="bg-[#1a1a1a] rounded-lg p-6">
                  <h4 {...cp('navigationConfig.search')} className="text-white font-semibold mb-4">{t(config.navigationConfig.search)}</h4>
                  <div className="flex gap-2">
                    <Input 
                      type="text"
                      placeholder={t(config.navigationConfig.search)}
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                    />
                    <Button className="bg-[#c8a97e] hover:bg-[#b89a6f]">
                      <Search className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                {/* Categories */}
                <div className="bg-[#1a1a1a] rounded-lg p-6">
                  <h4 className="text-white font-semibold mb-4">Categories</h4>
                  <ul className="space-y-3">
                    {categories.map((cat, index) => (
                      <li key={index}>
                        <a 
                          href="#"
                          className="flex items-center justify-between text-white/70 hover:text-[#c8a97e] transition-colors"
                        >
                          <span>{cat.name}</span>
                          <span className="text-white/40">({cat.count})</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Recent Posts */}
                <div className="bg-[#1a1a1a] rounded-lg p-6">
                  <h4 className="text-white font-semibold mb-4">Recent Posts</h4>
                  <div className="space-y-4">
                    {recentPosts.map((recentPost) => (
                      <Link 
                        key={recentPost.id}
                        to={`/blog/${recentPost.slug}`}
                        className="flex gap-3 group"
                      >
                        <img 
                          src={img(recentPost.image)} 
                          alt={t(recentPost.title)}
                          className="w-16 h-16 rounded object-cover flex-shrink-0"
                        />
                        <div>
                          <h5 className="text-white text-sm group-hover:text-[#c8a97e] transition-colors line-clamp-2">
                            {t(recentPost.title)}
                          </h5>
                          <span className="text-white/50 text-xs flex items-center gap-1 mt-1">
                            <Calendar className="w-3 h-3" />
                            {t(recentPost.date)}
                          </span>
                        </div>
                      </Link>
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
