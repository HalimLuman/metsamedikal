'use client'
import React from "react";
import { products } from "@/constants";
import Image from "next/image";
import { MdArrowRightAlt } from "react-icons/md";
import { Button } from "../ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { kose, saglikci1 } from "@/public";
import Autoplay from "embla-carousel-autoplay";
import { useTranslation } from "react-i18next";

const Products = () => {
  const {t} = useTranslation();
  return (
    <section className="w-full py-12">
      <div className="mx-auto px-4 flex flex-col">
        <div className="text-left ml-14 mb-10 w-[70%] 2xl:self-center">
          <h1 className="font-bold text-4xl text-gray-800 mb-4">{t('home:carousel_header')}</h1>
        </div>
        {/* Main Flex Container */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center">
          {/* First Image Positioned at Bottom-Left of the Carousel for Large Screens */}
          <div className="relative 2xl:top-[180px] 2xl:left-[215px] top-[190px] left-[205px] hidden 2xl:block">
            <Image src={kose} width={300} height={100} alt="solkose" />
          </div>

          {/* Carousel */}
          <div className="relative w-[90%] 2xl:w-[60%] bg-[#f6f6f6] p-6 py-0 pb-12 rounded-xl">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              plugins={[
                Autoplay({
                  delay: 4000,
                }),
              ]}
              className="w-full"
            >
              <CarouselContent className="flex">
                {products.map((product, index) => (
                  <CarouselItem
                    key={index}
                    className="basis-full sm:basis-1/2 lg:basis-1/3 2xl:basis-1/4 flex flex-col items-center p-4 rounded-lg transition-shadow duration-300"
                  >
                    <div className="flex items-center justify-center h-[200px] w-full mb-4 overflow-hidden rounded-md border border-gray-200">
                      <Image
                        src={product.img}
                        alt={`Product ${index + 1}`}
                        width={250}
                        height={200}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <div className="self-start">
                      <h2 className="text-xl font-semibold text-gray-800 mb-2">{product.name}</h2>
                      <Button className="mt-4 bg-primary-blue text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors duration-200">
                      {t('home:carousel_detail')}
                        <MdArrowRightAlt className="inline ml-2" />
                      </Button>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>

          {/* Last Image Positioned Next to Carousel for Large Screens */}
          <div className="mt-4 lg:mt-0 hidden 2xl:block relative bottom-20">
            <Image src={saglikci1} width={400} height={200} alt="saglikci" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
