"use client";
import { csa } from "@/public";
import Image from "next/image";
import React from "react";
import { useTranslation } from "react-i18next";

const Page = () => {
  const { t } = useTranslation();

  return (
    <div className="w-full">
      <div className="container py-10 pb-20">
        <div className="min-h-[330px]">
          <h1 className="font-bold mb-5">{t("sleepDisorders:sdb.commSA.title")}</h1>
          <hr />
          <div className="mt-5 text-xs lg:text-sm flex flex-col gap-3">
            <div className="flex justify-center">
              <Image src={csa} width={1000} alt={t("sleepDisorders:sdb.commSA.imageAlt")} />
            </div>
            <p className="leading-relaxed">
              {t("sleepDisorders:sdb.commSA.p1")}
            </p>
            <p className="leading-relaxed">
              {t("sleepDisorders:sdb.commSA.p2")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page
