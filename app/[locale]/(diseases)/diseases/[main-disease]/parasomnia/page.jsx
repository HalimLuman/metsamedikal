"use client";
import { useTranslation } from "react-i18next";

const Page = () => {
  const { t } = useTranslation();
  return (
    <div className="w-full">
      <div className="container py-10">
        <div className="min-h-[330px]">
          <h1 className="font-bold mb-5">
            {t("sleepDisorders:parasomnia.title")}
          </h1>
          <hr />
          <div className="mt-5 text-xs lg:text-sm flex flex-col gap-4">
            <p>{t("sleepDisorders:parasomnia.p")}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
