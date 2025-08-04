import StatsCard from "../../components/statistics/StatisticsCard";
import { heroSectionData } from "../../data/Home/HomeData";

const Statistics = () => {
  return (
    <div className="grid grid-cols-2 gap-3 w-full md:flex md:flex-nowrap md:justify-between md:gap-4">
      {heroSectionData.stats.map((stat, index) => (
        <StatsCard key={index} value={stat?.value} label={stat?.label} />
      ))}
    </div>
  );
};

export default Statistics;

