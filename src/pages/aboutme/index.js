import Title from "@/components/Title";

export default function AboutMe() {
  return (
    <div className="text-twhite">
      <div>
        <Title title="About Me" />
      </div>
      <div className="flex flex-col items-center mt-14 lg:flex-row lg:p-16 lg:mt-0">
        <img
          className="flex rounded-full shadow-md shadow-white max-w-[600px]  max-[600px]:max-w-[300px]"
          src="aboutme.jpg"
          alt="fashion photo"
        />
        <p className="text-justify p-16 lg:pl-16 lg:p-0">
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
