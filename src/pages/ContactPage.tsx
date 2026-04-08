import { useCallback, useState } from 'react';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { PageBanner } from '../components/layout/PageBanner';
import { useHayc } from '../hayc/config-context';
import { Input } from '../components/ui/input';
import { Button } from '../components/ui/button';
import { Textarea } from '../components/ui/textarea';
import { MapPin, Phone, Mail } from 'lucide-react';
import { hasNewsletterSourceTag, subscribeContactToHaycList } from '../lib/hayc-newsletter';

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function ContactPage() {
  const { t, config, cp } = useHayc();
  const phoneHref = 'tel:+306932269946';
  const emailHref = 'mailto:dpaxinos@dekapus.com.gr';
  const siteId = config.siteConfig.siteId;
  const apiUrl = config.siteConfig.apiUrl;

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [subscribeToNewsletter, setSubscribeToNewsletter] = useState(false);
  const [hp, setHp] = useState('');
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<{
    name?: string;
    email?: string;
    message?: string;
  }>({});

  const validate = useCallback((): boolean => {
    const errors: { name?: string; email?: string; message?: string } = {};
    if (!name.trim()) errors.name = t(config.contactFormConfig.nameRequired);
    if (!EMAIL_PATTERN.test(email.trim())) errors.email = t(config.contactFormConfig.emailInvalid);
    if (!message.trim()) errors.message = t(config.contactFormConfig.messageRequired);
    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  }, [name, email, message, t, config.contactFormConfig]);

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      setError(null);
      if (!validate()) return;

      if (!apiUrl || !siteId) {
        setError(t(config.contactFormConfig.errorText));
        return;
      }

      setLoading(true);
      try {
        const mergedMessage = subject.trim()
          ? `Subject: ${subject.trim()}\n\n${message.trim()}`
          : message.trim();

        const res = await fetch(`${apiUrl}/public/contact`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            siteId,
            name: name.trim(),
            email: email.trim(),
            message: mergedMessage,
            _hp: hp,
          }),
        });
        if (!res.ok) throw new Error('Request failed');

        const trimmedName = name.trim();
        const nameParts = trimmedName.split(/\s+/).filter(Boolean);
        const firstName = nameParts.shift() || '';
        const lastName = nameParts.join(' ');
        const tags = ['Contact Form'];
        if (hasNewsletterSourceTag()) tags.push('From Newsletter');

        // Keep parity with previous WP behavior: all contacts are synced,
        // checkbox only controls subscription status.
        await subscribeContactToHaycList({
          email: email.trim(),
          firstName,
          lastName,
          subscribed: subscribeToNewsletter,
          tags,
        });

        setSubmitted(true);
      } catch {
        setError(t(config.contactFormConfig.errorText));
      } finally {
        setLoading(false);
      }
    },
    [
      apiUrl,
      siteId,
      name,
      email,
      subject,
      message,
      hp,
      subscribeToNewsletter,
      validate,
      t,
      config.contactFormConfig,
    ]
  );

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
                  <p {...cp('contactConfig.introLine')} className="text-white/80 leading-relaxed mb-3">
                    {t(config.contactConfig.introLine)}
                  </p>
                  <p {...cp('contactConfig.introItem1')} className="text-white/70 leading-relaxed mb-3">
                    {t(config.contactConfig.introItem1)}
                  </p>
                  <p {...cp('contactConfig.introItem2')} className="text-white/80 italic leading-relaxed">
                    {t(config.contactConfig.introItem2)}
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
              </div>

              {/* Contact Form */}
              <div className="border-white pl-6 md:pl-8 py-2">
                <h3 {...cp('contactConfig.title')} className="text-xl font-semibold text-white mb-6">{t(config.contactConfig.title)}</h3>

                {submitted ? (
                  <div className="text-center border-l border-white pl-4">
                    <h4 {...cp('contactFormConfig.successTitle')} className="text-white text-lg font-semibold mb-2">
                      {t(config.contactFormConfig.successTitle)}
                    </h4>
                    <p {...cp('contactFormConfig.successText')} className="text-white/70">
                      {t(config.contactFormConfig.successText)}
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                    <input
                      type="text"
                      name="_hp"
                      value={hp}
                      onChange={(e) => setHp(e.target.value)}
                      autoComplete="off"
                      tabIndex={-1}
                      style={{ display: 'none' }}
                      aria-hidden
                    />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Input
                          type="text"
                          placeholder={t(config.contactConfig.namePlaceholder)}
                          {...cp('contactConfig.namePlaceholder')}
                          className="h-12 bg-white/10 border-white/20 text-white placeholder:text-white/50"
                          value={name}
                          onChange={(e) => {
                            setName(e.target.value);
                            if (fieldErrors.name) setFieldErrors((prev) => ({ ...prev, name: undefined }));
                          }}
                          disabled={loading}
                          aria-invalid={!!fieldErrors.name}
                        />
                        {fieldErrors.name ? (
                          <p className="text-red-400 text-sm mt-2" {...cp('contactFormConfig.nameRequired')}>
                            {fieldErrors.name}
                          </p>
                        ) : null}
                      </div>
                      <div>
                        <Input
                          type="email"
                          placeholder={t(config.contactConfig.emailPlaceholder)}
                          {...cp('contactConfig.emailPlaceholder')}
                          className="h-12 bg-white/10 border-white/20 text-white placeholder:text-white/50"
                          value={email}
                          onChange={(e) => {
                            setEmail(e.target.value);
                            if (fieldErrors.email) setFieldErrors((prev) => ({ ...prev, email: undefined }));
                          }}
                          disabled={loading}
                          aria-invalid={!!fieldErrors.email}
                        />
                        {fieldErrors.email ? (
                          <p className="text-red-400 text-sm mt-2" {...cp('contactFormConfig.emailInvalid')}>
                            {fieldErrors.email}
                          </p>
                        ) : null}
                      </div>
                    </div>
                    <Input
                      type="text"
                      placeholder={t(config.contactConfig.subjectPlaceholder)}
                      {...cp('contactConfig.subjectPlaceholder')}
                      className="h-12 bg-white/10 border-white/20 text-white placeholder:text-white/50"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      disabled={loading}
                    />
                    <div>
                      <Textarea
                        placeholder={t(config.contactConfig.messagePlaceholder)}
                        {...cp('contactConfig.messagePlaceholder')}
                        className="min-h-40 bg-white/10 border-white/20 text-white placeholder:text-white/50 resize-none"
                        value={message}
                        onChange={(e) => {
                          setMessage(e.target.value);
                          if (fieldErrors.message) setFieldErrors((prev) => ({ ...prev, message: undefined }));
                        }}
                        disabled={loading}
                        aria-invalid={!!fieldErrors.message}
                      />
                      {fieldErrors.message ? (
                        <p className="text-red-400 text-sm mt-2" {...cp('contactFormConfig.messageRequired')}>
                          {fieldErrors.message}
                        </p>
                      ) : null}
                    </div>
                    <label className="flex items-start gap-3 text-sm text-white/80">
                      <input
                        type="checkbox"
                        className="mt-1 h-4 w-4 rounded border-white/40 bg-transparent"
                        checked={subscribeToNewsletter}
                        onChange={(e) => setSubscribeToNewsletter(e.target.checked)}
                        disabled={loading}
                      />
                      <span>Subscribe me to the newsletter for updates.</span>
                    </label>
                    <Button
                      type="submit"
                      className="w-full h-12 bg-[#c8a97e] hover:bg-[#b89a6f] text-white"
                      disabled={loading}
                      {...(loading ? cp('contactFormConfig.submitting') : cp('contactConfig.sendMessage'))}
                    >
                      <span>
                        {loading ? t(config.contactFormConfig.submitting) : t(config.contactConfig.sendMessage)}
                      </span>
                    </Button>
                    {error ? (
                      <p className="text-red-400 text-sm" role="alert" {...cp('contactFormConfig.errorText')}>
                        {error}
                      </p>
                    ) : null}
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
