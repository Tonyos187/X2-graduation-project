import React, { useState } from "react";
import type { FormField } from "../../../types/Properties/PropertiesTypes";

const CheckboxField: React.FC<{ field: FormField }> = ({ field }) => {
    const Icon = field.icon && typeof field.icon !== "string" ? field.icon : null;
    const [checked, setChecked] = useState(false);
    const [inputValue, setInputValue] = useState("");

    const handleCheckboxChange = () => {
        setChecked((prev) => !prev);
        if (checked) {
            setInputValue("");
        }
    };

    return (
        <>
            <div className="flex flex-col gap-2.5 md:gap-3.5 xl:gap-4 w-full">
                {field.label && (
                    <label htmlFor={field.id} className="text-White font-semibold text-base/[150%] xl:text-xl/[150%]">
                        {field.label}
                    </label>
                )}

                <div className="flex flex-col w-full py-4 xl:py-6 bg-Grey-10 border-Grey-15 rounded-md xl:rounded-lg px-5 text-White border">
                    <div className="flex  items-center justify-between gap-2">
                        <div className="flex  items-center gap-2">
                            {Icon && typeof Icon === "function" ? (
                                <Icon className="w-5 h-5 text-White" />
                            ) : React.isValidElement(Icon) ? (
                                React.cloneElement(Icon)
                            ) : null}
                            {!checked && (
                                <label htmlFor={field.id} className="text-sm/[20px] xl:text-lg/[20px] cursor-pointer text-Grey-40">
                                    {field.placeholder}
                                </label>
                            )}
                            {checked && (
                                <input
                                    type="text"
                                    value={inputValue}
                                    onChange={(e) => setInputValue(e.target.value)}
                                    placeholder={field.placeholder}
                                    className="text-sm/[20px] xl:text-lg/[20px] bg-transparent outline-none border-none focus:outline-none focus:ring-0"
                                />
                            )}
                        </div>
                        <input
                            type="checkbox"
                            id={field.id}
                            name={field.name}
                            className="w-3 h-3 appearance-none border rounded-full bg-transparent border-Purple-60 checked:bg-Purple-60 checked:border-Purple-60 focus:outline-none transition duration-200 cursor-pointer"
                            checked={checked}
                            onChange={handleCheckboxChange}
                        />
                    </div>


                </div>
            </div>
        </>
    );
};

export default CheckboxField;
