import type { Metadata } from "next";
import "./globals.css";
import ScrollToTop from "@/components/ScrollToTop";

export const metadata: Metadata = {
  title: "Marka Aydınlatma | Premium Aydınlatma Çözümleri",
  description: "En kaliteli aydınlatma ürünleri ve çözümleri. Kristal avizeler, modern lambalar, LED aydınlatma sistemleri.",
  keywords: "aydınlatma, avize, lamba, LED, kristal avize, modern aydınlatma",
  openGraph: {
    title: "Marka Aydınlatma",
    description: "Premium aydınlatma çözümleri",
    type: "website",
  },
  themeColor: "#111314",
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr" className="scroll-smooth">
      <head>
        <meta name="theme-color" content="#111314" />
      </head>
      <body className="min-h-screen bg-coal text-ivory/90 font-inter antialiased">
        {children}
        <ScrollToTop />
      </body>
    </html>
  );
}