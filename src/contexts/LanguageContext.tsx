
import React, { createContext, useState, useContext, ReactNode } from 'react';
import enTranslations from '@/translations/en';
import esTranslations from '@/translations/es';
import frTranslations from '@/translations/fr';

// Define available languages
export type LanguageCode = 'en' | 'es' | 'fr';

// Translation record type
export type TranslationsType = {
  [key: string]: string | TranslationsType;
};

// Map of all translations
const translations: Record<LanguageCode, TranslationsType> = {
  en: enTranslations,
  es: esTranslations,
  fr: frTranslations,
};

// Type for the language context
type LanguageContextType = {
  language: LanguageCode;
  setLanguage: (language: LanguageCode) => void;
  t: (key: string) => string;
};

// Create the context
const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Provider component
export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<LanguageCode>('en');

  // Translation function
  const t = (key: string): string => {
    const keys = key.split('.');
    let result: any = translations[language];
    
    for (const k of keys) {
      if (result && typeof result === 'object' && k in result) {
        result = result[k];
      } else {
        console.warn(`Translation key not found: ${key}`);
        return key;
      }
    }
    
    return typeof result === 'string' ? result : key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Hook to use the language context
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
