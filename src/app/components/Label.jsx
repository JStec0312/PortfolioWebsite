import { useLanguage } from '../context/LanguageContext';

export default function Label() {
  const { t } = useLanguage();
  
  return (
    <section className="marquee-container w-dvw">
      <div className="marquee-track">
        <span className="font-header text-marquee">{t.labelText}</span>
        <span className="font-header text-marquee">{t.labelText}</span>
      </div>
    </section>
  );
}
