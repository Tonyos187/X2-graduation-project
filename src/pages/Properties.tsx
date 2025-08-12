import ContactFormFieldsComponent from "../components/form/formComponents/ContactFormFieldsComponent";
import SearchDropDownComponent from "../components/form/formComponents/SearchDropDown";
import SearchFild from "../components/form/formComponents/SerchFild";
import { propertiesData } from "../data/Properties/PropertisData";
import HeaderHero from "../sections/sharedSections/HeaderHero";

const Properties = () => {
  return (
    <div className="space-y-20 md:space-y-30 xl:space-y-37.5">
      <div>
        {/* put hero title and description through props */}
        <HeaderHero
          title="Find Your Dream Property"
          description="Welcome to Estatein, where your dream property awaits in every corner of our beautiful world. Explore our curated selection of properties, each offering a unique story and a chance to redefine your life. With categories to suit every dreamer, your journey"
        />
        <SearchFild data={propertiesData.searchSection} />
        <SearchDropDownComponent data={propertiesData.searchFilterSection} />
        <ContactFormFieldsComponent data={propertiesData.contactFormSection} />
      </div>
    </div>
  );
};

export default Properties;
