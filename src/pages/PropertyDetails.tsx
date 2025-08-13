import { detailsFormData, detailsFormHeaderData } from "../data/PropertyDetails/PropertyDetailsData";
import ContactForm from "../sections/Contact/ContactForm";
import ComprehensivePricing from "../sections/propertiesDetails/ComprehensivePricing";
import PropertyDetailsSlider from "../sections/propertiesDetails/PropertyDetailsSlider";
const PropertyDetails = () => {
  return (
    <div className="space-y-20 md:space-y-30 xl:space-y-37.5">
      <PropertyDetailsSlider />
      <ContactForm title={detailsFormHeaderData.title} description={detailsFormHeaderData.description} data={detailsFormData.conactForm} areaText={detailsFormData.areaText} detailsPage />
      <ComprehensivePricing/>
    </div>
  );
};

export default PropertyDetails;
