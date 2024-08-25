import { ButtonPrimary } from "@/templates/buttons";
import { poppins, oxygen } from "@/templates/font";
import Image from "next/image";
import Link from "next/link";


const HeroSection = () => {
  return (
    <div className="relative min-h-screen w-full">
      <div className="absolute w-full min-h-full z-[-1]">
        <Image src="/static/home-hero.jpg"
          fill
          priority
          alt="hero-background"
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover" />
      </div>
          {/* <a href="https://www.freepik.com/free-photo/aerial-shot-cliffs-covered-greenery-surrounded-by-sea-sunlight_29506031.htm#fromView=search&page=1&position=26&uuid=4d38bd97-a950-4d95-9791-315dd275e73a">Image by wirestock on Freepik</a> */}
          <div className="relative flex flex-col justify-center landscape:py-32 landscape:justify-end lg:justify-end items-center min-h-screen w-full bg-[#03202C]/65">
            <div className="w-[90%] md:w-[80%] max-w-[1300px] flex flex-col gap-7 h-3/4 justify-center">
              <h1
                className={
                  poppins +
                  "text-4xl landscape:text-3xl md:text-5xl text-center md:text-left max-w-[630px] font-medium leading-snug text-white"
                }
              >
                Creating Ripples Across the Tides
              </h1>
              <h2 className={oxygen + "text-center md:text-left text-lg landscape:text-lg md:text-2xl max-w-[633px] text-white"}>
                Merges technology and marine science to create innovative
                solutions for ocean conservation.
              </h2>
              <div className="flex justify-center md:justify-start">
                <Link href="#shorelab-academy">
                  <ButtonPrimary size="lg">Join ShoreLab Academy</ButtonPrimary>
                </Link>
              </div>
            </div>
          </div>
        </div>
  );
};

export default HeroSection;
