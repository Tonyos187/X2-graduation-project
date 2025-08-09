import FooterImg from "../../../svg/FooterImg"
import type { CtaSectionType } from "../../../types/Home/HomeTypes"
import Button from "../Button"
import SectionHeader from "../Header"

function TopFooter({data}:{data:CtaSectionType}) {
  return (
    <div className="relative w-full flex flex-col px-4 py-12.5 border-t border-b border-t-Grey-15 border-b-Grey-15 gap-7.5 overflow-hidden">
      <div className="absolute z-0 right-0 bottom-0 text-Grey-10"><FooterImg/></div>
      <SectionHeader title={data.headline} description={data.description} gap="gap-1.5" className="z-1"/>
      <Button content="Explore Properties" className="bg-Purple-60 z-1" link="/properties"/>
      <div className="absolute z-0 -left-[100%] xs:-left-[110%] md:left-0 -top-[120%] xs:-top-[75%] md:top-0 md:bottom-0  md:rotate-y-180 md:rotate-x-0  text-Grey-10"><FooterImg/></div>
    </div>
  )
}

export default TopFooter
