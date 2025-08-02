// one Card of Stat ;)
import type { HeroStat } from "../../types/Home/HomeTypes";
const StatsCard = ({ value, label } : HeroStat) => {
  return (
    <div className="flex flex-col items-center justify-center h-[121px] gap-2 rounded-[12px] bg-darkGray px-6 py-4 w-full max-w-[50%] sm:max-w-[32%] border border-borderColor">
      <div className="text-white text-[40px] font-bold">{value}</div>
      <p className="text-[#999999] text-[18px]">{label}</p>
    </div>
  );
};

export default StatsCard;
