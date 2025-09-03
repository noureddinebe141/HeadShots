"use client";

import Slider from "@/components/Slider";
import InfoLanding from "@/components/InfoLanding";

export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      {/* سلايدر */}
      <Slider />

      {/* باقي الصفحة */}
      <InfoLanding />
    </main>
  );
}
