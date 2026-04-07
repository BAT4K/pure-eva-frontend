import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/components/cart-provider";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://pureeva.shop'),
  title: {
    template: "%s | Pure Eva",
    default: "Pure Eva | Botanical Skincare",
  },
  description: "Cleanse, hydrate, and reveal your natural radiance with our 100% botanical facial cleanser.",
  openGraph: {
    title: "Pure Eva | Botanical Skincare",
    description: "Cleanse, hydrate, and reveal your natural radiance with our 100% botanical facial cleanser.",
    url: 'https://pureeva.shop',
    siteName: 'Pure Eva',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Pure Eva | Botanical Skincare",
    description: "Cleanse, hydrate, and reveal your natural radiance with our 100% botanical facial cleanser.",
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#F7F4F0]">
        <CartProvider>
          <SiteHeader />
          {children}
          <SiteFooter />
        </CartProvider>
      </body>
    </html>
  );
}
