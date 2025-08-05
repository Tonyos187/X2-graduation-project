import ContactHeroContent from "../sections/Contact/ContactHeroContent.tsx";
import ContactHeroFeatures from "../sections/Contact/ContactHeroFeatures.tsx";
import {
  contactHeroCard,
  contactHeroData,
} from "../data/Contact/ContactData.tsx";

const Contact = () => {
  return (
    <>
      {/* put hero title and description through props */}
      <ContactHeroContent
        title={contactHeroData.title}
        description={contactHeroData.description}
      />

      {/* put your featurs data here but first check the type in src/types/contact/contactTypes */}
      <ContactHeroFeatures data={contactHeroCard} />
    </>
  );
};

export default Contact;
