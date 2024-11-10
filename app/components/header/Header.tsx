"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Logo from "@/public/logo/logo.png";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";

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
    <div className="fixed w-full top-0 left-0 z-50">
      <div
        style={{
          width: isScrolled ? "70%" : "100%",
          marginTop: isScrolled ? "24px" : "0",
          margin: isScrolled ? "24px auto" : "none",
          transition: "width 0.4s ease-in-out, margin-top 0.4s ease-in-out",
        }}
        className={`px-8 py-2 flex items-center justify-between rounded-full ${
          isScrolled
            ? "shadow-lg backdrop-blur-lg bg-white/60"
            : "bg-transparent"
        }`}
      >
        <h2 className="flex items-center gap-1 transition-all duration-300 ease-in-out">
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
        <ul className="flex gap-8 text-sm  capitalize text-[#374151] font-semibold items-center">
          <li>about</li>
          <li>projects</li>
          <li>contact</li>
        </ul>
        <div className="flex items-center gap-2">
          <ModeToggle />
          <Button>Contactez-nous</Button>
        </div>
      </div>
    </div>
  );
}
