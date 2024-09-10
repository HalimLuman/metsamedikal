"use client";
import { maske1, maske2, philipsProduct } from "@/public";
import Image from "next/image";
import { useParams } from "next/navigation";
import React, { useState, useEffect } from "react";
import { getProductById } from "@/lib/actions/product.actions";

const Page = () => {
  const params = useParams();
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productData = await getProductById(params.product);
        setProduct(productData);
      } catch (error) {
        console.log(error);
      }
    };

    fetchProducts();
  }, []);
  const [mainImage, setMainImage] = useState(product.image);
  const [prevImage, setPrevImage] = useState(philipsProduct);

  const handleImageClick = (newImage) => {
    setMainImage(newImage);
    setPrevImage(newImage);
  };

  const handleMouseEnter = (newImage) => {
    setPrevImage(mainImage);
    setMainImage(newImage);
  };

  const handleMouseLeave = () => {
    setMainImage(prevImage);
  };

  return (
    <div className="w-full flex flex-col md:flex-row gap-10">
      <div className="w-full md:w-2/3 flex flex-col gap-5">
        <div className="w-full flex justify-center border rounded-lg bg-white p-1 shadow-md h-[250px] lg:h-[400px]">
          <Image src={product.image} width={400} height={400} alt="Main product image" className="rounded-md" priority={true}/>
        </div>
        <div className="flex gap-4">
          {/* {[maske2, maske1, philipsProduct].map((image, index) => (
            <div
              key={index}
              className="flex justify-center border rounded-md bg-white p-2 shadow-sm hover:shadow-md transition-shadow duration-300 cursor-pointer"
              onClick={() => handleImageClick(image)} 
              onMouseEnter={() => handleMouseEnter(image)}
              onMouseLeave={handleMouseLeave}
            >
              <Image src={image} width={80} height={80} alt={`Additional product image ${index + 1}`} className="rounded-md" />
            </div>
          ))} */}
        </div>
      </div>
      <div className="flex flex-col w-full md:w-1/3 p-5 rounded-lg">
        <div className="flex flex-col">
          <h1 className="text-2xl lg:text-4xl font-bold tracking-wide text-gray-800 break-words max-w-full mb-3">
            {product.productName}
          </h1>
          <span className="text-gray-500 text-sm mb-1">Ref Number: {product.referenceNumber}</span>
          <span className="text-2xl lg:text-3xl font-semibold my-3 text-gray-900">{product.price} MKD</span>
          <span className="font-semibold mb-1 mt-5">Description:</span>
          <hr className="lg:w-[250px]"/>
          <p className="mt-2">{product.productDescription}</p>
        </div>
      </div>
    </div>
  );
};

export default Page;
