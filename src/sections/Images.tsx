import PropertyDetailsHeder from "../components/PropertyDetailsHeder";
import Container from "../layouts/Container";
import PropertyInfoSection from "./FeatureAndDesc/PropertyInfoSection";
import PropertyDetailsSlider from "./propertiesDetails/PropertyDetailsSlider";

function Images() {
    return (
        <Container>
            <PropertyDetailsHeder/>
            <PropertyDetailsSlider/>
            <PropertyInfoSection />
        </Container>
    )
}

export default Images
