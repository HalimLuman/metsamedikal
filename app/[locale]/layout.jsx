import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { cn } from "@/lib/utils"
import TranslationsProvider from "@/components/TranslationsProvider";
import initTranslations from "../i18n";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});
export const metadata = {
  title: "Metsamedical",
  description: "Metsa Medical Store",
 icons: {
    icon: '/iconmarker.png'
  }
};

const RootLayout = async ({ children, params: { locale } }) => {
  const i18nNamespaces = ["navbar", "home", "categories", "diseases", 'sleepDisorders', 'respiratoryFailure'];
  const { resources } = await initTranslations(locale, i18nNamespaces);

  return (
    <html lang={locale}>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        {/* <CartProvider></CartProvider> */}
          <TranslationsProvider
            namespaces={i18nNamespaces}
            locale={locale}
            resources={resources}
          >
            <Navbar />
            {children}
            <Footer />
          </TranslationsProvider>
      </body>
    </html>
  );
};

export default RootLayout;