"use client";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { dropdownMenu } from "@/constants";
import { logo2 } from "@/public";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CiMenuBurger } from "react-icons/ci";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useState } from "react";

const MobileNav = () => {
  const [openNav, setOpenNav] = useState(false);
  const [openCategories, setOpenCategories] = useState({});

  const toggleCategory = (index) => {
    setOpenCategories((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

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
          <Link
            href="/"
            className="cursor-pointer flex items-center gap-1"
          >
            <Image src={logo2} width={130} height={120} alt="Metsa logo" />
          </Link>
          <div>
            <nav className="flex flex-col gap-3 pt-10">
              {dropdownMenu.map((item, index) => (
                <div
                  key={item.link}
                  className="flex flex-col w-full border-b pb-2"
                >
                  <div className="flex justify-between items-center">
                    <Link href={`/products/${item.link}`}>
                      <p className="text-black">{item.category}</p>
                    </Link>
                    {item.subcategory && item.subcategory.length > 0 && (
                      <div
                        className="flex items-center cursor-pointer"
                        onClick={() => toggleCategory(index)}
                        role="button"
                        aria-expanded={openCategories[index] ? "true" : "false"}
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
                    <div id={`subcategory-${index}`} className="pl-5 mt-2">
                      {item.subcategory.map((sub, subIndex) => (
                        <div className="w-full py-1" key={subIndex}>
                          <Link
                            href={`/products/${item.link}/${sub.link}`}
                            className="text-gray-500 hover:text-primary-blue"
                          >
                          {'• '}{sub.category}
                          </Link>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>
          </div>
        </SheetContent>
      </Sheet>
    </section>
  );
};

export default MobileNav;
