import type { CtaSectionType } from "../../../types/Home/HomeTypes"
import Button from "../Button"
import SectionHeader from "../Header"

function TopFooter({data}:{data:CtaSectionType}) {
  return (
    <div className="w-full flex flex-col px-4 py-12.5 border-t border-b border-t-Grey-15 border-b-Grey-15 gap-7.5">
      <SectionHeader title={data.headline} description={data.description} gap="gap-1.5"/>
      <Button content="Explore Properties" className="bg-Purple-60" link="/properties"/>
    </div>
  )
}

export default TopFooter
