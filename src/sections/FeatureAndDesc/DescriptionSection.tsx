import type { DetailsType } from "../../types/PropertyDetails/PropertyDetailsTypes";

type DescriptionSectionProps = {
  title: string;
  description: string;
  details: DetailsType[];
};

export default function DescriptionSection({
  title,
  description,
  details,
}: DescriptionSectionProps) {
  return (
    <div className="rounded-[12px] border border-Grey-15 p-[50px] flex flex-col bg-Grey-08">
      <h2 className="text-White text-lg lg:text-[20px] xl:text-2xl font-semibold">
        {title}
      </h2>

      <p className="text-Grey-60 text-sm lg:text-[16px] xl:text-lg leading-relaxed pt-1.5 pb-5 lg:pt-2.5 lg:pb-[30px] xl:pt-3.5 xl:pb-10">
        {description}
      </p>

      {/* للشاشات الكبيرة */}
      <div className="hidden lg:flex gap-[40px] border-t-[1px] text-Grey-15 pt-3">
        {/* القسم الأول */}
        <div className="flex flex-col items-start gap-2 pr-3 xl:pr-5 border-r-[1px] text-Grey-15">
          <div className="flex items-center gap-1 sm:gap-2">
            <span className="text-Grey-60">{details[0]?.icon}</span>
            <span className="text-Grey-60 text-sm xl:text-lg">{details[0]?.label}</span>
          </div>
          <span className="text-White text-lg lg:text-xl xl:text-2xl font-semibold">
            {details[0]?.value}
          </span>
        </div>

        {/* القسم الثاني */}
        <div className="flex flex-col items-start gap-2 pr-3 xl:pr-5 border-r-[1px] text-Grey-15">
          <div className="flex items-center gap-2">
            <span className="text-Grey-60">{details[1]?.icon}</span>
            <span className="text-Grey-60 text-sm xl:text-lg">{details[1]?.label}</span>
          </div>
          <span className="text-White text-lg lg:text-xl xl:text-2xl font-semibold">
            {details[1]?.value}
          </span>
        </div>

        {/* القسم الثالث */}
        <div className="flex flex-col items-start gap-2">
          <div className="flex items-center gap-2">
            <span className="text-Grey-60">{details[2]?.icon}</span>
            <span className="text-Grey-60 text-sm xl:text-lg">{details[2]?.label}</span>
          </div>
          <span className="text-White text-lg lg:text-xl xl:text-2xl font-semibold">
            {details[2]?.value}
          </span>
        </div>
      </div>

      {/* للشاشات الصغيرة */}
      <div className="flex flex-col gap-3 border-t border-Grey-15 pt-3 lg:hidden">
        {/* الصف الأول - Bed & Bath */}
        <div className="flex  gap-2 sm:gap-5">
          {/* Bed */}
          <div className="flex flex-col items-start gap-2 pr-3 xl:pr-5 border-r border-Grey-15 flex-1">
            <div className="flex items-center gap-2">
              <span className="text-Grey-60">{details[0]?.icon}</span>
              <span className="text-Grey-60 text-sm">{details[0]?.label}</span>
            </div>
            <span className="text-White text-lg font-semibold">
              {details[0]?.value}
            </span>
          </div>
          {/* Bath */}
          <div className="flex flex-col items-start gap-2 flex-1 pl-0 sm:pl-5">
            <div className="flex items-center gap-2">
              <span className="text-Grey-60">{details[1]?.icon}</span>
              <span className="text-Grey-60 text-sm">{details[1]?.label}</span>
            </div>
            <span className="text-White text-lg font-semibold">
              {details[1]?.value}
            </span>
          </div>
        </div>

        {/* الصف الثاني - Area */}
        <div className="flex flex-col items-start gap-2 pt-3 border-t border-Grey-15">
          <div className="flex items-center gap-2">
            <span className="text-Grey-60">{details[2]?.icon}</span>
            <span className="text-Grey-60 text-sm">{details[2]?.label}</span>
          </div>
          <span className="text-White text-lg font-semibold">
            {details[2]?.value}
          </span>
        </div>
      </div>
    </div>
  );
}
