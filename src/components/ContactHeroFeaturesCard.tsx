import type { ContactHeroFeaturesType } from "../types/Contact/ContactType";
import SpinigCircleIcon from "./sharedComponents/SpinigCircleIcon";

const ContactHeroFeaturesCard = ({
  item,
}: {
  item: ContactHeroFeaturesType;
}) => {
  return (
    <div className="relative group flex flex-col items-center xs:justify-center gap-3.5 lg:gap-4 2xl:gap-5 py-[5.1282vw] px-[3.5897vw] lg:py-[2.0834vw] lg:px-[1.1112vw] 2xl:py-[2.08334vw] 2xl:px-[1.04167vw] border border-borderColor rounded-[10px] bg-darkGray z-10 hover:scale-105 cursor-pointer">
      {/* top right arrow icon component */}
      <div className="absolute top-5 right-5 w-6.5 h-6.5 2xl:w-8.5 2xl:h-8.5 text-topRightArrow">
        {item.arrow}
      </div>

      {/* spining features icon */}
      <SpinigCircleIcon iconURL={item.icon} />
      
      {/* the text below the icon */}
      <div className="text-sm/[150%] lg:text-base/[150%] 2xl:text-xl/[150%] font-semibold flex flex-wrap gap-2.5 lg:gap-5 2xl:gap-7.5 items-center text-center justify-center">
        {typeof item.title === "string" ? (
          <p>{item.title}</p>
        ) : (
          item.title.map((title: string, index) => (
            <p key={index} className="text-center">
              {title}
            </p>
          ))
        )}
      </div>
    </div>
  );
};

export default ContactHeroFeaturesCard;
