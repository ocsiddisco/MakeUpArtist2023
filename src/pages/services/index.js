import Title from "@/components/Title";
import { services } from "@/pages/api/data.js";

export default function Services() {
  return (
    <div className="text-twhite">
      <div>
        <Title title="Services" />
      </div>
      <div className="flex flex-col mx-5 lg:flex-row ">
        {services.map((service, i) => {
          return (
            <div
              className="flex flex-row my-5  py-10	rounded bg-nav01 bg-opacity-60  sm:flex-col lg:flex-col  lg:mx-5"
              key={i}
            >
              <div className="flex flex-col justify-center w-1/2 mx-5 lg:justify-items-center sm:w-full sm:mx-0 lg:w-full lg:mx-0">
                <p className="text-center pb-2 text-4xl italic tracking-widest uppercase">
                  {service.number}
                </p>
                <p className="text-center pt-2 text-2xl font-extralight tracking-widest uppercase lg:pt-3 ">
                  {service.name}
                </p>
              </div>
              <p className="text-center p-8 text-lg	tracking-wider text-justify	 lg:text-center">
                {service.text}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
