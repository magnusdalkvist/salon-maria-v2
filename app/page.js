import { Hero } from "./modules/Hero";
import { Hours } from "./modules/Hours";
import { Info } from "./modules/Info";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <Info />
      <Hours />
    </main>
  );
}
