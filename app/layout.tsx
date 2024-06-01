import type { Metadata } from "next";
import "./globals.css";
import VulturesFooter from "@/components/footer/VulturesFooter";
import React from "react";
import VulturesHeader from "@/components/header/VulturesHeader";



export const metadata: Metadata = {
  title: "Vultures App",
  description: "Vultures app",
  manifest: "/manifest.json"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body >

      <VulturesHeader/>
      {children}

      <VulturesFooter/>


      </body>
    </html>
  );
}
