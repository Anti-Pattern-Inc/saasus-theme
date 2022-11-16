import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

//  テストコメント2

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  ja: {
    saasusTheme: {
      help: 'ヘルプ',
    },
  },
  en: {
    saasusTheme: {
      help: 'Help',
    },
  },
}

export const i18nNamespace = 'saasusTheme'

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    defaultNS: i18nNamespace,
    fallbackNS: i18nNamespace,
    ns: [i18nNamespace],
    resources,
    lng: 'ja',
    fallbackLng: 'ja',
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  })

export default i18n
