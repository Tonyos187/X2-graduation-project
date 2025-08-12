import HeaderHero from "../sections/sharedSections/HeaderHero";

import { servicesData } from "../data/Services/ServicesData";
import Values from "../sections/Services/Values";
import Features from "../sections/sharedSections/Features";

const Services = () => {
  return (
    <div className="space-y-20 md:space-y-30 xl:space-y-37.5">
      <div>
        <HeaderHero
          title="Elevate Your Real Estate Experience"
          description="Welcome to Estatein, where your real estate aspirations meet expert guidance. Explore our comprehensive range of services, each designed to cater to your unique needs and dreams."
        />
        {servicesData.servicesSection.featuresCards && (
          <Features data={servicesData.servicesSection.featuresCards} />
        )}
      </div>

      {servicesData.unlockProperty.sectionTitle &&
        servicesData.unlockProperty.sectionDescription &&
        servicesData.unlockProperty.cards &&
        servicesData.unlockProperty.promotionalCard && (
          <Values
            title={servicesData.unlockProperty.sectionTitle}
            description={servicesData.unlockProperty.sectionDescription}
            data={servicesData.unlockProperty.cards}
            data1={servicesData.unlockProperty.promotionalCard}
          />
        )}

      {servicesData.effortlessProperty.sectionTitle &&
        servicesData.effortlessProperty.sectionDescription &&
        servicesData.effortlessProperty.cards &&
        servicesData.effortlessProperty.promotionalCard && (
          <Values
            title={servicesData.effortlessProperty.sectionTitle}
            description={servicesData.effortlessProperty.sectionDescription}
            data={servicesData.effortlessProperty.cards}
            data1={servicesData.effortlessProperty.promotionalCard}
          />
        )}

      {servicesData.smartInvestments.sectionTitle &&
        servicesData.smartInvestments.sectionDescription &&
        servicesData.smartInvestments.cards &&
        servicesData.smartInvestments.promotionalCard && (
          <Values
            title={servicesData.smartInvestments.sectionTitle}
            description={servicesData.smartInvestments.sectionDescription}
            data={servicesData.smartInvestments.cards}
            data1={servicesData.smartInvestments.promotionalCard}
            investSection
          />
        )}
    </div>
  );
};
export default Services;
