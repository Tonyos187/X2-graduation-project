import ContactFormFieldsComponent from "../components/form/formComponents/ContactFormFieldsComponent"
import SearchDropDownComponent from "../components/form/formComponents/SearchDropDown"
import SearchFild from "../components/form/formComponents/SerchFild"
import Header from "../components/sharedComponents/Header"
import { propertiesData } from "../data/Properties/PropertisData"


const Properties = () => {
  return (
    <div className="space-y-20 md:space-y-30 xl:space-y-37.5" >
      <div className="hero mt-[68.58px] md:mt-[77px] xl:mt-[99px]">
        {/* put hero title and description through props */}
        <Header
          className="bg-[linear-gradient(95.93deg,#262626_-26.82%,rgba(38,38,38,0)_40.46%)] 
          py-12.5 px-4 md:py-[6.9445vw] md:pl-[5.5556vw] md:pr-[13.8889vw] 
          xl:pt-[7.8125vw] xl:pb-[5.20834vw] xl:pl-[8.4375vw] xl:pr-[20.8334vw]"
          title={propertiesData.heroSection.mainTitle}
          description={propertiesData.heroSection.description}
        />
       <SearchFild data={propertiesData.searchSection} />
      <SearchDropDownComponent data={propertiesData.searchFilterSection} />
      <ContactFormFieldsComponent data={propertiesData.contactFormSection}/>
        </div>
    </div>
  )
}


export default Properties