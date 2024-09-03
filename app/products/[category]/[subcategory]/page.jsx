'use client'
import { dropdownMenu, products } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";

const page = () => {
  const params = useParams();
  console.log(params);
  return (
    <div className="w-full py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <div
              key={index+1}
              className="bg-white p-6 rounded-lg shadow-sm border hover:shadow"
            >
              {/* Product Image */}
              <Link href={`/products/${params.category}/${params.subcategory}/${product.name}`}>

              <div className="h-40 rounded-md mb-4 overflow-hidden flex items-center justify-center">
                <Image
                  src={product.img}
                  alt={product.name}
                  className="object-cover h-full w-full"
                />
              </div>
                {/* Product Name */}
                <h2 className="text-lg tracking-wide font-semibold text-primary-blue hover:text-blue-600">
                  {product.name}
                </h2>
              </Link>

              <div>
                <p className="text-xs text-gray-500">AirMini AirFit N30 Maske Paketi   N30 burun maskesi, yumuşak, burun altı burun beşiği ile Res..</p>
                {/* Product Price */}
                <p className="text-blue-500 text-xl font-bold">
                  ${product.price}
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
