import FeatureColumn from "../../components/sharedComponents/FeaturesColumn";
import type { FeaturesType } from "../../types/PropertyDetails/PropertyDetailsTypes";

type FeaturesSectionProps = { title: string; features: FeaturesType[] };

export default function FeaturesSection({ title, features }: FeaturesSectionProps) {
  return (
    <div className="min-h-[514px] rounded-[12px] border border-Grey-15 p-5 lg:p-10 xl:p-[50px]  mt-5 lg:mt-0 flex flex-col gap-[40px] bg-Grey-08">
      <h2 className="text-White  text-lg lg:text-[20px] xl:text-2xl font-semibold">{title}</h2>
      <div className="flex flex-col gap-[18px] md:gap-5 xl:gap-[30px]">
        {features.map((feature, index) => (
          <FeatureColumn key={index} icon={feature?.icon} label={feature?.label} />
        ))}
      </div>
    </div>
  );
}
