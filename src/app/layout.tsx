import type { Metadata } from "next";
import { Rajdhani, Noto_Sans, Noto_Serif } from "next/font/google";
import "./globals.css";

const rajdhani = Rajdhani({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: 'swap',
});

const notoSans = Noto_Sans({
  variable: "--font-body", 
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: 'swap',
});

const notoSerif = Noto_Serif({
  variable: "--font-serif",
  subsets: ["latin"], 
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "The Boise Gun Club - Treasure Valley Firearms Collective",
  description: "Your comprehensive digital hub uniting ALL Treasure Valley firearms communities. Featuring every club, event, all regional businesses, and connecting enthusiasts, families, and professionals across our premier firearms region.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${rajdhani.variable} ${notoSans.variable} ${notoSerif.variable} font-body antialiased`}
      >
        {children}
      </body>
    </html>
  );
}