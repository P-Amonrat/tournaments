import th from "../public/locales/th/common.json";
import en from "../public/locales/en/common.json";

export default {
  // lng: "th",
  preload: ["en", "th"],
  // This is the list of languages your application supports
  supportedLngs: ["en", "th"],
  // This is the language you want to use in case
  // if the user language is not in the supportedLngs
  fallbackLng: "th",
  // The default namespace of i18next is "translation", but you can customize it here
  defaultNS: "common",
  // Disabling suspense is recommended
  react: { useSuspense: false },
  resources: {
    th: {
      common: th,
    },
    en: {
      common: en,
    },
  },
};
