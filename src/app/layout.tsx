import type { Metadata, Viewport } from "next";
import { Rajdhani, Noto_Sans, Noto_Serif } from "next/font/google";
import { Providers } from "@/components/providers";
import AccessibilityFAB from "@/components/ui/AccessibilityFAB";
import { ScrollToTop } from "@/components/ui/scroll-to-top";
import { FloatingUserSystem } from "@/components/ui/floating-user-system";
import "./globals.css";

const rajdhani = Rajdhani({
  variable: "--font-rajdhani",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: 'swap',
});

const notoSans = Noto_Sans({
  variable: "--font-noto-sans", 
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

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "The Boise Gun Club - Treasure Valley Firearms Directory & Community",
  description: "Treasure Valley's comprehensive firearms community platformotion. Directory of 100+ local gun shops, ranges, and trainers. Unified events calendar from all clubs. Community forum connecting Idaho firearms enthusiasts, families, and professionals.",
  keywords: "Treasure Valley firearms, Idaho gun shops, Boise shooting ranges, firearms training, gun clubs Idaho, firearms directory, shooting events, gun community",
  authors: [{ name: "Boise Gun Collective, LLC" }],
  creator: "Boise Gun Collective, LLC",
  publisher: "Boise Gun Collective, LLC",
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${rajdhani.variable} ${notoSans.variable} ${notoSerif.variable} font-noto-sans antialiased`}
        suppressHydrationWarning
      >
        <Providers>
          {children}
          {/* Global accessibility control */}
          <AccessibilityFAB />
          {/* Global scroll to top and user system */}
          <ScrollToTop />
          <FloatingUserSystem />
        </Providers>
      </body>
    </html>
  );
}
