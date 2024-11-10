import About from "./components/about/About";
import Header from "./components/header/Header";
import Landing from "./components/landing/Landing";

export default function Home() {
  return (
    <div className="h-full w-full relative font-montserrat">
      <Header />
      <Landing />
      <About />
      <div className="h-[200vh] w-10 z-0  border-dashed  border-[1px] border-r-black/20  pointer-events-none border-l-black/50 absolute top-1/2 left-28 translate-x-full -translate-y-1/2 -rotate-45" />
      <div className="h-[200vh] w-10 z-0 border-dashed  border-[1px] border-l-black/20 pointer-events-none  border-r-black/50 absolute top-1/2 left-1/2 translate-x-full -translate-y-1/2 -rotate-45" />
    </div>
  );
}
