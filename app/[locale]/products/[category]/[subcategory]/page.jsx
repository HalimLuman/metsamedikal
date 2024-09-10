"use client";
import ProductItem from "@/components/ProductItem";
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
            <ProductItem
              key={index + 1}
              id={product.$id}
              name={product.productName}
              description={product.productDescription}
              category={product.category}
              subcategory={product.subcategory}
              price={product.price}
              image={product.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
