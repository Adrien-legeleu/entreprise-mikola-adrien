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
    <div className="flex items-center justify-evenly  lg:hidden rounded-3xl z-50 py-5 bg-white fixed md:w-[70%]  430:w-[80%   w-[90%] left-1/2 bottom-10 -translate-x-1/2  shadow-xl shadow-black/20">
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
          <div className="w-2/3 mx-auto  flex  items-center flex-col">
            <h2 className="flex  text-4xl pt-10  items-center gap-1 transition-all duration-300 ease-in-out">
              <Image
                width={100}
                height={100}
                alt="logo de adrec"
                src={Logo}
                className={`transition-all duration-300 rounded-full ease-in-out w-12 h-12 `}
              />
              Adrec
            </h2>
            <ul className="text-2xl text-center space-y-2 py-16">
              <li>
                <Link href="#about">A propos</Link>
              </li>
              <li>
                <Link href="#method">Notre méthode</Link>
              </li>
              <li>
                <Link href="#projects">Nos projets</Link>
              </li>
            </ul>
          </div>
          <DrawerFooter className="flex gap-4 sm:flex-row flex-col-reverse items-center justify-center ">
            <DrawerClose>
              <Button size="lg" className="text-lg">
                Fermer
              </Button>
            </DrawerClose>

            <Link href="#contact" className="inline-block">
              <Button size="lg" className="text-lg" variant="destructive">
                Contactez-nous
              </Button>
            </Link>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
      <div className="flex items-center gap-2">
        <ModeToggle />
        <Link href="#contact" className="max-430:text-sm">
          <Button className="rounded-lg" variant="outline">
            Contactez-nous
          </Button>
        </Link>
      </div>
    </div>
  );
};
