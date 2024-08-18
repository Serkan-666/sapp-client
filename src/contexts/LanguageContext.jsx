import React, { createContext, useContext, useState, useMemo } from 'react';
import { IntlProvider } from 'react-intl';
import { localStorageGet, localStorageSet } from 'utils/localStorage';
import en from 'constants//locales/en.json';
import tr from 'constants/locales/tr.json';

// LanguageContext oluşturulması
const LanguageContext = createContext();

export const useLanguageContext = () => useContext(LanguageContext);

const messages = {
   en: en,
   tr: tr,
};

export const LanguageContextProvider = ({ children }) => {
   const [language, setLanguage] = useState(localStorageGet('language') || 'tr');

   const toggleLanguage = (lang) => {
      setLanguage(lang);
      localStorageSet('language', lang);
   };

   const contextValue = useMemo(
      () => ({
         language,
         toggleLanguage,
      }),
      [language],
   );

   return (
      <LanguageContext.Provider value={contextValue}>
         <IntlProvider locale={language} messages={messages[language]}>
            {children}
         </IntlProvider>
      </LanguageContext.Provider>
   );
};
