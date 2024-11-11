import { ButtonPrimary } from "@/templates/buttons";
import { poppins, oxygen } from "@/templates/font";
import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  return (
    <div className="relative min-h-screen w-full">
      <div className="absolute w-full min-h-full z-[-1]">
        <Image
          src="/static/BG.jpg"
          fill
          priority
          alt="hero-background"
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover"
        />
      </div>
      <div className="relative flex flex-col justify-center landscape:py-32 landscape:justify-center lg:justify-end items-center min-h-screen w-full bg-black/60">
        <div className="w-[90%] md:w-[80%] max-w-[1300px] flex flex-col gap-7 h-3/4 justify-center items-center">
          <h1
            className={
              poppins +
              "landscape:text-4xl md:text-5xl text-center md:text-left max-w-[630px] font-extrabold leading-snug text-white"
            }
          >
            Intellectual Gamers
          </h1>
          <h2
            className={
              oxygen +
              "text-center md:text-left text-lg landscape:text-lg md:text-2xl max-w-[633px] font-medium text-white"
            }
          >
            Because being a gamer doesn't mean you can't be an academic
            achiever.
          </h2>
          <div className="flex justify-center md:justify-start">
            <Link href="#shorelab-academy">
              <ButtonPrimary size="lg">Join UGM eSports now!</ButtonPrimary>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
