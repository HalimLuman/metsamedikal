"use client";
import Map from "@/components/Map";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { CiLocationOn, CiMail, CiPhone } from "react-icons/ci";

const page = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
    subject: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true); // Update submission status
    setSubmitStatus(""); // Clear previous status
 // Basic validation
    if (!formData.fullName || !formData.email || !formData.subject || !formData.message || !formData.message) {
      setSubmitStatus("Please fill out all required fields.");
      setIsSubmitting(false);
      return;
    }
    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("Email sent successfully!");
      } else {
        setSubmitStatus("Error sending email.");
      }
    } catch (error) {
      console.error("Error:", error);
      setSubmitStatus("Error sending email.");
    } finally {
      setIsSubmitting(false);
    }
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
                  id="fullName"
                  name="fullName"
                  className="input-contact"
                  value={formData.fullName}
                  onChange={handleChange}
                />
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="subject" className="text-sm">
                  {t("home:groups_subject")}
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="input-contact"
                  value={formData.subject}
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
                <div className="text-center text-blue-500">{submitStatus}</div>
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
            <h2 className="font-semibold text-lg">ADDRESS</h2>
            <p className="my-2 text-xs">Metsamedical</p>
            <div className="flex flex-col gap-2 border-b border-t py-6 mt-5">
              <div className="flex items-center space-x-2">
                <CiPhone className="text-xl" />
                <span className="text-sm font-light">0352 222 07 30</span>
              </div>
              <div className="flex items-center space-x-2">
                <CiMail className="text-xl" />
                <span className="text-sm font-light">
                  metsasaglik@gmail.com
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <CiLocationOn className="text-xl" />
                <span className="text-sm font-light">
                  Atatürk Bulvarı Hastane Caddesi NO:71/A Kocasinan/Kayseri
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
