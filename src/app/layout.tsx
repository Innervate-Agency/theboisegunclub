import type { Metadata } from "next";
import { Rajdhani, Noto_Sans, Noto_Serif } from "next/font/google";
import { ThemeProvider } from "next-themes";
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

export const metadata: Metadata = {
  title: "The Boise Gun Club - Treasure Valley Firearms Directory & Community",
  description: "Treasure Valley's comprehensive firearms community platform. Directory of 100+ local gun shops, ranges, and trainers. Unified events calendar from all clubs. Community forum connecting Idaho firearms enthusiasts, families, and professionals.",
  keywords: "Treasure Valley firearms, Idaho gun shops, Boise shooting ranges, firearms training, gun clubs Idaho, firearms directory, shooting events, gun community",
  authors: [{ name: "The Boise Gun Club" }],
  creator: "The Boise Gun Club",
  publisher: "The Boise Gun Club",
  robots: "index, follow",
  viewport: "width=device-width, initial-scale=1",
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
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange={false}
          themes={['light', 'dark', 'gruvbox', 'system']}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}