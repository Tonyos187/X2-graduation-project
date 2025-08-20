import { useState } from "react";
import type { FaqItem } from "../../types/Home/HomeTypes";
import Button from "../sharedComponents/Button";
import Modal from "../modals/FAQModal";

type Props = {
  faq: FaqItem;
  showButton?: boolean;
  withShadow?: boolean;
  className?: string;
  fixedHeight?: string;
};

function FAQCard({ faq, showButton = true, withShadow = false, className = '' }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        className={`bg-Grey-08 border border-Grey-15 rounded-[10px] xl:rounded-xl flex flex-col justify-between gap-5 md:gap-6 xl:gap-7.5 w-full 
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
          <Button
            onClick={() => setIsOpen(true)}
            content={faq.btnText ?? "Read More"}
            className="md:w-fit bg-Grey-10"
            withBorder
          />
        )}
      </div>

<Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
  <h3 className="text-base sm:text-lg md:text-xl font-bold text-Black">
    {faq?.question}
  </h3>
  <p className="text-xs sm:text-sm md:text-base text-Grey-60 leading-relaxed">
    {faq?.fullAnswer}
  </p>
</Modal>

    </>
  );
}

export default FAQCard;
