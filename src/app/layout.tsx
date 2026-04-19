import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
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

const isStaging = process.env.NEXT_PUBLIC_ENVIRONMENT !== "production";

export const metadata: Metadata = {
  title: {
    default: "Top Shelf Private Wealth — Built Exclusively for Professional Hockey Players",
    template: "%s | Top Shelf Private Wealth",
  },
  description:
    "The only flat-fee fiduciary advisory firm built exclusively for professional hockey players. Jock tax strategy, cross-border planning, and compressed-window wealth management.",
  metadataBase: new URL(
    isStaging
      ? "https://tspw-marketing-site.vercel.app"
      : "https://topshelfprivatewealth.com"
  ),
  robots: isStaging ? { index: false, follow: false } : { index: true, follow: true },
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
        <ScrollToTop />
        <Navigation />
        <main className="flex-1">{children}</main>
        <Footer />
        <GoogleAnalytics gaId="G-EFHP5DPH6G" />
      </body>
    </html>
  );
}
