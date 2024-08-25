import { ButtonPrimary, ButtonSecondary } from "@/templates/buttons";
import { poppins, oxygen } from "@/templates/font";
import { Image } from "@nextui-org/react";
import Link from "next/link";

const Card = ({img, caption, label}) => {
  return (
    <div className={oxygen + "flex flex-col md:flex-row lg:flex-col w-full gap-4 lg:w-min transition-all outline outline-2 outline-transparent hover:outline-teal-secondary flex-shrink-0 border border-[#f3f9fc] p-3 pb-6 md:pb-3 lg:pb-6 rounded-3xl bg-white shadow-xl drop-shadow-md"}>
      <Image
        src={img}
        alt=""
        sizes="30vw"
        isZoomed={true}
        className="aspect-[3/2] lg:aspect-[4/5] min-w-48 max-w-full md:max-w-96 lg:max-w-full lg:min-w-72 xl:min-w-80"
      />
      <div>
        {
          label
        }
        <p className="w-[4/5] mt-4 text-pretty text-primary-dark text-lg">
          {caption}
        </p>
      </div>
    </div>
  )
}

const AcademyHook = () => {
  return (
    <main id="shorelab-academy" className="relative z-[1] w-full overflow-hidden">
      {/* <div className="-top-96 -left-96 absolute w-[90%] aspect-auto">
        <div className="absolute opacity-10 -top-20 -left-96 w-full animate-spin-cust">
          <svg viewBox="20 20 180 180" xmlns="http://www.w3.org/2000/svg">
            <path fill="#35EBEB" d="M49.1,-64.1C60.6,-59.2,64.8,-40.8,67.3,-24C69.9,-7.2,70.7,8,66.4,21.7C62.1,35.3,52.7,47.4,40.7,60.2C28.8,72.9,14.4,86.3,1.7,83.9C-11,81.6,-22,63.5,-36.4,51.5C-50.9,39.6,-68.9,33.9,-73.6,23C-78.4,12.1,-69.9,-3.9,-64.4,-20.9C-58.8,-37.9,-56.2,-55.7,-45.9,-61.1C-35.6,-66.4,-17.8,-59.2,0.5,-59.9C18.8,-60.6,37.5,-69,49.1,-64.1Z" transform="translate(100 100)" />
          </svg>
        </div>
        <div className="absolute opacity-10 -top-20 -left-96 w-full animate-spin-cust-2">
          <svg viewBox="20 20 180 180" xmlns="http://www.w3.org/2000/svg">
            <path fill="#35EBEB" d="M49.1,-64.1C60.6,-59.2,64.8,-40.8,67.3,-24C69.9,-7.2,70.7,8,66.4,21.7C62.1,35.3,52.7,47.4,40.7,60.2C28.8,72.9,14.4,86.3,1.7,83.9C-11,81.6,-22,63.5,-36.4,51.5C-50.9,39.6,-68.9,33.9,-73.6,23C-78.4,12.1,-69.9,-3.9,-64.4,-20.9C-58.8,-37.9,-56.2,-55.7,-45.9,-61.1C-35.6,-66.4,-17.8,-59.2,0.5,-59.9C18.8,-60.6,37.5,-69,49.1,-64.1Z" transform="translate(100 100)" />
          </svg>
        </div>
        <div className="absolute opacity-10 -top-20 -left-96 w-full animate-spin-cust-3">
          <svg viewBox="20 20 180 180" xmlns="http://www.w3.org/2000/svg">
            <path fill="#35EBEB" d="M49.1,-64.1C60.6,-59.2,64.8,-40.8,67.3,-24C69.9,-7.2,70.7,8,66.4,21.7C62.1,35.3,52.7,47.4,40.7,60.2C28.8,72.9,14.4,86.3,1.7,83.9C-11,81.6,-22,63.5,-36.4,51.5C-50.9,39.6,-68.9,33.9,-73.6,23C-78.4,12.1,-69.9,-3.9,-64.4,-20.9C-58.8,-37.9,-56.2,-55.7,-45.9,-61.1C-35.6,-66.4,-17.8,-59.2,0.5,-59.9C18.8,-60.6,37.5,-69,49.1,-64.1Z" transform="translate(100 100)" />
          </svg>
        </div>
        <div className="absolute opacity-10 -top-20 -left-96 w-full animate-spin-cust-4">
          <svg viewBox="20 20 180 180" xmlns="http://www.w3.org/2000/svg">
            <path fill="#35EBEB" d="M49.1,-64.1C60.6,-59.2,64.8,-40.8,67.3,-24C69.9,-7.2,70.7,8,66.4,21.7C62.1,35.3,52.7,47.4,40.7,60.2C28.8,72.9,14.4,86.3,1.7,83.9C-11,81.6,-22,63.5,-36.4,51.5C-50.9,39.6,-68.9,33.9,-73.6,23C-78.4,12.1,-69.9,-3.9,-64.4,-20.9C-58.8,-37.9,-56.2,-55.7,-45.9,-61.1C-35.6,-66.4,-17.8,-59.2,0.5,-59.9C18.8,-60.6,37.5,-69,49.1,-64.1Z" transform="translate(100 100)" />
          </svg>
        </div>
      </div> */}
      <div className="relative w-full py-20 flex justify-center">
        <div className="w-[90%] md:w-[80%] max-w-[1300px] flex flex-col items-center gap-10">
          <div about="section-heading" className="mb-4 lg:mb-12 flex flex-col items-center">
            <h2 className={poppins + "text-2xl font-semibold capitalize text-teal-secondary text-center"}>
              SHORELAB ACADEMY 2025
            </h2>
            <h1 className={poppins + "text-4xl lg:text-5xl font-semibold text-primary-dark leading-tight text-center text-pretty"}>
              Leading Marine Conservation Through Tech Innovation
            </h1>
          </div>
          <div className="flex flex-col lg:flex-row justify-center items-start gap-5">
            <Card 
              img="/static/home-shorelab_1.webp"
              // source google maps
              label={
                <label className={"my-6 text-sm px-4 py-1 rounded-full w-fit bg-salmon-accent/25 text-salmon-accent"}>
                  Discover
                </label>
              }
              caption="Explore marine ecosystems, understand environmental challenges, and dive into socio-cultural dynamics."
            />
            <Card 
              img="/static/home-shorelab_2.webp"
              // source google maps
              label={
                <label className={"my-6 text-sm px-4 py-1 rounded-full w-fit bg-teal-secondary/25 text-teal-secondary"}>
                  Engage
                </label>
              }
              caption="Collaborate with industry experts, participate in fieldwork, and contribute to real-world marine conservation projects."
            />
            <Card 
              img="/static/home-shorelab_3.webp"
              // source https://statik.tempo.co/data/2022/04/04/id_1100522/1100522_720.jpg
              label={
                <label className={"my-6 text-sm px-4 py-1 rounded-full w-fit bg-[#83B26E]/25 text-[#83B26E]"}>
                  Innovate
                </label>
              }
              caption="Develop tech-driven solutions, create sustainable products, and present your Capstone Project to industry leaders."
            />
          </div>
          <div className="hidden sm:flex gap-6">
            <Link href="/initiatives/shorelab-academy">
              <ButtonSecondary>Learn More</ButtonSecondary>
            </Link>
            <Link href="/initiatives/shorelab-academy/form">
              <ButtonPrimary>Apply Now</ButtonPrimary>
            </Link>
          </div>
          <div className="flex sm:hidden flex-col gap-4 w-full">
            <Link href="/initiatives/shorelab-academy/form">
              <ButtonPrimary width="full">Apply Now</ButtonPrimary>
            </Link>
            <Link href="/initiatives/shorelab-academy">
              <ButtonSecondary width="full">Learn More</ButtonSecondary>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AcademyHook;
