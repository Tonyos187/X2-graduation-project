import PropertiesCard from "../../components/cards/PropertiesCard"
import Header from "../../components/sharedComponents/Header"
import Slider from "../../components/sharedComponents/Slider2"
import Container from "../../layouts/Container"
import type { FeaturedPropertiesSectionType } from "../../types/Home/HomeTypes"

function PropertiesSection({data}:{data:FeaturedPropertiesSectionType}) {
  return (
    <Container className="gap-10 md:gap-15 xl:gap-20 flex flex-col">
        <Header title={data.headline} description={data.description} withIcon withBtn btnContent={data.button.text} link={data.button.link} />
        <Slider cards={data.properties.map( (property)=>(
         <PropertiesCard image={property.image} title={property.title} fullDescription={property.description} price={property.price} lessDescription={property.description} />
        ))}/>
    </Container>
  )
}

export default PropertiesSection
