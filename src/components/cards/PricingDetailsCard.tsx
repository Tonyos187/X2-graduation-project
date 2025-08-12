import Additional from "../sharedComponents/Additional"
import Button from "../sharedComponents/Button"


function PricingDetailsCard({data}) {
    const itemWidthClass = data.length > 2 ? "lg:w-[48.3686%]" : "md:w-full";
    const rowsNumber = Math.ceil(data.length / 2)
    return (
        <div className="p-5 md:p-10 xl:p-12.5 border border-Grey-15 rounded-xl ">
            <div className="flex justify-between items-center border-b border-Grey-15 pb-5">
                <h3 className="text-lg md:text-xl xl:text-2xl font-semibold urbanist">Additional Fees</h3>
                <Button content={"Learn More"} className={"border border-Grey-15"}/>
            </div>
            <div className="flex flex-wrap ">
                {data.map((dat,index) => {
                    const currentRow = Math.floor(index/2);
                    const lastrow = currentRow === rowsNumber -1
                    return(
                        <div className={`w-full ${itemWidthClass} 
                        ${!lastrow ? "border-b border-Grey-15 py-5 md:py-7.5 xl:py-10" : "pt-5 md:pt-7.5 xl:pt-10"}
                        `}>
                            <Additional title={dat.label} price={dat.value} desc={dat.description} className={`${data.length > 2 && index % 2 === 1 ? "md:border-l border-Grey-15 md:pl-5" : ""}`}/>
                        </div>
                    )
                })}
            </div>
            
        </div>
    )
}

export default PricingDetailsCard
