import { DesktopNavigationMenu } from "@/components/NavigationMenu";
import Image from "next/image";
export function Header() {
  return (
    <>
      <DesktopHeader />
      <MobileHeader />
    </>
  );
}

function DesktopHeader() {
  return (
    <header className="hidden md:flex fixed top-0 left-0 right-0 z-10 p-2 text-white justify-between">
      <Image src="/logo.jpg" width="1600" height="302" alt="logo" className="h-10 w-auto" />
      <DesktopNavigationMenu />
    </header>
  );
}

function MobileHeader() {
  return <header className="flex md:hidden fixed top-0 left-0 right-0 z-10">burger menu</header>;
}
