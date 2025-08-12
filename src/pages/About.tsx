import Hero from "../sections/AboutPageSections/Hero";
import OurTeam from "../sections/AboutPageSections/OurTeam";
const About = () => {
  return (
    <div className="space-y-20 md:space-y-30 xl:space-y-37.5">
      <Hero/>
      <OurTeam />
    </div>
  );
};

export default About;
