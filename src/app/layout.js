import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import logo from '@/assets/Logo.png';
import ClientLayout from './ClientLayout';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: 'swap',
  preload: true,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: 'swap',
  preload: true,
});

export const metadata = {
  title: "Tattoo Studio",
  description: "Professional tattoo studio with experienced artists",
  openGraph: {
    title: "Tattoo Studio",
    description: "Professional tattoo studio with experienced artists",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tattoo Studio",
    description: "Professional tattoo studio with experienced artists",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ClientLayout logo={logo}>{children}</ClientLayout>
      </body>
    </html>
  );
}