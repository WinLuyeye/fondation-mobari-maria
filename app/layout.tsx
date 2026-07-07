import type { Metadata, Viewport } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#facc15",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://fondationmobarimaria.org"),
  title: {
    default: "Fondation Mobari Maria (FMM) | Vivre pour transformer",
    template: "%s | Fondation Mobari Maria",
  },
  description:
    "La Fondation Mobari Maria (FMM) est une organisation humanitaire en République Démocratique du Congo engagée dans l'autonomisation des femmes, la formation des jeunes, l'éducation, l'action humanitaire et le développement communautaire.",
  keywords: [
    "Fondation Mobari Maria",
    "FMM",
    "ONG RDC",
    "ONG Kinshasa",
    "Organisation humanitaire RDC",
    "Association caritative RDC",
    "Aide humanitaire",
    "Don RDC",
    "Bénévolat RDC",
    "Autonomisation des femmes",
    "Formation professionnelle",
    "Entrepreneuriat féminin",
    "Jeunesse RDC",
    "Orphelins",
    "Enfants vulnérables",
    "Développement communautaire",
    "Solidarité",
    "Inclusion sociale",
    "Développement durable",
  ],
  authors: [{ name: "Fondation Mobari Maria" }],
  creator: "Fondation Mobari Maria",
  publisher: "Fondation Mobari Maria",
  applicationName: "Fondation Mobari Maria",
  category: "Non-profit",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://fondationmobarimaria.org",
    siteName: "Fondation Mobari Maria",
    title: "Fondation Mobari Maria (FMM) | Vivre pour transformer",
    description:
      "Une fondation engagée pour transformer des vies à travers l'éducation, l'autonomisation, l'action humanitaire et le développement communautaire en RDC.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Fondation Mobari Maria - Vivre pour transformer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fondation Mobari Maria (FMM)",
    description:
      "Vivre pour transformer. Une organisation engagée pour un avenir meilleur en République Démocratique du Congo.",
    images: ["/images/og-image.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "NGO",
  name: "Fondation Mobari Maria",
  alternateName: "FMM",
  url: "https://fondationmobarimaria.org",
  logo: "https://fondationmobarimaria.org/images/logo.png",
  description:
    "Organisation humanitaire œuvrant pour l'éducation, l'autonomisation des femmes, la formation des jeunes et le développement communautaire en RDC.",
  foundingDate: "2022-06-05",
  slogan: "Vivre pour transformer",
  areaServed: "République Démocratique du Congo",
  sameAs: ["https://facebook.com/", "https://instagram.com/"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${geistSans.variable} h-full scroll-smooth`}>
      <body className="min-h-screen flex flex-col antialiased bg-white text-gray-900">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}