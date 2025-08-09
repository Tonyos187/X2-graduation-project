import FAQCard from "./FAQCard";
import { faqSectionData } from "../../data/Home/HomeData";

function FaqCardsContainer() {
  return (
    <div className="flex flex-wrap justify-center gap-5  w-full mt-40">
      {faqSectionData.faqs.map((faq) => (
        <FAQCard key={faq.id} faq={faq} showButton={true} withShadow={false} />
      ))}
    </div>
  );
}

export default FaqCardsContainer;


