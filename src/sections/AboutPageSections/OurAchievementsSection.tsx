import Container from "../../layouts/Container";
import FAQCard from "../../components/cards/FAQCard";
import Header from "../../components/sharedComponents/Header";
import { OurAchievementsSectionData } from "../../data/About/AboutUsData";

const OurAchievementsSection = () => {
  return (
      <Container >
        <Header
          title={OurAchievementsSectionData.headline}
          description={OurAchievementsSectionData.description}
          withIcon
        />
        <div className='flex flex-col lg:flex-row gap-y-5 justify-between'>
          {OurAchievementsSectionData.properties.map((item,index) => (
            <FAQCard
              key={index}
              faq={{
                id: item.id,
                question: item.title,
                answer: item.description,
                readMoreLink: "#",
              }}
              withShadow={true}
              showButton={false}
            />
        ))}
        </div>
      </Container>
  )
}

export default OurAchievementsSection;
