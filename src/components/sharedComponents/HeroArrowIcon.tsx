import { useEffect, useRef, useState } from "react";
import TopRightArrow from "../../svg/TopRightArrow";

export default function HeroArrowIcon() {
  const text = "✨  D i s c o v e r  Y o u r  D r e a m  P r o p e r t y   ";
  const circle = useRef<HTMLDivElement>(null);
  const [radius, setRadius] = useState(85);
  const [isPulsing, setIsPulsing] = useState(false);

  useEffect(() => {
    const updateRadius = () => {
      if (circle.current) {
        const { width } = circle.current.getBoundingClientRect();
        setRadius(width/2);
      }
    };

    updateRadius();
    window.addEventListener("resize", updateRadius);
    return () => window.removeEventListener("resize", updateRadius);
  }, []);

  useEffect(() => {
    if (isPulsing) {
      const timer = setTimeout(() => setIsPulsing(false), 600);
      return () => clearTimeout(timer);
    }
  }, [isPulsing]);

  return (
      <div
        ref={circle}
        className={`relative border border-borderColor w-29.5 h-29.5 tablet:w-32 tablet:h-32 laptop:w-44 laptop:h-44 
          flex items-center justify-center rounded-full bg-bg overflow-hidden hover-glow ${
          isPulsing ? "animate-pulse-once" : ""
        }`}
        onClick={() => setIsPulsing(true)}
      >
        <div className="absolute w-full h-full rounded-full animate-rotate">
          {text.split("").map((char, i) => (
            <span
              key={i}
              className="absolute left-1/2 text-[10.03px] md:text-[11.06px] laptop:text-[15px] font-semibold 
              z-10 p-1.5 md:py-2 laptop:py-3 text-animate"
              style={{
                transform: `rotate(${(360 / text.length) * i}deg)`,
                transformOrigin: `0 ${radius}px`,
              }}
            >
              {char}
            </span>
          ))}
        </div>

        <div className="text-white flex items-center justify-center bg-Grey-15 w-[45%] h-[45%] rounded-full border border-Grey-15 
                          absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 cursor-pointer">
          <div className="w-[42%] h-[42%]">
            <TopRightArrow />
          </div>
        </div>
      </div>
  
  );
}
