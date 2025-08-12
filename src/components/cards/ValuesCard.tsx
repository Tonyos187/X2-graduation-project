import Button from "../sharedComponents/Button"
import SpinigCircleIcon from "../sharedComponents/SpinigCircleIcon"

interface ValuesCardProps {
    iconURL?: string;
    title: string;
    description: string;
    withButton?: boolean;
    smartSection?: boolean;
    withIcon?: boolean;
    link?: string;
    className?: string
}

const ValuesCard = ({iconURL, withIcon, title, description, withButton, smartSection, link , className}: ValuesCardProps) => {
  return (
    <div className={`rounded-[10px] xl:rounded-xl bg-Grey-08 border border-Grey-15 
    ${smartSection ? "p-6 lg:p-[7%] xl:py-[7%] xl:px-[8%]" : "p-6 lg:p-[2.7778vw] xl:p-[2.604167vw] xl:gap- 7.5" }
    flex flex-col  ${withButton ? "bg-[url('/assets/images/Contact/ExploreBackground.webp')] bg-center bg-Grey-10 gap-5 xl:gap-7.5" : "gap-4 lg:gap-5 xl:gap-7.5"} ${className}`}>
      <div className={`flex justify-center items-center ${withButton ? "flex-col gap-5 lg:flex-row lg:gap-3.5 xl:gap-5" : "flex-row gap-2.5 lg:gap-4 xl:gap-5"}`}>
        {withIcon && iconURL && <SpinigCircleIcon iconURL={iconURL} />}
        <h3 className={`flex-1 mr-auto ${withButton && !smartSection ? "text-xl/[150%] lg:text-2xl/[150%] xl:text-3xl/[150%] font-bold" : "text-lg/[150%] lg:text-xl/[150%] xl:text-2xl/[150%] font-semibold"}`}>{title}</h3>
        {withButton && !smartSection && <Button content="Learn More" withBorder className="w-full lg:w-fit bg-Grey-08" link={link} />}
      </div>
      <p className={`text-sm/[150%] lg:text-base/[150%] xl:text-lg/[150%] font-medium ${smartSection ? "text-White-90" : "text-Grey-60"}`}>{description}</p>
      {withButton && smartSection && <Button content="Learn More" withBorder className="w-full bg-Grey-08" link={link} />}
    </div>
  )
}

export default ValuesCard
