export type OurValuesCardProps = {
  icon: string;
  title: string;
  description: string;
  rightBorder?: boolean;
};

const OurValuesCard = ({
  icon,
  title,
  description,
  rightBorder = false,
}: OurValuesCardProps) => {
  return (
    <div
      className={`w-full flex flex-col gap-3 min-h-full mb-auto ${
        rightBorder ? "md:border-r md:border-Grey-15 md:pr-6 2xl:pr-7.5" : ""
      }`}
    >
      {/* icon and title */}
      <div className="flex items-center gap-2 md:gap-2.5 xl:gap-3.5">
        <img
          src={icon}
          alt="icon"
          className="icon flex justify-center items-center
           w-13 md:w-15 xl:w-15
           p-3.5 md:p-4 xl:p-5 border border-Purple-60 bg-Grey-08 rounded-full"
        />
        <h4 className="leading-[150%] text-White font-semibold text-lg md:text-xl xl:text-2xl">
          {title}
        </h4>
      </div>
      {/* description */}
      <p className="text-Grey-60 font-medium text-sm md:text-base xl:text-lg leading-[150%]">
        {description}
      </p>
    </div>
  );
};

export default OurValuesCard;
