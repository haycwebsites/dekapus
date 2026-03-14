import { useHayc } from '../../hayc/config-context';

export function AboutStatementSection() {
  const { img } = useHayc();

  return (
    <section
      className="on-dark-image-section py-20 bg-cover bg-center bg-fixed relative"
      style={{ backgroundImage: `url(${img('/images/engagement-section.jpg')})` }}
    >
      <div className="absolute inset-0 bg-black/70" />
      <div className="relative container mx-auto px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h3 className="font-['Great_Vibes'] text-4xl text-[#c8a97e] mb-2">
            This is not consulting.
          </h3>
          <h2 className="text-2xl md:text-3xl font-serif text-white mb-8">
            It is the ability to read a space, sense pressure before it escalates, and restore balance before systems break.
          </h2>

          <p className="text-white/80 leading-relaxed mb-4">
            I am invited when something feels off but cannot be named. When teams are competent yet strained. When concepts are correct yet no longer alive.
          </p>
          <p className="text-white/80 leading-relaxed">
            My work happens quietly, inside the rhythm of the operation. Not through frameworks or reports, but through presence, adjustment, and precise intervention.
          </p>
        </div>
      </div>
    </section>
  );
}
