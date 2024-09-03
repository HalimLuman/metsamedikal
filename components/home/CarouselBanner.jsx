import React from 'react'
import { CarouselItem } from '../ui/carousel'
import { Button } from '../ui/button'
import Image from 'next/image'

const CarouselBanner = ({title, description, image, style}) => {
  return (
    <CarouselItem className={`bg-gradient-to-t from-blue-600 to-blue-200`}>
          <div className={`container flex flex-col  ${style === 'left' ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center justify-evenly gap-10 lg:gap-20`}>
            <div className={`flex flex-col text-center ${style === 'left' ? 'lg:text-left items-start' : 'lg:text-right items-end'} `}>
              <h1 className="mb-6 max-w-lg font-extrabold text-3xl lg:text-5xl">
                {title}
              </h1>
              <p className="text-lg text-gray-700 max-w-lg mx-auto lg:mx-0">
                {description}
              </p>
              <Button className={`w-full lg:w-[150px] mt-6 bg-blue-600 text-white hover:bg-blue-700 rounded-md transition duration-300`}>
                Shop Now
              </Button>
            </div>
            <div className="flex-shrink-0">
              <Image
                src={image}
                alt="Orthopedic Products"
                width={550}
                height={400}
                className="object-cover"
                style={{ height: 'auto', width: 'auto' }}
              />
            </div>
          </div>
        </CarouselItem>
  )
}

export default CarouselBanner