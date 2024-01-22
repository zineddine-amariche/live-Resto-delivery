import i18n  from 'i18next';
import {initReactI18next} from 'react-i18next';
import en from './en/en.json';
import esp from './esp/esp.json';
import use from './fr/fr.json';
  
i18n.use(initReactI18next).init({
  compatibilityJSON: 'v3', 
  lng: 'en',
  fallbackLng: 'en',
  resources: {
    en: en,
    esp: esp,
    fr: use,
  },
  interpolation: {
    escapeValue: false // react already safes from xss
  },
  supportedLngs: ["en", "fr"],
  fallbackLng: "en",

  react: {
    useSuspense: false,
  },


  ns: ['common'],
  defaultNS: 'common',
  nsSeparator: false,
});
  
export default i18n;






























// import i18n from 'i18next';
// import locale from "react-native-locale-detector"
// import { reactI18nextModule } from 'react-i18next';
// import { AsyncStorage } from '@react-native-async-storage';




// const STORAGE_KEY ='@APP:languageCode'

// const languageDetector = {
//     init: Function.prototype,
//     type: 'languageDetector',
//     async: true, // flags below detection to be async
//     detect: async (callback) => {
//         const savedDataJSON = await AsyncStorage.getItem(STORAGE_KEY);
//         const lng = (savedDataJSON) ? savedDataJSON: null;
//         const selectLanguage = lng || locale;
//         console.log('detect - selectLanguage:', selectLanguage);
//         callback(selectLanguage);
//     },
//     cacheUserLanguage: () => {}
// };

// i18n
//     .use(languageDetector)
//     .use(reactI18nextModule)
//   .init({
//     fallbackLng: 'en',
//     resources: { en, fr, ar},

//     // have a common namespace used around the full app
//     ns: ['common'],
//     defaultNS: 'common',

//     debug: true,

//   //   cache: {
//      //  enabled: true
//     // },

//     interpolation: {
//       escapeValue: false, // not needed for react as it does escape per default to prevent xss!
//     }
//   });


// export default i18n;