import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProductItem = ({
  id,
  name,
  description,
  category,
  subcategory,
  price,
  image,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-sm border hover:shadow flex flex-col justify-between">
      {/* Product Image */}
      <div className="p-3 pb-0">
        <h2 className="text-lg tracking-wide font-semibold rounded-sm hover:text-blue-600 mb-3 bg-[#eee] px-3 py-2">
          {name}
        </h2>
        <Link href={`/products/${category}/${subcategory}/${id}`}>
          <div className="rounded-md mb-4 overflow-hidden flex items-center justify-center h-[250px]">
            <Image
              src={image}
              alt={name}
              width={250}
              height={200}
              className="object-cover"
            />
          </div>
          {/* Product Name */}
        </Link>
      </div>
      <div className="border-t">
        <p className="text-primary-blue text-lg font-bold px-5 py-3">
          {price} MKD
        </p>
      </div>
    </div>
  );
};

export default ProductItem;
