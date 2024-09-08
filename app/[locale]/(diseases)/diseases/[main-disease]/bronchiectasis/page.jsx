"use client";
import { useTranslation } from "react-i18next";

const Page = () => {
  const { t } = useTranslation();
  return (
    <div className="w-full">
      <div className="container py-10">
        <div>
          <h1 className="font-bold mb-5">
            {t("respiratoryFailure:bron.title")}
          </h1>
          <hr />
          <div className="mt-5 text-xs lg:text-sm flex flex-col gap-4">
            <p>{t("respiratoryFailure:bron.p1")}</p>
            <span className="font-semibold">
              {t("respiratoryFailure:bron.span1")}
            </span>
            <ul className="list-disc pl-6">
              <li>{t("respiratoryFailure:bron.li1")}</li>
              <li>{t("respiratoryFailure:bron.li2")}</li>
              <li>{t("respiratoryFailure:bron.li3")}</li>
              <li>{t("respiratoryFailure:bron.li4")}</li>
              <li>{t("respiratoryFailure:bron.li5")}</li>
              <li>{t("respiratoryFailure:bron.li6")}</li>
              <li>{t("respiratoryFailure:bron.li7")}</li>
            </ul>
            <span className="font-semibold">
              {t("respiratoryFailure:bron.span2")}
            </span>
            <ul className="list-disc pl-6">
              <li>{t("respiratoryFailure:bron.li8")}</li>
              <li>{t("respiratoryFailure:bron.li9")}</li>
              <li>{t("respiratoryFailure:bron.li10")}</li>
              <li>{t("respiratoryFailure:bron.li11")}</li>
              <li>{t("respiratoryFailure:bron.li12")}</li>
              <li>{t("respiratoryFailure:bron.li13")}</li>
              <li>{t("respiratoryFailure:bron.li14")}</li>
            </ul>
            <span className="font-semibold">
              {t("respiratoryFailure:bron.span3")}
            </span>
            <p>{t("respiratoryFailure:bron.p2")}</p>
            <span className="font-semibold">
              {t("respiratoryFailure:bron.span4")}
            </span>
            <p>{t("respiratoryFailure:bron.p3")}</p>
            <span className="font-semibold">
              {t("respiratoryFailure:bron.span5")}
            </span>
            <p>{t("respiratoryFailure:bron.p4")}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
