"use client";
import { useTranslation } from "react-i18next";
const page = () => {
  const { t } = useTranslation();
  return (
    <div className="w-full">
      <div className="container py-10">
        <div>
          <h1 className="font-semibold mb-5">{t("company-profile")}</h1>
          <hr />
          <div className="mt-5 text-sm flex flex-col gap-4">
            <p className="indent-6">{t("inst-p1")}</p>
            <p className="indent-6">{t("inst-p2")}</p>
            <p className="indent-6">{t("inst-p3")}</p>
            <p className="indent-6">{t("inst-p4")}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
