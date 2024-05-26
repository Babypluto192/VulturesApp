import type { Metadata } from "next";
import localFont from "next/font/local";



const myFont = localFont({ src: '../../fonts/GregorianFLF.ttf' })

export const metadata: Metadata = {
  title: "Music",
  description: "Music",
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
