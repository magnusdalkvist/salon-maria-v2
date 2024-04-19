import { Inter } from "next/font/google";
import "./globals.css";
import "./index.css";
import { Header } from "@/app/modules/Header";
import { Footer } from "./modules/Footer";
import Script from "next/script";

export const metadata = {
  title: "Salon Maria",
  description: "Velkommen til Salon Maria - en bæredygtig, familievenlig frisøreoplevelse med innovative klipninger og luksuriøs hårpleje",
  favicon: "/favicon.ico",
  openGraph: {
    images: '/logo.webp',
  },
};



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Script id="cookieyes" type="text/javascript" src="https://cdn-cookieyes.com/client_data/927b04ae803e24da1af8530c/script.js"></Script>
      <body className="bg-grey">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
