import Link from "next/link";
import { montserrat, notoSerif } from "@/styles/utils/fonts.js";

const Bridetobe = () => {
  return (
    <div
      className="h-screen w-full text-twhite mt-40 z-40 overflow-hidden"
      style={montserrat.style}
    >
      <div className=" flex h-screen w-full absolute bg-zinc-300	 opacity-50	"></div>
      <div className="flex flex-col h-screen w-full justify-center items-center absolute z-40	">
        <p
          className="text-center text-4xl tracking-widest uppercase	"
          style={notoSerif.style}
        >
          Bride to be
        </p>
        <p className="text-center text-xl italic">Bridal make-up & hair</p>
        <p className="text-center  pt-6">
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum."
        </p>
        <Link href="/bridal">
          <button className="text-center">view more</button>
        </Link>
      </div>
      <video
        src="videowedding.mp4"
        autoPlay="autoplay"
        loop="loop"
        className="h-screen w-full object-cover	z-0 overflow-scroll"
      />
    </div>
  );
};

export default Bridetobe;
