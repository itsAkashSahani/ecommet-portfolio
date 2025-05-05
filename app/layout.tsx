import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import { ThemeProvider } from "./provider";
import StarCanvas from "@/components/StarBackground";
import { Toaster } from 'sonner';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ecommet — Your Digital Partner for eCommerce, Web & App Development",
  description:
    "Ecommet is your trusted partner for eCommerce, web, and mobile app development. We specialize in Magento, Shopify, custom websites, and scalable digital solutions for startups and enterprises.",
  keywords: [
    "Ecommet Solutions",
    "Magento Developer",
    "Adobe Certified Magento Developer",
    "Shopify Developer",
    "Magento Expert India",
    "Freelance Magento Developer",
    "eCommerce development",
    "Magento module development",
    "Shopify app development",
    "custom web development",
    "API integration services",
    "multi-vendor marketplace setup",
    "Ecommet freelancing services",
    "full-stack web solutions",
    "Web development",
    "mobile app development",
  ],
  authors: [{ name: "Akash Sahani" }],
  creator: "Akash Sahani",
  publisher: "Akash Sahani",
  openGraph: {
    title: "Ecommet — Your Digital Partner for eCommerce, Web & App Development",
    description:
      "Explore my work and services as a Magento expert delivering scalable, fast e-commerce experiences.",
    url: "https://ecommet.in",
    siteName: "Ecommet Solutions",
    images: [
      {
        url: "/og-image.png",
        width: 500,
        height: 500,
        alt: "Ecommet Solutions",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ecommet — eCommerce, Web & App Development Solutions",
    description:
      "Get scalable and tailored development services for Magento, Shopify, web, and mobile apps. Crafted with performance and innovation.",
    creator: "@itsakashsahani",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
        <link rel="icon" type="image/x-icon" href="/favicon/favicon.ico" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
      </head>
      <body className={`${inter.className} bg-[#030014]`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <StarCanvas />
          <Toaster richColors position="top-center" />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
