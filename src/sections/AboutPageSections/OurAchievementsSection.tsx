import Container from '../../layouts/Container'
import FAQCard from '../../components/cards/FAQCard'
import Header from '../../components/sharedComponents/Header'
import { OurAchievementsSectionData } from '../../data/About/AboutUsData'

const OurAchievementsSection = () => {
  return (
    <section>
      <Container>
        <Header
          title={OurAchievementsSectionData.headline}
          description={OurAchievementsSectionData.description}
          withIcon
        />

<div className="flex flex-wrap justify-between mt-6 lg:mt-[60px] xl:mt-20 w-full">
  {OurAchievementsSectionData.properties.map((item) => (
    <div
      key={item.id}
      className="w-full md:w-[48%] lg:w-[31.6%] flex mb-8 lg:mb-9 xl:mb-0"
    >
      <FAQCard
        faq={{
          id: item.id,
          question: item.title,
          answer: item.description,
          readMoreLink: "#",
        }}
        withShadow={true}
        showButton={false}
      />
    </div>
  ))}
</div>



      </Container>
    </section>
  )
}

export default OurAchievementsSection

