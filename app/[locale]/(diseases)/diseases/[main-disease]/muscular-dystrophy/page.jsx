"use client";
import { useTranslation } from "react-i18next";

const Page = () => {
  const { t } = useTranslation();
  return (
    <div className="w-full">
      <div className="container py-10 pb-20">
        <div>
          <h1 className="font-bold mb-5">{t("respiratoryFailure:md.title")}</h1>
          <hr />
          <div className="mt-5 text-xs lg:text-sm flex flex-col gap-4">
            <p>{t("respiratoryFailure:md.p1")}</p>
            <ul className="list-disc pl-6">
              <li>{t("respiratoryFailure:md.li1")}</li>
              <li>{t("respiratoryFailure:md.li2")}</li>
              <li>{t("respiratoryFailure:md.li3")}</li>
            </ul>
            <span className="font-semibold">
              {t("respiratoryFailure:md.span1")}
            </span>
            <p>{t("respiratoryFailure:md.p2")}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
