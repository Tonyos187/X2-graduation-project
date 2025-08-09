import Location from "../svg/Location"


function PropertyDetailsHeder() {
    return (
        <div className="flex  flex-col tablet:flex-row tablet:items-center gap-5 gap-y-2">
            <div className=" min-w-max">
                <h3 className="text-xl tablet:text-2xl laptop:text-3xl font-semibold font-urbanist text-mainText">Seaside Serenity Villa</h3>
            </div>
            <div className="flex items-center gap-5 w-full tablet:w-[81.796%]">
                <p className="flex items-center gap-2 p-2 laptop:p-2.5 border border-borderColor font-medium text-sm laptop:text-lg
                    text-mainText rounded-md 
                    laptop:rounded-lg  w-fit tablet:mr-auto">
                    <Location/>Malibu, California
                </p>
                <div className="flex tablet:flex-col flew-row tablet:items-start gap-1 items-center">
                    <span className="text-sm font-medium text-secText laptop:text-lg">Price</span>
                    <p className="text-lg font-semibold text-mainText tablet:text-xl laptop:text-2xl">$1,250,000</p>
                </div>
            </div>
        </div>
    )
}

export default PropertyDetailsHeder
