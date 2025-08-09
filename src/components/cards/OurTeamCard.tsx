import type { MeetEstateinTeamCard } from "../../types/About/AboutType"
import CardImage from "../sharedComponents/CardImage"

const OurTeamCard = ({item} : {item: MeetEstateinTeamCard}) => {
  return (
    <div className="p-5 lg:p-6 xl:7.5 border border-Grey-15 rounded-xl flex flex-col gap-10 lg:gap-12.5">
     <div className="relative">
         <CardImage src={item.image} alt={item.id} height="h-[68.7179vw] md:h-[30vw] lg:h-[15.2778vw] xl:h-[13.1770834vw]" className1 />
         <button className="absolute -bottom-5 xl:-bottom-6.5 left-1/2 -translate-x-1/2 rounded-[43px] py-2.5 px-5 xl:py-3.5 xl:px-6.5 bg-Purple-60 cursor-pointer"><img src="/assets/icons/twitterIcon.svg" className="w-5 h-5 xl:w-6 xl:h-6" alt="social media icon" /></button>
     </div>
      <div className="flex flex-col gap-4 lg:gap-5 xl:gap-6">
        <div className="flex flex-col gap-0.5 lg:gap-1 xl:gap-1.5">
          <h3 className="text-lg/[28px] lg:text-xl/[28px] xl:text-2xl/[28px] font-semibold text-center">{item.name}</h3>
          <p className="text-sm/[24px] lg:text-base/[24px] xl:text-lg/[24px] font-medium text-Grey-60 text-center">{item.job}</p>
        </div>
        <div className="relative">
          <input type="text" placeholder="Say Hello 👋" className="w-full rounded-full py-2 pl-6 pr-2 lg:py-2.5 lg:pl-5 lg:pr-2.5 xl:py-3.5 xl:pl-6 xl:pr-3.5 text-sm/[28px] lg:text-base/[28px] xl:text-lg/[28px] bg-Grey-10 border border-Grey-15 placeholder:text-White focus:outline-none" />
          <button className="absolute right-2 lg:right-2.5 xl:right-3.5 top-1/2 -translate-y-1/2 rounded-full p-3.5 lg:p-2 xl:p-2.5 bg-Purple-60 cursor-pointer"><img src="/assets/icons/telegram.svg" alt="send icon" className="w-5 h-5 xl:w-6 xl:h-6" /></button>
        </div>
      </div>
    </div>
  )
}

export default OurTeamCard
