import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Holly & Nathan — Wedding Menu",
  description:
    "A guide to the evening's food, wine, and the stories between them. April 15th, 2026.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col font-body">
        {children}
      </body>
    </html>
  );
}
