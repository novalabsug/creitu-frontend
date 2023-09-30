import Header from "@/components/Header";
import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer";
import ToastContext from "@/context/ToastContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "creitu",
  description: "Creitu web app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ToastContext />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
