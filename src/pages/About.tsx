import { OurValueSectionData } from "../data/About/AboutUsData";
import Hero from "../sections/AboutPageSections/Hero";
import OurTeam from "../sections/AboutPageSections/OurTeam";
import OurValueSection from "../sections/AboutPageSections/OurValueSection";
const About = () => {
  return (
    <div className="space-y-20 md:space-y-30 xl:space-y-37.5">
      <Hero />
      <OurValueSection data={OurValueSectionData} />
      <OurTeam />
    </div>
  );
};

export default About;
