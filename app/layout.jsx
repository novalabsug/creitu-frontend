import Header from "@/components/Header";
import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer";
import ToastContext from "@/context/ToastContext";
import Parent from "@/components/Parent";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "creitu",
  description:
    "Connect with, collaborate with, and be inspired by others who are on similar paths",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ToastContext />
        <Parent>
          <Header />
          {children}
          <Footer />
        </Parent>
      </body>
    </html>
  );
}
