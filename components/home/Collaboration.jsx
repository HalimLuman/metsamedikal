"use client";
import React from "react";
import { Button } from "../ui/button";
import { partners } from "@/constants";
import CarouselSingle from "./CarouselSingle";

const Collaboration = () => {
  return (
    <div className="">
      <div className="container max-w-[1100px] flex flex-col lg:justify-between gap-5">
          <h1 className="my-3 font-bold text-2xl lg:text-3xl border-b-2 border-gray-200 pb-2">
            Markalar
          </h1>
        <div className="flex justify-around overflow-hidden h-[150px] md:h-[200px]">
          <CarouselSingle partners={partners} />
        </div>
      </div>
    </div>
  );
};

export default Collaboration;
