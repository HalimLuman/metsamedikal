"use client";
import React from "react";
import { useTranslation } from "react-i18next";

const Page = () => {
  const { t } = useTranslation();

  return (
    <div className="w-full">
      <div className="container py-10 pb-20">
        <div>
          <h1 className="font-bold mb-5">{t("sleepDisorders:dawa.heartDisease.title")}</h1>
          <hr />
          <div className="mt-5 text-xs lg:text-sm flex flex-col gap-4">
            <span className="font-semibold">{t("sleepDisorders:dawa.heartDisease.subtitle1")}</span>
            <p>{t("sleepDisorders:dawa.heartDisease.p1")}</p>
            <p>{t("sleepDisorders:dawa.heartDisease.p2")}</p>

            <span className="font-semibold mt-5">{t("sleepDisorders:dawa.heartDisease.hypertensionTitle")}</span>
            <p className="indent-4">{t("sleepDisorders:dawa.heartDisease.hypertension.p1")}</p>
            <p className="indent-4">{t("sleepDisorders:dawa.heartDisease.hypertension.p2")}</p>
            <p className="indent-4">{t("sleepDisorders:dawa.heartDisease.hypertension.p3")}</p>
            <p className="indent-4">{t("sleepDisorders:dawa.heartDisease.hypertension.p4")}</p>

            <span className="font-semibold mt-5">{t("sleepDisorders:dawa.heartDisease.heartFailureTitle")}</span>
            <p className="indent-4">{t("sleepDisorders:dawa.heartDisease.heartFailure.p1")}</p>
            <p className="indent-4">{t("sleepDisorders:dawa.heartDisease.heartFailure.p2")}</p>
            <p className="indent-4">{t("sleepDisorders:dawa.heartDisease.heartFailure.p3")}</p>

            <p>{t("sleepDisorders:dawa.heartDisease.intermediateMechanisms")}</p>
            <p>{t("sleepDisorders:dawa.heartDisease.mechanismDetails")}</p>

            <span className="font-semibold mt-5">{t("sleepDisorders:dawa.heartDisease.sleepApneaTitle")}</span>
            <p>{t("sleepDisorders:dawa.heartDisease.sleepApnea.p1")}</p>

            <span className="font-semibold mt-5">{t("sleepDisorders:dawa.heartDisease.resultsTitle")}</span>
            <p>{t("sleepDisorders:dawa.heartDisease.results")}</p>

            <span className="font-semibold mt-5">{t("sleepDisorders:dawa.heartDisease.riskTitle")}</span>
            <p>{t("sleepDisorders:dawa.heartDisease.risks")}</p>

            <span className="font-semibold mt-5">{t("sleepDisorders:dawa.heartDisease.goldStandardTitle")}</span>
            <span className="font-semibold mt-5">{t("sleepDisorders:dawa.heartDisease.papTreatmentTitle")}</span>
            <p>{t("sleepDisorders:dawa.heartDisease.papTreatment")}</p>

            <span className="font-semibold mt-5">{t("sleepDisorders:dawa.heartDisease.papHypertensionTitle")}</span>
            <p className="indent-4">{t("sleepDisorders:dawa.heartDisease.papHypertension.p1")}</p>
            <p className="indent-4">{t("sleepDisorders:dawa.heartDisease.papHypertension.p2")}</p>
            <p className="indent-4">{t("sleepDisorders:dawa.heartDisease.papHypertension.p3")}</p>
            <p className="indent-4">{t("sleepDisorders:dawa.heartDisease.papHypertension.p4")}</p>

            <span className="font-semibold mt-5">{t("sleepDisorders:dawa.heartDisease.papHeartFailureTitle")}</span>
            <p className="indent-4">{t("sleepDisorders:dawa.heartDisease.papHeartFailure.p1")}</p>
            <p className="indent-4">{t("sleepDisorders:dawa.heartDisease.papHeartFailure.p2")}</p>
            <p className="indent-4">{t("sleepDisorders:dawa.heartDisease.papHeartFailure.p3")}</p>

            <span className="font-semibold mt-5">{t("sleepDisorders:dawa.heartDisease.otherImprovementsTitle")}</span>
            <p className="indent-4">{t("sleepDisorders:dawa.heartDisease.otherImprovements.p1")}</p>
            <p className="indent-4">{t("sleepDisorders:dawa.heartDisease.otherImprovements.p2")}</p>
            <p className="indent-4">{t("sleepDisorders:dawa.heartDisease.otherImprovements.p3")}</p>

            <ul className="list-decimal pl-6">
              <li className="font-semibold text-base mt-5">{t("sleepDisorders:dawa.heartDisease.bulkScanningTitle")}</li>
              <p>{t("sleepDisorders:dawa.heartDisease.bulkScanning")}</p>

              <li className="font-semibold text-base mt-5">{t("sleepDisorders:dawa.heartDisease.diagnosisTitle")}</li>
              <p>{t("sleepDisorders:dawa.heartDisease.diagnosis")}</p>

              <li className="font-semibold text-base mt-5">{t("sleepDisorders:dawa.heartDisease.treatmentTitle")}</li>
              <p>{t("sleepDisorders:dawa.heartDisease.treatment")}</p>

              <li className="font-semibold text-base mt-5">{t("sleepDisorders:dawa.heartDisease.followUpTitle")}</li>
              <p>{t("sleepDisorders:dawa.heartDisease.followUp")}</p>
            </ul>

            <span className="font-semibold mt-5">{t("sleepDisorders:dawa.heartDisease.periodicBreathingTitle")}</span>
            <p>{t("sleepDisorders:dawa.heartDisease.periodicBreathing.p1")}</p>
            <p>{t("sleepDisorders:dawa.heartDisease.periodicBreathing.p2")}</p>
            <p>{t("sleepDisorders:dawa.heartDisease.periodicBreathing.p3")}</p>
            <p>{t("sleepDisorders:dawa.heartDisease.periodicBreathing.p4")}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
