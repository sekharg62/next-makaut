import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import Script from "next/script";
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
  title: {
    default: "makautstudents.help | Free MAKAUT Educational Help",
    template: "%s | makautstudents.help"
  },
  description:
    "makautstudents.help is the ultimate premium and free learning platform for MAKAUT students. Access comprehensive notes, previous year questions (PYQs), syllabus guides, and community peer support.",
  keywords: ["MAKAUT", "MAKAUT students", "MAKAUT notes", "MAKAUT PYQs", "MAKAUT syllabus", "engineering notes", "West Bengal University of Technology", "WBUT", "free study materials"],
  authors: [{ name: "makautstudents.help" }],
  creator: "makautstudents.help",
  metadataBase: new URL("https://makautstudents.help"),
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://makautstudents.help",
    title: "makautstudents.help | Free MAKAUT Educational Help",
    description: "Free educational resources for every MAKAUT student. Access notes, PYQs, syllabus guides, and more.",
    siteName: "makautstudents.help",
  },
  twitter: {
    card: "summary_large_image",
    title: "makautstudents.help | Free MAKAUT Educational Help",
    description: "Free educational resources for every MAKAUT student. Access notes, PYQs, syllabus guides, and more.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
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
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-W4EQZFQE1K" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-W4EQZFQE1K');
          `}
        </Script>
      </body>
    </html>
  );
}
