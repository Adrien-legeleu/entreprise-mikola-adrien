"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Logo from "@/public/logo/logo.png";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
import Link from "next/link";
import { MenuBurger } from "./MenuBurger";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const getScrolled = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", getScrolled);
  }, []);
  return (
    <div>
      <div className="fixed w-full top-0 hidden lg:flex  left-0 z-50">
        <div
          style={{
            width: isScrolled ? "75%" : "100%",
            marginTop: isScrolled ? "24px" : "0",
            margin: isScrolled ? "24px auto" : "none",
            transition: "width 0.4s ease-in-out, margin-top 0.4s ease-in-out",
          }}
          className={`sm:px-8 px-4 py-3 flex max-lg:w-[80%] items-center justify-between rounded-full ${
            isScrolled
              ? "shadow-lg backdrop-blur-lg bg-white/60 dark:bg-black/60"
              : "bg-transparent"
          }`}
        >
          <h2 className="flex  items-centerssssss gap-1 transition-all duration-300 ease-in-out">
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
          <ul className="flex   gap-8 text-sm  capitalize text-indigo-purple dark:text-indigo-light font-semibold items-center">
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
          <div className="flex items-center gap-2">
            <ModeToggle />
            <Link href="#contact">
              <Button className="rounded-lg" variant="outline">
                Contactez-nous
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <MenuBurger isScrolled={isScrolled} />
    </div>
  );
}
