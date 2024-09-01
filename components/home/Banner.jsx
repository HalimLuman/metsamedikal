'use client'
import {
  Carousel,
  CarouselContent,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import CarouselBanner from "./CarouselBanner";
import { banner } from "@/constants";

const Banner = () => {
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      plugins={[
        Autoplay({
          delay: 7000,
        }),
      ]}
    >
      <CarouselContent>
        {banner.map((item,index) => (
          <CarouselBanner key={index+1} image={item.image} title={item.title} description={item.description} bgColor={item.bgColor} style={index === 0 || index === 2 ? 'left': 'right'}/>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default Banner;
