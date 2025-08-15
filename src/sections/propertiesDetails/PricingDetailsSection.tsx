import Header from "../../components/sharedComponents/Header"

import Container from "../../layouts/Container"
import type { PricingDetailsDataType } from "../../types/PropertyDetails/ComprehensivePricingDetailsTypes"
import PricingDetails from "./PricingDetails"


function PricingDetailsSection({data}:{data:PricingDetailsDataType}) {
    return (
        <Container className={"flex flex-col gap-10 md:gap-14.5 xl:gap-20"}>
            <Header title={data.headline} description={data.description} 
                withIcon />
            <PricingDetails note={data.note} listingPrice={data.listingPrice} Pricing={data.pricingDetailsCards}/>
        </Container>
    )
}

export default PricingDetailsSection
