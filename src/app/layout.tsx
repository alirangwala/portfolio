// import {Outfit} from "next/font/google";
import "./globals.css";
import { Metadata } from "next";

// const outfit = Outfit({ subsets: ["latin"]})

export const metadata: Metadata = {
  title: "Ali Rangwala",
  description: "Portfolio Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
