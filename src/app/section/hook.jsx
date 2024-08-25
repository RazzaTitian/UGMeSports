import { poppins, oxygen } from "@/templates/font";
import SectionHeading from "@/templates/heading";
import Image from "next/image";

const UserHook = () => {
  return (
    <main className="relative bg-teal-secondary w-full">
      <div className="absolute w-full h-full">
        <Image
          src="/assets/topography.webp"
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 80vw, 50vw"
          alt=""
          className="object-cover"
        />
      </div>
      <div className="flex justify-center py-20 h-screen sm:h-fit">
        <div className="relative w-[90%] md:w-[80%] max-w-[1300px] rounded-xl flex flex-col items-center justify-center">
          <h1
            className={oxygen + "text-3xl md:text-4xl text-white text-center text-pretty"}
          >
            Impact waves across <b>marine conservation and innovation</b> in
            numbers
          </h1>
          <div className={oxygen + "grid grid-cols-2 md:grid-cols-4 pt-8 gap-16"}>
            <div className="text-center text-white max-w-56 flex flex-col gap-4" >
              <p className="text-3xl md:text-4xl lg:text-5xl leading-none">
                <b>23</b>
              </p>
              <p className="text-lg leading-snug">projects have concluded</p>
            </div>
            <div className="text-center text-white max-w-56 flex flex-col gap-4">
              <p className="text-3xl md:text-4xl lg:text-5xl leading-none">
                <b>290+</b>
              </p>
              <p className="text-lg leading-snug">people have participated</p>
            </div>
            <div className="text-center text-white max-w-56 flex flex-col gap-4">
              <p className="text-3xl md:text-4xl lg:text-5xl leading-none">
                <b>43.22+</b>
                <span className="text-lg pl-2">Ha</span>
              </p>
              <p className="text-lg leading-snug">
                of coral have been planted
              </p>
            </div>
            <div className="text-center text-white max-w-56 flex flex-col gap-4">
              <p className="text-3xl md:text-4xl lg:text-5xl leading-none">
                <b>100.2+</b>
                <span className="text-lg pl-2">Kg</span>
              </p>
              <p className="text-lg leading-snug">
                of plastic have been picked up
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default UserHook;
