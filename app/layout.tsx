import type { Metadata } from "next";
import "./globals.css";
import VulturesFooter from "@/components/footer/VulturesFooter";
import React from "react";
import VulturesHeader from "@/components/header/VulturesHeader";
import dynamic from "next/dynamic";

import ReduxProvider from "@/components/ReduxProvider/ReduxProvider";

const VulturesPlayer = dynamic(() => import('@/components/player/VulturesPlayer'), {
    ssr: false,
})

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
        <ReduxProvider>
      {children}
        </ReduxProvider>
      <VulturesFooter/>

      <VulturesPlayer/>

      </body>
    </html>
  );
}
