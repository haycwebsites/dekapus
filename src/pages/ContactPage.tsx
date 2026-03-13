import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { PageBanner } from '../components/layout/PageBanner';
import { useHayc } from '../hayc/config-context';
import { Input } from '../components/ui/input';
import { Button } from '../components/ui/button';
import { Textarea } from '../components/ui/textarea';
import { MapPin, Phone, Mail } from 'lucide-react';

export function ContactPage() {
  const { t, config, cp } = useHayc();
  const phoneHref = 'tel:+306932269946';
  const emailHref = 'mailto:dpaxinos@dekapus.com.gr';

  return (
    <>
      <Header variant="inner" />
      <main>
        <PageBanner title={config.navigationConfig.contact} titlePath="navigationConfig.contact" />
        
        <section className="py-20 bg-[#141414]">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Info */}
              <div>
                <h3 {...cp('contactConfig.sectionTitle')} className="font-['Great_Vibes'] text-4xl text-[#c8a97e] mb-2">
                  {t(config.contactConfig.sectionTitle)}
                </h3>
                <h2 {...cp('contactConfig.title')} className="text-2xl md:text-3xl font-serif text-white uppercase mb-8">
                  {t(config.contactConfig.title)}
                </h2>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-full bg-[#c8a97e] flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 {...cp('contactConfig.address')} className="text-white font-semibold mb-1">{t(config.contactConfig.address)}</h4>
                      <p {...cp('contactConfig.addressValue')} className="text-white/60">{t(config.contactConfig.addressValue)}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-full bg-[#c8a97e] flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 {...cp('contactConfig.phone')} className="text-white font-semibold mb-1">{t(config.contactConfig.phone)}</h4>
                      <a href={phoneHref} {...cp('commonConfig.phoneNumber')} className="text-white/60 hover:underline">
                        {t(config.commonConfig.phoneNumber)}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-full bg-[#c8a97e] flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 {...cp('contactConfig.email')} className="text-white font-semibold mb-1">{t(config.contactConfig.email)}</h4>
                      <a href={emailHref} {...cp('contactConfig.emailValue')} className="text-white/60 hover:underline">
                        {t(config.contactConfig.emailValue)}
                      </a>
                    </div>
                  </div>
                </div>

                {/* Map placeholder */}
                <div className="mt-8 aspect-video bg-white/5 rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps?q=Athens,+Greece&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-[#1a1a1a] rounded-lg p-8">
                <h3 {...cp('contactConfig.title')} className="text-xl font-semibold text-white mb-6">{t(config.contactConfig.title)}</h3>
                
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Input 
                      type="text"
                      placeholder={t(config.contactConfig.namePlaceholder)}
                      className="h-12 bg-white/10 border-white/20 text-white placeholder:text-white/50"
                    />
                    <Input 
                      type="email"
                      placeholder={t(config.contactConfig.emailPlaceholder)}
                      className="h-12 bg-white/10 border-white/20 text-white placeholder:text-white/50"
                    />
                  </div>
                  <Input 
                    type="text"
                    placeholder={t(config.contactConfig.subjectPlaceholder)}
                    className="h-12 bg-white/10 border-white/20 text-white placeholder:text-white/50"
                  />
                  <Textarea 
                    placeholder={t(config.contactConfig.messagePlaceholder)}
                    className="min-h-40 bg-white/10 border-white/20 text-white placeholder:text-white/50 resize-none"
                  />
                  <Button 
                    type="submit"
                    className="w-full h-12 bg-[#c8a97e] hover:bg-[#b89a6f] text-white"
                  >
                    <span {...cp('contactConfig.sendMessage')}>{t(config.contactConfig.sendMessage)}</span>
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
