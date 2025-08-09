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
}

const ValuesCard = ({iconURL, withIcon, title, description, withButton, smartSection, link}: ValuesCardProps) => {
  return (
    <div className={`rounded-[10px] xl:rounded-xl border border-gray-15 p-6 lg:p-10 xl:p-12.5 flex flex-col gap-4 lg:gap-5 xl:gap-7.5 ${withButton ? "bg-[url('/assets/images/Contact/ExploreBackground.webp')] bg-cover bg-center bg-Grey-10 gap-5 xl:gap-7.5" : "gap-4 lg:gap-5 xl:gap-7.5"}`}>
      <div className={`flex  justify-center ${withButton ? "flex-col gap-5 lg:flex-row lg:gap-3.5 xl:gap-5" : "flex-row gap-2.5 lg:gap-4 xl:gap-5"}`}>
        {withIcon && iconURL && <SpinigCircleIcon iconURL={iconURL} />}
        <h3 className="text-lg/[150%] lg:text-xl/[150%] xl:text-2xl/[150%] font-semibold flex-1">{title}</h3>
        {withButton && !smartSection && <Button content="Learn More" withBorder className="w-full lg:w-fit" link={link} />}
      </div>
      <p className="text-sm/[150%] lg:text-base/[150%] xl:text-lg/[150%] font-medium">{description}</p>
      {withButton && smartSection && <Button content="Learn More" withBorder className="w-full" link={link} />}
    </div>
  )
}

export default ValuesCard
