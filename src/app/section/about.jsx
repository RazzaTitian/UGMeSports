import { ButtonPrimary } from "@/templates/buttons";
import { oxygen } from "@/templates/font";
import SectionHeading from "@/templates/heading";
import Image from "next/image";

// https://blog.remoovit.com/2022/11/02/great-weekend-environmental-volunteer-events/
const AboutBait = () => {
  return (
    <main className="w-full h-screen sm:h-fit py-20 flex flex-col items-center justify-center bg-[#F3F9FC]">
      <div className="w-full flex items-center justify-center">
        <div className="w-[90%] md:w-[80%] max-w-[1300px]">
          <div className="flex flex-col md:flex-row justify-evenly gap-8 items-center">
            <div className="relative aspect-[5/4] md:aspect-[4/5] w-full md:w-80 lg:w-[28rem] flex-shrink-0 rounded-xl overflow-hidden">
              <Image
                src="/static/home-about.webp"
                alt="volunteers"
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 80vw, 33vw"
                fill
                className="object-cover" />
            </div>
            <div className="flex flex-col max-w-[40rem]">
              <SectionHeading
                sub={"About Us"}
                title={"Innovate and Evolve"}
              ></SectionHeading>
              <p className={oxygen + "text-[#005377] text-pretty text-lg"}>
                ShoreLab is dedicated to preserving marine ecosystems through innovative projects and community involvement. We want to inspire and equip the next generation of marine conservationists.
              </p>
              <div className="flex justify-end md:justify-start pt-6">
                <ButtonPrimary>Learn More</ButtonPrimary>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AboutBait;
