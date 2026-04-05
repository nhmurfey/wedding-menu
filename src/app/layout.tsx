import type { Metadata } from "next";
import { Playfair_Display, Libre_Baskerville } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  display: "swap",
});

const libre = Libre_Baskerville({
  variable: "--font-body",
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

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
    <html
      lang="en"
      className={`${playfair.variable} ${libre.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-[var(--font-body)]">
        {children}
      </body>
    </html>
  );
}
