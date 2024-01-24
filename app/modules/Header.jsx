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
    <header className="hidden md:block sticky top-0 z-20 bg-grey p-2 text-white">
      <nav className="max-w-screen-xl flex w-full justify-between mx-auto">
        <Image src="/logo.jpg" width="1600" height="302" alt="logo" className="h-10 w-auto" />
        <DesktopNavigationMenu />
      </nav>
    </header>
  );
}

function MobileHeader() {
  return <header className="flex md:hidden">burger menu</header>;
}
