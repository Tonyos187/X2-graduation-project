import SearchDropDownComponent from "../components/form/formComponents/SearchDropDown";
import SearchFild from "../components/form/formComponents/SerchFild";
import { contactFormSection, contactFormSectionHeader, propertiesData } from "../data/Properties/PropertisData";
import ContactForm from "../sections/Contact/ContactForm";
import PropertiesSection from "../sections/PropertiesPageSections/PropertiesSection";
import SearchandFiltersSection from "../sections/PropertiesPageSections/SearchandFiltersSection";
import HeaderHero from "../sections/sharedSections/HeaderHero";

const Properties = () => {
  return (
    <div className="space-y-20 md:space-y-30 xl:space-y-37.5">
      
        <HeaderHero
          title="Find Your Dream Property"
          description="Welcome to Estatein, where your dream property awaits in every corner of our beautiful world. Explore our curated selection of properties, each offering a unique story and a chance to redefine your life. With categories to suit every dreamer, your journey"
        />
        <SearchandFiltersSection data={propertiesData}/>
        <PropertiesSection data={propertiesData.propertySliderSection}/>
        <ContactForm title={contactFormSectionHeader.title}
          description={contactFormSectionHeader.description} data={contactFormSection.conactForm} areaText={contactFormSection.areaText} properties />
      
    </div>
  );
};

export default Properties;
