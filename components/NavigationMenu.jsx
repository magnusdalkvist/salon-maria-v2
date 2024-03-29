"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Button } from "./ui/button";
import { prices } from "@/app/data/prices";
import { useAccordionStore } from "@/app/page";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Image from "next/image";

export function DesktopNavigationMenu() {
  const changeActiveAccordion = useAccordionStore((state) => state.setActive);

  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem className="hidden sm:block">
          <Link href="/#priser">
            Priser
            {/* <NavigationMenuTrigger>Priser</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="p-4 w-[374px] md:w-[500px] lg:w-[600px]">
                <Carousel
                  opts={{
                    align: "center",
                    loop: true,
                    skipSnaps: true,
                  }}
                  className="rounded-md"
                >
                  <CarouselContent className="pl-3 gap-3">
                    {prices.map((price, i) => (
                      <CarouselItem
                        className="p-2 basis-[60%] bg-[#eee] hover:bg-[#ccc] rounded-md overflow-hidden"
                        key={i}
                      >
                        <Link href="/#priser" key={i} onClick={() => changeActiveAccordion(i)}>
                          <p className="text-xl">{price.title}</p>
                          <div className="flex flex-col gap-2">
                            {price.items.slice(0, 6).map((item, i) => (
                              <div key={i} className="flex gap-2">
                                <span className="whitespace-nowrap overflow-hidden text-ellipsis">
                                  {item.name}
                                </span>
                                <div className="min-w-[30px] border-b border-dashed border-black flex-1 mb-1.5"></div>
                                <span className="min-w-max">{item.price} kr.</span>
                              </div>
                            ))}
                            <div className="w-full text-center">Se mere</div>
                          </div>
                        </Link>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                </Carousel>
              </ul>
            </NavigationMenuContent> */}
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem className="hidden sm:block">
          <Link href="/galleri">
            Galleri
            {/* <NavigationMenuTrigger>Galleri</NavigationMenuTrigger> */}
          </Link>
          <NavigationMenuContent>
            <ul className="grid w-[374px] gap-3 p-4 md:w-[500px] grid-cols-3 lg:w-[600px] ">
              {Array(6)
                .fill()
                .map((item, i) => (
                  <Image
                    key={i}
                    src={`/gallery/boerneklip${i + 1}.webp`}
                    width={300}
                    height={300}
                    className="bg-[#eee] flex items-center justify-center rounded-md object-cover aspect-square "
                  />
                ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Button variant="text" asChild>
            <Link href="https://salon-maria.planway.com/">Book tid</Link>
          </Button>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
