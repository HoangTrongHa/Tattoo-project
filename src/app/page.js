// src/app/page.js
'use client';
import React, { Suspense, useEffect } from 'react';
import { fetchGalleryImages } from '@/store/gallerySlice';
import Loading from '@/components/atoms/Loading';
import HomePageContent from '@/app/home/components/HomePageContent';
import Head from 'next/head';
import logo from '@/assets/Logo.png';
import { useDispatch } from 'react-redux';

export default function HomePage() {
  const dispatch = useDispatch();

  // Sử dụng useEffect để gọi API chỉ một lần khi component mount
  useEffect(() => {
    dispatch(fetchGalleryImages('home'));
  }, [dispatch]); // Chỉ chạy lại khi dispatch thay đổi

  return (
    <Suspense fallback={<Loading />}>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "TattooParlor",
              "name": "Tattoo Studio Vietnam",
              "description": "Xăm hình nghệ thuật chuyên nghiệp tại Việt Nam",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "VN"
              },
              "image": logo.src,
              "priceRange": "$$",
              "openingHours": "Mo-Su 10:00-20:00",
              "telephone": "+84 838584663",
              "url": "https://www.paintogain.info/"
            })
          }}
        />
      </Head>
      <HomePageContent />
    </Suspense>
  );
}