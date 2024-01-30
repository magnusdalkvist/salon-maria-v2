"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useEffect, useState, useRef } from "react";
import { Transition } from "react-transition-group";

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

  return (
    <div className="px-4 py-10 md:px-6 bg-white text-black ">
      <Carousel className="gap-8 max-w-screen-xl mx-auto w-full flex" setApi={setApi}>
        <div className="flex-1">
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
          <CarouselPrevious />
          <CarouselContent className="gap-4">
            {slides.map((slide, i) => (
              <CarouselItem key={i}>
                <div className="aspect-square bg-grey rounded-md"></div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselNext />
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
    image: "image_url_1",
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
    image: "image_url_2",
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
    image: "image_url_3",
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
        <p class="bold">Børnevenlige Omgivelser:</p>
        <ul class="list-[square] ml-5 flex flex-col gap-2">
          <li>Sjove stole (en bil og en scooter)</li>
          <li>Legetøj og tv for at underholde under klipningen</li>
          <li>En lille gave med en slikkepind til børnene ved afslutningen</li>
        </ul>
      `,
    image: "image_url_4",
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
    image: "image_url_5",
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
      `,
    image: "image_url_6",
  },
];
