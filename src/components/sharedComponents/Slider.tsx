import { useEffect, useState } from "react";

const Slider = ({
  array,
  CardComponent,
}: {
  array: any[];
  CardComponent: any;
}) => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [display, setDisplay] = useState(window.innerWidth >= 992);
  const [buttonsDisabled, setButtonsDisabled] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setDisplay(window.innerWidth >= 992);
      setCurrentIndex(1);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!isTransitioning) {
      const timeout = setTimeout(() => {
        setIsTransitioning(true);
      }, 50);
      return () => clearTimeout(timeout);
    }
  }, [isTransitioning]);

  const temporarilyDisableButtons = () => {
    setButtonsDisabled(true);
    setTimeout(() => setButtonsDisabled(false), 400);
  };

  const nextSlide = () => {
    if (buttonsDisabled) return;
    setCurrentIndex((prev) => prev + 1);
    temporarilyDisableButtons();
  };

  const prevSlide = () => {
    if (buttonsDisabled) return;
    setCurrentIndex((prev) => prev - 1);
    temporarilyDisableButtons();
  };

  const activeArray = display
    ? array
    : array.length > 1
    ? array.slice(1, -1).flat()
    : array.flat();

  const fullSlides = [
    activeArray[activeArray.length - 1],
    ...activeArray,
    activeArray[0],
  ];

  const handleTransitionEnd = () => {
    if (currentIndex >= fullSlides.length - 1) {
      setIsTransitioning(false);
      setCurrentIndex(1);
    } else if (currentIndex <= 0) {
      setIsTransitioning(false);
      setCurrentIndex(fullSlides.length - 2);
    } else {
      setIsTransitioning(true);
    }
  };

  return (
    <div className="relative flex items-center overflow-hidden ">
      <div className="w-full overflow-hidden">
        <div
          className="flex"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
            transition: isTransitioning
              ? "transform 0.25s ease-in-out"
              : "none",
          }}
          onTransitionEnd={handleTransitionEnd}
        >
          {fullSlides.map((group, index) => (
            <div key={index} className="flex-shrink-0 w-full">
              {Array.isArray(group) ? (
                group.map((item, subIndex) => (
                  <CardComponent key={subIndex} {...item} />
                ))
              ) : (
                <CardComponent key={index} {...group} />
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2">
        <button
          className="p-2 bg-white rounded-full shadow"
          onClick={prevSlide}
          disabled={buttonsDisabled}
        >
          <img
            src="/assets/icons/Slider/Vector (Stroke) (2).svg"
            alt="Previous"
          />
        </button>
        <button
          className="p-2 bg-white rounded-full shadow"
          onClick={nextSlide}
          disabled={buttonsDisabled}
        >
          <img src="/assets/icons/Slider/Vector (Stroke).svg" alt="Next" />
        </button>
      </div>
    </div>
  );
};

export default Slider;
