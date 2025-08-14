import HeaderHero from "../sections/sharedSections/HeaderHero";

import {
  effortlessProperty,
  effortlessPropertyHeader,
  featuresCards,
  servicesHeroData,
  smartInvestments,
  smartInvestmentsHeader,
  unlockPropertyCards,
  unlockPropertyHeader,
} from "../data/Services/ServicesData";
import Values from "../sections/Services/Values";
import Features from "../sections/sharedSections/Features";

const Services = () => {
  return (
    <div className="space-y-20 md:space-y-30 xl:space-y-37.5">
      <div>
        <HeaderHero
          title={servicesHeroData.title}
          description={servicesHeroData.description}
        />

        <Features data={featuresCards} />
      </div>

      <Values
        title={unlockPropertyHeader.title}
        description={unlockPropertyHeader.description}
        data={unlockPropertyCards.cards}
        data1={unlockPropertyCards.promotionalCard}
      />

      <Values
        title={effortlessPropertyHeader.title}
        description={effortlessPropertyHeader.description}
        data={effortlessProperty.cards}
        data1={effortlessProperty.promotionalCard}
      />

      <Values
        title={smartInvestmentsHeader.title}
        description={smartInvestmentsHeader.description}
        data={smartInvestments.cards}
        data1={smartInvestments.promotionalCard}
        investSection
      />
    </div>
  );
};
export default Services;
