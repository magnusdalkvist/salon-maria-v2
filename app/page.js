import { create } from "zustand";
import { Hero } from "./modules/Hero";
import { Hours } from "./modules/Hours";
import { Info } from "./modules/Info";
import { Prices } from "./modules/Prices";
import Map from "./modules/Map";

export const useAccordionStore = create((set) => ({
  active: 0,
  setActive: (index) => set(() => ({ active: index })),
}));

export default function Home() {
  return (
    <main className="">
      <Hero />
      <Info slides={slides} enableGSAP />
      <Hours />
      <Prices />
      <Info slides={products} />
      <Map />
    </main>
  );
}

const slides = [
  {
    content: `
        <h2 class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-serif">
          Om Maria
        </h2>
        <p>
          Jeg er Maria, med over 20 års erfaring inden for frisørfaget både nationalt og
          internationalt. Hos Salon Maria går vores fokus ud over blot at skabe pænt hår; vi lægger
          stor vægt på både din og dit hårs sundhed.
        </p>
      `,
    image: "/maria.webp",
    alt: "Maria",
  },
  {
    content: `
        <h2 class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-serif">
          Om Arash
        </h2>
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
    image: "/arash.webp",
    alt: "Arash",
  },
  {
    content: `
        <h2 class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-serif">
          Børnefrisør
        </h2>
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
    image: "/gallery/boerneklip1.webp",
    alt: "Børnefrisør",
  },
  {
    content: `
        <h2 class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-serif">
          Glade Kunder
        </h2>
        <p>
          Vi har glade og tilfredse kunder, der sætter pris på vores behagelige salon og vores nøje
          udvalgte, naturlige hårprodukter. Besøg os for inspiration til en ny frisure eller for at
          se vores produktsortiment.
        </p>
      `,
    image: "/gallery/boerneklip6.webp",
    alt: "Glade kunder",
  },
  {
    content: `
        <h2 class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-serif">
          Bestil Tid
        </h2>
        <p>
          Du kan allerede i dag bestille tid til vores salon via vores hjemmeside. Se vores ledige
          tider og book den tid, der passer dig bedst. Vi glæder os til at byde dig velkommen hos
          Salon Maria.
        </p>
        <a href="https://salon-maria.planway.com/" class="underline font-semibold">Book tid her</a>
      `,
    image: "/booking.webp",
    alt: "Bestil tid",
  },
];

const products = [
  {
    content: `
        <h2 class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-serif">
          Previa Hair Care
        </h2>
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
    image: "/previa.webp",
    alt: "Previa Hair Care",
  },
  {
    content: `
        <h2 class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-serif">
        Wella Professionals
        </h2>
        <p>
        Wella Professionals er en serie af fantastiske hårplejeprodukter, der bringer håret tilbage i sin naturlige balance. Wella Professionals består af forskellige underserier, der matcher alle hårtyper og behov
        </p>
        
      `,
    image: "/wella.webp",
    alt: "Wella Professionals",
  },
  {
    content: `
        <h2 class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-serif">
          Moroccanoil
        </h2>
        <p>
        Vores signaturprodukt Moroccanoil Treatment har været det perfekte fundament for hår hos millionvis af mennesker over hele verden i mere end et årti.
        </p>
      `,
    image: "/moroccanoil.webp",
    alt: "Moroccanoil",
  },
  {
    content: `
        <h2 class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-serif">
          pH Laboratories
        </h2>
        <p>
        PH Laboratories er et Italiensk mærke som laver meget luksuriøse hårprodukter; både shampoo, conditioner, stylingprodukter m.m.
        </p>
        <p>
        Det er også et brand jeg har arbejdet med siden det kom til danmark for nogle år siden. Og serien indeholder blandt andet nogle af de mest fugtgivende og blødgørende produkter jeg har stiftet bekendtskab med igennem min karriere.
        </p>
      `,
    image: "/ph.webp",
    alt: "pH Laboratories",
  },
];