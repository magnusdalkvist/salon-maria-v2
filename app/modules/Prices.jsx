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
    <div className="p-6 bg-white" id="priser">
      <div className="mx-auto max-w-screen-xl grid md:grid-cols-5 gap-4 ">
        <div className="flex flex-col gap-4 md:col-[1/3] py-4">
          <p>Priser</p>
          <p>Du kan betale med kort, kontant og MobilePay</p>
          <p>Studierabat/pensionist: -10%</p>
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
    <div className="w-full md:col-[3/6]">
      <Accordion
        type="single"
        collapsible
        className="flex flex-col gap-2"
        value={`value-${activeAccordion}`}
      >
        {prices.map((price, i) => (
          <AccordionItem value={`value-${i}`} key={i} onClick={() => setActiveAccordion(i)}>
            <AccordionTrigger className="text-xl">{price.title}</AccordionTrigger>
            <AccordionContent className="flex flex-col gap-2">
              {price.items.map((item, i) => (
                <div key={i} className="flex gap-2">
                  {item.name}
                  <div className="border-b border-dashed border-white flex-1 mb-1.5"></div>
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
