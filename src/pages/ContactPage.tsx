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
        
        <section className="py-20 bg-black">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Info */}
              <div>
                <h3 {...cp('contactConfig.sectionTitle')} className="font-['Great_Vibes'] text-4xl text-[#c8a97e] mb-2">
                  {t(config.contactConfig.sectionTitle)}
                </h3>

                <div className="mb-8 border-l border-white pl-6 md:pl-8 py-1">
                  <p {...cp('contactConfig.introLine')} className="text-white/80 leading-relaxed mb-4">
                    {t(config.contactConfig.introLine)}
                  </p>
                  <ul className="space-y-2 mb-4">
                    <li {...cp('contactConfig.introItem1')} className="text-white/70 leading-relaxed">
                      {t(config.contactConfig.introItem1)}
                    </li>
                    <li {...cp('contactConfig.introItem2')} className="text-white/70 leading-relaxed">
                      {t(config.contactConfig.introItem2)}
                    </li>
                    <li {...cp('contactConfig.introItem3')} className="text-white/70 leading-relaxed">
                      {t(config.contactConfig.introItem3)}
                    </li>
                  </ul>
                  <p {...cp('contactConfig.closingWhisper')} className="text-white/80 italic leading-relaxed">
                    {t(config.contactConfig.closingWhisper)}
                  </p>
                </div>

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
                <p {...cp('contactConfig.preBulletsLine')} className="mt-4 text-white/80 italic leading-relaxed">
                  {t(config.contactConfig.preBulletsLine)}
                </p>
              </div>

              {/* Contact Form */}
              <div className="border-l border-white pl-6 md:pl-8 py-2">
                <h3 {...cp('contactConfig.title')} className="text-xl font-semibold text-white mb-6">{t(config.contactConfig.title)}</h3>
                
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Input 
                      type="text"
                      placeholder={t(config.contactConfig.namePlaceholder)}
                      {...cp('contactConfig.namePlaceholder')}
                      className="h-12 bg-white/10 border-white/20 text-white placeholder:text-white/50"
                    />
                    <Input 
                      type="email"
                      placeholder={t(config.contactConfig.emailPlaceholder)}
                      {...cp('contactConfig.emailPlaceholder')}
                      className="h-12 bg-white/10 border-white/20 text-white placeholder:text-white/50"
                    />
                  </div>
                  <Input 
                    type="text"
                    placeholder={t(config.contactConfig.subjectPlaceholder)}
                    {...cp('contactConfig.subjectPlaceholder')}
                    className="h-12 bg-white/10 border-white/20 text-white placeholder:text-white/50"
                  />
                  <Textarea 
                    placeholder={t(config.contactConfig.messagePlaceholder)}
                    {...cp('contactConfig.messagePlaceholder')}
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
