import IconTitleDescription from "../../components/sharedComponents/IconTitleDescription";
import Statistics from "../../components/sharedComponents/statistics/Statistics";
import { type HeroSectionType } from "../../types/About/AboutType";

const Hero = ({
  headline,
  description,
  heroImage,
  bgImage,
}: HeroSectionType) => {
  return (
    <section className="px-4 pt-[50px] lg:px-20 lg:pt-[70px] 2xl:px-[162px] 2xl:pt-[100px] flex flex-col-reverse items-center justify-end lg:flex-row lg:justify-between lg:items-start gap-10 lg:gap-[60px] 2xl:gap-20 min-h-screen">
      {/* Left Side of Hero */}
      <div>
        <IconTitleDescription
          title={headline}
          description={description}
          descriptionClassName="mb-10 lg:mb[50px] 2xl:mb-20 max-w-[358px] lg:max-w-[610px] 2xl:max-w-[755px]"
          showIcon={true}
          icon="/assets/icons/stars-of-title.svg"
        />

        {/* Stats */}

        <Statistics />
      </div>

      {/* Right Side Hero*/}
      <div
        className="w-full sm:max-w-[570px] lg:max-w-[610px] 2xl:max-w-[755px] max-h-[310px] lg:max-h-[435px] 2xl:max-h-[546px]  relative min-h-[400px] overflow-hidden border border-borderColor rounded-[12px] \"
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
