import { Link } from "react-router-dom";
import type { FaqItem } from "../../types/Home/HomeTypes";

type Props = {
  faq: FaqItem;
  showButton?: boolean;
  withShadow?: boolean;
  className?: string;
  fixedHeight?: string; 
};

function FAQCard({ faq, showButton = true, withShadow = false, className = '' }: Props) {
  return (
    <div
      className={`bg-Grey-08 border border-Grey-15 rounded-[10px] xl:rounded-xl flex flex-col justify-between gap-5 md:gap-6 xl:gap-7.5 
        ${withShadow ? " w-full lg:w-[31.663%] shadow-[0_0_0_4px_var(--color-Grey-10)] md:shadow-[0_0_0_6px_var(--color-Grey-10)] xl:shadow-[0_0_0_8px_var(--color-Grey-10)]" : ""}
        p-7.5 md:p-10 xl:p-12.5 ${className}`}
    >
      <h3
        className={`text-White font-semibold ${
          withShadow ? "text-xl md:text-2xl xl:text-3xl" : "text-lg md:text-xl xl:text-2xl"
        }`}
      >
        {faq?.question}
      </h3>

      <p className="text-Grey-60 text-sm md:text-base xl:text-lg font-medium">
        {faq?.answer}
      </p>

      {showButton && (
        <Link 
          to={faq?.readMoreLink} 
          className="py-3.5 px-5 xl:py-4.5 xl:px-6 text-center md:w-fit 
            rounded-[10px] border border-Grey-15 bg-Grey-10 
            text-White text-sm xl:text-lg font-medium"
        >
          Read More
        </Link>
      )}
    </div>
  );
}

export default FAQCard;



