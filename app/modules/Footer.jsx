import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <div className="flex gap-4 justify-between p-4 text-white">
      <div className="flex gap-4 items-center">
        <Image src="/logo.jpg" width="1600" height="302" alt="logo" className="h-10 w-auto" />
        <div>CVR: 35768521</div>
        <Link href="tlf:+4539561666">TLF: +45 39 56 16 66</Link>
        <address>Frederiksborgvej 202, 2400 København</address>
      </div>
      <div className="flex gap-4 items-center">Social icons</div>
    </div>
  );
}
