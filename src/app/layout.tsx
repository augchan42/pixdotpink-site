import type { Metadata } from "next";
import { Geist, Geist_Mono, Permanent_Marker } from "next/font/google";
import "./globals.css";
import GoogleAnalytics from '@/components/GoogleAnalytics'
import { Analytics } from "@vercel/analytics/next"
import Header from '@/components/Header'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const marker = Permanent_Marker({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Pix • Tactical Oracle",
  description: "Street-level divination tech detecting patterns in the digital flow. Quick tactical readings from the neon-lit undercity.",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://pix.pink'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    title: "Pix | Digital Samurai Oracle",
    description: "Swift hexagram analysis cutting through market noise. Ancient wisdom meets augmented pattern recognition.",
    siteName: 'Pix',
    images: [
      {
        url: "/api/og",
        width: 1200,
        height: 630,
        alt: "Pix - Digital Samurai Oracle",
        type: 'image/png',
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Pix • Street-Level Oracle",
    description: "Tactical divination tech running in the shadows. Quick, precise readings where market data meets ancient wisdom.",
    images: ["/api/og"],
    creator: '@8bitoracle',
  },
  keywords: [
    "I-Ching",
    "market patterns",
    "tactical divination",
    "digital samurai",
    "pattern recognition",
    "market analysis",
    "hexagram flows",
    "street oracle"
  ],
  authors: [{ name: 'Digital Rain Studios' }],
  creator: 'Digital Rain Studios',
  publisher: 'Digital Rain Studios',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
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
  themeColor: "#FF71BE", // A more vibrant neon pink to match the cyberpunk aesthetic
  manifest: '/manifest.json',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${marker.className} antialiased`}
      >
        <Header />
        {children}
        <GoogleAnalytics />
        <Analytics />
      </body>
    </html>
  );
}
