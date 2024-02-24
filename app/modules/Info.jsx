"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import clsx from "clsx";

export function Info({ enableGSAP = false, slides = [] }) {
  const [api, setApi] = useState();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  const info = useRef();
  const tl = useRef();

  useGSAP(
    () => {
      if (!enableGSAP) {
        return;
      }
      tl.current = gsap.timeline().to(info.current, { duration: 1, opacity: 1, delay: 1 });
    },
    { scope: info }
  );

  return (
    <section
      ref={info}
      className={clsx("py-10 md:py-[100px] lg:px-6 bg-white text-black", enableGSAP && "opacity-0")}
    >
      {slides.length > 0 && (
        <Carousel
          className="gap-8 max-w-screen-xl mx-auto w-full flex flex-col-reverse lg:flex-row"
          setApi={setApi}
        >
          <div className="flex-1 px-4 lg:px-0">
            {slides.map((slide, i) => {
              if (i + 1 === current) {
                return (
                  <div
                    key={i}
                    className="flex flex-col gap-2"
                    dangerouslySetInnerHTML={{ __html: slide.content }}
                  />
                );
              }
            })}
          </div>
          <div className="flex flex-1 items-center gap-4">
            <CarouselPrevious className="hidden lg:flex" />
            <CarouselContent className="gap-4  mx-4 lg:mx-0">
              {slides.map((slide, i) => (
                <CarouselItem key={i} className="basis-10/12 lg:basis-full">
                  <Image
                    src={slide.image}
                    width={512}
                    height={512}
                    alt={slide.alt}
                    className="aspect-square object-cover object-top rounded-lg w-full h-full"
                  ></Image>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselNext className="hidden lg:flex" />
          </div>
        </Carousel>
      )}
    </section>
  );
}
