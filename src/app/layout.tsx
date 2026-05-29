import type { Metadata } from "next";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://spurimagery.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Spur Imagery — Creating Memories Through Lens",
    template: "%s | Spur Imagery",
  },
  description:
    "Spur Imagery is a professional photography company based in Lagos, Nigeria. We specialise in portrait shoots, wedding coverage, corporate events, and drone photography.",
  keywords: [
    "photography Lagos",
    "Lagos photographer",
    "wedding photography Lagos",
    "portrait photography Nigeria",
    "corporate photography Lagos",
    "drone photography Lagos",
    "pre-wedding photography Nigeria",
    "event photography Lagos",
    "Spur Imagery",
    "professional photographer Nigeria",
    "Surulere photographer",
  ],
  authors: [{ name: "Spur Imagery", url: siteUrl }],
  creator: "Spur Imagery",
  publisher: "Spur Imagery",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: siteUrl,
    siteName: "Spur Imagery",
    title: "Spur Imagery — Creating Memories Through Lens",
    description:
      "Elegant photography crafted to preserve stories of love, identity, celebration, and connection — in Lagos and beyond.",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Spur Imagery — Photography in Lagos, Nigeria",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Spur Imagery — Creating Memories Through Lens",
    description:
      "Elegant photography crafted to preserve stories of love, identity, celebration, and connection — in Lagos and beyond.",
    images: ["/images/og-image.png"],
  },
  alternates: {
    canonical: siteUrl,
  },
  other: {
    "geo.region": "NG-LA",
    "geo.placename": "Lagos, Nigeria",
    "geo.position": "6.5244;3.3792",
    ICBM: "6.5244, 3.3792",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Spur Imagery",
  description:
    "Professional photography company based in Lagos, Nigeria, specialising in portrait, wedding, corporate, and drone photography.",
  url: siteUrl,
  logo: `${siteUrl}/logo.png`,
  image: `${siteUrl}/images/og-image.png`,
  telephone: "+2349023567745",
  email: "spurimagery@gmail.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "12b, Jimoh Meji Street, Ijesha",
    addressLocality: "Surulere",
    addressRegion: "Lagos",
    addressCountry: "NG",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 6.5244,
    longitude: 3.3792,
  },
  areaServed: [
    { "@type": "City", name: "Lagos" },
    { "@type": "Country", name: "Nigeria" },
  ],
  serviceType: [
    "Portrait Photography",
    "Wedding Photography",
    "Pre-wedding Photography",
    "Corporate Event Photography",
    "Drone Photography",
  ],
  priceRange: "$$",
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    opens: "08:00",
    closes: "18:00",
  },
  sameAs: [
    "https://instagram.com/spurimagery",
    "https://facebook.com/spurimagery",
    "https://twitter.com/spurimagery",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        <link rel="preconnect" href="https://api.fontshare.com" />
        <link
          href="https://api.fontshare.com/v2/css?f[]=clash-display@400,500,600,700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
