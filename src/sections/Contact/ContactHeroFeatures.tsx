import type { ContactHeroFeaturesType } from "../../types/Contact/ContactType";
import ContactHeroFeaturesCard from "../../components/ContactHeroFeaturesCard";

const ContactHeroFeatures = ({ data }: { data: ContactHeroFeaturesType[] }) => {
  return (
    <section className="grid grid-cols-2 md:grid-cols-4 gap-2.5 2xl:gap-5 p-2.5 2xl:p-5 shadow-[0_0_0_4px_#191919] border border-borderColor overflow-hidden">
      {data.map((item: ContactHeroFeaturesType, index) => {
        // making a card component and passing the data through props
        return <ContactHeroFeaturesCard key={index} item={item} />;
      })}
    </section>
  );
};

export default ContactHeroFeatures;
