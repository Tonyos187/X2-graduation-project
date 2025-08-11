import Location from "../svg/Location"


function PropertyDetailsHeder() {
    return (
        <div className="flex  flex-col md:flex-row md:items-center gap-5 gap-y-2">
            <div className=" min-w-max">
                <h3 className="text-xl md:text-2xl xl:text-3xl font-semibold font-urbanist text-mainText">Seaside Serenity Villa</h3>
            </div>
            <div className="flex items-center gap-5 w-full md:w-[81.796%]">
                <p className="flex items-center gap-2 p-2 xl:p-2.5 border border-Grey-10 font-medium text-sm xl:text-lg
                    text-mainText rounded-md 
                    xl:rounded-lg  w-fit md:mr-auto">
                    <Location/>Malibu, California
                </p>
                <div className="flex md:flex-col flew-row md:items-start gap-1 items-center">
                    <span className="text-sm font-medium text-secText xl:text-lg">Price</span>
                    <p className="text-lg font-semibold text-mainText md:text-xl xl:text-2xl">$1,250,000</p>
                </div>
            </div>
        </div>
    )
}

export default PropertyDetailsHeder
