import type { ContactHeroDataType } from "../../types/Contact/ContactType"


const ContactHeroContent = ({title, description} : ContactHeroDataType) => {
  return (
    <div className="bg-[linear-gradient(95.93deg,#262626_-26.82%,rgba(38,38,38,0)_40.46%)] py-12.5 px-4 lg:py-25 lg:pl-20 lg:pr-[13.8889vw] 2xl:pt-37.5 2xl:pb-25 2xl:pl-40.5 2xl:pr-100">
      <div className="flex flex-col gap-2.5 2xl:gap-3">
        <h1 className="text-[28px]/[150%] lg:text-[38px]/[150%] 2xl:text-[5xl]/[150%] font-semibold">{title}</h1>
      <p className="text-sm/[150%] lg:text-base/[150%] 2xl:text-lg/[150%] font-medium text-secText">{description}</p>
      </div>
    </div>
  )
}

export default ContactHeroContent



