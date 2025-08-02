import ContactHeroContent from "../components/SharedContactHero/ContactHeroContent.tsx"
import ContactHeroFeatures from "../components/SharedContactHero/ContactHeroFeatures.tsx"
import { contactHeroCard, contactHeroData } from "../data/Contact/ContactData.tsx"



const Contact = () => {
  return (
    <div>
      <ContactHeroContent title={contactHeroData.title} description={contactHeroData.description} />
      <ContactHeroFeatures data={contactHeroCard} />
    </div>
  )
}

export default Contact