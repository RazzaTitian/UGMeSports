
import { oxygen } from "@/templates/font";
import { ButtonPrimary } from "@/templates/buttons";
import SectionHeading from "@/templates/heading";
import Slider from "../components/Slider";


// https://i.pinimg.com/originals/76/1b/97/761b97f3f16f6b117d10616fa78a2d3d.jpg

const OtherInitiatives = () => {
  return (
    <main className="relative flex justify-center min-h-screen md:min-h-fit pt-20 z-0">
      <div className="relative w-[90%] md:w-[80%] max-w-[1300px]">
        <div className="flex flex-col-reverse landscape:flex-row lg:flex-row relative">
          <div className="relative flex w-full lg:w-4/5 z-[2]">
            <div className="px-0 xl:px-10 flex flex-col justify-center">
              <div className="mt-4 lg:mt-0">
                <SectionHeading title="Leading the Waves of Oceanic Change" sub="OTHER INITIATIVES" />
              </div>
              <p className={oxygen + "text-lg text-primary-dark pb-6"}>
                Explore the diverse initiatives we undertake to protect and
                restore marine life
              </p>
              <ButtonPrimary>Explore</ButtonPrimary>
            </div>
            <div className="hidden landscape:block lg:block z-[-1] bg-white h-full w-64 absolute -right-24 blur-2xl scale-150 rotate-3"/>
          </div>
          <Slider />
        </div>
      </div>
    </main>
  );
};

export default OtherInitiatives;
