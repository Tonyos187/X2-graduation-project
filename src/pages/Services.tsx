import Header from "../components/sharedComponents/Header";
import { servicesData } from "../data/Services/ServicesData";
import Values from "../sections/Services/Values";
import Features from "../sections/sharedSections/Features";

const Services = () => {
  return (
    <div className="space-y-20 md:space-y-30 xl:space-y-37.5">
      <div className="hero mt-[68.58px] md:mt-[77px] xl:mt-[99px]">
        {/* put hero title and description through props */}
        <Header
          className="bg-[linear-gradient(95.93deg,#262626_-26.82%,rgba(38,38,38,0)_40.46%)] 
          py-12.5 px-4 md:py-[6.9445vw] md:pl-[5.5556vw] md:pr-[13.8889vw] 
          xl:pt-[7.8125vw] xl:pb-[5.20834vw] xl:pl-[8.4375vw] xl:pr-[20.8334vw]"
          title={servicesData.heroSection.mainTitle}
          description={servicesData.heroSection.description}
        />

        {/* put your featurs data here but first check the type in src/types/contact/contactTypes */}
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
