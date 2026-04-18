import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Clutch Momentum | Unlock Real Brand Collaborations",
  description: "The direct-access marketplace between creators and verified brand decision-makers. No middlemen. Just real opportunities.",
  keywords: ["creator marketplace", "brand collaborations", "influencer marketing", "brand decision makers"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased scroll-smooth`}>
      <body className="min-h-full font-sans bg-background text-foreground flex flex-col">
        {children}
      </body>
    </html>
  );
}
