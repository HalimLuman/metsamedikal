"use client";
import { useTranslation } from "react-i18next";

const Page = () => {
  const { t } = useTranslation();
  return (
    <div className="w-full">
      <div className="container py-10">
        <div className="pb-10">
          <h1 className="font-bold mb-5">
            {t("sleepDisorders:narcolepsy.title")}
          </h1>
          <hr />
          <div className="mt-5 text-xs lg:text-sm leading-relaxed flex flex-col gap-5">
            <p className="indent-6">{t("sleepDisorders:narcolepsy.p1")}</p>
            <p>{t("sleepDisorders:narcolepsy.p2")}</p>
            <p>{t("sleepDisorders:narcolepsy.p3")}</p>
            <p>{t("sleepDisorders:narcolepsy.p4")}</p>
            <p>{t("sleepDisorders:narcolepsy.p5")}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
