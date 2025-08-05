// components/SearchDropDownComponent.tsx
import React from "react";
import type {
    SearchFilterSection,
    CustomSelectOption,
} from "../../types/Properties/PropertiesTypes";
import Location from "../../svg/Location";
import AirplaneIcon from "../../svg/Airplane";
import Camera from "../../svg/Camera";
import Cube from "../../svg/Cube";
import Calendar from "../../svg/Calendar";

interface Props {
    data: SearchFilterSection;
}

const iconMap: Record<string, React.ElementType> = {
    Location: Location,
    propertyType: AirplaneIcon,
    priceRange: Camera,
    propertySize: Cube,
    buildYear: Calendar,
};

const SearchDropDownComponent: React.FC<Props> = ({ data }) => {
    const { filters } = data;

    const renderDropdown = (
        id: string,
        label: string,
        placeholder: string,
        options: CustomSelectOption[],
        Icon?: React.ElementType
    ) => (
        <div
            key={id}
            className="flex items-center gap-3 w-full h-[52px] md:h-[52px] lg:h-[72px] px-[20px] rounded-[12px] border border-borderColor bg-bg text-white"
        >
            {Icon && <Icon className="w-5 h-5 text-white" />}
            <select
                id={id}
                className="flex-1 w-full bg-transparent outline-none text-sm text-white"
                defaultValue=""
            >
                <option value="" disabled>
                    {placeholder}
                </option>
                {options.map((opt) => (
                    <option key={opt.value} value={opt.value} className="text-black">
                        {opt.label}
                    </option>
                ))}
            </select>
        </div>
    );

    return (
    <div className="w-full h-auto mx-auto mt-10 lg:mt-5">
    <div className="w-full flex flex-wrap md:flex-nowrap gap-[20px] p-[10px] rounded-[12px] bg-darkGray md:overflow-x-auto md:whitespace-nowrap">
        {Object.entries(filters).map(([key, filter]) =>
            renderDropdown(
                key,
                filter.label,
                filter.placeholder,
                filter.options,
                iconMap[key]
            )
        )}
    </div>
</div>


    );
};

export default SearchDropDownComponent;
