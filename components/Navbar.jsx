'use client'
import Image from "next/image";
import Link from "next/link";
import {
  CiFacebook,
  CiInstagram,
  CiLocationOn,
  CiMail,
  CiPhone,
} from "react-icons/ci";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MdKeyboardArrowDown } from "react-icons/md";
import { logo, logo2 } from "@/public";
import SearchBar from "./home/SearchBar";
import DropDown from "./home/DropDown";
import MobileNav from "./MobileNav";
import { DropdownMenuItem } from "@radix-ui/react-dropdown-menu";
import { dropdown1, dropdown2, dropdownMenu } from "@/constants";
import LanguageChanger from "./LanguageChanger";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const { t } = useTranslation();
  return (
    <div className="w-full flex flex-col drop-shadow bg-white">
      {/* Top Bar */}
      <div className="bg-primary-blue w-full py-1">
        <div className="container mx-auto flex items-center justify-between text-white md:space-y-0 px-6">
          {/* Contact Information - Visible only on larger screens */}
          <div className="items-center flex space-x-8">
            <div className="hidden lg:flex items-center space-x-2">
              <CiPhone className="text-xl" />
              <span className="text-sm font-light">0352 222 07 30</span>
            </div>
            <div className="hidden lg:flex w-[1px] h-6 bg-white/40" />
            <div className="hidden lg:flex items-center space-x-2">
              <CiMail className="text-xl" />
              <span className="text-sm font-light">metsasaglik@gmail.com</span>
            </div>
            <div className="hidden lg:flex w-[1px] h-6 bg-white/40" />
            <div className="hidden lg:flex items-center space-x-2">
              <CiLocationOn className="text-xl" />
              <span className="text-sm font-light">
                Atatürk Bulvarı Hastane Caddesi NO:71/A Kocasinan/Kayseri
              </span>
            </div>
          </div>

          {/* Social Media and Language Selector */}
          <div className="flex items-center space-x-4 max-lg:w-full max-lg:justify-between">
            {/* Social Media Links */}
            <div className="flex gap-4">

            <Link
              href="/"
              className="text-white hover:text-gray-200 transition duration-200"
            >
              <CiInstagram className="text-2xl" />
            </Link>
            <Link
              href="/"
              className="text-white hover:text-gray-200 transition duration-200"
            >
              <CiFacebook className="text-2xl" />
            </Link>

            </div>
            {/* Language Selector */}
            <div className="relative">
              <LanguageChanger />
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="container flex justify-between items-center h-[80px]">
        {/* Logo */}
        <Link href="/" className="flex flex-col">
          <Image
            src={logo2}
            width={150}
            alt="logo"
            style={{ height: "auto", width: "150px" }}
            priority={true}
          />
          <span className="text-[10px] text-[#068cd7] font-medium opacity-75 text-right italic mt-1">{t('slogan')}</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-2 xl:gap-5">
          <Link href="/" className="nav-link">
            {t('home')}
          </Link>
          <div className="flex items-center gap-1">
            <DropDown menu={dropdownMenu} title={t('products')} />


          </div>
          <div className="flex items-center gap-1 cursor-pointer">
            <DropdownMenu>
              <DropdownMenuTrigger>
                <div className="flex items-center nav-link gap-1">
                  <MdKeyboardArrowDown className="text-lg" />
                  <h1>{t('institutional')}</h1>
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-50 rounded-none bg-[#585858] text-white border-none p-1">
                {dropdown1.map((item, index) => (
                  <Link href={`/${item.link}`} key={index} className="">
                    <DropdownMenuItem className=" hover:bg-primary-blue  rounded-none px-2 py-1 outline-none">
                      <span className="w-full cursor-pointer text-xs">
                      {t(`${item.title}`)}
                      </span>
                    </DropdownMenuItem>
                  </Link>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <div className="flex items-center gap-1 cursor-pointer">
            <DropDown menu={dropdown2} title={t('diseases')} />
          </div>
          <Link href="/contact" className="nav-link">
          {t('contact')}
          </Link>
        </div>

        {/* Desktop Search Bar */}
        <div className="hidden lg:flex items-center">
          <SearchBar />
        </div>

        {/* Mobile Navigation */}
        <div className="lg:hidden">
          <MobileNav />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
