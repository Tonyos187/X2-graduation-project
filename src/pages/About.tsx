import Hero from "../sections/AboutPageSections/Hero";
import { heroSectionData } from "../data/About/AboutUsData";
import OurTeam from "../sections/AboutPageSections/OurTeam";
const About = () => {
  return (
    <div>
      <Hero
        headline={heroSectionData.headline}
        description={heroSectionData.description}
        heroImage={heroSectionData.heroImage}
        bgImage={heroSectionData.bgImage}
      />
      <OurTeam />
    </div>
  );
};

export default About;
