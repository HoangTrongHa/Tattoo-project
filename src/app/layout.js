'use client'
import { Geist, Geist_Mono } from "next/font/google";
import { Provider } from 'react-redux';
import { store } from '@/store/store';
import { SnackbarProvider } from '@/context/SnackbarContext';

import "./globals.css";

import GlobalHeader from '@/components/organisms/GlobalHeader';
import GlobalFooter from '@/components/organisms/GlobalFooter';

import logo from '@/assets/Logo.png';
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// export const metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({ children }) {
  // const logos = {
  //   logoSrc: logo.src, // Sử dụng thuộc tính src của hình ảnh đã import
  // };
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Provider store={store}>
          <SnackbarProvider>
            <GlobalHeader logos={{logoSrc: logo.src}} />
            {children}
            < GlobalFooter />
          </SnackbarProvider>
        </Provider>
      </body>
    </html>
  );
}