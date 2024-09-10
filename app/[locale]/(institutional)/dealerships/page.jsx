'use client'
import { partners } from "@/constants";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import { useParams } from 'next/navigation'

const Page = () => {
  const { t } = useTranslation();
  const params = useParams();
  console.log(params);
  return (
    <div className="w-full">
      <div className="container py-10">
        <div className="w-full">
          <h1 className="font-semibold mb-5">{t(`dealerships`)}</h1>
          <hr />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-6">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="flex items-center justify-center border overflow-hidden h-[100px] w-full"
              >
                <Image
                  src={partner}
                  width={170}
                  height={100}
                  alt={`Partner ${index}`}
                  className="object-contain" // Ensure image covers the container
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
