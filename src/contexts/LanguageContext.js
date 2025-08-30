import React, { createContext, useContext, useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const { i18n, t } = useTranslation();
  const [language, setLanguage] = useState('fr');

  useEffect(() => {
    // Récupérer la langue sauvegardée ou utiliser 'fr' par défaut
    const savedLanguage = localStorage.getItem('puresystem-language') || 'fr';
    setLanguage(savedLanguage);
    i18n.changeLanguage(savedLanguage);
  }, [i18n]);

  const toggleLanguage = () => {
    const newLanguage = language === 'fr' ? 'en' : 'fr';
    setLanguage(newLanguage);
    i18n.changeLanguage(newLanguage);
    localStorage.setItem('puresystem-language', newLanguage);
  };

  const changeLanguage = (lang) => {
    setLanguage(lang);
    i18n.changeLanguage(lang);
    localStorage.setItem('puresystem-language', lang);
  };

  const value = {
    language,
    setLanguage: changeLanguage,
    toggleLanguage,
    t
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};