import type { Metadata } from "next";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Make sure to include this CSS

import "./globals.css";
import { Nav } from "./component";
import { Footer } from "./sections";
import { ReactNode } from "react";
import CartProvider from "./context/CartContaxt";
import Topbar from "./component/Topbar";
import { BuyProvider } from "./context/BuyContext";

export const metadata: Metadata = {
  title: "Created Makeup website",
  description: "Generated by create next app",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Topbar />
        <Nav />
        <ToastContainer />
        <BuyProvider>
          <CartProvider>{children}</CartProvider>
        </BuyProvider>
        <section className="padding-x padding-l bg-[#EB89B5] padding-t">
          <Footer />
        </section>
      </body>
    </html>
  );
}
