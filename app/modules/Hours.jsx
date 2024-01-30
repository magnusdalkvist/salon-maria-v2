import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Hours() {
  return (
    <div className="bg-grey text-white px-4 md:px-6 py-10 lg:py-[100px]" id="prices">
      <div className="flex flex-col lg:flex-row flex-wrap gap-10 max-w-screen-xl mx-auto">
        <div className="md:py-10 flex-1 flex flex-col gap-4 text-center items-center justify-center">
          <div className="text-lg md:text-xl">Velkommen</div>
          <div className="mb-2 lg:mb-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-serif lg:text-justify">
            Åbningstider
          </div>
          <Button asChild variant="outline">
            <Link href="https://salon-maria.planway.com/">Book tid</Link>
          </Button>
        </div>
        <div className="bg-red lg:w-[2px] h-[2px] lg:h-auto rounded-md" />
        <div className="md:py-10 flex-1 flex flex-col items-center justify-center">
          <div className=" flex flex-col gap-2 text-lg md:text-xl items-center text-center">
            <div>Tirsdag – fredag / 09:30 - 17:30</div>
            <div>Lørdag / 09:00 - 14:00</div>
          </div>
        </div>
      </div>
    </div>
  );
}
