import { createContext, useContext, useState, useEffect } from 'react';
import translations from './translations';

// Create the i18n context
const I18nContext = createContext();

// Language provider component
export const I18nProvider = ({ children }) => {
  // Default to English, but try to get from localStorage
  const [language, setLanguage] = useState(() => {
    try {
      const saved = localStorage.getItem('learnpath-language');
      return saved && translations[saved] ? saved : 'en';
    } catch {
      return 'en';
    }
  });

  // Save language preference to localStorage whenever it changes
  useEffect(() => {
    try {
      localStorage.setItem('learnpath-language', language);
    } catch (error) {
      console.error('Error saving language preference:', error);
    }
  }, [language]);

  // Get translation function
  const t = (key) => {
    const keys = key.split('.');
    let value = translations[language];

    for (const k of keys) {
      if (value && typeof value === 'object') {
        value = value[k];
      } else {
        return key; // Return key if translation not found
      }
    }

    return value || key;
  };

  // Change language
  const changeLanguage = (newLanguage) => {
    if (translations[newLanguage]) {
      setLanguage(newLanguage);
    }
  };

  // Get list of available languages
  const getAvailableLanguages = () => {
    return [
      { code: 'en', name: 'English', flag: '🇬🇧' },
      { code: 'ms', name: 'Bahasa Malaysia', flag: '🇲🇾' },
      { code: 'zh', name: '中文', flag: '🇨🇳' },
      { code: 'ta', name: 'தமிழ்', flag: '🇮🇳' },
    ];
  };

  const value = {
    language,
    t,
    changeLanguage,
    getAvailableLanguages,
  };

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
};

// Custom hook to use the i18n context
export const useI18n = () => {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error('useI18n must be used within an I18nProvider');
  }
  return context;
};
