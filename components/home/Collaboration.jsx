"use client";
import React from "react";
import { Button } from "../ui/button";
import { partners } from "@/constants";
import CarouselSingle from "./CarouselSingle";

const Collaboration = () => {
  // Divide the partners array into two halves
  const midIndex = Math.ceil(partners.length / 2);
  const firstHalf = partners.slice(0, midIndex);
  const secondHalf = partners.slice(midIndex);

  return (
    <div className="py-10 border border-black/10 mt-10">
      <div className="container flex flex-col lg:flex-row lg:justify-between gap-10 lg:gap-20">
        <div className="flex flex-col text-center lg:text-left">
          <span className="text-lg tracking-wider font-semibold text-black/80">
            Team, Customer, Community
          </span>
          <h1 className="my-3 font-bold text-2xl lg:text-3xl">
            We work with the Best Partners
          </h1>
          <p className="text-md text-black/70 max-w-full lg:max-w-[550px] mx-auto lg:mx-0">
            As a leading medical supply company, we proudly collaborate with
            over 20 dedicated partners. Each of these companies specializes in
            healthcare products, ensuring that we offer the highest quality
            solutions for our clients.
          </p>
          <Button className="w-full lg:w-[150px] bg-primary-blue hover:bg-primary-blue/80 rounded-sm mt-5 mx-auto lg:mx-0">
            Contact
          </Button>
        </div>
        <div className="flex gap-20 lg:w-[500px] justify-around overflow-hidden h-[300px]">
          <CarouselSingle partners={firstHalf} />
          <CarouselSingle partners={secondHalf} />
        </div>
      </div>
    </div>
  );
};

export default Collaboration;
