import { useState } from "react"
import type { ReactNode } from "react";
import Button from "../sharedComponents/Button"
import InfoComponent from "../sharedComponents/InfoComponent"
// type for detail InfoComponent
interface Detail {
    icon:ReactNode,
    label:string,
}
// props type for the propertiesCard 
interface PropertiesProps {
    showInfo?:boolean,
    details?:Detail[],
    fullDescription:string,
    image:string,
    discoverDescription?:string,
    lessDescription:string,
    price:string,
    title:string,
}
function PropertiesCard({showInfo,details,fullDescription,image,discoverDescription,lessDescription,price,title}:PropertiesProps) {
    // State to check if the card is flipped or not
    const [flipped, setFlipped] = useState<boolean>(false);
    return (
            <div className="lg:w-[32.0802%] w-full bg-Grey-08 border border-Grey-15 p-6 md:p-7.5 xl:p-10 rounded-xl overflow-hidden " style={{perspective:"800px"}}>
                    <div className="grid w-full transition-transform duration-700 ease-in-out h-full "
                            style={{
                            transformStyle: "preserve-3d",
                            transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
                            gridTemplateAreas: "front",
                            }}>
                        <div className="flex flex-col gap-[30px] justify-between h-full" style={{
                                gridArea: "front",
                                backfaceVisibility: "hidden",
                                zIndex: flipped ? 1 : 2,
                            }}>
                            <img src={image} alt="" className="w-full  h-[210px] md:h-[255px] xl:h-[318px]  object-cover rounded-[10px]"/>
                            {!showInfo && (
                                <div className="py-1.5 px-3 xl:py-2 xl:px-3 bg-Grey-10 rounded-[28px] border border-Grey-15 w-fit">
                                    <p className="text-sm xl:text-lg text-White">{discoverDescription}</p>
                                </div>
                            ) }
                            <div>
                                <div>
                                    <h3 className="text-lg md:text-xl xl:text-2xl font-semibold">{title}</h3>
                                    <p className="font-medium text-sm md:text-base xl:text-lg text-Grey-60">{lessDescription}<span className="font-medium text-sm md:text-base xl:text-lg text-White underline cursor-pointer" onClick={() => setFlipped(true)}>Read More</span></p>
                                </div>
                                
                            </div>
                            {showInfo && (
                                <div className="flex gap-1.5 xl:gap-2.5 flex-wrap">
                                    {details?.map((detail,index) => (
                                    <InfoComponent
                                        key={index}
                                        icon={detail.icon}
                                        desc={detail.label}
                                        padding="py-1.5 px-3.5 xl:py-2"
                                    />
                                    ))}
                                </div>
                                )}
                            <div className="flex justify-between flex-wrap gap-y-3">
                                <div>
                                    <span className="text-sm xl:text-lg font-medium text-Grey-60" >Price</span>
                                    <p className="font-semibold  text-lg md:text-xl xl:text-2xl">{price}</p>
                                </div>
                                <Button content={"View Property Details"} className="bg-Purple-60"/>
                            </div>
                        </div>
                        <div className="flex flex-col justify-between "
                            style={{
                                gridArea: "front",
                                backfaceVisibility: "hidden",
                                transform: "rotateY(180deg)",
                                zIndex: flipped ? 2 : 1,
                            }}>
                            <p className="text-sm md:text-lg font-medium text-white">
                                {fullDescription} Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet facilis, et obcaecati itaque voluptatum mollitia laborum. Exercitationem tempora voluptatibus alias.
                            </p>
                            <button className="w-full text-white text-sm md:text-base xl:text-[18px] cursor-pointer py-3 px-5 rounded-lg xl:rounded-[10px] bg-Purple-60" onClick={() => setFlipped(false)}>close</button>
                            
                        </div>
                    </div>
            </div>
    )
}

export default PropertiesCard



// import { useState } from "react"
// import type { ReactNode } from "react";
// import Button from "../sharedComponents/Button"
// import InfoComponent from "../sharedComponents/InfoComponent"

// interface Detail {
//     icon:ReactNode,
//     label:string,
// }

// interface PropertiesProps {
//     showInfo?:boolean,
//     details?:Detail[],
//     fullDescription:string,
//     image:string,
//     discoverDescription?:string,
//     lessDescription:string,
//     price:string,
//     title:string,
// }

// function PropertiesCard({showInfo,details,fullDescription,image,discoverDescription,lessDescription,price,title}:PropertiesProps) {
//     const [flipped, setFlipped] = useState<boolean>(false);

//     return (
//         <div 
//             className="lg:w-[32.0802%] w-full min-h-[506px] md:min-h-[549px] xl:min-h-[692px] bg-Grey-08 border border-Grey-15 p-6 md:p-7.5 xl:p-10 rounded-xl relative" 
//             style={{ perspective: "800px", overflow: "hidden" }}
//         >
//             <div 
//                 className="w-full h-full transition-transform duration-700 ease-in-out relative"
//                 style={{
//                     transformStyle: "preserve-3d",
//                     transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
//                 }}
//             >
//                 {/* Front Side */}
//                 <div 
//                     className="flex flex-col gap-[16px] justify-between h-full absolute w-full"
//                     style={{
//                         backfaceVisibility: "hidden",
//                         top: 0,
//                         left: 0,
//                         zIndex: flipped ? 1 : 2,
//                     }}
//                 >
//                     <img src={image} alt="" className="w-full h-[210px] md:h-[255px] xl:h-[318px] object-cover rounded-[10px]"/>
//                     {!showInfo && (
//                         <div className="py-1.5 px-3 xl:py-2 xl:px-3 bg-Grey-10 rounded-[28px] border border-Grey-15 w-fit">
//                             <p className="text-sm xl:text-lg text-White">{discoverDescription}</p>
//                         </div>
//                     )}
//                     <div>
//                         <h3 className="text-lg md:text-xl xl:text-2xl font-semibold">{title}</h3>
//                         <p className="font-medium text-sm md:text-base xl:text-lg text-Grey-60">
//                             {lessDescription}
//                             <span 
//                                 className="font-medium text-sm md:text-base xl:text-lg text-White underline cursor-pointer"
//                                 onClick={() => setFlipped(true)}
//                             >
//                                 Read More
//                             </span>
//                         </p>
//                     </div>
//                     {showInfo && (
//                         <div className="flex gap-1.5 xl:gap-2.5 flex-wrap">
//                             {details?.map((detail,index) => (
//                                 <InfoComponent
//                                     key={index}
//                                     icon={detail.icon}
//                                     desc={detail.label}
//                                     padding="py-1.5 px-3.5 xl:py-2"
//                                 />
//                             ))}
//                         </div>
//                     )}
//                     <div className="flex justify-between flex-wrap gap-y-3">
//                         <div>
//                             <span className="text-sm xl:text-lg font-medium text-Grey-60">Price</span>
//                             <p className="font-semibold text-lg md:text-xl xl:text-2xl">{price}</p>
//                         </div>
//                         <Button content={"View Property Details"} className="bg-Purple-60"/>
//                     </div>
//                 </div>

//                 {/* Back Side */}
//                 <div 
//                     className="flex flex-col justify-between absolute w-full h-full"
//                     style={{
//                         backfaceVisibility: "hidden",
//                         transform: "rotateY(180deg)",
//                         top: 0,
//                         left: 0,
//                         zIndex: flipped ? 2 : 1,
//                     }}
//                 >
//                     <p className="text-sm md:text-lg font-medium text-white">
//                         {fullDescription} Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet facilis, et obcaecati itaque voluptatum mollitia laborum. Exercitationem tempora voluptatibus alias.
//                     </p>
//                     <button 
//                         className="w-full text-white text-sm md:text-base xl:text-[18px] cursor-pointer py-3 px-5 rounded-lg xl:rounded-[10px] bg-Purple-60"
//                         onClick={() => setFlipped(false)}
//                     >
//                         close
//                     </button>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default PropertiesCard