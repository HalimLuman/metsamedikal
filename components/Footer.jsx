import { dropdownMenu } from "@/constants";
import { footerLeft, footerRight, logo, logo2 } from "@/public";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CiFacebook, CiInstagram, CiLinkedin, CiLocationOn, CiMail, CiPhone, CiTwitter, CiYoutube } from "react-icons/ci";
import { PiGoogleLogoLight, PiWhatsappLogoLight } from "react-icons/pi";

const Footer = () => {
  const midIndex = Math.ceil(dropdownMenu.length / 2);
  const firstHalf = dropdownMenu.slice(0, midIndex);
  const secondHalf = dropdownMenu.slice(midIndex);

  return (
    <footer className="w-full bg-[#f6f6f6]">
      <div className="mx-auto flex flex-col lg:flex-row justify-between items-center">
        <div className="hidden lg:block self-end">
          <Image src={footerLeft} alt="footer-left" width={200} height={200}/>
        </div>

        <div className="flex flex-col lg:flex-row justify-between lg:justify-around items-center lg:items-start w-full py-10">
          {/* Logo and Contact Section */}
          <div className="mb-8 lg:mb-0 py-5 flex flex-col items-center" >
            <Image src={logo} alt="Company logo" width={200} style={{ height: 'auto', width: '200px' }} />
            <div className="mt-[2rem] lg:mt-[5rem]">
              <div className="flex gap-3">
              <Link href="http://metsamedikal.com.tr/#" target="_blank" aria-label="Facebook">
                <CiFacebook className="social-link" />
              </Link>
              <Link href="http://metsamedikal.com.tr/#" target="_blank" aria-label="Twitter">
                <CiTwitter className="social-link" />
              </Link>
              <Link href="http://metsamedikal.com.tr/#" target="_blank" aria-label="Google">
                <PiGoogleLogoLight className="social-link" />
              </Link>
              <Link href="http://metsamedikal.com.tr/#" target="_blank" aria-label="Instagram">
                <CiInstagram className="social-link" />
              </Link>
              <Link href="http://metsamedikal.com.tr/#" target="_blank" aria-label="Linkedin">
                <CiLinkedin className="social-link" />
              </Link>
              <Link href="http://metsamedikal.com.tr/#" target="_blank" aria-label="Youtube">
                <CiYoutube className="social-link" />
              </Link>
              <Link href="http://metsamedikal.com.tr/#" target="_blank" aria-label="Whatsapp">
                <PiWhatsappLogoLight className="social-link" />
              </Link>
            </div>
              
            </div>
          </div>

          {/* Products Section */}
          <div className="mb-8 lg:mb-0 max-lg:w-2/3">
            <h3 className="text-lg font-semibold pb-1">Products</h3>
            <hr />
            <div className="flex flex-col lg:flex-row lg:space-x-[5rem] mt-3">
              <div className="flex flex-col space-y-2">
                {firstHalf.map((item) => (
                  <Link href={item.link} key={item.category}>
                    <span className="hover:text-primary-blue cursor-pointer text-sm">
                      {item.category}
                    </span>
                  </Link>
                ))}
              </div>
              <div className="flex flex-col space-y-2">
                {secondHalf.map((item) => (
                  <Link href={item.link} key={item.category}>
                    <span className="hover:text-primary-blue cursor-pointer text-sm">
                      {item.category}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Social Media Section */}
          <div className="max-lg:w-2/3">
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="flex flex-col space-y-2">
                <div className="flex items-center gap-2">
                  <CiPhone />
                  <span>+389 123 456</span>
                </div>
                <div className="flex items-center gap-2">
                  <CiMail />
                  <span>info@gmail.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <CiLocationOn />
                  <span>123 Main St, City, Country</span>
                </div>
              </div>
            
          </div>
        </div>

        <div className="hidden lg:block self-start relative bottom-10">
          <Image src={footerRight} alt="footer-right" width={120} height={300} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
