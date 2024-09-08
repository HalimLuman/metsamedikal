"use client";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { dropdown1, dropdown2, dropdownMenu } from "@/constants";
import { logo2 } from "@/public";
import Image from "next/image";
import Link from "next/link";
import { CiMenuBurger } from "react-icons/ci";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const MobileNav = () => {
  const [openCategories, setOpenCategories] = useState({});
  const [openProductGroups, setOpenProductGroups] = useState(false);
  const [openDiseases, setOpenDiseases] = useState(false);
  const [openDropdown1, setOpenDropdown1] = useState(false);
  const [openDropdown2, setOpenDropdown2] = useState(false);
  const { t } = useTranslation();

  const toggleCategory = (index) => {
    setOpenCategories((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  const toggleProductGroups = () =>
    setOpenProductGroups((prevState) => !prevState);
  const toggleDropdown1 = () => setOpenDropdown1((prevState) => !prevState);
  const toggleDropdown2 = () => setOpenDropdown2((prevState) => !prevState);

  return (
    <section className="w-full max-w-[264px]">
      <Sheet>
        <SheetTrigger>
          <CiMenuBurger />
        </SheetTrigger>
        <SheetContent
          side="left"
          className="border-none bg-white w-full min-h-[100vh] overflow-y-auto"
        >
          <Link href="/" className="cursor-pointer flex items-center gap-1">
            <Image src={logo2} width={130} height={120} alt="Metsa logo" />
          </Link>

          <div className="pt-10">
            <nav className="flex flex-col gap-3">
              {/* Product Groups */}
              <div className="flex flex-col w-full border-b pb-2">
                <div
                  className="flex justify-between items-center cursor-pointer"
                  onClick={toggleProductGroups}
                >
                  <p className="text-black">{t("products")}</p>
                  <MdKeyboardArrowDown
                    className={`text-lg text-black transition-transform ${
                      openProductGroups ? "rotate-180" : ""
                    }`}
                  />
                </div>

                {openProductGroups && (
                  <div className="pl-4 mt-2">
                    {dropdownMenu.map((item, index) => (
                      <div
                        key={item.link}
                        className="flex flex-col w-full py-2"
                      >
                        <div className="flex justify-between items-center">
                          <Link href={`/products/${item.link}`}>
                            <p className="text-gray-700">
                              {t(`${item.category}`)}
                            </p>
                          </Link>
                          {item.subcategory && item.subcategory.length > 0 && (
                            <div
                              className="flex items-center cursor-pointer"
                              onClick={() => toggleCategory(index)}
                              role="button"
                              aria-expanded={
                                openCategories[index] ? "true" : "false"
                              }
                              aria-controls={`subcategory-${index}`}
                            >
                              <MdKeyboardArrowDown
                                className={`text-lg text-black transition-transform ${
                                  openCategories[index] ? "rotate-180" : ""
                                }`}
                              />
                            </div>
                          )}
                        </div>
                        {openCategories[index] && (
                          <div
                            id={`subcategory-${index}`}
                            className="pl-5 mt-2"
                          >
                            {item.subcategory.map((sub, subIndex) => (
                              <div className="w-full py-1" key={subIndex}>
                                <Link
                                  href={`/products/${item.link}/${sub.link}`}
                                  className="text-gray-600 hover:text-primary-blue"
                                >
                                  {t(`${sub.category}`)}
                                </Link>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Dropdown 1 */}
              <div className="flex flex-col w-full border-b pb-2">
                <div
                  className="flex justify-between items-center cursor-pointer"
                  onClick={toggleDropdown1}
                >
                  <p className="text-black">{t("institutional")}</p>
                  <MdKeyboardArrowDown
                    className={`text-lg text-black transition-transform ${
                      openDropdown1 ? "rotate-180" : ""
                    }`}
                  />
                </div>

                {openDropdown1 && (
                  <div className="pl-4 mt-2">
                    {dropdown1.map((item) => (
                      <div
                        key={item.link}
                        className="flex flex-col w-full py-2"
                      >
                        <Link href={`/products/${item.link}`}>
                          <p className="text-gray-700">{t(`${item.title}`)}</p>
                        </Link>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Dropdown 2 */}
              <div className="flex flex-col w-full border-b pb-2">
                <div
                  className="flex justify-between items-center cursor-pointer"
                  onClick={toggleDropdown2}
                >
                  <p className="text-black">{t("dealerships")}</p>
                  <MdKeyboardArrowDown
                    className={`text-lg text-black transition-transform ${
                      openDropdown2 ? "rotate-180" : ""
                    }`}
                  />
                </div>

                {openDropdown2 && (
                  <div className="pl-4 mt-2">
                    {dropdown2.map((item, index) => (
                      <div
                        key={item.link}
                        className="flex flex-col w-full py-2"
                      >
                        <div className="flex justify-between items-center">
                          {item.subcategory && item.subcategory.length > 0 ? (
                            <span className="text-gray-700">
                            {t(`${item.category}`)}
                            </span> // Use span if it has subcategories
                          ) : (
                            <Link href={`/products/${item.link}`}>
                              <p className="text-gray-700">{t(`${item.category}`)}</p>
                            </Link>
                          )}
                          {item.subcategory && item.subcategory.length > 0 && (
                            <div
                              className="flex items-center cursor-pointer"
                              onClick={() => toggleCategory(index)}
                              role="button"
                              aria-expanded={
                                openCategories[index] ? "true" : "false"
                              }
                              aria-controls={`subcategory-${index}`}
                            >
                              <MdKeyboardArrowDown
                                className={`text-lg text-black transition-transform ${
                                  openCategories[index] ? "rotate-180" : ""
                                }`}
                              />
                            </div>
                          )}
                        </div>
                        {openCategories[index] && (
                          <div
                            id={`subcategory-${index}`}
                            className="pl-5 mt-2"
                          >
                            {item.subcategory.map((sub, subIndex) => (
                              <div key={sub.link} className="w-full py-1">
                                {sub.subcategory &&
                                sub.subcategory.length > 0 ? (
                                  <span className="text-gray-600">
                                  {t(`${sub.category}`)}
                                  </span> // Use span for nested categories with further subcategories
                                ) : (
                                  <Link
                                    href={`/diseases/${sub.category}/${sub.link}`}
                                    className="text-gray-600 hover:text-primary-blue"
                                  >
                                    {t(`${sub.category}`)}
                                  </Link>
                                )}
                                {/* Check if this subcategory has further subcategories */}
                                {sub.subcategory &&
                                  sub.subcategory.length > 0 && (
                                    <div className="pl-4 mt-2">
                                      {sub.subcategory.map(
                                        (nestedSub, nestedIndex) => (
                                          <div
                                            key={nestedSub.link}
                                            className="w-full py-1"
                                          >
                                            <Link
                                              href={`/products/${item.link}/${sub.link}/${nestedSub.link}`}
                                              className="text-gray-500 hover:text-primary-blue"
                                            >
                                              {t(`${nestedSub.category}`)}
                                            </Link>
                                          </div>
                                        )
                                      )}
                                    </div>
                                  )}
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </nav>
          </div>
        </SheetContent>
      </Sheet>
    </section>
  );
};

export default MobileNav;
