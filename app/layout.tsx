import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import ReponsiveNavbar from "@/components/fragments/Navbar/ReponsiveNavbar";
import Footer from "@/components/fragments/Footer/Footer";

const font = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth md:scroll-auto">
      <body className={`${font.className} scroll-smooth`}>
        <ReponsiveNavbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
