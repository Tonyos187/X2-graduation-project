import StatsCard from "../../sharedComponents/statistics/StatisticsCard";
import { heroSectionData } from "../../../data/Home/HomeData";

const Statistics = () => {
  // you can define unique styles per card
  const cardClassNames = [
    "bg-darkGray md:w-[31.4%] laptop:w-[32.4%] w-[48.324%]",     // Card 1
    "bg-darkGray md:w-[31.4%] laptop:w-[32.4%] w-[48.324%]",     // Card 2
    "bg-darkGray md:w-[31.4%] laptop:w-[32.4%] w-full",     // Card 3
  ];

  return (
    <div className="w-full flex flex-wrap justify-between gap-y-3">
      {heroSectionData.stats.map((stat, index) => (
        <StatsCard
          key={index}
          value={stat.value}
          label={stat.label}
          className={cardClassNames[index]} // unique class per card
        />
      ))}
    </div>
  );
};

export default Statistics;