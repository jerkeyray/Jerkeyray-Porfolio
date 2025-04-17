import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// Import Inter for use throughout the entire site
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Aditya Srivastava",
  description: "Developer Portfolio",
  openGraph: {
    title: "Aditya Srivastava",
    description: "Developer Portfolio",
    type: "website",
    url: "https://jerkeyray.vercel.app",
    images: [
      {
        url: "https://yourwebsite.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Aditya Srivastava Portfolio",
      },
    ],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <body className="relative bg-gradient-to-b from-black via-gray-900 to-black overflow-y-auto">
        {children}
      </body>
    </html>
  );
}
