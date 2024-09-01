import { products } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MdArrowRightAlt } from "react-icons/md";
import { Button } from "../ui/button";

const Products = () => {
  return (
    <div className="w-full">
      <div className="container flex flex-col">
        <div className="w-full flex justify-between py-10">
          <h1>New Products</h1>
          <Link
            href="/products"
            className="flex items-center gap-2 text-primary-blue hover:text-blue-700"
          >
            <span>View All</span>
            <MdArrowRightAlt />
          </Link>
        </div>
        <div className="w-full flex justify-between">
          {products.map((product, index) => (
            <div
              key={index}
              className="shadow rounded-lg flex flex-col items-center justify-between w-[400px]"
            >
              <Image src={product.img} width={150} style={{ height: 'auto', width: '150px' }} alt="product" />
              <hr />
              <div className="p-2">
                <h2 className="w-full text-left">{product.name}</h2>
                <span className="w-full text-left">{product.price}MKD</span>
              </div>
              <Button className="text-sm bg-primary-blue hover:bg-blue-700 w-full text-center rounded-t-none">Add to Cart</Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
