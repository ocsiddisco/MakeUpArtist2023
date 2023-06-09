import Title from "@/components/Title";

export default function AboutMe() {
  return (
    <div className="text-twhite">
      <div>
        <Title title="About Me" />
      </div>
      <div className="flex flex-col items-center mt-14 xl:flex-row xl:p-16 xl:mt-0">
        <img
          className="flex rounded-full shadow-md shadow-white max-w-[450px] lg:max-w-[600px]  sm:max-w-[300px]"
          src="aboutme.jpg"
          alt="fashion photo"
        />
        <p className="text-justify p-16 xl:pl-16 xl:p-0">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of
          the printing and typesetting industry. Lorem Ipsum has been the
          industry's standard dummy text ever since the 1500s, when an unknown
          printer took a galley of type and scrambled it to make a type specimen
          book. It has survived not only five centuries, but also the leap into
          electronic typesetting, remaining essentially unchanged. It was
          popularised in the 1960s with the release of Letraset sheets
          containing Lorem Ipsum passages, and more recently with desktop
          publishing software like Aldus PageMaker including versions of Lorem
          Ipsum.
        </p>
      </div>
    </div>
  );
}
