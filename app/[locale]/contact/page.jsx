"use client";
import Map from "@/components/Map";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const page = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  return (
    <div>
      <Map address="1600 Amphitheatre Parkway, Mountain View, CA" />
      <div className="container py-10">
        <h1 className="font-bold mb-5">{t("contact")}</h1>
        <hr />
        <div className="flex w-full flex-col md:flex-row mt-10 gap-10">
          <div className="w-full md:w-1/2">
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="flex flex-col gap-1">
                <label htmlFor="fullname" className="text-sm">
                  {t("home:groups_name")}
                </label>
                <input
                  type="text"
                  id="fullname"
                  name="fullName"
                  className="input-contact"
                  value={formData.fullName}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="phone" className="text-sm">
                  {t("home:groups_phone")}
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="input-contact"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="email" className="text-sm">
                  {t("home:groups_email")}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="input-contact"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="message" className="text-sm">
                  {t("home:groups_message")}
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  className="input-contact h-[100px]"
                  value={formData.message}
                  onChange={handleChange}
                />
              </div>
              {submitStatus && (
                <div className="text-center text-red-500">{submitStatus}</div>
              )}
              <div className="flex justify-center">
                <Button
                  type="submit"
                  className="w-full bg-primary-blue"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : t("home:groups_submit")}
                </Button>
              </div>
            </form>
          </div>
          <div className="w-full md:w-1/2">
            <h2>Address</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
