import { heroSectionData } from "../data/Home/HomeData";
import Statistics from "../components/statistics/Statistics";
import PurpleMainButton from "../components/PurpleMainButton";
import DarkButton from "../components/DarkButton";

const Hero = () => {
  const { headline, description, buttons } = heroSectionData;

  return (
    <section className="w-full relative min-h-screen">
      {/* Center Circle in middle of the section */}
      <img
        src={heroSectionData?.centerCircle}
        alt="centerCircle"
        className="absolute top-[370px] left-[60px] md:top-[32.5%] md:left-[51.5%] w-[117px] h-[117px] md:w-[143.76px] md:h-[143.66px] z-30 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none"
      />

      <div className="mx-auto flex flex-col-reverse md:flex-row items-stretch justify-between gap-10 min-h-screen">
        {/* Left Content */}
        <div className="w-full md:w-[48%] flex flex-col justify-center px-4 md:pl-12">
          <h1 className="text-2xl md:text-[46px] xl:text-[60px] text-[var(--color-mainText)] my-3 lg:my-6 font-semibold leading-[120%] tracking-[0]">
            {headline}
          </h1>
          <p className="font-medium text-[18px] text-secText leading-[150%] tracking-[0] md:text-lg">
            {description}
          </p>

          {/* Buttons */}
          <div className="flex flex-col md:flex-row gap-4 my-[60px]">
            <DarkButton desc={buttons[0]?.text} />
            <PurpleMainButton desc={buttons[1]?.text} />
          </div>

          {/* Stats */}
          <Statistics />
        </div>

        {/* Right Image */}
        <div className="w-[90%] rounded-2xl m-auto md:m-0 md:rounded-none md:w-[48%] relative min-h-[400px] overflow-hidden bg-darkGray">
          {/* Background Image */}
          <img
            src={heroSectionData?.bgImage}
            alt="heroImageBuilding"
            className="absolute inset-0 w-full h-full max-w-full max-h-full object-cover z-20"
          />

          {/* Gradient Overlay */}
          <div
            className="absolute inset-0 z-10 pointer-events-none"
            style={{
              background:
                "linear-gradient(238.21deg, #2A213F 8.76%, rgba(25, 25, 25, 0) 50.09%)",
            }}
          />

          {/* Foreground Image */}
          <img
            src={heroSectionData?.heroImage}
            alt="heroImageBuilding"
            className="absolute inset-0 w-full h-full  object-cover md:object-fill xl:object-cover z-20"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
