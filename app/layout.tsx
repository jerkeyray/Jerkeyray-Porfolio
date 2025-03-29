import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aditya Srivastava",
  description: "Developer Portfolio",
  openGraph: {
    title: "Aditya Srivastava",
    description: "Developer Portfolio",
    type: "website",
    url: "https://yourwebsite.com", 
    images: [
      {
        url: "https://yourwebsite.com/og-image.png", 
        width: 1200,
        height: 630,
        alt: "Aditya Srivastava Portfolio",
      },
    ],
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="relative bg-gradient-to-b from-black via-gray-900 to-black overflow-y-auto"
      >
        {children}
      </body>
    </html>
  );
}