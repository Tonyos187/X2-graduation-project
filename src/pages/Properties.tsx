import ContactFormFieldsComponent from "../components/form/formComponents/ContactFormFieldsComponent"
import SearchDropDownComponent from "../components/form/formComponents/SearchDropDown"
import SearchFild from "../components/form/formComponents/SerchFild"
import { propertiesData } from "../data/Properties/PropertisData"


const Properties = () => {
  return (
    <div className="space-y-20 md:space-y-30 xl:space-y-37.5" >
       <SearchFild data={propertiesData.searchSection} />
      <SearchDropDownComponent data={propertiesData.searchFilterSection} />
      <ContactFormFieldsComponent data={propertiesData.contactFormSection}/>
    </div>
  )
}


export default Properties