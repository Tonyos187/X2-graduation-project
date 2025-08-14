import Header from '../../components/sharedComponents/Header'
import Container from '../../layouts/Container'
import { faqSectionData } from '../../data/Home/HomeData'
import Slider from '../../components/sharedComponents/Slider'
import FAQCard from '../../components/cards/FAQCard'

const FAQSlider = () => {
  return (
      <Container>
        <Header
          title={faqSectionData.headline}
          description={faqSectionData.description}
          withIcon
          withBtn={true}
          btnContent={faqSectionData.button.text}
          link={faqSectionData.button.link}
        />

        <div className="pt-10">
          <Slider
            withBtn
            btnContent={faqSectionData.button.text}
            link={faqSectionData.button.link}
            cards={faqSectionData.faqs.map((faq) => (
              <div
                key={faq.id}
                className="flex  mb-[30px] lg:mb-10 xl:mb-[50px]"
              >
                  <FAQCard faq={faq} showButton={true} className='min-h-[346px]'/>
              </div>
            ))}
            num_Of_Cards_in_sm_screen={1}
            num_Of_Cards_in_md_screen={2}
            num_Of_Cards_in_xl_screen={3}
            gap_cards="md:gap-[1.56%] xl:gap-[1.88%] gap-7.5"
          />
        </div>
      </Container>
  )
}

export default FAQSlider
