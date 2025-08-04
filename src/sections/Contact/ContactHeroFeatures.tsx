import type { ContactHeroFeaturesType } from "../../types/Contact/ContactType";
import ContactHeroFeaturesCard from "../../components/ContactHeroFeaturesCard";

const ContactHeroFeatures = ({ data }: { data: ContactHeroFeaturesType[] }) => {
  return (
    <section className="grid grid-cols-2 md:grid-cols-4 gap-2.5 2xl:gap-5 p-2.5 2xl:p-5 shadow-[0_0_0_4px_#191919] border border-[#262626]">
      {data.map((item: ContactHeroFeaturesType, index) => {
        return <ContactHeroFeaturesCard key={index} item={item} />;
      })}
    </section>
  );
};

export default ContactHeroFeatures;
