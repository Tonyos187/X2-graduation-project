import {
  featuredPropertiesSectionData,
  featuresSectionData,
} from "../data/Home/HomeData";
import ClientsSection from "../sections/HomePageSections/ClientsSection";
import Hero from "../sections/HomePageSections/Hero";
import PropertiesSection from "../sections/HomePageSections/PropertiesSection";
import Features from "../sections/sharedSections/Features";
import FAQSlider from "../sections/HomePageSections/FAQSlider";

const Home = () => {
  return (
    <>
      <Hero />
      <Features data={featuresSectionData} />
      <div className="space-y-20 md:space-y-30 xl:space-y-37.5 mt-50 md:mt-30 xl:mt-37.5">
        <PropertiesSection data={featuredPropertiesSectionData} />
        <ClientsSection/>
      </div>
      <FAQSlider />
    </>
  );
};

export default Home;
