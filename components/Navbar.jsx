import Image from "next/image";
import Link from "next/link";
import { CiFacebook, CiInstagram, CiLocationOn, CiMail, CiPhone } from "react-icons/ci";
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { MdKeyboardArrowDown } from "react-icons/md";
import { logo, logo2 } from "@/public";
import SearchBar from "./home/SearchBar";
import DropDown from "./home/DropDown";
import MobileNav from "./MobileNav";
import { DropdownMenuItem } from "@radix-ui/react-dropdown-menu";

const Navbar = () => {
  return (
    <div className="w-full flex flex-col drop-shadow bg-white">
      {/* Top Bar */}
      <div className="bg-primary-blue w-full">
        <div className="container flex text-white flex-col md:flex-row items-center justify-end md:justify-between py-1 space-y-2 md:space-y-0">
          {/* Contact Information - Hidden on smaller screens */}
          <div className="hidden lg:flex gap-3">
            <div className="flex items-center gap-2">
              <CiPhone />
              <h2 className="text-sm">0352 222 07 30</h2>
            </div>
            <div className="w-[1px] bg-white/30" />
            <div className="flex items-center gap-2">
              <CiMail />
              <h2 className="text-sm">metsasaglik@gmail.com</h2>
            </div>
            <div className="w-[1px] bg-white/30" />
            <div className="flex items-center gap-2">
              <CiLocationOn />
              <h2 className="text-sm">Atatürk Bulvarı Hastane Caddesi NO:71/A Kocasinan/Kayseri</h2>
            </div>
          </div>
          
          {/* Social Media and Language Selector */}
          <div className="flex items-center gap-2">
            <Link href="/">
              <CiInstagram className="text-3xl p-1 rounded-full hover:bg-white/80 hover:text-[#5985d0] transition duration-300" />
            </Link>
            <Link href="/">
              <CiFacebook className="text-3xl p-1 rounded-full hover:bg-white/80 hover:text-[#5985d0] transition duration-300" />
            </Link>
            <div className="w-[1px] bg-white/30 hidden md:block" />
            <div className="flex items-center gap-1">
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <div className="flex items-center gap-1">
                    <MdKeyboardArrowDown />
                    <span>MK</span>
                  </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="p-0 m-0">
                  <DropdownMenuItem className="cursor-pointer hover:text-primary-blue py-1 px-3">
                    MK
                  </DropdownMenuItem>
                  <DropdownMenuItem className="cursor-pointer hover:text-primary-blue py-1 px-3">
                    AL
                  </DropdownMenuItem>
                  <DropdownMenuItem className="cursor-pointer hover:text-primary-blue py-1 px-3">
                    EN
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="container flex justify-between items-center h-[80px]">
        {/* Logo */}
        <Link href='/'>
          <Image src={logo} width={150} alt="logo" style={{ height: 'auto', width: '150px' }}/>
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-5">
          <Link href="/" className="nav-link">
            Home
          </Link>
          <div className="flex items-center gap-1 cursor-pointer">
            <DropDown />
          </div>
          <Link href="/" className="nav-link">
            About
          </Link>
          <Link href="/" className="nav-link">
            Contact
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
