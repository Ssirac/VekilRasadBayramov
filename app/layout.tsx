import type { Metadata } from "next";
import { Fraunces, Instrument_Sans } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/components/LanguageProvider";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { site } from "@/lib/site";

// Self-hosted at build time by next/font. latin-ext is REQUIRED for
// Azerbaijani glyphs (ə ğ ş ç ö ü ı).
const serif = Fraunces({
  subsets: ["latin", "latin-ext"],
  variable: "--font-serif",
  display: "swap",
  weight: ["400", "500", "600"],
});

const sans = Instrument_Sans({
  subsets: ["latin", "latin-ext"],
  variable: "--font-sans",
  display: "swap",
  weight: ["400", "500", "600"],
});

// Current deployment target (GitHub Pages). Trailing slash keeps the repo
// sub-path when resolving relative OG image URLs.
// TODO(client): switch to the final custom domain (e.g. https://presedent.az/).
const SITE_URL = "https://ssirac.github.io/VekilRasadBayramov/";
// OG/Twitter image resolved relative to SITE_URL (no leading slash → keeps sub-path).
const OG_IMAGE = "images/resad-bayramov.png";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Rəşad Bayramov — Vəkil | PRESEDENT Vəkil Bürosu, Bakı",
  description:
    "Vəkil Rəşad Bayramov — mülki, cinayət, korporativ, ailə və əmək hüququ üzrə 12+ il təcrübə. PRESEDENT Vəkil Bürosu, Bakı. Konsultasiya: +994 55 788 58 48.",
  keywords: [
    "vəkil",
    "Bakı vəkil",
    "hüquqşünas",
    "Rəşad Bayramov",
    "PRESEDENT Vəkil Bürosu",
    "cinayət işləri vəkili",
    "korporativ hüquq",
  ],
  authors: [{ name: site.name }],
  openGraph: {
    type: "profile",
    locale: "az_AZ",
    title: "Rəşad Bayramov — Vəkil | PRESEDENT Vəkil Bürosu, Bakı",
    description:
      "Mülki, cinayət, korporativ, ailə və əmək hüququ üzrə 12+ il təcrübə. Konsultasiya: +994 55 788 58 48.",
    siteName: site.bureau,
    images: [
      {
        url: OG_IMAGE,
        width: 640,
        height: 640,
        alt: site.portraitAlt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rəşad Bayramov — Vəkil | PRESEDENT Vəkil Bürosu, Bakı",
    description:
      "Mülki, cinayət, korporativ, ailə və əmək hüququ üzrə 12+ il təcrübə.",
    images: [OG_IMAGE],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="az" className={`${serif.variable} ${sans.variable}`}>
      <body>
        <LanguageProvider>
          <Nav />
          <main>{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
