import { heroSectionData } from "../../data/Home/HomeData";
import Statistics from "../../components/sharedComponents/statistics/Statistics";
import Button from "../../components/sharedComponents/Button";
import HeroArrowIcon from "../../components/sharedComponents/HeroArrowIcon";

const Hero = () => {
  const { headline, description, buttons } = heroSectionData;

  return (
    <section className="w-full relative h-screen px-4 lg:px-0 mt-20 xs:mt-27 md:mt-30 lg:mt-17 lg:overflow-hidden">
      <div className="mx-auto flex flex-col lg:flex-row-reverse lg:justify-between gap-0 lg:gap-15 xl:gap-20 h-screen">
       {/* Right Image */}
        <div className="w-full lg:w-[48%] lg:h-full aspect-[1.2] rounded-[12px] lg:rounded-none relative text-Grey-60">
          {/* Background Image - zoom animation */}
          <img
            src={heroSectionData?.bgImage}
            alt="heroImageBuilding"
            className="absolute inset-0 w-full h-full max-w-full max-h-full object-cover z-20 overflow-hidden"
          />

          {/* Gradient Overlay */}
          <div
            className="absolute inset-0 z-10 object-cover rounded-[12px] lg:rounded-0"
            style={{
              background:
                "linear-gradient(238.21deg, #2A213F 8.76%, rgba(25, 25, 25, 0) 50.09%)",
            }}
          />

          {/* Foreground Image */}
          <img
            src={heroSectionData?.heroImage}
            alt="heroImageBuilding"
            className="absolute inset-0 aspect-[1.2] lg:h-full w-full object-cover z-20"
          />

          {/* Center Circle in middle of the section - rotate animation */}
          <div className="absolute z-20 -bottom-[59px] left-0 lg:top-[15%] lg:-left-[60px] xl:top-[17%] xl:-left-[85px]">
            <HeroArrowIcon />
          </div>
        </div>
        {/* Left Content */}
        <div className="w-full mt-19 lg:mt-0 lg:w-[48%] flex flex-col justify-center gap-10 lg:gap-15 px-4 lg:pl-20 xl:pl-40.5">
          <div className="flex flex-col gap-4 lg:gap-6">
            <h1 className="text-2xl lg:text-[46px] xl:text-[60px] text-White font-semibold leading-[120%] tracking-[0]">
              {headline}
            </h1>
            <p className="font-medium text-[18px] text-Grey-60 leading-[150%] tracking-[0] lg:text-lg">
              {description}
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-col lg:flex-row gap-4">
            <Button content={buttons[0]?.text} withBorder />
            <Button content={buttons[1]?.text} className="bg-Purple-60" />
          </div>

          {/* Stats */}
          <Statistics />
        </div> 
      </div>
    </section>
  );
};

export default Hero;
