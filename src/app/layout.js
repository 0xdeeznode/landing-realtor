import { bona, cormorant, roboto } from "@/utils/fonts";
import "./globals.css";
import 'bootstrap-icons/font/bootstrap-icons.css';


export const metadata = {
  title: "Dubai Real Estate | Buy, Sell, Rent & Invest in Properties",
  description: "Expert real estate services in Dubai. Buy, sell, rent, and invest in properties with confidence. Schedule a property consultation with our experienced agents today!",
  keywords: "Dubai real estate, buy property Dubai, sell property Dubai, rent property Dubai, invest in Dubai, property consultation Dubai",
  author: "AlDuran Real Estate",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${bona} ${cormorant} ${roboto}`}>
        {children}
      </body>
    </html>
  );
}
