import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://fondationmobarimaria.org"),

  title: {
    default: "Fondation Mobari Maria (FMM) | Vivre pour transformer",
    template: "%s | Fondation Mobari Maria",
  },

  description:
    "La Fondation Mobari Maria (FMM) est une organisation humanitaire en République Démocratique du Congo qui œuvre pour l'autonomisation des femmes, la formation des jeunes, l'éducation, l'action humanitaire et le développement communautaire.",

  keywords: [
    "Fondation Mobari Maria",
    "FMM",
    "ONG RDC",
    "Fondation RDC",
    "Organisation humanitaire",
    "Association caritative",
    "Autonomisation des femmes",
    "Formation professionnelle",
    "Entrepreneuriat",
    "Jeunesse",
    "Orphelins",
    "Enfants vulnérables",
    "Développement communautaire",
    "Action humanitaire",
    "Solidarité",
    "Inclusion sociale",
    "Développement durable",
    "Éducation",
    "Santé",
    "République Démocratique du Congo",
    "Kinshasa",
    "Association",
    "Aide humanitaire",
    "Dons",
    "Bénévolat",
    "Charité",
  ],

  authors: [
    {
      name: "Fondation Mobari Maria",
    },
  ],

  creator: "Fondation Mobari Maria",
  publisher: "Fondation Mobari Maria",

  category: "Non-profit",

  applicationName: "Fondation Mobari Maria",

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://fondationmobarimaria.org",
    siteName: "Fondation Mobari Maria",
    title: "Fondation Mobari Maria (FMM) | Vivre pour transformer",
    description:
      "Construisons ensemble une société plus juste, solidaire et inclusive grâce à l'éducation, l'action humanitaire, l'autonomisation des femmes et le développement communautaire en RDC.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Fondation Mobari Maria",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Fondation Mobari Maria (FMM)",
    description:
      "Vivre pour transformer. Organisation humanitaire engagée pour le développement humain en République Démocratique du Congo.",
    images: ["/images/og-image.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth`}
    >
      <body className="min-h-screen flex flex-col antialiased bg-white text-gray-900">
        {children}
      </body>
    </html>
  );
}