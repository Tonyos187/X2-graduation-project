import React from "react";
import type { FormField } from "../../../types/Properties/PropertiesTypes";

const TextInput: React.FC<{ field: FormField }> = ({ field }) => {
    const Icon = field.icon && typeof field.icon !== "string" ? field.icon : null;

    return (
        <div className="flex flex-col gap-2.5 md:gap-3.5 xl:gap-4 font-medium w-full">
            {field.label && <label htmlFor={field.id} className="text-White font-semibold text-base/[150%] xl:text-xl/[150%]">{field.label}</label>}
            <div className="flex items-center gap-2">
                {Icon && typeof Icon === "function" ? (
                    <Icon className="w-5 h-5 text-white " />
                ) : React.isValidElement(Icon) ? (
                    React.cloneElement(Icon)
                ) : null}                <input
                    type={field.type}
                    id={field.id}
                    name={field.name}
                    placeholder={field.placeholder}
                    className="w-full bg-Grey-10 text-White placeholder:text-Grey-40 border border-Grey-15 rounded-md xl:rounded-lg px-5 py-4 xl:py-6 text-sm/[20px] xl:text-lg/[20px] outline-none focus:border-Purple-60 transition-all duration-200"
                    required={field.required}
                />
            </div>
        </div>
    );
};

export default TextInput;
