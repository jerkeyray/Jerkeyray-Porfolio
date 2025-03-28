import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aditya Srivastava",
  description: "Developer Portfolio",
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