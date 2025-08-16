import { detailsFormData, detailsFormHeaderData } from "../data/PropertyDetails/PropertyDetailsData";
import ContactForm from "../sections/Contact/ContactForm";
import PricingDetailsSection from "../sections/propertiesDetails/PricingDetailsSection";
import PropertyDetailsSlider from "../sections/propertiesDetails/PropertyDetailsSlider";
import PropertyInfoSection from "../sections/FeatureAndDesc/PropertyInfoSection";
<<<<<<< HEAD
import FAQSlider from "../sections/HomePageSections/FAQSliderSection";
=======
import { ComprehensivePricingDetails } from "../data/PropertyDetails/ComprehensivePricingDetails";
import FAQSection from "../sections/HomePageSections/FAQSection";
>>>>>>> 9f874c082006527875b992fc8d1381f02af1163e
const PropertyDetails = () => {
  return (
    <div className="space-y-20 md:space-y-30 xl:space-y-37.5">
      <PropertyDetailsSlider />
      <PropertyInfoSection />
      <ContactForm title={detailsFormHeaderData.title} description={detailsFormHeaderData.description} data={detailsFormData.conactForm} areaText={detailsFormData.areaText} detailsPage />
      <PricingDetailsSection data={ComprehensivePricingDetails}/>
      <FAQSection />
    </div>
  );
};

export default PropertyDetails;
