"use client";

import { useTranslation } from "react-i18next";

const Page = () => {
  const { t } = useTranslation();
  return (
    <div className="w-full">
      <div className="container py-10">
        <div>
          <h1 className="font-bold mb-5">{t("respiratoryFailure:cb.title")}</h1>
          <hr />
          <div className="mt-5 text-xs lg:text-sm flex flex-col gap-4">
            <p className="indent-6">{t("respiratoryFailure:cb.p1")}</p>
            <span className="font-semibold">
              {t("respiratoryFailure:cb.span1")}
            </span>
            <ul className="list-disc pl-6">
              <li>{t("respiratoryFailure:cb.li1")}</li>
              <li>{t("respiratoryFailure:cb.li2")}</li>
              <li>{t("respiratoryFailure:cb.li3")}</li>
              <li>{t("respiratoryFailure:cb.li4")}</li>
              <li>{t("respiratoryFailure:cb.li5")}</li>
            </ul>
            <span className="font-semibold">
              {t("respiratoryFailure:cb.span2")}
            </span>
            <ul className="list-disc pl-6">
              <li>{t("respiratoryFailure:cb.li6")}</li>
              <li>{t("respiratoryFailure:cb.li7")}</li>
              <li>{t("respiratoryFailure:cb.li8")}</li>
            </ul>
            <span className="font-semibold">
              {t("respiratoryFailure:cb.span3")}
            </span>
            <p>{t("respiratoryFailure:cb.p2")}</p>
            <span className="font-semibold">
              {t("respiratoryFailure:cb.span4")}
            </span>
            <p>{t("respiratoryFailure:cb.p3")}</p>
            <span className="font-semibold">
              {t("respiratoryFailure:cb.span5")}
            </span>
            <p>{t("respiratoryFailure:cb.p4")}</p>
            <span className="font-semibold">
              {t("respiratoryFailure:cb.span6")}
            </span>
            <p>{t("respiratoryFailure:cb.p5")}</p>
            <span className="font-semibold">
              {t("respiratoryFailure:cb.span7")}
            </span>
            <p>{t("respiratoryFailure:cb.p6")}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
