import Header from "../../components/sharedComponents/Header"
import { ComprehensivePricingDetails } from "../../data/PropertyDetails/ComprehensivePricingDetails"
import Container from "../../layouts/Container"
import PricingDetails from "./PricingDetails"


function PricingDetailsSection() {
    const sectionData = ComprehensivePricingDetails
    return (
        <Container className={"flex flex-col gap-10 md:gap-14.5 xl:gap-20"}>
            <Header title={"Comprehensive Pricing Details"} description={"At Estatein, transparency is key. We want you to have a clear understanding of all costs associated with your property investment. Below, we break down the pricing for Seaside Serenity Villa to help you make an informed decision"} 
                withIcon />
            <PricingDetails note={sectionData.note} listingPrice={sectionData.listingPrice} Pricing={sectionData.pricingDetailsCards}/>
        </Container>
    )
}

export default PricingDetailsSection
