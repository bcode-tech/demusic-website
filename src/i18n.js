import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import translationEN from "./imports/locales/en/translation.json";
import translationIT from "./imports/locales/it/translation.json";

import privacyPolicyEN from "./imports/locales/en/privacyPolicy.json";
import privacyPolicyIT from "./imports/locales/it/privacyPolicy.json";

import cookiePolicyEN from "./imports/locales/en/cookiePolicy.json";
import cookiePolicyIT from "./imports/locales/it/cookiePolicy.json";

const resources = {
    it: {
        translation: translationIT,
        privacyPolicy: privacyPolicyIT,
        cookiePolicy: cookiePolicyIT,
    },
    en: {
        translation: translationEN,
        privacyPolicy: privacyPolicyEN,
        cookiePolicy: cookiePolicyEN,
    },
};

i18n.use(initReactI18next).init(
    {
        resources,
        lng: "it",
        fallbackLng: "en",

        interpolation: {
            escapeValue: false,
        },
    },
    (err, t) => {
        if (err) console.error("i18n init Error", err);
    },
);

export default i18n;
