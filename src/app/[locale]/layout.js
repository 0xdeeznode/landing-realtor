import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { bona, titillium, robotoslab } from "@/utils/fonts";
import './globals.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Footer from "@/components/footer/Footer";
import Contact from "@/components/contact/Contact";

export const metadata = {
  title: "Dubai Real Estate | Buy, Sell, Rent & Invest in Properties",
  description: "Expert real estate services in Dubai. Buy, sell, rent, and invest in properties with confidence. Schedule a property consultation with our experienced agents today!",
  keywords: "Dubai real estate, buy property Dubai, sell property Dubai, rent property Dubai, invest in Dubai, property consultation Dubai",
  author: "AlDuran Real Estate",
};

export default async function RootLayout({ children, params }) {
  const { locale } = params;

  // Load the appropriate messages for the current locale
  const messages = await getMessages(locale);

  return (
    <html lang={locale}>
      <body className={`${bona} ${titillium} ${robotoslab}`}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
          <Footer />
          <Contact />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
