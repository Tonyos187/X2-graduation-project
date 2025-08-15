import type { FeaturesType } from "../../types/PropertyDetails/PropertyDetailsTypes";

export default function FeatureColumn({ icon, label }: FeaturesType) {
  return (
    <div
      className="
        group
        flex items-center gap-[10px] py-[14px] px-[16px] border-l border-Purple-60 
        transition-all duration-300 ease-out 
        hover:scale-[1.03] hover:shadow-[0_0_12px_rgba(186,104,255,0.4)]
        hover:border-Purple-60 
      "
      style={{
        background:
          "linear-gradient(90deg, #1A1A1A 0%, rgba(26, 26, 26, 0) 100%)",
      }}
    >
      <span
        className="
          flex-shrink-0 
          transition-all duration-300 
          text-Grey-60 group-hover:text-Purple-60
        "
      >
        {icon}
      </span>
      <p className="text-Grey-60 text-sm lg:text-[16px] xl:text-lg">{label}</p>
    </div>
  );
}
