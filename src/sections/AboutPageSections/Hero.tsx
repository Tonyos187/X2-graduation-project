import SectionHeader from "../../components/sharedComponents/Header";
import Statistics from "../../components/sharedComponents/statistics/Statistics";
import { type HeroSectionType } from "../../types/About/AboutType";

const Hero = ({
  headline,
  description,
  heroImage,
  bgImage,
}: HeroSectionType) => {
  return (
    <section className="px-4 xl:px-20 pt-49 flex flex-col-reverse items-center justify-end lg:flex-row lg:justify-between lg:items-start gap-10 lg:gap-15 xl:gap-20 min-h-screen">
      {/* Left Side of Hero */}
      <div className="w-full md:min-w-1/2 40 50 80 flex flex-col gap-10 md:gap-12.5 2xl:gap-20">
        <SectionHeader title={headline} description={description} withIcon />
        {/* Stats */}
        <Statistics />
      </div>

      {/* Right Side Hero*/}
      <div
        className="w-full sm:max-w-[570px] lg:max-w-[610px] 2xl:max-w-[755px] min-h-[310px] lg:min-h-[435px] 2xl:min-h-[546px] relative overflow-hidden border border-Grey-15 rounded-[12px] \"
        style={{ backgroundColor: "#1A1A1A" }}
      >
        {/* Background Image */}
        <img
          src={bgImage}
          alt="background"
          className="absolute inset-0 w-full h-full object-cover z-11 opacity-[14%]"
        />

        {/*  Overlay */}
        <div className="absolute inset-0 pointer-events-none bg-[#141414] z-0" />

        {/* Foreground Image */}
        <img
          src={heroImage}
          alt="heroImageBuilding"
          className="absolute inset-0 w-full h-full object-cover z-20"
        />
      </div>
    </section>
  );
};

export default Hero;
