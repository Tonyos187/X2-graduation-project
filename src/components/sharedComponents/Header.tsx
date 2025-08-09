import Button from "./Button";
import ThreeStars from "./ThreeStars";

const Header = ({
  title,
  description,
  withIcon,
  withBtn,
  gap = "gap-2",
  className = ""
}: {
  title?:string,
  description?:string,
  withIcon?:boolean,
  withBtn?:boolean,
  gap ?: string,
  className ?: string
}) => {
  return (
    <div className={`relative flex flex-col ${gap} md:gap-2.5 lg:gap-3.5 ${className}`}>
      {/* stars icon*/}
      {withIcon && (
        <div className="absolute top-[-20px] md:top-[-30px] left-[-8px] md:left-[-16px]">
          <ThreeStars />
        </div>
      )}

      {/* title */}
      <h2 className={`text-White font-semibold text-[28px] md:text-[38px] xl:text-5xl leading-[150%]`}>
        {title}
      </h2>

      {/* description */}
      <div className="flex items-center justify-between gap-37.5 2xl:gap-50">
        <p className={`text-Grey-60 font-medium text-sm md:text-base xl:text-lg leading-[150%]`}>
        {description}
      </p>
      {withBtn && <Button content="view all property" className="bg-Grey-10 hidden md:block" withBorder />}
      </div>
      
    </div>
  );
};

export default Header;
