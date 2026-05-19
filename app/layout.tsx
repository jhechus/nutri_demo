import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const inter = Inter({ subsets: ["latin"], variable: "--font-geist-sans" });

export const metadata: Metadata = {
  title: "Nutrición Integral - Nutrióloga Daniela Rivera",
  description: "Nutrición personalizada para transformar tu salud sin dietas imposibles. Planes flexibles, acompañamiento profesional y hábitos sostenibles.",
  openGraph: {
    title: "Nutrición Integral - Nutrióloga Daniela Rivera",
    description: "Nutrición personalizada para transformar tu salud sin dietas imposibles.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={inter.variable}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
