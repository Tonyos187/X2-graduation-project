import { heroSectionData } from "../../data/Home/HomeData";
import Statistics from "../../components/sharedComponents/statistics/Statistics";
import Button from "../../components/sharedComponents/Button";
import HeroArrowIcon from "../../components/sharedComponents/HeroArrowIcon";

const Hero = () => {
  const { headline, description, buttons } = heroSectionData;

  return (
    <section className="w-full relative h-screen px-4 md:px-0 md:pt-18 pt-27 md:overflow-hidden">

      <div className="mx-auto flex flex-col-reverse md:flex-row md:justify-between gap-0 md:gap-15 xl:gap-20 h-screen">
        {/* Left Content */}
        <div className="w-full md:w-[48%] flex flex-col justify-center gap-10 md:gap-15 px-4 md:pl-20 xl:pl-40.5">
          <div className="flex flex-col gap-4 md:gap-6">
            <h1 className="text-2xl md:text-[46px] xl:text-[60px] text-White font-semibold leading-[120%] tracking-[0]">
            {headline}
          </h1>
          <p className="font-medium text-[18px] text-Grey-60 leading-[150%] tracking-[0] md:text-lg">
            {description}
          </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-col md:flex-row gap-4">
            <Button content={buttons[0]?.text} withBorder />
            <Button content={buttons[1]?.text} className="bg-Purple-60" />
          </div>

          {/* Stats */}
          <Statistics />
        </div>

        {/* Right Image */}
        <div className="w-full md:w-[48%] min-h-50 px-4 md:px-0 m-auto md:m-0 rounded-[12px] md:rounded-none  relative text-Grey-60">
          {/* Background Image - zoom animation */}
          <img
            src={heroSectionData?.bgImage}
            alt="heroImageBuilding"
            className="absolute inset-0 w-full h-full max-w-full max-h-full object-cover z-20 overflow-hidden"
          />

          {/* Gradient Overlay */}
          <div
            className="absolute inset-0 z-10 rounded-[12px] md:rounded-0"
            style={{
              background:
                "linear-gradient(238.21deg, #2A213F 8.76%, rgba(25, 25, 25, 0) 50.09%)",
            }}
          />

          {/* Foreground Image */}
          <img
            src={heroSectionData?.heroImage}
            alt="heroImageBuilding"
            className="absolute inset-0 w-full h-full object-cover z-20"
          />
          {/* Center Circle in middle of the section - rotate animation */}

          <div className="absolute z-20 -bottom-[25%] left-0 md:top-[15%] md:-left-[60px] xl:top-[17%] xl:-left-[85px]">
            <HeroArrowIcon />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
