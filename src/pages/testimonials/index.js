import Carousel from "@/components/Carousel";
import Title from "@/components/Title";

export default function Testimonials() {
  return (
    <div>
      <Title title="Testimonials" />
      <div className="w-full place-items-center lg:h-screen">
        <div className=" flex h-[450px] w-full absolute bg-zinc-200	 opacity-50	lg:h-screen"></div>

        <Carousel />
        <video
          src="testimonial2.mp4"
          autoPlay="autoplay"
          loop="loop"
          preload="auto"
          className="h-[450px] w-full bg-center overflow-hidden	object-cover -z-999	opacity-70 lg:h-screen"
        />
      </div>
    </div>
  );
}
