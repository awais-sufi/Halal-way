import "./globals.css";
import Footer from "../components/Footer";
import { Outfit } from "next/font/google";
import Navbar from "components/Navbar";

const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Halal-Way",
  description:
    "Discover Halal-Way your trusted guide to halal food, products, and lifestyle. Find verified halal options and live your values with confidence.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={outfit.className}>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
