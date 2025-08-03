import type { HeroStat } from "../../types/Home/HomeTypes";

const StatsCard = ({ value, label }: HeroStat) => {
  return (
    <div
      className="flex flex-col items-center justify-center h-[121px] gap-2 rounded-[12px] bg-darkGray
      w-full md:w-[32%] 
      px-4 py-4 md:px-[14px] md:py-5 lg:px-4 lg:py-6
      border border-borderColor"
    >
      <div className="text-white font-bold text-[24px] md:text-[30px] xl:text-[40px]">{value}</div>
      <p className="text-[#999999] text-[18px]">{label}</p>
    </div>
  );
};

export default StatsCard;

