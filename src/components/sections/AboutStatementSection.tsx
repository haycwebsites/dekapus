import { useHayc } from '../../hayc/config-context';

export function AboutStatementSection() {
  const { img, t } = useHayc();
  const sectionContent = {
    title: {
      el: 'Αυτό δεν είναι consulting.',
      en: 'This is not consulting.',
    },
    subtitle: {
      el: 'Είναι η ικανότητα να διαβάζεις έναν χώρο, να αισθάνεσαι την πίεση πριν κλιμακωθεί και να επαναφέρεις ισορροπία πριν καταρρεύσουν τα συστήματα.',
      en: 'It is the ability to read a space, sense pressure before it escalates, and restore balance before systems break.',
    },
    paragraph1: {
      el: 'Με καλούν όταν κάτι δεν μοιάζει σωστό αλλά δεν μπορεί να ονομαστεί. Όταν οι ομάδες είναι ικανές αλλά καταπονημένες. Όταν τα concepts είναι σωστά αλλά δεν νιώθουν πια ζωντανά.',
      en: 'I am invited when something feels off but cannot be named. When teams are competent yet strained. When concepts are correct yet no longer alive.',
    },
    paragraph2: {
      el: 'Η δουλειά μου γίνεται ήσυχα, μέσα στον ρυθμό της λειτουργίας. Όχι μέσα από frameworks ή reports, αλλά μέσα από παρουσία, προσαρμογή και στοχευμένη παρέμβαση.',
      en: 'My work happens quietly, inside the rhythm of the operation. Not through frameworks or reports, but through presence, adjustment, and precise intervention.',
    },
  };

  return (
    <section
      className="on-dark-image-section py-20 bg-cover bg-center bg-fixed relative"
      style={{ backgroundImage: `url(${img('/images/engagement-section.jpg')})` }}
    >
      <div className="absolute inset-0 bg-black/70" />
      <div className="relative container mx-auto px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h3 className="font-['Great_Vibes'] text-4xl text-[#c8a97e] mb-2">
            {t(sectionContent.title)}
          </h3>
          <h2 className="text-2xl md:text-3xl font-serif text-white mb-8">
            {t(sectionContent.subtitle)}
          </h2>

          <p className="text-white/80 leading-relaxed mb-4">
            {t(sectionContent.paragraph1)}
          </p>
          <p className="text-white/80 leading-relaxed">
            {t(sectionContent.paragraph2)}
          </p>
        </div>
      </div>
    </section>
  );
}
