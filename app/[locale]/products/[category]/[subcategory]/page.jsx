'use client'
import { products } from "@/constants";
import { getProductsBySubcategory } from "@/lib/actions/product.actions";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const page = () => {
  const params = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productsData = await getProductsBySubcategory(params.subcategory);
        setProducts(productsData);
      } catch (error) {
        console.log(error);
      }
    };

    fetchProducts();
  }, []);
  return (
    <div className="w-full py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <div
              key={index+1}
              className="bg-white p-4 rounded-lg shadow-sm border hover:shadow"
            >
              {/* Product Image */}
              <Link href={`/products/${params.category}/${params.subcategory}/${product.$id}`}>
              <div className="rounded-md mb-4 overflow-hidden flex items-center justify-center">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={300}
                  height={300}
                  className="object-cover"
                />
              </div>
                {/* Product Name */}
                <h2 className="text-lg tracking-wide font-semibold  hover:text-blue-600">
                  {product.productName}
                </h2>
              </Link>

              <div>
                <p className="text-xs text-gray-500 my-2">{product.productDescription}</p>
                {/* Product Price */}
                <p className="text-primary-blue text-lg font-bold">
                  {product.price} MKD
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
