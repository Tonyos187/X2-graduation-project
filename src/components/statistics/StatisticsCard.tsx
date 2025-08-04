import CountUp from 'react-countup';
import type { HeroStat } from "../../types/Home/HomeTypes";

const StatsCard = ({ value, label }: HeroStat) => {
  const numericValue = parseFloat(value?.replace(/[^\d.]/g, ''));

  return (
    <div
      className="flex flex-col justify-center min-h-[124px] gap-2 rounded-[12px] 
      bg-[var(--color-darkGray)]
      w-full md:w-[32.4%]
      p-2 md:px-[14px] md:py-5 lg:px-4 lg:py-6
      border border-borderColor
      [&:nth-child(3)]:col-span-2
      text-center
      md:text-start
      "
    >
      <div className="text-[var(--color-mainText)] font-bold text-2xl md:text-3xl xl:text-[40px]">
        <CountUp end={numericValue} duration={4} suffix={value?.replace(/[0-9.]/g, '')} />
      </div>
      <p className="text-[var(--color-secText)] text-[14px]  md:text-[13px] lg:text-[18px]">{label}</p>
    </div>
  );
};

export default StatsCard;
