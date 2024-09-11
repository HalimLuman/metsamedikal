"use client";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { getProductsByName } from "@/lib/actions/product.actions";
import ProductItem from "@/components/ProductItem";
import { useTranslation } from "react-i18next";

const SearchResultsPage = () => {
  const searchParams = useSearchParams();
  const query = searchParams.get("query"); // Get the query param
  const [products, setProducts] = useState([]);
  const { t } = useTranslation();

  useEffect(() => {
    const fetchProducts = async () => {
      if (query) {
        try {
          const result = await getProductsByName(query);
          // Ensure result is an array
          setProducts(Array.isArray(result) ? result : []);
        } catch (error) {
          console.error("Failed to fetch products:", error);
          setProducts([]); // Reset to an empty array in case of error
        }
      } else {
        setProducts([]); // Clear products if there's no query
      }
    };

    fetchProducts();
  }, [query]); // Fetch new products when query changes

  return (
    <div className="min-h-[500px]">
      <h1 className="font-semibold mb-10 text-lg">
        {products.length} {t("results")} "{query}" :
      </h1>
      {products.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductItem
              key={product.$id} // Use a unique key like product.$id
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
      ) : (
        <p>{t("not-found")}</p>
      )}
    </div>
  );
};

export default SearchResultsPage;
