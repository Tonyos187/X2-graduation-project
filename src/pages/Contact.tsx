import ContactHeroContent from "../sections/Contact/ContactHeroContent.tsx";
import ContactHeroFeatures from "../sections/Contact/ContactHeroFeatures.tsx";
import {
  contactHeroCard,
  contactHeroData,
} from "../data/Contact/ContactData.tsx";

const Contact = () => {
  return (
    <>
      <ContactHeroContent
        title={contactHeroData.title}
        description={contactHeroData.description}
      />
      <ContactHeroFeatures data={contactHeroCard} />
    </>
  );
};

export default Contact;
