import {
  faqSectionData,
  featuredPropertiesSectionData,
  featuresSectionData,
  testimonialsSectionData,
} from "../data/Home/HomeData";
import FAQSection from "../sections/HomePageSections/FAQSection";
import Hero from "../sections/HomePageSections/Hero";
import PropertiesSection from "../sections/HomePageSections/PropertiesSection";
import Features from "../sections/sharedSections/Features";
import TestimonialsSection from "../sections/HomePageSections/TestimonialsSection";

const Home = () => {
  return (
    <div className="space-y-20 md:space-y-30 xl:space-y-37.5">
      <Hero />
      <Features data={featuresSectionData} />
      <div className="space-y-20 md:space-y-30 xl:space-y-37.5 mt-50 md:mt-30 xl:mt-37.5">
        <PropertiesSection data={featuredPropertiesSectionData} />
        <TestimonialsSection data={testimonialsSectionData}/>
        <FAQSection data={faqSectionData}/>
      </div>
      
    </div>
  );
};

export default Home;
