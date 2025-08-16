import Header from '../../components/sharedComponents/Header'
import Container from '../../layouts/Container'
import { faqSectionData } from '../../data/Home/HomeData'
import Slider from '../../components/sharedComponents/Slider'
import FAQCard from '../../components/cards/FAQCard'

const FAQSection = () => {
  return (
      <Container >
          <Header
            title={faqSectionData.headline}
            description={faqSectionData.description}
            withIcon
            withBtn={true}
            btnContent={faqSectionData.button.text}
            link={faqSectionData.button.link}
          />
            <Slider
              withBtn
              btnContent={faqSectionData.button.text}
              link={faqSectionData.button.link}
              cards={faqSectionData.faqs.map((faq) => (
                  <FAQCard faq={faq} showButton={true} withShadow={false}/>
              ))}
            />
        </Container>
  )
}

export default FAQSection
