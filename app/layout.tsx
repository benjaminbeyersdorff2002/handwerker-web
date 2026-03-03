import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Webentwicklung für Handwerksbetriebe | Professionelle Websites zum Festpreis",
  description:
    "Moderne, SEO-optimierte Websites für Handwerksbetriebe. Agentur-Qualität zum fairen Preis – geliefert in 1–2 Wochen. Starter ab 799 €.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
