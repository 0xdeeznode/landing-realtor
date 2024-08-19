import { bona, titillium, robotoslab } from "@/utils/fonts";
import "./globals.css";
import 'bootstrap-icons/font/bootstrap-icons.css';
import Footer from "@/components/footer/Footer";
import Contact from "@/components/contact/Contact";
import Header from "@/components/header/Header";


export const metadata = {
  title: "Dubai Real Estate | Buy, Sell, Rent & Invest in Properties",
  description: "Expert real estate services in Dubai. Buy, sell, rent, and invest in properties with confidence. Schedule a property consultation with our experienced agents today!",
  keywords: "Dubai real estate, buy property Dubai, sell property Dubai, rent property Dubai, invest in Dubai, property consultation Dubai",
  author: "AlDuran Real Estate",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${bona} ${titillium} ${robotoslab}`}>
        {children}
        <Footer />
        <Contact />
      </body>
    </html>
  );
}
