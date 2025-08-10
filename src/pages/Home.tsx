import Hero from "../sections/HomePageSections/Hero";
import PropertyDetailsSlider from "../sections/propertiesDetails/PropertyDetailsSlider";
import HowItWorksCard from "../components/cards/HowItWorksCard";

const Home = () => {
  return (
    <>
      <Hero />
      <PropertyDetailsSlider />
      <HowItWorksCard />
    </>
  );
};

export default Home;
