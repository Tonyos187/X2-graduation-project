import type { FaqItem } from "../../types/Home/HomeTypes";

type Props = {
  faq: FaqItem;
  showButton?: boolean;
  withShadow?: boolean;
};

function FAQCard({ faq, showButton = true, withShadow = false }: Props) {
  return (
    <div
      className={`bg-Grey-08 border border-Grey-15 rounded-[10px] lg:rounded-xl flex flex-col justify-between
        ${withShadow ? "shadow-[0_0_0_8px_#191919] h-auto" : "min-h-[346px]"}
        p-[30px] md:p-10 lg:p-[50px] w-full md:w-[48%] lg:w-[32%]`}
    >
      <h3
        className={`text-White font-semibold ${
          withShadow ? "lg:text-[30px] md:text-2xl text-[18px]" : "text-lg md:text-xl lg:text-2xl"
        }`}
      >
        {faq?.question}
      </h3>
      <p className="text-Grey-60 text-sm lg:text-[18px] my-6 md:my-[30px]">{faq?.answer}</p>

      {showButton && (
        <a
          href={faq?.readMoreLink}
          className="flex items-center justify-center
            w-full
            md:w-[134px] h-[60px] gap-[10px]
            rounded-[10px] border border-Grey-15
            px-[24px] py-[18px]
            bg-Grey-10 text-White text-sm
            opacity-100"
        >
          Read More
        </a>
      )}
    </div>
  );
}

export default FAQCard;








