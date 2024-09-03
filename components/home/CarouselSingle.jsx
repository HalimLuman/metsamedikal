import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

const CarouselSingle = ({ partners }) => {
  return (
    <div className="w-full">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 2000, // Adjust delay as needed
          }),
        ]}
        className="w-full"
      >
        <CarouselContent className="-mt-1 h-[200px]">
          {partners.map((partner, index) => (
            <CarouselItem key={index} className="basis-1/2 md:basis-1/6">
              <div className="flex items-center justify-center h-[100px] w-auto">
                <Image
                  src={partner} // Assuming `partner` is a valid image source
                  alt={`Partner ${index + 1}`}
                  width={100} // Adjust width as needed
                  height={100} // Adjust height as needed
                  className="object-contain"
                  style={{ height: "auto", width: "auto" }} // Ensures aspect ratio is maintained
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        
      </Carousel>
    </div>
  );
};

export default CarouselSingle;
