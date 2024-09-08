"use client";
import { useTranslation } from "react-i18next";

const Page = () => {
  const { t } = useTranslation();

  return (
    <div className="w-full">
      <div className="container py-10 pb-20">
        <div className="min-h-[330px]">
          <h1 className="font-bold mb-5">{t("sleepDisorders:dawa.menopause.title")}</h1>
          <hr />
          <div className="mt-5 text-xs lg:text-sm flex flex-col gap-5">
            <span className="font-semibold">{t("sleepDisorders:dawa.menopause.relationshipTitle")}</span>
            <p className="leading-relaxed">{t("sleepDisorders:dawa.menopause.p1")}</p>

            <span className="font-semibold">{t("sleepDisorders:dawa.menopause.riskTitle")}</span>
            <ul className="list-disc pl-6">
              <li>{t("sleepDisorders:dawa.menopause.risk.q1")}</li>
              <li>{t("sleepDisorders:dawa.menopause.risk.q2")}</li>
              <li>{t("sleepDisorders:dawa.menopause.risk.q3")}</li>
              <li>{t("sleepDisorders:dawa.menopause.risk.q4")}</li>
            </ul>

            <p>{t("sleepDisorders:dawa.menopause.recommendation")}</p>

            <span className="font-semibold">{t("sleepDisorders:dawa.menopause.benefitsTitle")}</span>
            <p>{t("sleepDisorders:dawa.menopause.benefitsIntro")}</p>

            <ul className="list-disc pl-6">
              <li>{t("sleepDisorders:dawa.menopause.benefits.b1")}</li>
              <li>{t("sleepDisorders:dawa.menopause.benefits.b2")}</li>
              <li>{t("sleepDisorders:dawa.menopause.benefits.b3")}</li>
              <li>{t("sleepDisorders:dawa.menopause.benefits.b4")}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
