import { notoSerif } from "@/styles/utils/fonts.js";

const Title = ({ title }) => {
  return (
    <>
      <div className="flex w-full justify-center text-twhite tracking-widest sm:tracking-normal	 text-5xl pb-24 lg:py-32">
        <p style={notoSerif.style} className="text-center">
          {title}
        </p>
      </div>
    </>
  );
};

export default Title;
