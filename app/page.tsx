import About from "./components/about/About";
import Header from "./components/header/Header";
import Landing from "./components/landing/Landing";
import Methodology from "./components/methodology/Methodology";

export default function Home() {
  return (
    <div className="h-full w-full relative font-montserrat">
      <Header />
      <Landing />
      <About />
      <Methodology />
      <div className="h-[300vh] w-10 z-0  border-dashed  border-[1px] border-r-black/20   border-l-black/50 absolute top-32 left-0  -translate-y-1/2 -rotate-45" />
      <div className="h-[300vh] w-10 z-0 border-dashed  border-[1px] border-l-black/20   border-r-black/50 absolute top-32 left-1/2  -translate-y-1/2 -rotate-45" />
    </div>
  );
}
