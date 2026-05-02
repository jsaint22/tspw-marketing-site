import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Top Shelf Private Wealth",
  description:
    "Top Shelf Private Wealth is a financial planning practice for professional hockey players. Public availability returns later in 2026.",
  metadataBase: new URL("https://topshelfprivatewealth.com"),
  robots: { index: false, follow: false },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Top Shelf Private Wealth",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} h-full`}
    >
      <body className="min-h-full flex flex-col antialiased">
        <main className="flex-1">{children}</main>
        <GoogleAnalytics gaId="G-EFHP5DPH6G" />
      </body>
    </html>
  );
}
