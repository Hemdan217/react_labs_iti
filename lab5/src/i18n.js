import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      "Welcome to React": "Welcome to React and react-i18next",
    },
  },

  ar: {
    translation: {
      "Welcome to React": "مرحباً بك في react",
      login: "تسجيل الدخول",
      register: "إنشاء حساب جديد",
      logout: "تسجيل الخروج",
      movies: "قائمة الأفلام",
      favorite: "قائمة المفضلة",
      "Go To Details": "شاهد التفاصيل",
    },
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en",
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
