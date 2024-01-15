"use client";

import * as React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

export function Hero() {
  const [api, setApi] = React.useState();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <Carousel
      setApi={setApi}
      className="relative"
      opts={{
        align: "start",
        loop: true,
      }}
    >
      <CarouselContent className="max-h-[800px]">
        <CarouselItem>
          <Image
            className="object-cover h-full"
            src="/salon.png"
            width="2636"
            height="1830"
            alt="shop"
          />
        </CarouselItem>
        <CarouselItem>
          <Image
            className="object-cover h-full"
            src="/salon.png"
            width="2636"
            height="1830"
            alt="shop"
          />
        </CarouselItem>
        <CarouselItem>
          <Image
            className="object-cover h-full"
            src="/salon.png"
            width="2636"
            height="1830"
            alt="shop"
          />
        </CarouselItem>
      </CarouselContent>
      <div className="absolute left-1/2 right-0 top-0 bottom-0 bg-[rgba(0,0,0,0.5)] backdrop-blur-md flex flex-col justify-center items-center gap-4 text-white">
        {current == 1 && <div>DAMN GIRL</div>}
        <div className="flex gap-4 text-black">
          <CarouselPrevious />
          <CarouselNext />
        </div>
      </div>
    </Carousel>
  );
}
