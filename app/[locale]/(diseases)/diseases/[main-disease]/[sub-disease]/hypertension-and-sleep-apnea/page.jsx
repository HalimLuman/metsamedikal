"use client";
import { useTranslation } from "react-i18next";

const Page = () => {
  const { t } = useTranslation();

  return (
    <div className="w-full">
      <div className="container py-10 pb-20">
        <div className="min-h-[330px]">
          <h1 className="font-bold mb-5">{t("sleepDisorders:dawa.highBloodPressure.title")}</h1>
          <hr />
          <div className="mt-5 text-xs lg:text-sm flex flex-col gap-5">
            <span className="font-semibold">{t("sleepDisorders:dawa.highBloodPressure.relationshipTitle")}</span>
            <p className="leading-relaxed">{t("sleepDisorders:dawa.highBloodPressure.p1")}</p>

            <span className="font-semibold">{t("sleepDisorders:dawa.highBloodPressure.riskTitle")}</span>
            <ul className="list-disc pl-6">
              <li>{t("sleepDisorders:dawa.highBloodPressure.risk.q1")}</li>
              <li>{t("sleepDisorders:dawa.highBloodPressure.risk.q2")}</li>
              <li>{t("sleepDisorders:dawa.highBloodPressure.risk.q3")}</li>
              <li>{t("sleepDisorders:dawa.highBloodPressure.risk.q4")}</li>
            </ul>

            <p>{t("sleepDisorders:dawa.highBloodPressure.recommendation")}</p>

            <span className="font-semibold">{t("sleepDisorders:dawa.highBloodPressure.benefitsTitle")}</span>
            <p>{t("sleepDisorders:dawa.highBloodPressure.benefitsIntro")}</p>

            <ul className="list-disc pl-6">
              <li>{t("sleepDisorders:dawa.highBloodPressure.benefits.b1")}</li>
              <li>{t("sleepDisorders:dawa.highBloodPressure.benefits.b2")}</li>
              <li>{t("sleepDisorders:dawa.highBloodPressure.benefits.b3")}</li>
              <li>{t("sleepDisorders:dawa.highBloodPressure.benefits.b4")}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
