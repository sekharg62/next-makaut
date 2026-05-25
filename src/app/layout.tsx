import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "makautstudents.help | Free MAKAUT Educational Help",
  description:
    "makautstudents.help — a premium, public learning platform for MAKAUT students. Notes, PYQs, syllabus guides, and peer support. Free for everyone.",
  metadataBase: new URL("https://makautstudents.help"),
  openGraph: {
    title: "makautstudents.help | MAKAUT Student Help",
    description: "Free educational resources for every MAKAUT student.",
    url: "https://makautstudents.help",
    siteName: "makautstudents.help",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${plusJakarta.variable} h-full scroll-smooth`}
    >
      <body className="flex min-h-full flex-col antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
