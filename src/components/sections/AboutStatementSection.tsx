import { useHayc } from '../../hayc/config-context';

export function AboutStatementSection() {
  const { t, img, cp, config } = useHayc();
  const c = config.aboutStatementConfig;

  if (!c.backgroundImage) return null;

  return (
    <section
      className="on-dark-image-section py-24 lg:py-32 bg-cover bg-center relative"
      style={{ backgroundImage: `url(${img(c.backgroundImage)})` }}
    >
      <div className="absolute inset-0 bg-black/75" />
      <div className="relative container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl border-l border-white pl-6 md:pl-8">
          <h2 {...cp('aboutStatementConfig.title')} className="font-serif text-3xl md:text-4xl font-semibold text-white mb-10">
            {t(c.title)}
          </h2>
          <div className="space-y-6 font-serif text-white/90 text-base md:text-lg leading-relaxed">
            <p {...cp('aboutStatementConfig.paragraph1')}>{t(c.paragraph1)}</p>
            <p {...cp('aboutStatementConfig.paragraph2')}>{t(c.paragraph2)}</p>
            <p {...cp('aboutStatementConfig.paragraph3')}>{t(c.paragraph3)}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
