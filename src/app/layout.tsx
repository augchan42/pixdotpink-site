import type { Metadata } from "next";
import { Geist, Geist_Mono, Permanent_Marker } from "next/font/google";
import "./globals.css";
import GoogleAnalytics from '@/components/GoogleAnalytics'

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
  openGraph: {
    title: "Pix | Digital Samurai Oracle",
    description: "Swift hexagram analysis cutting through market noise. Ancient wisdom meets augmented pattern recognition.",
    images: [
      {
        url: "/api/og",
        width: 1200,
        height: 630,
        alt: "Pix - Digital Samurai Oracle"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Pix • Street-Level Oracle",
    description: "Tactical divination tech running in the shadows. Quick, precise readings where market data meets ancient wisdom.",
    images: ["/api/og"]
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
  themeColor: "#FF71BE" // A more vibrant neon pink to match the cyberpunk aesthetic
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
        {children}
        <GoogleAnalytics />
      </body>
    </html>
  );
}
