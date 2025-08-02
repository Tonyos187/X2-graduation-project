import StatsCard from "../../components/statistics/StatisticsCard";
import { heroSectionData } from "../../data/Home/HomeData";

const Statistics = () => {
  return (
    <div className="flex flex-wrap gap-4 justify-center">
      {heroSectionData.stats.map((stat, index) => (
        <StatsCard key={index} value={stat.value} label={stat.label} />
      ))}
    </div>
  );
};

export default Statistics;

