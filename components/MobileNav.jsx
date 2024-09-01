'use client'
import Image from "next/image";
import { useState } from "react";
import { IoClose } from "react-icons/io5";
import { CiMenuBurger } from "react-icons/ci";
import { dropdownMenu } from "@/constants";
import Link from "next/link";
import { MdKeyboardArrowDown } from "react-icons/md";
import { nextImage } from "@/public";

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
    <div>
      <div onClick={() => setOpenNav(!openNav)}>
        <CiMenuBurger className="text-2xl" />
      </div>
      <div
        className={`fixed inset-0 min-h-screen bg-black bg-opacity-50 transition-opacity duration-300 ${
          openNav ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setOpenNav(false)}
      />
      <div
        className={`fixed top-0 left-0 min-h-screen w-3/4 bg-white shadow-lg transform transition-transform duration-300 ${
          openNav ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between w-full p-5">
          <Image src={nextImage} width={100} height={100} alt="logo" />
          <IoClose className="text-3xl" onClick={() => setOpenNav(false)} />
        </div>
        <div className="flex flex-col w-full">
          {dropdownMenu.map((item, index) => (
            <div key={index}>
              <div className="w-full flex items-center justify-between px-5">
                <Link
                  href={item.link}
                  className={`hover:text-primary-blue ${
                    openCategories[index]
                      ? "text-primary-blue font-semibold"
                      : ""
                  }`}
                >
                  {item.category}
                </Link>
                {item.subcategory && item.subcategory.length > 0 && (
                  <MdKeyboardArrowDown
                    className={`text-lg ${
                      openCategories[index] ? "rotate-180" : ""
                    }`}
                    onClick={() => toggleCategory(index)}
                  />
                )}
              </div>
              {openCategories[index] && (
                <div className="pl-7 mt-2">
                  {item.subcategory.map((sub, subIndex) => (
                    <div className="w-full py-1" key={subIndex}>
                      <Link
                        href={sub.link}
                        className="hover:text-primary-blue"
                      >
                        {sub.category}
                      </Link>
                    </div>
                  ))}
                </div>
              )}
              <hr className="my-3" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
