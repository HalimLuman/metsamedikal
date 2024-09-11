import { createInstance as e } from "i18next";
import { initReactI18next as t } from "react-i18next/initReactI18next";
import o from "i18next-resources-to-backend";
import r from "@/i18nConfig";
export default async function a(a, n, i, s) {
  return (
    (i = i || e()).use(t),
    s || i.use(o((e, t) => import(`@/locales/${e}/${t}.json`))),
    await i.init({
      lng: a,
      resources: s,
      fallbackLng: r.defaultLocale,
      supportedLngs: r.locales,
      defaultNS: n[0],
      fallbackNS: n[0],
      ns: n,
      preload: s ? [] : r.locales,
    }),
    { i18n: i, resources: i.services.resourceStore.data, t: i.t }
  );
}
