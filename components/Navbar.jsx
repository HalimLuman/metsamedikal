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
      <div className="bg-primary-blue w-full py-3">
  <div className="container mx-auto flex items-center justify-between text-white md:space-y-0 px-6">
    {/* Contact Information - Visible only on larger screens */}
    <div className="items-center flex space-x-8">
      <div className="flex items-center space-x-2">
        <CiPhone className="text-xl" />
        <span className="text-sm font-light">0352 222 07 30</span>
      </div>
      <div className="w-[1px] h-6 bg-white/40" />
      <div className="hidden lg:flex items-center space-x-2">
        <CiMail className="text-xl" />
        <span className="text-sm font-light">metsasaglik@gmail.com</span>
      </div>
      <div className="hidden lg:flex w-[1px] h-6 bg-white/40" />
      <div className="hidden lg:flex items-center space-x-2">
        <CiLocationOn className="text-xl" />
        <span className="text-sm font-light">Atatürk Bulvarı Hastane Caddesi NO:71/A Kocasinan/Kayseri</span>
      </div>
    </div>

    {/* Social Media and Language Selector */}
    <div className="flex items-center space-x-4">
      {/* Social Media Links */}
      <Link href="/" className="text-white hover:text-gray-200 transition duration-200">
        <CiInstagram className="text-2xl" />
      </Link>
      <Link href="/" className="text-white hover:text-gray-200 transition duration-200">
        <CiFacebook className="text-2xl" />
      </Link>

      {/* Language Selector */}
      <div className="relative">
        <DropdownMenu>
          <DropdownMenuTrigger className="flex items-center gap-1 cursor-pointer hover:text-gray-200 transition duration-200">
            <span className="text-sm font-light">MK</span>
            <MdKeyboardArrowDown className="text-lg" />
          </DropdownMenuTrigger>
          <DropdownMenuContent className=" bg-white text-primary-blue rounded-md shadow-md">
            {["MK", "AL", "EN"].map((lang) => (
              <DropdownMenuItem
                key={lang}
                className="cursor-pointer hover:bg-primary-blue rounded-md hover:text-white py-2 px-4 transition duration-200"
              >
                {lang}
              </DropdownMenuItem>
            ))}
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
