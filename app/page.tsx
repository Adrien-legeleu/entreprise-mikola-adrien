"use client";
import { useState } from "react";
import About from "./components/about/About";
import Header from "./components/header/Header";
import Landing from "./components/landing/Landing";
import Methodology from "./components/methodology/Methodology";
import Project from "./components/project/Project";

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
    <div className="h-full w-full relative font-montserrat">
      <Header />
      <Landing />
      <About />
      <Methodology
        handleIsMouseNotVisible={handleIsMouseNotVisible}
        handleIsMouseVisible={handleIsMouseVisible}
        handleDivMouse={handleDivMouse}
      />
      <Project />
      <div className="h-[300vh] w-10 z-0  border-dashed  border-[1px] border-r-black/20   border-l-black/50 absolute top-32 left-0  -translate-y-1/2 -rotate-45" />
      <div className="h-[300vh] w-10 z-0 border-dashed  border-[1px] border-l-black/20   border-r-black/50 absolute top-32 left-1/2  -translate-y-1/2 -rotate-45" />
      {isCursorVisible && (
        <div
          className="fixed pointer-events-none transform -translate-x-1/2 -translate-y-1/2 z-50"
          style={{
            left: `${left}px`,
            top: `${top}px`,
            width: "0",
            height: "0",
            backgroundColor: "#28316d",
            borderRadius: "50%",
            filter: "brightness(200%)",
            boxShadow:
              "0 0 200px 180px rgba(40, 49, 109, 0.2), 0 0 100px 50px rgba(40, 49, 109, 0.1)",
            willChange: "transform",
          }}
        />
      )}
    </div>
  );
}
