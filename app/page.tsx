"use client";
import { useState } from "react";
import About from "./components/about/About";
import Header from "./components/header/Header";
import Landing from "./components/landing/Landing";
import Methodology from "./components/methodology/Methodology";
import Project from "./components/project/Project";
import Technologies from "./components/techno/Technologies";

export default function Home() {
  const [left, setLeft] = useState();
  const [top, setTop] = useState();
  const [isCursorVisible, setIsCursorVisible] = useState(false);
  const handleDivMouse = (e: any) => {
    console.log(e.clientX, e.clientY, e);

    setLeft(e.clientX);
    setTop(e.clientY);
  };
  const handleIsMouseVisible = () => {
    setIsCursorVisible(true);
  };
  const handleIsMouseNotVisible = () => {
    setIsCursorVisible(false);
  };
  return (
    <div className="h-full w-full relative font-montserrat overflow-x-hidden">
      <Header />
      <Landing />
      <About />
      <Methodology
        handleIsMouseNotVisible={handleIsMouseNotVisible}
        handleIsMouseVisible={handleIsMouseVisible}
        handleDivMouse={handleDivMouse}
      />
      <Project />
      <Technologies />
      <div className="h-[300vh] w-10 z-0  border-dashed  border-[1px] border-r-black/20   border-l-black/50 absolute top-32 left-0  -translate-y-1/2 -rotate-45" />
      <div className="h-[300vh] w-10 z-0 border-dashed  border-[1px] border-l-black/20   border-r-black/50 absolute top-32 left-1/2  -translate-y-1/2 -rotate-45" />
      {isCursorVisible && (
        <div
          className="
    fixed 
    pointer-events-none 
    transform 
    -translate-x-1/2 
    -translate-y-1/2 
    z-50 
    bg-[#28316d]
    dark:bg-[#41496C] 
    rounded-full 
    shadow-[0_0_200px_180px_rgba(40,49,109,0.2)]
    dark:shadow-[0_0_200px_80px_rgba(65,73,108,0.7)]
  "
          style={{
            left: `${left}px`,
            top: `${top}px`,
            width: "0",
            height: "0",
            filter: "brightness(200%)",
            willChange: "transform",
          }}
        />
      )}
    </div>
  );
}
