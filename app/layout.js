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
    "I believe in building a relationship that aligns with Islamic values — with mutual respect, clear intentions, and the goal of marriage (nikah). I value honesty, commitment, and family involvement to keep things halal.",
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
