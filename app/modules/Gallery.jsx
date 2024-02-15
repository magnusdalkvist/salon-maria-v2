import Image from "next/image";

export default function Gallery() {
  return (
    <div className="px-2 md:px-6 py-4 md:py-8">
      <div className="mx-auto max-w-screen-xl text-white flex flex-col gap-4">
        <p className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-serif lg:text-justify">
          Galleri
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-4">
        {Array(9)
                .fill()
                .map((item, i) => (
                    <Image
                      key={i}
                      src={`/gallery/boerneklip${i + 1}.jpg`}
                      width={300}
                      height={300}
                      className="bg-[#eee] flex items-center justify-center object-cover w-full h-full rounded-md "
                    />
                ))}
        </div>
      </div>
    </div>
  );
}
