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
  title: "Xăm Hình Nghệ Thuật Chuyên Nghiệp | Tattoo Studio Vietnam",
  description: "Xăm hình nghệ thuật chuyên nghiệp tại Việt Nam. Dịch vụ xăm hình đa dạng: xăm hình nghệ thuật, xăm hình phong thủy, xăm hình 3D, xăm hình màu nước. Nghệ sĩ xăm hình tài năng với nhiều năm kinh nghiệm.",
  keywords: "xăm hình nghệ thuật, xăm hình Hà Nội, xăm hình Sài Gòn, xăm hình phong thủy, hình xăm mini đẹp, xăm hình kín lưng, hình xăm cá chép hóa rồng, xăm hình đôi, Vietnam tattoo, Vietnamese tattoo artist, tattoo studio Vietnam",
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/icon.png', type: 'image/png' },
      { url: '/icon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/icon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/icon-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icon-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-icon.png' },
      { url: '/apple-icon-180x180.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: ['/favicon.ico'],
  },
  manifest: '/manifest.json',
  openGraph: {
    title: "Xăm Hình Nghệ Thuật Chuyên Nghiệp | Tattoo Studio Vietnam",
    description: "Xăm hình nghệ thuật chuyên nghiệp tại Việt Nam. Dịch vụ xăm hình đa dạng: xăm hình nghệ thuật, xăm hình phong thủy, xăm hình 3D, xăm hình màu nước.",
    type: "website",
    locale: "vi_VN",
    siteName: "Tattoo Studio Vietnam",
    images: [
      {
        url: logo.src,
        width: 800,
        height: 600,
        alt: "Tattoo Studio Vietnam Logo"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Xăm Hình Nghệ Thuật Chuyên Nghiệp | Tattoo Studio Vietnam",
    description: "Xăm hình nghệ thuật chuyên nghiệp tại Việt Nam. Dịch vụ xăm hình đa dạng và chất lượng cao.",
    images: [logo.src]
  },
  alternates: {
    canonical: "https://your-tattoo-studio.com",
    languages: {
      'vi-VN': 'https://your-tattoo-studio.com/vi',
      'en-US': 'https://your-tattoo-studio.com/en'
    }
  }
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