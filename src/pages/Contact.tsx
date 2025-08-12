import { contactHeroCard } from "../data/Contact/ContactData.tsx";
import ContactExploreWorld from "../sections/Contact/ContactExploreWorld.tsx";
import Features from "../sections/sharedSections/Features.tsx";
import HeaderHero from "../sections/sharedSections/HeaderHero.tsx";

const Contact = () => {
  return (
    <div className="space-y-20 md:space-y-30 xl:space-y-37.5">
      {/* put hero title and description through props */}
      <div>
        <HeaderHero
          title="Get in Touch with Estatein"
          description="Welcome to Estatein's Contact Us page. We're here to assist you with any inquiries, requests, or feedback you may have. Whether you're looking to buy or sell a property, explore investment opportunities, or simply want to connect, we're just a message away. Reach out to us, and let's start a conversation."
        />

        {/* put your featurs data here but first check the type in src/types/contact/contactTypes */}
        <Features data={contactHeroCard} />
      </div>

      <ContactExploreWorld />
    </div>
  );
};

export default Contact;
