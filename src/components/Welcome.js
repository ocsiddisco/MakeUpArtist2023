import { montserrat, notoSerif } from "@/styles/utils/fonts.js";

const Welcome = () => {
  return (
    <div className="h-screen w-full text-twhite">
      <div className=" flex h-screen w-full absolute bg-zinc-200 opacity-80	"></div>
      <div className="flex flex-col h-screen w-full justify-center items-center absolute z-40	">
        <p
          className="text-center text-4xl tracking-widest uppercase	"
          style={notoSerif.style}
        >
          Welcome
        </p>
        <p className="text-center">{/* add lign */}</p>
        <p className="text-center text-xl italic" style={montserrat.style}>
          to my website!
        </p>
      </div>
      <video
        src="testintro.mp4"
        autoPlay="autoplay"
        loop="loop"
        preload="auto"
        className="h-screen w-full bg-center overflow-hidden	object-cover -z-999	opacity-40"
      />
      {/* <source  type="video/mp4" />
            Your browser does not support the video tag
          </video> */}
    </div>
  );
};

export default Welcome;
