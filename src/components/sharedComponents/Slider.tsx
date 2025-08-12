import { useEffect, useState } from "react";
import NextArrow from "../../svg/Next";
import Previous from "../../svg/previous";
import Button from "./Button";

export default function Slider({
  cards,
  withBtn,
  btnContent = "",
  link = "",
  num_Of_Cards_in_sm_screen = 1,
  num_Of_Cards_in_md_screen = 2,
  num_Of_Cards_in_xl_screen = 3,
  gap_cards = "md:gap-5 xl:gap-7.5",
}: {
  cards: any[];
  num_Of_Cards_in_sm_screen?: number;
  num_Of_Cards_in_md_screen?: number;
  num_Of_Cards_in_xl_screen?: number;
  gap_cards?: string;
  withBtn?: boolean;
  btnContent?: string;
  link?: string;
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(3);

  const isAtStart = currentIndex === 0;
  const isAtEnd = currentIndex + cardsPerView >= cards.length;

  const totalPages = Math.ceil(cards.length / cardsPerView);
  const currentPage = Math.floor(currentIndex / cardsPerView) + 1;

  const updateCardsPerView = () => {
    setCardsPerView(
      window.innerWidth <= 768
        ? num_Of_Cards_in_sm_screen
        : window.innerWidth <= 1440
        ? num_Of_Cards_in_md_screen
        : num_Of_Cards_in_xl_screen
    );
  };

  useEffect(() => {
    updateCardsPerView();
    window.addEventListener("resize", updateCardsPerView);
    return () => window.removeEventListener("resize", updateCardsPerView);
  }, []);

  const nextSlide = () => {
    if (!isAtEnd) {
      setCurrentIndex((prev) => prev + cardsPerView);
    }
  };

  const prevSlide = () => {
    if (!isAtStart) {
      setCurrentIndex((prev) => prev - cardsPerView);
    }
  };

  const visibleCards = Array.from({ length: cardsPerView }).map((_, i) => {
    const index = (currentIndex + i) % cards.length;
    return cards[index];
  });

  return (
    <>
      <div className={`flex items-start justify-center ${gap_cards}`}>
        {visibleCards.map((card, index) => (
          <div
            key={index}
            data-aos="fade-down"
            data-aos-duration="800"
            data-aos-delay={index * 100}
          >
            {card}
          </div>
        ))}
      </div>

      {/* Pagination + Buttons at md and xl screen */}
      <div className="hidden md:flex items-center justify-between border-t border-t-Grey-15 md:pt-4 xl:pt-5">
        <div className="xl:text-xl md:text-base font-medium leading-[150%]">
          <span className="text-White ">
            {String(currentPage).padStart(2, "0")}
          </span>{" "}
          <span className="text-Grey-60">of {totalPages}</span>
        </div>

        <div className="flex md:gap-2.5">
          <button
            className={`flex items-center justify-center xl:p-3.5 xl:w-14.5 xl:h-14.5 md:p-2.5 md:w-11 md:h-11 border border-Grey-15 rounded-full transition ${
              isAtStart
                ? "bg-Grey-15 text-Grey-50 cursor-not-allowed"
                : "cursor-pointer bg-Grey-10 text-White hover:bg-Grey-15"
            }`}
            onClick={prevSlide}
            disabled={isAtStart}
          >
            <Previous />
          </button>
          <button
            className={`flex items-center justify-center xl:p-3.5 xl:w-14.5 xl:h-14.5 md:p-2.5 md:w-11 md:h-11 border border-Grey-15 rounded-full transition ${
              isAtEnd
                ? "bg-Grey-15 text-Grey-50 cursor-not-allowed"
                : "cursor-pointer bg-Grey-10 text-White hover:bg-Grey-15]"
            }`}
            onClick={nextSlide}
            disabled={isAtEnd}
          >
            <NextArrow />
          </button>
        </div>
      </div>
      <div className="flex items-center justify-between border-t border-t-Grey-15 pt-4 md:hidden">
        {withBtn && (
          <Button
            content={btnContent}
            className="bg-Grey-10 "
            withBorder
            link={link}
          />
        )}

        {/* Pagination + Buttons at sm screen */}
        <div className="flex items-center justify-between ">
          <div className="flex items-center gap-2.5">
            <button
              className={`flex items-center justify-center p-2.5 w-11 h-11 border border-Grey-15 rounded-full transition ${
                isAtStart
                  ? "bg-Grey-15 text-Grey-50 cursor-not-allowed"
                  : "cursor-pointer bg-Grey-10 text-White hover:bg-Grey-15"
              }`}
              onClick={prevSlide}
              disabled={isAtStart}
            >
              <Previous />
            </button>
            {/* pagination */}
            <div className="text-sm font-medium leading-[150%]">
              <span className="text-White ">
                {String(currentPage).padStart(2, "0")}
              </span>{" "}
              <span className="text-Grey-60">of {totalPages}</span>
            </div>

            <button
              className={`flex items-center justify-center p-2.5 w-11 h-11 border border-Grey-15 rounded-full transition ${
                isAtEnd
                  ? "bg-Grey-15 text-Grey-50 cursor-not-allowed"
                  : "cursor-pointer bg-Grey-10 text-White hover:bg-Grey-15]"
              }`}
              onClick={nextSlide}
              disabled={isAtEnd}
            >
              <NextArrow />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
