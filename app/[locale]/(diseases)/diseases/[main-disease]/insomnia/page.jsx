"use client";
import { useTranslation } from "react-i18next";

const Page = () => {
  const { t } = useTranslation();
  return (
    <div className="w-full">
      <div className="container py-10">
        <div>
          <h1 className="font-bold mb-5">
            {t("sleepDisorders:insomnia.title")}
          </h1>
          <hr />
          <div className="mt-5 text-xs lg:text-sm flex flex-col gap-4">
            <p className="indent-6">{t("sleepDisorders:insomnia.p1")}</p>
            <p>{t("sleepDisorders:insomnia.p2")}</p>
            <p>{t("sleepDisorders:insomnia.p3")}</p>
            <ul className="list-disc pl-6">
              <li>{t("sleepDisorders:insomnia.li1")}</li>
              <li>{t("sleepDisorders:insomnia.li2")}</li>
              <li>{t("sleepDisorders:insomnia.li3")}</li>
              <li>{t("sleepDisorders:insomnia.li4")}</li>
              <li>{t("sleepDisorders:insomnia.li5")}</li>
            </ul>
            <p>{t("sleepDisorders:insomnia.p4")}</p>
            <p>{t("sleepDisorders:insomnia.p5")}</p>
            <ul className="list-disc pl-6">
              <li>{t("sleepDisorders:insomnia.li6")}</li>
              <li>{t("sleepDisorders:insomnia.li7")}</li>
              <li>{t("sleepDisorders:insomnia.li8")}</li>
              <li>{t("sleepDisorders:insomnia.li9")}</li>
              <li>{t("sleepDisorders:insomnia.li10")}</li>
              <li>{t("sleepDisorders:insomnia.li11")}</li>
              <li>{t("sleepDisorders:insomnia.li12")}</li>
              <li>{t("sleepDisorders:insomnia.li13")}</li>
              <li>{t("sleepDisorders:insomnia.li14")}</li>
              <li>{t("sleepDisorders:insomnia.li15")}</li>
              <li>{t("sleepDisorders:insomnia.li16")}</li>
            </ul>
            <span className="font-semibold">
              {t("sleepDisorders:insomnia.span1")}
            </span>
            <p>{t("sleepDisorders:insomnia.p6")}</p>
            <p>{t("sleepDisorders:insomnia.p7")}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
