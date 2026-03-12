import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { PageBanner } from '../components/layout/PageBanner';
import { BookTableSection } from '../components/sections/BookTableSection';
import { useHayc } from '../hayc/config-context';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';

export function MenuPage() {
  const { t, img, config, cp } = useHayc();

  const categories = [
    { key: 'breakfast', label: config.menuConfig.breakfast, title: config.menuConfig.breakfastTitle },
    { key: 'warm', label: config.menuConfig.warmDishes, title: config.menuConfig.warmDishesTitle },
    { key: 'dinner', label: config.menuConfig.dinner, title: config.menuConfig.dinnerTitle },
  ];

  return (
    <>
      <Header variant="inner" />
      <main>
        <PageBanner title={config.navigationConfig.menu} titlePath="navigationConfig.menu" />
        
        <section className="py-20 bg-[#141414]">
          <div className="container mx-auto px-4">
            <Tabs defaultValue="breakfast" className="w-full">
              <TabsList className="flex justify-center gap-4 mb-12 bg-transparent">
                {categories.map((cat) => (
                  <TabsTrigger 
                    key={cat.key}
                    value={cat.key}
                    className="px-8 py-3 text-sm font-medium uppercase tracking-wider bg-white/10 text-white/70 data-[state=active]:bg-[#c8a97e] data-[state=active]:text-white rounded-full"
                  >
                    {t(cat.label)}
                  </TabsTrigger>
                ))}
              </TabsList>

              {categories.map((cat) => (
                <TabsContent key={cat.key} value={cat.key}>
                  {/* Section Header */}
                  <div className="text-center mb-12">
                    <h3 className="font-['Great_Vibes'] text-4xl text-[#c8a97e] mb-2">
                      {t(cat.title)}
                    </h3>
                    <h2 className="text-2xl md:text-3xl font-serif text-white uppercase">
                      {t(cat.label)}
                    </h2>
                  </div>

                  {/* Menu Items Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {config.menuConfig.items
                      .filter(item => item.category === cat.key)
                      .map((item, index) => (
                        <div 
                          key={index} 
                          className="flex items-center gap-4 p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
                        >
                          <img 
                            src={img(item.image)} 
                            alt={t(item.name)}
                            className="w-20 h-20 rounded-full object-cover flex-shrink-0"
                          />
                          <div className="flex-grow min-w-0">
                            <div className="flex items-start justify-between gap-2">
                              <div>
                                <h4 {...cp(`menuConfig.items.${index}.name`)} className="text-white font-medium uppercase text-sm">
                                  {t(item.name)}
                                </h4>
                                <p {...cp(`menuConfig.items.${index}.description`)} className="text-white/50 text-xs mt-1">
                                  {t(item.description)}
                                </p>
                              </div>
                              <span className="text-[#c8a97e] font-bold text-lg flex-shrink-0">
                                <sup className="text-sm">$</sup>{item.price}
                              </span>
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </section>

        <BookTableSection />
      </main>
      <Footer />
    </>
  );
}
