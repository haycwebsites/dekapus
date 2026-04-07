import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { PageBanner } from '../components/layout/PageBanner';
import { useHayc } from '../hayc/config-context';
import { Input } from '../components/ui/input';
import { Button } from '../components/ui/button';
import { Textarea } from '../components/ui/textarea';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export function ContactPage2() {
  const { t, config, cp } = useHayc();
  const phoneHref = 'tel:+306932269946';
  const emailHref = 'mailto:dpaxinos@dekapus.com.gr';

  return (
    <>
      <Header variant="inner" />
      <main>
        <PageBanner title={config.navigationConfig.contact} titlePath="navigationConfig.contact" />
        
        {/* Full Width Map */}
        <div className="h-96 bg-black border-b border-white/10">
          <iframe
            src={config.contactConfig.mapEmbedUrl}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        <section className="py-20 bg-black">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {/* Address */}
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-[#c8a97e] flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-7 h-7 text-white" />
                </div>
                <h4 {...cp('contactConfig.address')} className="text-white font-semibold mb-2">{t(config.contactConfig.address)}</h4>
                <p {...cp('contactConfig.addressValue')} className="text-white/60 text-sm">{t(config.contactConfig.addressValue)}</p>
              </div>

              {/* Phone */}
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-[#c8a97e] flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-7 h-7 text-white" />
                </div>
                <h4 {...cp('contactConfig.phone')} className="text-white font-semibold mb-2">{t(config.contactConfig.phone)}</h4>
                <a href={phoneHref} {...cp('commonConfig.phoneNumber')} className="text-white/60 text-sm hover:underline">
                  {t(config.commonConfig.phoneNumber)}
                </a>
              </div>

              {/* Email */}
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-[#c8a97e] flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-7 h-7 text-white" />
                </div>
                <h4 {...cp('contactConfig.email')} className="text-white font-semibold mb-2">{t(config.contactConfig.email)}</h4>
                <a href={emailHref} {...cp('contactConfig.emailValue')} className="text-white/60 text-sm hover:underline">
                  {t(config.contactConfig.emailValue)}
                </a>
              </div>

              {/* Working Hours */}
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-[#c8a97e] flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-7 h-7 text-white" />
                </div>
                <h4 {...cp('contactConfig.workingHours')} className="text-white font-semibold mb-2">{t(config.contactConfig.workingHours)}</h4>
                <p {...cp('contactConfig.workingHoursValue')} className="text-white/60 text-sm">{t(config.contactConfig.workingHoursValue)}</p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="max-w-2xl mx-auto border-l border-white pl-6 md:pl-10 py-2">
              <div className="text-center mb-8 md:text-left">
                <h3 {...cp('contactConfig.sectionTitle')} className="font-['Great_Vibes'] text-4xl text-[#c8a97e] mb-2">
                  {t(config.contactConfig.sectionTitle)}
                </h3>
                <h2 {...cp('contactConfig.title')} className="text-2xl md:text-3xl font-serif text-white uppercase">
                  {t(config.contactConfig.title)}
                </h2>
              </div>

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
                <div className="text-center">
                  <Button 
                    type="submit"
                    size="lg"
                    className="px-12 h-12 bg-[#c8a97e] hover:bg-[#b89a6f] text-white"
                  >
                    <span {...cp('contactConfig.sendMessage')}>{t(config.contactConfig.sendMessage)}</span>
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
