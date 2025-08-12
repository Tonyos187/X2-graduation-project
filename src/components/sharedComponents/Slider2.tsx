import { useEffect, useState } from "react";

export default function Slider({
  cards,
  num_Of_Cards_in_768 = 1,
  num_Of_Cards_in_1280 = 2,
  num_Of_Cards_in_1700 = 2,
  num_Of_Cards_in_other = 3,
  gap_cards = "gap-2",
}: {
  cards: any[];
  num_Of_Cards_in_768?: number;
  num_Of_Cards_in_1280?: number;
  num_Of_Cards_in_1700?: number;
  num_Of_Cards_in_other?: number;
  gap_cards?: string;
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(4);
  const isAtStart = currentIndex === 0;
  const isAtEnd = currentIndex + cardsPerView >= cards.length;

  const updateCardsPerView = () => {
    setCardsPerView(
      window.innerWidth <= 768
        ? num_Of_Cards_in_768
        : window.innerWidth <= 1280
        ? num_Of_Cards_in_1280
        : window.innerWidth <= 1700
        ? num_Of_Cards_in_1700
        : num_Of_Cards_in_other
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

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     nextSlide();
  //   }, 4000);
  //   return () => clearInterval(interval);
  // }, [cards.length]);

  const visibleCards = Array.from({ length: cardsPerView }).map((_, i) => {
    const index = (currentIndex + i) % cards.length;
    return cards[index];
  });

  return (
    <>
      <div className="absolute top-0 right-4 lg:right-12 xl:right-32 2xl:right-62.5 flex justify-between items-center gap-5">
        <button
          className={`flex items-center justify-center w-12.5 h-12.5 rounded-[50%] ${
            isAtStart
              ? "bg-Grey-08 text-[#7f7f7f] cursor-not-allowed"
              : "cursor-pointer bg-Purple-60 text-white"
          }`}
          onClick={prevSlide}
          disabled={isAtStart}
        >
          {}
          left
        </button>

        <button
          className={`flex items-center justify-center w-12.5 h-12.5 rounded-[50%] ${
            isAtEnd
              ? "bg-Grey-08 text-[#7f7f7f] cursor-not-allowed"
              : "cursor-pointer bg-Purple-60 text-white"
          }`}
          onClick={nextSlide}
          disabled={isAtEnd}
        >
          {}
          right
        </button>
      </div>
      <div className={`flex items-start justify-center ${gap_cards}`}>
        {visibleCards.map((card, index) =>
         (
            <div
              key={index}
              data-aos="fade-down"
              data-aos-duration="800"
              data-aos-delay={index * 100}
            >
              {card}
            </div>
          ) 
        )}
      </div>

      <div className="flex  justify-center items-center gap-6 pt-10">
        <button
          className={`flex items-center justify-center w-10 h-10 rounded-[50%] ${
            isAtStart
              ? "bg-[#efefef] text-[#7f7f7f] cursor-not-allowed"
              : "cursor-pointer bg-orange text-white"
          }`}
          onClick={prevSlide}
          disabled={isAtStart}
        >
          {}
          left
        </button>
        <button
          className={`flex items-center justify-center w-10 h-10 rounded-[50%] ${
            isAtEnd
              ? "bg-[#efefef] text-[#7f7f7f] cursor-not-allowed"
              : "cursor-pointer bg-orange text-white"
          }`}
          onClick={nextSlide}
          disabled={isAtEnd}
        >
          {}
          right
        </button>
      </div>
    </>
  );
}
