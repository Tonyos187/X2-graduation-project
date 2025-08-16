import {
  featuredPropertiesSectionData,
  featuresSectionData,
} from "../data/Home/HomeData";
import ClientsSection from "../sections/HomePageSections/ClientsSection";
import FAQSection from "../sections/HomePageSections/FAQSection";
import Hero from "../sections/HomePageSections/Hero";
import PropertiesSection from "../sections/HomePageSections/PropertiesSection";
import Features from "../sections/sharedSections/Features";
<<<<<<< HEAD
import FAQSlider from "../sections/HomePageSections/FAQSliderSection";
=======

>>>>>>> 9f874c082006527875b992fc8d1381f02af1163e

const Home = () => {
  return (
    <div className="space-y-20 md:space-y-30 xl:space-y-37.5">
      <Hero />
      <Features data={featuresSectionData} />
      <div className="space-y-20 md:space-y-30 xl:space-y-37.5 mt-50 md:mt-30 xl:mt-37.5">
        <PropertiesSection data={featuredPropertiesSectionData} />
        <ClientsSection/>
        <FAQSection />
      </div>
      
    </div>
  );
};

export default Home;
