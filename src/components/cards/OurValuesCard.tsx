export type OurValuesCardProps = {
  icon: string;
  title: string;
  description: string;
  hasRightBorder?: boolean;
};

const OurValuesCard = ({
  icon,
  title,
  description,
  hasRightBorder,
}: OurValuesCardProps) => {
  return (
    <div
      className={` w-full md:max-w-[40.7682%] xl:max-w-[40.9409%] 
        border-b border-Grey-15  md:border-b-0 py-5 md:py-0
        ${
          hasRightBorder
            ? "md:border-r md:pr-6 xl:pr-[30px] md:border-Grey-15"
            : ""
        }`}
    >
      <div className="flex items-center gap-3 md:gap-2.5 xl:gap-3.5 mb-3.5 md:mb-4 xl:mb-5">
        <div className="icon flex justify-center items-center w-[52px] h-[52px] md:w-[60px] md:h-[60px] xl:w-[74px] xl:h-[74px] p-3.5 md:p-4 xl:p-5 border border-Purple-60 bg-Grey-08">
          <img src={icon} alt="icon" />
        </div>
        <h4 className="title text-White font-semibold text-[18px] md:text-[20px] xl:text-2xl">
          {title}
        </h4>
      </div>
      <div>
        <p className="text-Grey-60 font-medium text-[14px] md:text-[16px] xl:text-[18px] leading-[150%]">
          {description}
        </p>
      </div>
    </div>
  );
};

export default OurValuesCard;
