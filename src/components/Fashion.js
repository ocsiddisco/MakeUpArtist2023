import Link from "next/link";
import { montserrat, notoSerif } from "@/styles/utils/fonts.js";

const Fashion = () => {
  return (
    <div className="h-screen w-full text-twhite mt-40" style={montserrat.style}>
      <div className=" flex h-screen w-full absolute bg-zinc-300	 opacity-50	"></div>

      <div className="flex flex-col h-screen w-full justify-center items-center absolute z-40	">
        <p
          className="text-center text-4xl tracking-widest uppercase	"
          style={notoSerif.style}
        >
          Fashion portfolio
        </p>
        <p className="text-center text-xl italic">
          Fashion, Commercial, Editorial
        </p>
        <p className="text-center text-xl italic">Make-up & hair</p>

        <Link href="/fashion">
          <button className="text-center">view more</button>
        </Link>
      </div>
      <video
        src="videophotoshooting.mp4"
        autoPlay="autoplay"
        loop="loop"
        className="h-screen w-full object-cover	z-0 overflow-scroll"
      />
    </div>
  );
};

export default Fashion;
