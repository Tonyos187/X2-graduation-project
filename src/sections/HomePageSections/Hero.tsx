import Statistics from "../../components/sharedComponents/statistics/Statistics";
import Button from "../../components/sharedComponents/Button";
import HeroArrowIcon from "../../components/sharedComponents/HeroArrowIcon";
import Container from "../../layouts/Container";

const Hero = () => {
  const description =
    "Your journey to finding the perfect property begins here. Explore our listings to find the home that matches your dreams.";
  const headline = "Discover Your Dream Property with Estatein";
  const heroImage = "/assets/images/Home/heroBuilding.webp";
  const bgImage = "/assets/images/Home/backgroundHeroImage.png";

  return (
    <Container className="min-h-screen pt-[108px] md:pt-[77px] lg:pt-[77px] xl:pt-[99px] flex justify-between items-center max-md:flex-col-reverse md:pr-0 lg:pr-0 xl:pr-0">
      {/* Left Content */}
      <div className="h-full w-full max-md:mb-10 md:w-[43.1171%] flex flex-col gap-10 lg:gap-12.5 xl:gap-15">
        <div className="flex flex-col gap-4 lg:gap-6">
          <h2 className="text-2xl lg:text-[46px] xl:text-[60px] text-White font-semibold leading-[120%] tracking-[0]">
            {headline}
          </h2>
          <p className="font-medium text-[18px] text-Grey-60 leading-[150%] tracking-[0] lg:text-lg">
            {description}
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col lg:flex-row gap-4">
          <Button content="Learn More" withBorder />
          <Button content="Browse Properties" className="bg-Purple-60" />
        </div>

        {/* Stats */}
        <Statistics />
      </div>

      {/* Right Image */}
      <div className="relative md:w-[52.3321%] w-full max-md:h-[44.3618vh] max-md:border max-md:mb-14 border-Grey-15 max-md:rounded-xl self-stretch bg-Grey-10">
        {/* Clipping wrapper for images */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Background Image - cover */}
          <img src={bgImage} alt="background" className="absolute inset-0 w-full h-full object-cover z-10" />

          {/* Gradient Overlay */}
          <div
            className="absolute inset-0 z-20 pointer-events-none max-md:rounded-tr-xl"
            style={{
              background: "linear-gradient(238.21deg, #2A213F 8.76%, rgba(25, 25, 25, 0) 50.09%)",
            }}
          ></div>

          {/* Foreground Image - contain */}
          <img
            src={heroImage}
            alt="hero"
            className="absolute left-1/2 bottom-0 translate-x-[-50%] object-bottom inset-0 w-full h-full object-contain z-30"
          />
        </div>

        {/* Center Circle in middle of the section - rotate animation */}
        <div className="absolute z-50 left-0 bottom-[-40px] md:translate-x-[-50%] md:top-[95px] xl:top-[144px]">
          <HeroArrowIcon />
        </div>
      </div>
    </Container>
  );
};

export default Hero;
