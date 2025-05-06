import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import { ThemeProvider } from "./provider";
import StarCanvas from "@/components/StarBackground";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ecommet — Your Digital Partner for eCommerce, Web & App Development",
  description:
    "Ecommet is your trusted partner for eCommerce, web, and mobile app development. We specialize in Magento, Shopify, custom websites, and scalable digital solutions for startups and enterprises.",
  authors: [{ name: "Akash Sahani" }],
  creator: "Akash Sahani",
  publisher: "Akash Sahani",
  metadataBase: new URL("https://ecommet.in"),
  openGraph: {
    title:
      "Ecommet — Your Digital Partner for eCommerce, Web & App Development",
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
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
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
              "@graph": [
                {
                  "@type": "CollectionPage",
                  "@id": "https://www.ecommet.in/",
                  url: "https://www.ecommet.in/",
                  name: "Ecommet — Your Digital Partner for eCommerce, Web & App Development",
                  isPartOf: {
                    "@id": "https://www.ecommet.in/#website",
                  },
                  about: {
                    "@id": "https://www.ecommet.in/#organization",
                  },
                  description:
                    "Ecommet is your trusted partner for eCommerce, web, and mobile app development. We specialize in Magento, Shopify, custom websites, and scalable digital solutions for startups and enterprises.",
                  breadcrumb: {
                    "@id": "https://www.ecommet.in/#breadcrumb",
                  },
                  inLanguage: "en-US",
                },
                {
                  "@type": "BreadcrumbList",
                  "@id": "https://www.ecommet.in/#breadcrumb",
                  itemListElement: [
                    {
                      "@type": "ListItem",
                      position: 1,
                      name: "Home",
                    },
                  ],
                },
                {
                  "@type": "WebSite",
                  "@id": "https://www.ecommet.in/#website",
                  url: "https://www.ecommet.in/",
                  name: "Ecommet Solutions",
                  description:
                    "Get scalable and tailored development services for Magento, Shopify, web, and mobile apps. Crafted with performance and innovation.",
                  publisher: {
                    "@id": "https://www.ecommet.in/#organization",
                  },
                  inLanguage: "en-US",
                },
                {
                  "@type": "Organization",
                  "@id": "https://www.ecommet.in/#organization",
                  name: "Ecommet Solutions",
                  url: "https://www.ecommet.in/",
                  logo: {
                    "@type": "ImageObject",
                    inLanguage: "en-US",
                    "@id": "https://www.ecommet.in/#/schema/logo/image/",
                    url: "https://www.ecommet.in/og-image.png",
                    contentUrl: "https://www.ecommet.in/og-image.png",
                    width: 380,
                    height: 380,
                    caption: "Ecommet Solutions",
                  },
                  image: {
                    "@id": "https://www.ecommet.in/#/schema/logo/image/",
                  },
                },
              ],
            }),
          }}
        />
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
