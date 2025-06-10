import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import { ThemeProvider } from "./provider";
import StarCanvas from "@/components/StarBackground";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ecommet : Your Growth Partner in eCommerce, Web & App Development",
  description:
    "Ecommet is your trusted partner for eCommerce, web, and mobile app development. We specialize in Magento, Shopify, custom websites, and scalable digital solutions for startups and enterprises.",
  authors: [{ name: "Ecommet Solutions" }],
  creator: "Ecommet Solutions",
  publisher: "Ecommet Solutions",
  metadataBase: new URL("https://ecommet.in"),
  openGraph: {
    title:
      "Ecommet : Your Growth Partner in eCommerce, Web & App Development",
    description:
      "Ecommet is your trusted partner for eCommerce, web, and mobile app development. We specialize in Magento, Shopify, custom websites, and scalable digital solutions for startups and enterprises.",
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
  robots: {
    index: true,
    follow: true,
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
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="icon" type="image/x-icon" href="/favicon/favicon.ico" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "@id": "https://www.ecommet.in/",
              url: "https://www.ecommet.in/",
              name: "Ecommet Solutions",
              description:
                "Get scalable and tailored development services for Magento, Shopify, web, and mobile apps. Crafted with performance and innovation.",
              image: "https://www.ecommet.in/og-image.png",
              inLanguage: "en-US",
            }),
          }}
        />
      </head>
      <body className={`${inter.className} bg-[#030014]`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
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
