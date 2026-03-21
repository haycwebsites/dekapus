import { useHayc } from '../../hayc/config-context';

export function AboutStatementSection() {
  const { t, img, cp, config } = useHayc();
  const c = config.aboutStatementConfig;

  if (!c.backgroundImage) return null;

  return (
    <section
      className="on-dark-image-section py-20 bg-cover bg-center bg-fixed relative"
      style={{ backgroundImage: `url(${img(c.backgroundImage)})` }}
    >
      <div className="absolute inset-0 bg-black/70" />
      <div className="relative container mx-auto px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h3
            {...cp('aboutStatementConfig.sectionTitle')}
            className="font-['Great_Vibes'] text-4xl text-[#c8a97e] mb-2"
          >
            {t(c.sectionTitle)}
          </h3>
          <h2
            {...cp('aboutStatementConfig.headline')}
            className="text-2xl md:text-3xl font-serif text-white mb-8"
          >
            {t(c.headline)}
          </h2>

          <p
            {...cp('aboutStatementConfig.paragraph1')}
            className="text-white/80 leading-relaxed mb-4"
          >
            {t(c.paragraph1)}
          </p>
          <p
            {...cp('aboutStatementConfig.paragraph2')}
            className="text-white/80 leading-relaxed"
          >
            {t(c.paragraph2)}
          </p>
        </div>
      </div>
    </section>
  );
}
