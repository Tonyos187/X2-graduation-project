import ContactHeroContent from "../sections/Contact/ContactHeroContent.tsx";
import ContactHeroFeatures from "../sections/Contact/ContactHeroFeatures.tsx";
import {
  contactHeroCard,
  contactHeroData,
} from "../data/Contact/ContactData.tsx";
import ContactExploreWorld from "../components/ContactExploreWorld.tsx";

const Contact = () => {
  return (
    <>
      <div className="hero">
        {/* put hero title and description through props */}
        <ContactHeroContent
          title={contactHeroData.title}
          description={contactHeroData.description}
        />

        {/* put your featurs data here but first check the type in src/types/contact/contactTypes */}
        <ContactHeroFeatures data={contactHeroCard} />
      </div>

      <ContactExploreWorld />
    </>
  );
};

export default Contact;
