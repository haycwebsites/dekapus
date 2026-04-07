import { Link } from 'react-router-dom';
import { useHayc } from '../../hayc/config-context';

export function AboutClosingSection() {
  const { t, cp, config } = useHayc();
  const c = config.aboutClosingConfig;

  return (
    <section className="py-24 lg:py-32 bg-black">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl border-l border-white pl-6 md:pl-8">
          <p {...cp('aboutClosingConfig.leadBold')} className="font-serif text-lg md:text-xl font-semibold text-white leading-relaxed mb-8">
            {t(c.leadBold)}
          </p>
          <Link
            to="/contact"
            {...cp('aboutClosingConfig.body')}
            className="block font-serif text-base md:text-lg text-white/90 leading-relaxed hover:text-white transition-colors underline underline-offset-4 decoration-white/40 hover:decoration-white/80"
          >
            {t(c.body)}
          </Link>
        </div>
      </div>
    </section>
  );
}
