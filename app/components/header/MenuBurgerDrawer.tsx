import {
  Drawer,
  DrawerContent,
  DrawerFooter,
  DrawerTrigger,
} from "@/components/ui/drawer";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/logo/logo.png";
import Menu from "@/public/menu.png";
import MenuDark from "@/public/menu (1).png";
import { Button } from "@/components/ui/button";
import { Dispatch, SetStateAction } from "react";

interface MenuBurgerDrawerProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  handleClose: () => void;
}

export default function MenuBurgerDrawer({
  setIsOpen,
  isOpen,
  handleClose,
}: MenuBurgerDrawerProps) {
  return (
    <Drawer open={isOpen} onOpenChange={setIsOpen}>
      <DrawerTrigger asChild>
        <div>
          <Image
            src={Menu}
            alt="menu icon de adrec"
            width={100}
            height={100}
            className="h-7 w-7 dark:hidden"
          />
          <Image
            src={MenuDark}
            alt="menu icon de adrec"
            width={100}
            height={100}
            className="h-7 w-7 hidden dark:block"
          />
        </div>
      </DrawerTrigger>
      <DrawerContent>
        <div className="w-2/3 mx-auto flex items-center flex-col">
          <h2 className="flex text-4xl pt-10 items-center gap-1 transition-all duration-300 ease-in-out">
            <Image
              width={100}
              height={100}
              alt="logo de adrec"
              src={Logo}
              className={`transition-all duration-300 rounded-full ease-in-out w-12 h-12`}
            />
            Adrec
          </h2>
          <ul className="text-2xl text-center space-y-2 py-16">
            <li onClick={handleClose}>
              <Link href="#about">A propos</Link>
            </li>
            <li onClick={handleClose}>
              <Link href="#method">Notre méthode</Link>
            </li>
            <li onClick={handleClose}>
              <Link href="#projects">Nos projets</Link>
            </li>
          </ul>
        </div>
        <DrawerFooter className="flex gap-4 sm:flex-row flex-col-reverse items-center justify-center">
          <Button size="lg" className="text-lg" onClick={handleClose}>
            Fermer
          </Button>
          <Link href="#contact" className="inline-block" onClick={handleClose}>
            <Button size="lg" className="text-lg" variant="destructive">
              Contactez-nous
            </Button>
          </Link>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
