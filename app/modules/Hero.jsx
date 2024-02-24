"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export function Hero() {
  const hero = useRef();
  const tl = useRef();

  useGSAP(
    () => {
      const images = gsap.utils.toArray(".hero-image");
      const text = gsap.utils.toArray(".hero-text");
      tl.current = gsap
        .timeline()
        .to(images[1], { duration: 1, y: 0, opacity: 1 })
        .to(images[0], { duration: 1, y: 0, opacity: 1, delay: -0.75 })
        .to(text, { duration: 0.75, y: 0, opacity: 1, delay: -0.5 });
    },
    { scope: hero }
  );
  return (
    <section className="px-4 md:px-6 py-8 lg:py-[100px] text-white">
      <div
        className="grid grid-cols-2 lg:grid-cols-3 auto-rows-auto  lg:items-center gap-6 gap-x-4 md:gap-8 max-w-screen-xl mx-auto"
        ref={hero}
      >
        <div className="hero-text opacity-0 z-10 lg:pr-2 col-span-2 lg:col-span-1 row-start-2 lg:row-start-1 flex flex-col gap-6 items-start h-full">
          <h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-serif lg:text-justify"
            style={{ textShadow: "#111 4px 4px 4px" }}
          >
            FRISØRSALON FOR BØRN OG VOKSNE
          </h1>
          <h2 className="italic">
            Salon Maria skaber en bæredygtig, familievenlig frisøreoplevelse med innovative
            klipninger og luksuriøs hårpleje i København.
          </h2>
          <ul className="list-[square] ml-5 flex flex-col gap-2">
            <li>Indbydende Familievenlig Atmosfære</li>
            <li>Bæredygtige & miljøvenlige Produkter</li>
            <li>Studierabat / pensionistrabat på 10%</li>
          </ul>
          <div className="flex gap-4 items-center">
            <Button variant="text">
              <Link href="https://salon-maria.planway.com/">Book tid</Link>
            </Button>
            <Button asChild variant="outline" className="text-base">
              <Link href="#priser">Se priser</Link>
            </Button>
          </div>
        </div>

        <div className="border-b-red border-b-[4px] hero-image opacity-0 translate-y-[100px] text-white flex items-center justify-center lg:col-start-2 lg:row-start-1 mt-10 mb-2 md:mt-[25%] lg:mb-[10%] rounded-md overflow-hidden">
          <Image
            className="grayscale object-cover aspect-[2/3] w-full"
            src="/maria.webp"
            width={521}
            height={782}
            priority={true}
            alt="Maria"
            sizes="(max-width: 600px) 100vw, 50vw"
          />
        </div>
        <div className="border-b-red border-b-[4px] hero-image opacity-0 translate-y-[-100px] text-white flex items-center justify-center lg:col-start-3 lg:row-start-1 mb-10 mt-2 md:mb-[25%] lg:mt-[10%] rounded-md overflow-hidden">
          <Image
            className="grayscale object-cover aspect-[2/3] w-full"
            src="/arash.webp"
            width={1004}
            height={1508}
            priority={true}
            alt="Arash"
            sizes="(max-width: 600px) 100vw, 50vw"
          />
        </div>
      </div>
    </section>
  );
}
