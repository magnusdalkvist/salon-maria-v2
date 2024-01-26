import { create } from "zustand";
import { Hero } from "./modules/Hero";
import { Hours } from "./modules/Hours";
import { Info } from "./modules/Info";
import { Prices } from "./modules/Prices";

export const useAccordionStore = create((set) => ({
  active: 0,
  setActive: (index) => set(() => ({ active: index })),
}));

export default function Home() {
  return (
    <main className="">
      <Hero />
      <Info />
      <Hours />
      <Prices />
    </main>
  );
}
