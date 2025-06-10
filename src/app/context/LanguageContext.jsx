"use client";
import { createContext, useContext, useState, useEffect } from 'react';
import { translations } from './translations';

// Create the context
const LanguageContext = createContext();

// Custom hook to use the language context
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

// The provider component
export const LanguageProvider = ({ children }) => {
  // Default language is Polish, but we'll check localStorage on client side
  const [language, setLanguage] = useState('pl');
  const [t, setT] = useState(translations.pl);

  // Load the language preference from localStorage on mount
  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') || 'pl';
    setLanguage(savedLanguage);
    setT(translations[savedLanguage]);
  }, []);

  // Function to change the language
  const changeLanguage = (lang) => {
    if (translations[lang]) {
      setLanguage(lang);
      setT(translations[lang]);
      localStorage.setItem('language', lang);
    }
  };

  // The context value
  const value = {
    language,
    t,
    changeLanguage,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageContext;