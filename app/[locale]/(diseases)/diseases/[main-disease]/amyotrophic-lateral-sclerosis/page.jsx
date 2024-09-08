"use client";

import { useTranslation } from "react-i18next";

const Page = () => {
  const { t } = useTranslation();
  return (
    <div className="w-full">
      <div className="container py-10 pb-20">
        <div>
          <h1 className="font-bold mb-5">
            {t("respiratoryFailure:als.title")}
          </h1>
          <hr />
          <div className="mt-5 text-xs lg:text-sm flex flex-col gap-4">
            <span className="font-semibold">
              {t("respiratoryFailure:als.span1")}
            </span>
            <p>{t("respiratoryFailure:copd.p1")}</p>
            <ul className="list-disc pl-6">
              <li>{t("respiratoryFailure:als.li1")}</li>
              <li>{t("respiratoryFailure:als.li2")}</li>
              <li>{t("respiratoryFailure:als.li3")}</li>
              <li>{t("respiratoryFailure:als.li4")}</li>
            </ul>
            <span className="font-semibold">
              {t("respiratoryFailure:als.span2")}
            </span>
            <p>{t("respiratoryFailure:als.p2")}</p>
            <span className="font-semibold">
              {t("respiratoryFailure:als.span3")}
            </span>
            <ul className="list-disc pl-6">
              <li>{t("respiratoryFailure:als.li5")}</li>
              <li>{t("respiratoryFailure:als.li6")}</li>
            </ul>
            <span className="font-semibold">
              {t("respiratoryFailure:als.span4")}
            </span>
            <p>{t("respiratoryFailure:als.p3")}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
