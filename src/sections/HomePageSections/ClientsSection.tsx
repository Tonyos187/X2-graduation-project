import Clients from "../../components/cards/ClientsCard"
import Header from "../../components/sharedComponents/Header"
import Slider from "../../components/sharedComponents/Slider"
import Container from "../../layouts/Container"
import { testimonialsSectionData } from "../../data/Home/HomeData"
import type { Testimonial } from "../../types/Home/HomeTypes"

const ClientsSection = () => {
  const data = testimonialsSectionData
  return (
    <Container className="gap-10 md:gap-15 xl:gap-20 flex flex-col">
        <Header title={data.headline}
        description={data.description}
        withBtn
        withIcon
        btnContent={data.button.text}
        link={data.button.link}/>
        <Slider
        withBtn
        btnContent={data.button.text}
        link={data.button.link}
        cards={data.testimonials.map((testimonial: Testimonial) => (
          <Clients testimonial={testimonial} />
        ))}
      />
    </Container>
  )
}

export default ClientsSection