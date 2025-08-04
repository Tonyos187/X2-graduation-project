import React from "react";
import type { FormField } from "../../types/Properties/PropertiesTypes";

const TextInput: React.FC<{ field: FormField }> = ({ field }) => {
    const Icon = field.icon && typeof field.icon !== "string" ? field.icon : null;

    return (
        <div className="flex flex-col gap-3.5 font-medium w-full">
            {field.label && <label htmlFor={field.id} className="text-white text-sm">{field.label}</label>}
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
                    className="w-full bg-darkGray text-white placeholder-secText border border-borderColor rounded-lg px-5 py-4 text-sm outline-none focus:border-mainPurple transition-all duration-200"
                    required={field.required}
                />
            </div>
        </div>
    );
};

export default TextInput;
