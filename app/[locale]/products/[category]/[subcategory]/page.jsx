"use client";
import ProductItem from "@/components/ProductItem";
import { getProductsBySubcategory } from "@/lib/actions/product.actions";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const Page = () => {
  const params = useParams();
  const [fetchedProducts, setFetchedProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        if (params?.subcategory) {
          const productsData = await getProductsBySubcategory(params.subcategory);
          setFetchedProducts(productsData || []);  // Make sure it's an array or empty array
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchProducts();
  }, [params.subcategory]); // Ensure to re-run when subcategory changes

  return (
    <div className="w-full py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {fetchedProducts.length > 0 ? (
            fetchedProducts.map((product, index) => (
              <ProductItem
                key={index}
                id={product.$id}
                name={product.productName}
                description={product.productDescription}
                category={product.category}
                subcategory={product.subcategory}
                price={product.price}
                image={product.image}
              />
            ))
          ) : (
            <p>No products found in this subcategory.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Page;
