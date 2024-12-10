"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState } from "react";
import { ModeToggle } from "@/components/mode-toggle";
import MenuBurgerDrawer from "./MenuBurgerDrawer";

export const MenuBurger = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div className="flex items-center sm:justify-evenly justify-between sm:px-0 px-8 lg:hidden rounded-3xl z-50 py-4 bg-white dark:bg-neutral-800 border border-white/10 fixed md:w-[70%] 430:w-[80%] w-[90%] left-1/2 bottom-10 -translate-x-1/2 shadow-xl shadow-black/20 dark:shadow-neutral-500/5">
      <MenuBurgerDrawer
        setIsOpen={setIsOpen}
        isOpen={isOpen}
        handleClose={handleClose}
      />
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
