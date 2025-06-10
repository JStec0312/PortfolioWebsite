"use client";
import { useLanguage } from '../context/LanguageContext';

const LanguageSwitcher = () => {
  const { language, changeLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={() => changeLanguage('pl')}
        className={`text-sm font-semibold px-2 py-1 rounded transition-colors ${
          language === 'pl' 
            ? 'bg-secondary text-primary' 
            : 'text-text hover:text-secondary'
        }`}
      >
        PL
      </button>
      <span className="text-text font-light">/</span>
      <button
        onClick={() => changeLanguage('en')}
        className={`text-sm font-semibold px-2 py-1 rounded transition-colors ${
          language === 'en' 
            ? 'bg-secondary text-primary' 
            : 'text-text hover:text-secondary'
        }`}
      >
        EN
      </button>
    </div>
  );
};

export default LanguageSwitcher;