"use client";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerTrigger,
} from "@/components/ui/drawer";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/logo/logo.png";
import { ModeToggle } from "@/components/mode-toggle";
import Menu from "@/public/menu.png";

export const MenuBurger = ({ isScrolled }: { isScrolled: boolean }) => {
  return (
    <div className="flex items-center justify-evenly  lg:hidden rounded-3xl z-50 py-5 bg-white fixed md:w-[70%]  w-[80%]  left-1/2 bottom-10 -translate-x-1/2  shadow-xl shadow-black/20">
      <Drawer>
        <DrawerTrigger asChild>
          <Image
            src={Menu}
            alt="menu icon de adrec"
            width={100}
            height={100}
            className="h-8 w-8"
          />
        </DrawerTrigger>
        <DrawerContent>
          <div className="w-2/3 mx-auto py-24 flex items-center flex-col">
            <ul>
              <li>
                <Link href="#about">A propos</Link>
              </li>
              <li>
                <Link href="#projects">Nos projets</Link>
              </li>
              <li>
                <Link href="#method">Notre méthode</Link>
              </li>
            </ul>
            <Link href="#contact">
              <Button className="rounded-lg" variant="destructive">
                Contactez-nous
              </Button>
            </Link>
            <h2 className="flex  max-lg:hidden items-center gap-1 transition-all duration-300 ease-in-out">
              <Image
                width={100}
                height={100}
                alt="logo de adrec"
                src={Logo}
                className={`transition-all duration-300 rounded-full ease-in-out ${
                  isScrolled ? "w-6 h-6" : "w-8 h-8"
                }`}
              />
              Adrec
            </h2>
          </div>
          <DrawerFooter>
            <DrawerClose>
              <Button>Fermer</Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
      <div className="flex items-center gap-2">
        <ModeToggle />
        <Link href="#contact">
          <Button className="rounded-lg" variant="outline">
            Contactez-nous
          </Button>
        </Link>
      </div>
    </div>
  );
};
