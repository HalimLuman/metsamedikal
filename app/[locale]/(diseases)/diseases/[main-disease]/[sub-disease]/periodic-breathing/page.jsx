"use client";
import { periodic } from "@/public";
import Image from "next/image";
import { useTranslation } from "react-i18next";

const Page = () => {
  const { t } = useTranslation();
  
  return (
    <div className="w-full">
      <div className="container py-10 pb-20">
        <div className="min-h-[330px]">
          <h1 className="font-bold mb-5">{t("sleepDisorders:sdb.periodicBreathing.title")}</h1>
          <hr />
          <div className="mt-5 text-xs lg:text-sm flex flex-col gap-7">
            <p className="leading-relaxed">{t("sleepDisorders:sdb.periodicBreathing.p1")}</p>
            <span className="font-semibold">{t("sleepDisorders:sdb.periodicBreathing.span1")}</span>
            <p className="leading-relaxed">{t("sleepDisorders:sdb.periodicBreathing.p2")}</p>
            <p className="leading-relaxed">{t("sleepDisorders:sdb.periodicBreathing.p3")}</p>
            <div className="flex justify-center">
              <Image src={periodic} width={800} alt="Periodic Breathing graph" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
