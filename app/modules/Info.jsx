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

export function Info() {
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
      tl.current = gsap.timeline().to(info.current, { duration: 1, opacity: 1, delay: 1 });
    },
    { scope: info }
  );

  return (
    <div ref={info} className="opacity-0 py-10 md:py-[100px] lg:px-6 bg-white text-black ">
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
                <Image src={slide.image} width={512} height={512} className="aspect-square object-cover object-top rounded-lg w-full h-full"></Image>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselNext className="hidden lg:flex" />
        </div>
      </Carousel>
    </div>
  );
}

const slides = [
  {
    content: `
        <p class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-serif">
          Om Maria
        </p>
        <p>
          Jeg er Maria, med over 20 års erfaring inden for frisørfaget både nationalt og
          internationalt. Hos Salon Maria går vores fokus ud over blot at skabe pænt hår; vi lægger
          stor vægt på både din og dit hårs sundhed.
        </p>
      `,
    image: "/maria.jpg",
  },
  {
    content: `
        <p class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-serif">
          Om Arash
        </p>
        <p>
          Ari, med over 12 års erfaring, er vores herre- og børnefrisør. Han er dedikeret til at
          klippe alle slags herre- og børnehår med tålmodighed og smil. Efter klipningen rådgiver
          han om de rigtige produkter for at opretholde resultatet derhjemme.
        </p>
        <p>
          Forkæl dit hår med vores pH Laboratories farver fra Previa. De er ammoniakfrie og
          indeholder argan og keratin for at give dig pålidelige og let anvendelige farver. Vores
          frisører skaber sunde, naturlige resultater med vitalitet og glans.
        </p>
      `,
    image: "/arash.jpg",
  },
  {
    content: `
        <p class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-serif">
          Previa Hair Care
        </p>
        <p>
          Vi har valgt at samarbejde med Previa Hair Care på grund af deres 100% naturlige produkter
          og bæredygtige filosofi. Previa Hair Care er ikke bare organisk hårpleje, det er en
          holdning til at beskytte miljøet og vores naturlige ressourcer.
        </p>
        <p>
          Forkæl dit hår med vores pH Laboratories farver fra Previa. De er ammoniakfrie og
          indeholder argan og keratin for at give dig pålidelige og let anvendelige farver. Vores
          frisører skaber sunde, naturlige resultater med vitalitet og glans.
        </p>
      `,
    image: "/previa.png",
  },
  {
    content: `
        <p class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-serif">
          Børnefrisør
        </p>
        <p>
          Vi er stolte af at have åbnet Københavns første børnefrisør i over 10 år. Vores salon er
          designet specielt til børn med inspiration fra engelske børnefrisører. Maria, en erfaren
          voksen- og børnefrisør, byder både børn og voksne velkommen i vores to forskellige
          lokaler.
        </p>
        <br>
        <p class="font-semibold">Børnevenlige Omgivelser:</p>
        <ul class="list-[square] ml-5 flex flex-col gap-2">
          <li>Sjove stole (en bil og en scooter)</li>
          <li>Legetøj og tv for at underholde under klipningen</li>
          <li>En lille gave med en slikkepind til børnene ved afslutningen</li>
        </ul>
      `,
    image: "/gallery/boerneklip1.jpg",
  },
  {
    content: `
        <p class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-serif">
          Glade Kunder
        </p>
        <p>
          Vi har glade og tilfredse kunder, der sætter pris på vores behagelige salon og vores nøje
          udvalgte, naturlige hårprodukter. Besøg os for inspiration til en ny frisure eller for at
          se vores produktsortiment.
        </p>
      `,
    image: "/gallery/boerneklip6.jpg",
  },
  {
    content: `
        <p class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-serif">
          Bestil Tid
        </p>
        <p>
          Du kan allerede i dag bestille tid til vores salon via vores hjemmeside. Se vores ledige
          tider og book den tid, der passer dig bedst. Vi glæder os til at byde dig velkommen hos
          Salon Maria.
        </p>
        <a href="https://salon-maria.planway.com/" class="underline font-semibold">Book tid her</a>
      `,
    image: "/booking.jpg",
  },
];
