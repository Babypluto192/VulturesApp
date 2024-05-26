import type { Metadata } from "next";
import "./globals.css";
import localFont from 'next/font/local'
import {NextFont} from "next/dist/compiled/@next/font";

const myFont:NextFont = localFont({ src: '../fonts/GregorianFLF.ttf' })


export const metadata: Metadata = {
  title: "Vultures App",
  description: "Vultures app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={myFont.className}>{children}</body>
    </html>
  );
}
