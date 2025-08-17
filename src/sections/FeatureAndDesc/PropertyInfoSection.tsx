import FeaturesSection from "./FeaturesSection";
import DescriptionSection from "./DescriptionSection";
import { PropertyDetailsData } from "../../data/PropertyDetails/PropertyDetailsData";

export default function PropertyInfoSection() {
  return (
      <div className="flex flex-col flex-wrap justify-between md:flex-row pt-5 xl:pt-[30px]">
        <div className="order-1 xl:order-none w-full lg:w-[49.06%]">
          <DescriptionSection
            title="Description"
            description={PropertyDetailsData.description?.description || ""}
            details={PropertyDetailsData.description?.details || []}
          />
        </div>
        <div className="order-2 xl:order-none w-full lg:w-[49.06%]">
          <FeaturesSection
            title="Key Features and Amenities"
            features={PropertyDetailsData.description?.features || []}
          />
        </div>
      </div>
    
  );
}
