import HowItWorksCard from "../../components/cards/HowItWorksCard"
import Header from "../../components/sharedComponents/Header"
import Container from "../../layouts/Container"
import type { NavigatingEstateinExperienceSectionType } from "../../types/About/AboutType"

function HowItWorkSection({data}:{data:NavigatingEstateinExperienceSectionType}) {
  return (
    <Container >
        <Header title={data.headline} description={data.description} withIcon></Header>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-[7%] gap-x-[1.9%] items-stretch ">
            {data.steps.map((step)=>(
                <HowItWorksCard key={step.id} title={step.title} description={step.description} step={step.id}/>
            ))}
        </div>
    </Container>
  )
}

export default HowItWorkSection
