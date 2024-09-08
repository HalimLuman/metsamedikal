'use client'
import { dropdownMenu } from "@/constants";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useTranslation } from "react-i18next";

const Page = () => {
  const { t } = useTranslation();
  const params = useParams(); // Assuming params.link contains 'respiratory-equipments'

  // Find the dropdown menu object based on the 'link' attribute
  const selectedMenu = dropdownMenu.find(menu => menu.link === params.category);

  return (
    <div className="w-full">
      <div className="max-w-7xl mx-auto px-4">
        {selectedMenu ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {selectedMenu.subcategory.map((sub, index) => (
              <Link key={index} href={`/products/${params.category}/${sub.link}`} className="p-4 border rounded-lg hover:shadow">
                <h3 className="">{t(`${sub.category}`)}</h3>
                {/* If subcategory has an image or additional info, add it here */}
                {/* Example: <Image src={subcategory.image} alt={subcategory.name} width={100} height={100} /> */}
              </Link>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-600">No subcategories found.</p>
        )}
      </div>
    </div>
  );
};

export default Page;
