"use client";
import Link from "next/link";
import React from "react";
import { useParams } from "next/navigation";
import { dropdownMenu } from "@/constants";
import { useTranslation } from "react-i18next";

const Layout = ({ children }) => {
  const params = useParams();
  const { t } = useTranslation();
  const formatHeader = (slug) => {
    if (!slug) return ''; // Return an empty string if slug is undefined
    return slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
  };
  
  const category = params.category || ''; // Provide default empty string
  const subcategory = params.subcategory || ''; // Provide default empty string
  
  return (
    <div className="py-10">
      <div className="w-[90%] mx-auto lg:container">
        {/* Header Section */}
        <div className="bg-[#f6f6f6] lg:p-4 py-3 shadow-sm rounded border border-gray-200 max-md:hidden">
          <div className=" w-[90%] mx-auto flex max-md:justify-between items-center">
            <Link
              href="/"
              className="text-primary-blue font-semibold hover:text-blue-500"
            >
              Home
            </Link>
            <span className="mx-4 text-gray-700">/</span>
            {category ? (
              <Link
                href={`/products/${category}`}
                className="text-primary-blue font-semibold hover:text-blue-500 text-sm lg:text-base text-center"
              >
                {formatHeader(t(`categories:${category}`))}
              </Link>
            ) : (
              <span className="text-gray-800 font-semibold text-sm lg:text-base text-center">
                {formatHeader(category)}
              </span>
            )}

            {subcategory && (
              <>
                <span className="mx-4 text-gray-700">/</span>

                <span className="text-gray-800 font-semibold text-sm lg:text-base">
                {formatHeader(t(`categories:${category}_${subcategory}`))}
                </span>
              </>
            )}
          </div>
        </div>
        <div className="flex justify-between mt-6">
          {/* Sidebar Section */}
          {!params.product && params.category &&(
            <div className="hidden lg:flex bg-white shadow rounded-lg border border-gray-200">
              <ul className="divide-y divide-gray-200">
                {dropdownMenu.map((category) => (
                  <li key={category.link} className="p-3">
                    <Link
                      href={`/products/${category.link}`}
                      className="text-gray-700 hover:text-blue-600 text-sm font-medium"
                    >
                      <span>{t(`${category.category}`)}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Main Content Section */}
          <div className={`w-full ${params.product || !params.product? 'lg:w-full' : 'lg:w-3/4'} lg:px-4`}>
            <div className="w-full">
              {/* Add product cards or content here */}
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
