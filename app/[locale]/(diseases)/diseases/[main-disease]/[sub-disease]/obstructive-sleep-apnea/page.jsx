"use client";
import { osa } from "@/public";
import Image from "next/image";
import { useTranslation } from "react-i18next";

const Page = () => {
  const { t } = useTranslation();
  return (
    <div className="w-full">
      <div className="container py-10 pb-20">
        <div className="min-h-[330px]">
          <h1 className="font-bold mb-5">
            {t("sleepDisorders:sdb.osa.title")}
          </h1>
          <hr />
          <div className="mt-5 text-xs lg:text-sm flex flex-col gap-7">
            <div className="flex justify-center">
              <Image src={osa} width={1200} />
            </div>
            <p className="leading-relaxed">{t("sleepDisorders:sdb.osa.p1")}</p>
            <p className="leading-relaxed">{t("sleepDisorders:sdb.osa.p2")}</p>
            <p className="leading-relaxed">{t("sleepDisorders:sdb.osa.p3")}</p>
            <p className="leading-relaxed">{t("sleepDisorders:sdb.osa.p4")}</p>
            <p className="leading-relaxed">{t("sleepDisorders:sdb.osa.p5")}</p>
            <span className="font-semibold">
              {t("sleepDisorders:sdb.osa.span1")}
            </span>
            <ul className="list-disc pl-6">
              <li>{t("sleepDisorders:sdb.osa.li1")}</li>
              <li>{t("sleepDisorders:sdb.osa.li2")}</li>
              <li>{t("sleepDisorders:sdb.osa.li3")}</li>
            </ul>
            <span className="font-semibold">
              {t("sleepDisorders:sdb.osa.span2")}
            </span>
            <ul className="list-disc pl-6">
              <li>{t("sleepDisorders:sdb.osa.li4")}</li>
              <li>{t("sleepDisorders:sdb.osa.li5")}</li>
            </ul>
            <span className="font-semibold">
              {t("sleepDisorders:sdb.osa.span3")}
            </span>
            <ul className="list-disc pl-6">
              <li>{t("sleepDisorders:sdb.osa.li6")}</li>
              <li>{t("sleepDisorders:sdb.osa.li7")}</li>
              <li>{t("sleepDisorders:sdb.osa.li8")}</li>
              <li>{t("sleepDisorders:sdb.osa.li9")}</li>
              <li>{t("sleepDisorders:sdb.osa.li10")}</li>
              <li>{t("sleepDisorders:sdb.osa.li11")}</li>
            </ul>
            <p className="leading-relaxed">{t("sleepDisorders:sdb.osa.p6")}</p>
            <p className="leading-relaxed">{t("sleepDisorders:sdb.osa.p7")}</p>
            <p className="leading-relaxed">{t("sleepDisorders:sdb.osa.p8")}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
