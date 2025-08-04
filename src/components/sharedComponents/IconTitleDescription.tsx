import { type IconTitleDescriptionType } from "../../types/SharedComponents/IconTitleDescriptionType";

const IconTitleDescription = ({
  title,
  titleClassName,
  description,
  descriptionCalssName,
  showIcon,
  icon,
  className,
}: IconTitleDescriptionType) => {
  return (
    <div className={`${className} `}>
      {/* stars icon*/}

      {showIcon && <img src={icon} alt="stars-of-title" />}

      {/* title */}

      <h3
        className={`text-mainText font-semibold text-[28px] lg:text-[38px] 2xl:text-5xl my-2  lg:mt-1.5 lg:mb-2.5 2xl:mt-2.5 2xl:mb-3.5 ${titleClassName}`}
      >
        {title}
      </h3>

      {/* description */}
      <p
        className={`text-secText font-medium text-[14px] lg:text-[16px] 2xl:text-[18px]  ${descriptionCalssName}`}
      >
        {description}
      </p>
    </div>
  );
};

export default IconTitleDescription;
