'use client';
import { dropdownMenu } from "@/constants";
import { klinik, logo } from "@/public";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Button } from "../ui/button";
import { useTranslation } from "react-i18next";

const ProductGroups = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    message: ''
  });
  const [hoveredMenu, setHoveredMenu] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');
  const { t } = useTranslation();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData)
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  return (
    <div className="w-full pb-16 mb-16">
      <div className="container mx-auto flex flex-col w-full items-center md:flex-row justify-center gap-10">
        <div className="flex gap-5 md:self-end max-md:w-[90%]">
          <div className="flex-col items-center justify-center w-[300px] hidden lg:flex">
            <div className="w-[200px] h-[200px] flex items-center justify-center rounded-full overflow-hidden border-2 border-sky-400">
              {hoveredMenu ? (
                <Image
                  src={hoveredMenu.img}
                  alt={hoveredMenu.category}
                  width={200}
                  height={200}
                  objectFit="contain"
                />
              ) : (
                <Image
                  src={logo}
                  alt="Default logo"
                  width={200}
                  height={200}
                  objectFit="contain"
                />
              )}
            </div>
            <p className="mt-4">{hoveredMenu ? t(`${hoveredMenu.category}`) : ""}</p>
          </div>

          <div className="flex flex-col md:items-end max-md:w-full">
            <h2 className="font-semibold text-xl mb-5">{t('home:groups_header')}</h2>
            <div className="flex max-md:w-full">
              <div className="flex flex-col md:items-end py-2 max-md:w-full">
                {dropdownMenu.map((menu, index) => (
                  <Link
                    key={index}
                    href={menu.link}
                    className="text-lg py-4 md:text-xs md:py-1 border-b md:border-none max-md:w-full hover:bg-blue-400 px-3 hover:text-white"
                    onMouseEnter={() => setHoveredMenu(menu)}
                    onMouseLeave={() => setHoveredMenu(null)}
                  >
                    {t(`${menu.category}`)}
                  </Link>
                ))}
              </div>
              <div className="w-4 bg-blue-400 h-full hidden md:block" />
            </div>
          </div>
        </div>

        <div
          className="mt-10 w-[90%] md:w-[350px] p-6 px-10 rounded-sm shadow-md z-10"
          style={{ backgroundImage: `url(${klinik.src})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
          <h2 className="text-2xl font-semibold text-center mb-6 text-white">{t('home:groups_contact')}</h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="fullname" className="sr-only">{t('home:groups_name')}</label>
              <input
                type="text"
                id="fullname"
                name="fullName"
                className="input-contact"
                placeholder={t('home:groups_name')}
                value={formData.fullName}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="phone" className="sr-only">{t('home:groups_phone')}</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="input-contact"
                placeholder={t('home:groups_phone')}
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="email" className="sr-only">{t('home:groups_email')}</label>
              <input
                type="email"
                id="email"
                name="email"
                className="input-contact"
                placeholder={t('home:groups_email')}
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="message" className="sr-only">{t('home:groups_message')}</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="input-contact h-[100px]"
                placeholder={t('home:groups_message')}
                value={formData.message}
                onChange={handleChange}
              />
            </div>
            {submitStatus && (
              <div className="text-center text-red-500">
                {submitStatus}
              </div>
            )}
            <div className="flex justify-center">
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-700 to-sky-400"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Submitting...' : t('home:groups_submit')}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProductGroups;
