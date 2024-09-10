'use client'
import { useEffect, useState } from "react";
import Image from "next/image";
import { arrow, category1, category2, category3, insan1, insan2 } from "@/public"; // Assume insan2 is the second image
import { useTranslation } from "react-i18next";

const CategoryItem = ({ title, subtitle, imageSrc }) => (
  <div className="flex flex-col sm:flex-row items-center max-lg:shadow">
    <div className="flex flex-col justify-center items-start sm:items-center max-sm:px-3 bg-[#f6f6f6] w-full sm:w-[250px] lg:w-[150px] py-4 h-full">
      <h1 className="text-base font-medium">{title}</h1>
      <p className="text-gray-400 text-sm font-medium">{subtitle}</p>
    </div>
    <div className="hidden sm:flex items-center px-4 bg-[#c4c4c4] h-full">
      <Image src={arrow} alt="Arrow" width={15} height={15}/>
    </div>
    <div className="relative">
      <Image src={imageSrc} alt="Category" width={319} className="object-contain" />
    </div>
  </div>
);

const Banner = () => {
  const { t } = useTranslation();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [insan1, insan2];
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        setFade(true);
      }, 500);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full py-5 bg-[#f6f6f6]">
      <div className="container flex justify-center mx-auto">
        <div className=" overflow-hidden hidden lg:flex">
          <div
            className={`inset-0 transition-opacity duration-500 ease-in-out ${fade ? "opacity-100" : "opacity-0"}`}
            key={currentImageIndex}
          >
            <Image src={images[currentImageIndex]} alt="Person" className="object-cover w-[400px] h-[300px] xl:w-[450px] xl:h-[350px] 2xl:w-[500px] 2xl:h-[400px]" />
          </div>
        </div>
        <div className="w-[330px] self-center bg-primary-blue justify-center py-5 hidden lg:flex">
          <h1 className="text-lg text-white font-medium">{t('home:banner_medical')}</h1>
        </div>
        <div className="p-3 lg:bg-primary-blue flex flex-col gap-2">
          <CategoryItem title={t('home:banner_respiratory')} subtitle={t('home:banner_devices')} imageSrc={category3} />
          <CategoryItem title={t('home:banner_orthopedic')} subtitle={t('home:banner_products')} imageSrc={category1} />
          <CategoryItem title={t('home:banner_lymphedema')} subtitle={t('home:banner_products')} imageSrc={category2} />
        </div>
      </div>
    </section>
  );
};

export default Banner;
