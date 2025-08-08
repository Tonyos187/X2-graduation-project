import HeaderSection from "../sections/sharedSections/HeaderSection.tsx";
import {
  contactHeroCard,
  contactHeroData,
} from "../data/Contact/ContactData.tsx";
import ContactExploreWorld from "../sections/Contact/ContactExploreWorld.tsx";
import Features from "../sections/sharedSections/Features.tsx";

const Contact = () => {
  return (
    <>
      <div className="hero mt-[68.58px] md:mt-[77px] laptop:mt-[99px]">
        {/* put hero title and description through props */}
        <HeaderSection
          title={contactHeroData.title}
          description={contactHeroData.description}
        />

        {/* put your featurs data here but first check the type in src/types/contact/contactTypes */}
        <Features data={contactHeroCard} />
      </div>

      <ContactExploreWorld />
    </>
  );
};

export default Contact;
