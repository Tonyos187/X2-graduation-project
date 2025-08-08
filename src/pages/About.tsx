import Hero from "../sections/AboutPageSections/Hero";
import { heroSectionData } from "../data/About/AboutUsData";
const About = () => {
  return (
    <div>
      <Hero
        headline={heroSectionData.headline}
        description={heroSectionData.description}
        heroImage={heroSectionData.heroImage}
        bgImage={heroSectionData.bgImage}
      />
    </div>
  );
};

export default About;
