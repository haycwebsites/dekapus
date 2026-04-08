import { useState } from 'react';
import { useHayc } from '../../hayc/config-context';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { subscribeContactToHaycList } from '../../lib/hayc-newsletter';

export function Newsletter() {
  const { t, img, config, cp } = useHayc();
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    const trimmedEmail = email.trim();
    if (!trimmedEmail || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) {
      setError('Please enter a valid email.');
      return;
    }

    setLoading(true);
    try {
      await subscribeContactToHaycList({
        email: trimmedEmail,
        subscribed: true,
        tags: ['Newsletter', 'Newsletter Form'],
      });
      setSubmitted(true);
      setEmail('');
    } catch {
      setError('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section 
      className="py-16 bg-cover bg-center relative"
      style={{ backgroundImage: `url(${img(config.newsletterConfig.backgroundImage)})` }}
    >
      <div className="absolute inset-0 bg-[#c8a97e]/90" />
      
      <div className="relative container mx-auto px-4 text-center">
        <h3 {...cp('newsletterConfig.title')} className="font-['Great_Vibes'] text-4xl text-white mb-2">
          {t(config.newsletterConfig.title)}
        </h3>
        <p {...cp('newsletterConfig.description')} className="text-white/90 mb-8 max-w-xl mx-auto">
          {t(config.newsletterConfig.description)}
        </p>
        
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
          <Input 
            type="email"
            placeholder={t(config.newsletterConfig.placeholder)}
            {...cp('newsletterConfig.placeholder')}
            className="flex-grow bg-white border-0 h-12 text-gray-800"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={loading || submitted}
          />
          <Button 
            type="submit"
            className="bg-black hover:opacity-90 text-white h-12 px-8"
            disabled={loading || submitted}
          >
            <span {...cp('commonConfig.signUp')}>
              {submitted ? 'Subscribed' : loading ? 'Submitting...' : t(config.commonConfig.signUp)}
            </span>
          </Button>
        </form>
        {error ? <p className="mt-3 text-sm text-red-100">{error}</p> : null}
        {submitted ? <p className="mt-3 text-sm text-white/90">Thank you for subscribing.</p> : null}
      </div>
    </section>
  );
}
