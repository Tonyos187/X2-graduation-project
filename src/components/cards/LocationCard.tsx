import type { ReactNode } from "react";
import { Link } from "react-router-dom"
// Contact Detail Data type
interface ContactDetails {
        icon: ReactNode;
        title: string[];
}
// Card Data type
interface LocationCardData {
    title:string,
    address:string,
    description:string,
    contactDetails:ContactDetails[],
}
function LocationCard({title,address,description,contactDetails}:LocationCardData) {
    return (
        <div className="md:w-[49.0607%] w-full bg-Grey-08 border border-Grey-15 p-6 lg:p-10 xl:p-12.5 rounded-xl flex flex-col xl:gap-10 md:gap-7.5 gap-6">
            <div>
                <span className="urbanist text-sm xl:text-lg font-medium text-White">{title}</span>
                <h3 className="xl:text-3xl md:text-2xl text-xl font-semibold mt-1 mb-2 md:mt-1.5 md:mb-2.5 xl:mt-2.5 xl:mb-3.5 text-White">{address}</h3>
                <p className="text-sm md:text-base xl:text-lg font-medium text-Grey-60">{description}</p>
            </div>
            <div className="flex gap-2 xl:gap-2.5 flex-wrap">
                {contactDetails.map((cont,index) => {
                    return(
                        <div key={index} className="flex items-center gap-1 xl:gap-1.5 py-2.5 px-4 xl:py-3.5 xl:px-5 bg-Grey-10 w-fit rounded-[28px] border border-Grey-15 urbanist text-sm xl:text-lg font-medium">
                            {cont.icon}<p>{cont.title}</p>
                        </div>
                    )
                })}
            </div>
            <Link to={""} className="w-full xl:py-4.5 xl:px-6 py-3.5 px-5 bg-Purple-60 rounded-[8px] xl:rounded-[10px] urbanist text-sm xl:text-lg font-medium text-center">Get Direction</Link>
        </div>
    )
}

export default LocationCard
