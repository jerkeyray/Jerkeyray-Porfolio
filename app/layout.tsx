import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next"

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
    url: "jerkeyray.com",
    images: [
      {
        url: "./favicon.ico",
        width: 600,
        height: 600,
        alt: "Aditya Srivastava Portfolio",
      },
    ],
  },
  icons: {
    icon: "./favicon.ico",
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
      <body className="relative overflow-y-auto bg-black">
        <div className="relative min-h-screen">
          {/* Content container */}
          <div className="relative">{children}</div>
        </div>
        <Analytics />
      </body>
    </html>
  );
}
