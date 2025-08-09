import Hero from "../sections/AboutPageSections/Hero";
import { heroSectionData } from "../data/About/AboutUsData";
const About = () => {
  return (
    <div className="space-y-20 md:space-y-30 xl:space-y-37.5">
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
