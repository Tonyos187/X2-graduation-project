import Button from "./Button";
import ThreeStars from "./sharedComponents/ThreeStars";

const SectionHeader = ({
  title,
  description,
  withIcon,
  withBtn
}: {
  title?:string,
  description?:string,
  withIcon?:boolean,
  withBtn?:boolean
}) => {
  return (
    <div className={`relative flex flex-col gap-2 md:gap-2.5 lg:gap-3.5`}>
      {/* stars icon*/}
      {withIcon && (
        <div className="absolute top-[-20px] md:top-[-30px] left-[-8px] md:left-[-16px]">
          <ThreeStars />
        </div>
      )}

      {/* title */}
      <h2 className={`text-mainText font-semibold text-[7.17948vw] lg:text-[2.63889vw] 2xl:text-5xl leading-[150%]`}>
        {title}
      </h2>

      {/* description */}
      <div className="flex items-center justify-between gap-37.5 2xl:gap-50">
        <p className={`text-secText font-medium text-[3.5897vw] lg:text-[1.1112vw] 2xl:text-[18px]`}>
        {description}
      </p>
      {withBtn && <Button content="view all property" className="bg-darkGray hidden md:block" withBorder />}
      </div>
      
    </div>
  );
};

export default SectionHeader;
