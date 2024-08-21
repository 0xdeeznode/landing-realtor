import 'bootstrap-icons/font/bootstrap-icons.css';
import { bona, titillium, robotoslab } from "@/utils/fonts";

export default async function RootLayout({ children, params }) {
  const { locale } = params;


  return (
    <html lang={locale}>
      <body className={`${bona} ${titillium} ${robotoslab}`}>
        {children}
      </body>
    </html>
  );
}
