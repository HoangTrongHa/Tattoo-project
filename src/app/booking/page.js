'use client'

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function BookingIndex() {
  const router = useRouter();
  useEffect(() => {
    router.replace("/booking/step1");
  }, [router]);
  return null;
}