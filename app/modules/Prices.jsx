"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { prices } from "../data/prices";
import { useAccordionStore } from "../page";

export function Prices() {
  return (
    <div className="px-4 md:px-6 py-10 md:py-[100px] bg-white scroll-m-14" id="priser">
      <div className="mx-auto max-w-screen-xl flex flex-col md:flex-row gap-6 lg:gap-8">
        <div className="flex flex-col gap-2 md:w-[250px] md:py-2">
          <p className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-serif lg:text-justify">
            Priser
          </p>
          <p>Du kan betale med kort, kontant og MobilePay</p>
          <p>Studierabat / pensionist: -10%</p>
        </div>
        <PriceList />
      </div>
    </div>
  );
}

function PriceList() {
  const activeAccordion = useAccordionStore((state) => state.active);
  const setActiveAccordion = useAccordionStore((state) => state.setActive);
  return (
    <div className="flex-1">
      <Accordion
        type="single"
        collapsible
        className="flex flex-col gap-2 md:pt-4 lg:pt-7"
        value={`value-${activeAccordion}`}
      >
        {prices.map((price, i) => (
          <AccordionItem value={`value-${i}`} key={i} onClick={() => setActiveAccordion(i)}>
            <AccordionTrigger className="text-xl">{price.title}</AccordionTrigger>
            <AccordionContent className="flex flex-col gap-2">
              {price.items.map((item, i) => (
                <div key={i} className="flex gap-2">
                  {item.name}
                  <div className="border-b border-dashed border-grey flex-1 mb-1.5"></div>
                  <span>{item.price} kr.</span>
                </div>
              ))}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
