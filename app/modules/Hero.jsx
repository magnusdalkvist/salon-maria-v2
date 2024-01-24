"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

// export function Hero() {
//   const [api, setApi] = useState();
//   const [current, setCurrent] = useState(0);
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     if (!api) {
//       return;
//     }

//     setCurrent(api.selectedScrollSnap() + 1);

//     api.on("select", () => {
//       setCurrent(api.selectedScrollSnap() + 1);
//     });
//   }, [api]);

//   return (
//     <Carousel
//       setApi={setApi}
//       className="relative"
//       opts={{
//         align: "start",
//         loop: true,
//       }}
//     >
//       <CarouselContent className="max-h-[800px]">
//         <CarouselItem>
//           <Image
//             className="object-cover h-full"
//             src="/salon.png"
//             width="2636"
//             height="1830"
//             alt="shop"
//           />
//         </CarouselItem>
//         <CarouselItem>
//           <Image
//             className="object-cover h-full"
//             src="/salon.png"
//             width="2636"
//             height="1830"
//             alt="shop"
//           />
//         </CarouselItem>
//         <CarouselItem>
//           <Image
//             className="object-cover h-full"
//             src="/salon.png"
//             width="2636"
//             height="1830"
//             alt="shop"
//           />
//         </CarouselItem>
//       </CarouselContent>
//       <HeroSidePanel current={current} />
//     </Carousel>
//   );
// }

// function HeroSidePanel({ current }) {
//   return (
//     <div className="absolute left-1/2 right-0 top-0 bottom-0 bg-[rgba(0,0,0,0.5)] backdrop-blur-md flex flex-col justify-center items-center gap-4 text-white">
//       {current == 1 && <div>DAMN GIRL</div>}
//       <div className="flex gap-4 text-black">
//         <CarouselPrevious />
//         <CarouselNext />
//       </div>
//     </div>
//   );
// }

export function Hero() {
  const hero = useRef();
  const tl = useRef();

  useGSAP(
    () => {
      const images = gsap.utils.toArray(".hero-image");
      tl.current = gsap
        .timeline()
        .from(images[0], { duration: 1, y: 100, opacity: 0, delay: 0.5 })
        .from(images[1], { duration: 1, y: -100, opacity: 0 });
    },
    { scope: hero }
  );
  return (
    <div
      className="grid grid-cols-3 items-center gap-4 max-w-screen-xl mx-auto py-[100px]"
      ref={hero}
    >
      <div className="text-[#EE522C] z-10 col-[1/3] row-start-1 max-w-xl flex flex-col gap-10 items-start">
        <div className="text-7xl font-bold">WRITE A HERO TEXT HERE!</div>
        <div>Write some info here maybe</div>
        <ul className=" list-disc list-inside">
          <li>Keypoint 1</li>
          <li>Keypoint 2</li>
          <li>Keypoint 3</li>
        </ul>
        <div className="flex gap-4">
          <Button asChild className="flex gap-2 bg-[#EE522C] hover:bg-[#d43811]">
            <Link href="/">Book tid</Link>
          </Button>
          <Button asChild className="border-white">
            <Link href="/">Se priser</Link>
          </Button>
        </div>
      </div>
      <div className="hero-image bg-white flex items-center justify-center col-start-2 row-start-1 aspect-[2/3] mt-10 rounded-md">
        image
      </div>
      <div className="hero-image bg-white flex items-center justify-center col-start-3 row-start-1 aspect-[2/3] mb-10 rounded-md">
        image
      </div>
    </div>
  );
}
