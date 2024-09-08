"use client";
import React from "react";
import { useTranslation } from "react-i18next";

const Page = () => {
  const { t } = useTranslation();
  return (
    <div className="w-full">
      <div className="container py-10">
        <div>
          <h1 className="font-bold mb-5">
            {t("sleepDisorders:restless-leg-syndrome.title")}
          </h1>
          <hr />
          <div className="mt-5 text-xs lg:text-sm flex flex-col gap-4">
            <p className="indent-6">
              {t("sleepDisorders:restless-leg-syndrome.p1")}
            </p>
            <span className="font-semibold">
              {t("sleepDisorders:restless-leg-syndrome.span1")}
            </span>
            <ul className="list-disc pl-6">
              <li>{t("sleepDisorders:restless-leg-syndrome.li1")}</li>
              <li>{t("sleepDisorders:restless-leg-syndrome.li2")}</li>
              <li>{t("sleepDisorders:restless-leg-syndrome.li3")}</li>
              <li>{t("sleepDisorders:restless-leg-syndrome.li4")}</li>
            </ul>
            <span className="font-semibold">
              {t("sleepDisorders:restless-leg-syndrome.span2")}
            </span>
            <ul className="list-disc pl-6">
              <li>{t("sleepDisorders:restless-leg-syndrome.li5")}</li>
              <li>{t("sleepDisorders:restless-leg-syndrome.li6")}</li>
              <li>{t("sleepDisorders:restless-leg-syndrome.li7")}</li>
              <li>{t("sleepDisorders:restless-leg-syndrome.li8")}</li>
              <li>{t("sleepDisorders:restless-leg-syndrome.li9")}</li>
            </ul>
            <span className="font-semibold">
              {t("sleepDisorders:restless-leg-syndrome.span3")}
            </span>
            <p>{t("sleepDisorders:restless-leg-syndrome.p2")}</p>
            <span className="font-semibold">
              {t("sleepDisorders:restless-leg-syndrome.span4")}
            </span>
            <p>{t("sleepDisorders:restless-leg-syndrome.p3")}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
