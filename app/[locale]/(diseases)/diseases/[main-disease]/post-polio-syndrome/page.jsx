'use client'
import { useTranslation } from "react-i18next";

const Page = () => {
  const { t } = useTranslation();
  return (
    <div className="w-full">
      <div className="container py-10 pb-20">
        <div className="min-h-[330px]">
          <h1 className="font-semibold mb-5">{t("respiratoryFailure:pps.title")}</h1>
          <hr />
          <div className="mt-5 text-xs lg:text-sm flex flex-col gap-4">
            <span className="font-semibold">{t("respiratoryFailure:pps.span1")}</span>
            <p className="leading-relaxed">
            {t("respiratoryFailure:pps.p1")}
            </p>
            <span className="font-semibold">{t("respiratoryFailure:pps.span2")}</span>
            <p className="leading-relaxed">
            {t("respiratoryFailure:pps.p2")}
            </p>
            <span className="font-semibold">{t("respiratoryFailure:pps.span3")}</span>
            <p className="leading-relaxed">
            {t("respiratoryFailure:pps.p3")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
