"use client";
import { useTranslation } from "react-i18next";

const Page = () => {
  const { t } = useTranslation();
  return (
    <div className="w-full">
      <div className="container py-10 pb-20">
        <div>
          <h1 className="font-bold mb-5">
            {t("respiratoryFailure:copd.title")}
          </h1>
          <hr />
          <div className="mt-5 text-xs lg:text-sm flex flex-col gap-4">
            <p>{t("respiratoryFailure:copd.p1")}</p>
            <p>{t("respiratoryFailure:copd.p2")}</p>
            <p>{t("respiratoryFailure:copd.p3")}</p>
            <ul className="list-disc pl-6">
              <li>{t("respiratoryFailure:copd.li1")}</li>
              <li>{t("respiratoryFailure:copd.li2")}</li>
              <li>{t("respiratoryFailure:copd.li3")}</li>
            </ul>
            <p>{t("respiratoryFailure:copd.p4")}</p>
            <span className="font-semibold">
              {t("respiratoryFailure:copd.span1")}
            </span>
            <p>{t("respiratoryFailure:copd.p5")}</p>
            <span className="font-semibold">
              {t("respiratoryFailure:copd.span2")}
            </span>
            <p>{t("respiratoryFailure:copd.p6")}</p>
            <span className="font-semibold">
              {t("respiratoryFailure:copd.span3")}
            </span>
            <p>{t("respiratoryFailure:copd.p7")}</p>
            <ul className="list-disc pl-6">
              <li>{t("respiratoryFailure:copd.li4")}</li>
              <li>{t("respiratoryFailure:copd.li5")}</li>
              <li>{t("respiratoryFailure:copd.li6")}</li>
              <li>{t("respiratoryFailure:copd.li7")}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
