import { useHayc } from '../../hayc/config-context';

export function HomeWhatWeDoSection() {
  const { t, img, config, cp } = useHayc();
  const c = config.homeWhatWeDoConfig;

  return (
    <section className="py-20 bg-[#141414]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <img
              {...cp('homeWhatWeDoConfig.sectionImage')}
              src={img(c.sectionImage)}
              alt={t(c.imageAlt)}
              className="w-full rounded-lg object-cover"
            />
          </div>

          <div className="order-1 lg:order-2">
            <div className="mb-8">
              <h3
                {...cp('homeWhatWeDoConfig.sectionTitle')}
                className="font-['Great_Vibes'] text-4xl text-[#c8a97e] mb-6"
              >
                {t(c.sectionTitle)}
              </h3>
              <p {...cp('homeWhatWeDoConfig.intro')} className="text-white/80 leading-relaxed mb-6">
                {t(c.intro)}
              </p>
              <ul className="space-y-4">
                {c.items.map((item, index) => (
                  <li
                    key={index}
                    {...cp(`homeWhatWeDoConfig.items.${index}`)}
                    className="flex gap-3 text-white/70 leading-relaxed"
                  >
                    <span className="text-[#c8a97e] flex-shrink-0 mt-0.5" aria-hidden>
                      ·
                    </span>
                    <span>{t(item)}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
