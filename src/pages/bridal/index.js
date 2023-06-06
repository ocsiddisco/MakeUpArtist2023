import { weddingPhotos } from "@/pages/api/data.js";
import Title from "@/components/Title";

export default function Bridal() {
  return (
    <div className="flex flex-col items-center">
      <div className="flex w-4/5 flex-col">
        <Title title="Bridal" />

        <div className="grid grid-cols-2 gap-2 w-full">
          {weddingPhotos.map((photo, i) => {
            if (photo.isVertical) {
              return (
                <div className="overflow-hidden h-full w-full" key={i}>
                  <img
                    className="h-full transition duration-700 ease-in-out hover:scale-105"
                    src={photo.src}
                    alt="wedding photo"
                  />
                </div>
              );
            } else {
              return (
                <div
                  className="grid col-span-2 overflow-hidden w-full max-h-screen "
                  key={i}
                >
                  <img
                    className="transition duration-700 ease-in-out hover:scale-105"
                    src={photo.src}
                    alt="wedding photo"
                  />
                </div>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
}
