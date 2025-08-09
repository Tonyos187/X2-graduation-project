import Container from '../../layouts/Container'
import { MeetEstateinTeamCardSectionData } from '../../data/About/AboutUsData'
import OurTeamCard from '../../components/cards/OurTeamCard'
import Header from '../../components/sharedComponents/Header'
import type { MeetEstateinTeamCard } from '../../types/About/AboutType'

const OurTeam = () => {
  return (
    <Container className='flex flex-col gap-10 lg:gap-15 xl:gap-20'>
        <Header title={MeetEstateinTeamCardSectionData.headline} description={MeetEstateinTeamCardSectionData.description} withIcon />
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 xl:gap-7.5'>
            {MeetEstateinTeamCardSectionData.properties.map((item: MeetEstateinTeamCard, index) => (
            <OurTeamCard key={index} item={item} />
        ))}
        </div>
    </Container>
  )
}

export default OurTeam
