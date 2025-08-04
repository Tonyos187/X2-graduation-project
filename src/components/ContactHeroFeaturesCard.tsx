import type { ContactHeroFeaturesType } from "../types/Contact/ContactType";

const ContactHeroFeaturesCard = ({
  item,
}: {
  item: ContactHeroFeaturesType;
}) => {
  return (
    <div className="relative group flex flex-col items-center justify-center gap-3.5 lg:gap-4 2xl:gap-5 py-[5.1282vw] px-[3.5897vw] lg:py-[2.0834vw] lg:px-[1.1112vw] 2xl:py-[2.08334vw] 2xl:px-[1.04167vw] border border-borderColor rounded-[10px] bg-darkGray z-40 hover:scale-105 cursor-pointer">
      {/* top right arrow icon component */}
      <div className="absolute top-5 right-5 w-6.5 h-6.5 2xl:w-8.5 2xl:h-8.5 text-topRightArrow">
        {item.arrow}
      </div>

      {/* spining features icon */}
      <div className="relative group w-12 h-12 lg:w-15 lg:h-15 2xl:w-20.5 2xl:h-20.5 z-40">
        <div
          className="
      relative
      rounded-full bg-darkGray w-12 h-12 lg:w-15 lg:h-15 2xl:w-20.5 2xl:h-20.5 flex justify-center items-center
      before:content-[''] before:absolute before:w-[calc(100%+3px)] before:h-[calc(100%+3px)] inset-0 before:rounded-full
        before:bg-[linear-gradient(40.65deg,#A685FA_0.85%,rgba(166,133,250,0)_34.8%),linear-gradient(219.04deg,#A685FA_-6.93%,rgba(166,133,250,0)_52.6%)]
        before:blur-none before:-z-10
        group-hover:before:animate-[spin_3s_linear_infinite]
    "
        >
          <div
            className="relative rounded-full bg-darkGray w-9 h-9 lg:w-11 lg:h-11 2xl:w-15.5 2xl:h-15.5 
      before:content-[''] before:absolute before:w-[calc(100%+2px)] before:h-[calc(100%+2px)] before:inset-0 before:rounded-full
        before:bg-[linear-gradient(130.5deg,_#A685FA_-3.27%,_rgba(166,133,250,0)_30.09%),linear-gradient(305.31deg,_#A685FA_-20.93%,_rgba(166,133,250,0)_37.94%)]
        before:blur-none before:z-1
        group-hover:before:animate-[spin_reverse_3s_linear_infinite]"
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-9 h-9 lg:w-11 lg:h-11 2xl:w-15.5 2xl:h-15.5 bg-darkGray rounded-full z-30 flex justify-center items-center">
              <img
                src={item.icon}
                alt="icon"
                className="w-5 h-5 lg:w-6 lg:h-6 2xl:w-8.5 2xl:h-8.5"
              />
            </div>
          </div>
        </div>
      </div>

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
