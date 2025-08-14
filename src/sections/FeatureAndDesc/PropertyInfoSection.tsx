import Container from "../../layouts/Container"; // عدل المسار حسب مكان الكونتينر
import FeaturesSection from "./FeaturesSection";
import DescriptionSection from "./DescriptionSection";
import { PropertyDetailsData } from "../../data/PropertyDetails/PropertyDetailsData";

export default function PropertyInfoSection() {
  return (
    <Container className="mt-32">
      <div className="flex flex-col flex-wrap justify-between md:flex-row  pt-5 xl:pt-[30px]">

        {/* العمود الأول - Description */}
        <div className="order-1 xl:order-none w-full lg:w-[49.06%]">
          <DescriptionSection
            title="Description"
            description={PropertyDetailsData.description?.description || ""}
            details={PropertyDetailsData.description?.details || []}
          />
        </div>

        {/* العمود الثاني - Features */}
        <div className="order-2 xl:order-none w-full lg:w-[49.06%]">
          <FeaturesSection
            title="Key Features and Amenities"
            features={PropertyDetailsData.description?.features || []}
          />
        </div>

      </div>
    </Container>
  );
}
