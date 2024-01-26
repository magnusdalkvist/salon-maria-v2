import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Hours() {
  return (
    <div className="bg-black text-white p-10" id="prices">
      <div className="flex gap-10 max-w-screen-xl mx-auto">
        <div className="flex-1 flex flex-col gap-4 items-center justify-center">
          <div>WELCOME</div>
          <div className="text-4xl font-bold font-serif">Opening Hours</div>
          <Button asChild className="flex gap-2 text-black bg-white hover:bg-white">
            <Link href="/">Book tid</Link>
          </Button>
        </div>
        <div className="bg-white w-[2px] rounded-md" />
        <div className="flex-1 flex flex-col items-center justify-center">
          <div className="uppercase font-bold">
            <div>Tirsdag til fredag / 09:30 - 17:30</div>
            <div>Lørdag / 09:00 - 14:00</div>
          </div>
        </div>
      </div>
    </div>
  );
}
