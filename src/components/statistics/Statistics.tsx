import StatsCard from "../../components/statistics/StatisticsCard";
import { heroSectionData } from "../../data/Home/HomeData";

const Statistics = () => {
  return (
    <div className="flex flex-wrap md:flex-nowrap justify-center md:justify-between gap-3 md:gap-4 w-full">
      {heroSectionData.stats.map((stat, index) => (
        <StatsCard key={index} value={stat.value} label={stat.label} />
      ))}
    </div>
  );
};

export default Statistics;

