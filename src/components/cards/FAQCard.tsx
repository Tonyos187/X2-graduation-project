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
      className={`bg-Grey-08 border border-Grey-15 rounded-[10px] lg:rounded-xl
        ${withShadow ? "shadow-[0_0_0_8px_#191919]" : ""}
        p-[30px] lg:p-10 xl:p-[50px] flex flex-col justify-between  ${className}`}
    >
      <div>
        <h3
          className={`text-White font-semibold ${
            withShadow ? "lg:text-[30px] md:text-2xl text-[18px] mb-4 lg:mb-6 xl:mb-[30px]" : "text-xl lg:text-2xl"
          }`}
        >
          {faq?.question}
        </h3>
      </div>

      <div className="">
        <p className="text-Grey-60 text-sm sm:text-[16px] xl:text-[18px]">
          {faq?.answer}
        </p>
      </div>

  
      {showButton && (
        <div>
          <a
            href={faq?.readMoreLink}
            className="flex items-center justify-center
              w-full md:w-[134px] 
              rounded-[10px] border border-Grey-15
              px-[24px] py-[18px]
              bg-Grey-10 text-White text-sm"
          >
            Read More
          </a>
        </div>
      )}
    </div>
  );
}

export default FAQCard;





