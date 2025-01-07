'use client';

import { carouselItems } from "@/lib/carousel-items";
import * as React from "react";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import Footer from "@/components/Footer";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function Home() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: false })
  );

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4 sm:p-8 md:p-12">
      <h1 className="text-4xl md:text-6xl font-normal text-pink-500 mb-8 tracking-wider transform hover:scale-105 transition-transform duration-200 hover:text-pink-600">
        PIX
      </h1>
      <Carousel
        plugins={[plugin.current]}
        className="w-full max-w-[90vw] md:max-w-[85vw] lg:max-w-[80vw]"
      >
        <CarouselContent>
          {carouselItems.map((item, index) => (
            <CarouselItem key={index}>
              <Card className="border-0 bg-transparent shadow-none">
                <CardContent className="flex h-[50vh] sm:h-[60vh] md:h-[70vh] items-center justify-center p-0 relative">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className="object-contain"
                    priority={index === 0}
                  />
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-2" />
        <CarouselNext className="right-2" />
      </Carousel>
      <Footer />
    </main>
  );
}
