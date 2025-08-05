import ContactFormFieldsComponent from "../components/PropertisComponents/ContactFormFieldsComponent"
import SearchDropDownComponent from "../components/PropertisComponents/SearchDropDown"
import SearchFild from "../components/PropertisComponents/SerchFild"
import { propertiesData } from "../data/Properties/PropertisData"


const Properties = () => {
  return (
    <div className="py-24 px-10" >
       <SearchFild data={propertiesData.searchSection} />
      <SearchDropDownComponent data={propertiesData.searchFilterSection} />
      <ContactFormFieldsComponent data={propertiesData.contactFormSection}/>
    </div>
  )
}


export default Properties