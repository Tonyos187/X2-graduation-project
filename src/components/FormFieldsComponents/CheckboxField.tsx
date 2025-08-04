import React, { useState } from "react";
import type { FormField } from "../../types/Properties/PropertiesTypes";

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
            <div className="flex flex-col gap-2 w-full">
                {field.label && (
                    <label htmlFor={field.id} className="text-white text-sm">
                        {field.label}
                    </label>
                )}

                <div className="flex flex-col w-full py-4 bg-darkGray border-borderColor rounded-[8px] px-2 text-white border">
                    <div className="flex  items-center justify-between gap-2">
                        <div className="flex  items-center gap-2">
                            {Icon && typeof Icon === "function" ? (
                                <Icon className="w-5 h-5 text-white" />
                            ) : React.isValidElement(Icon) ? (
                                React.cloneElement(Icon)
                            ) : null}
                            {!checked && (
                                <label htmlFor={field.id} className="text-sm cursor-pointer">
                                    {field.placeholder}
                                </label>
                            )}
                            {checked && (
                                <input
                                    type="text"
                                    value={inputValue}
                                    onChange={(e) => setInputValue(e.target.value)}
                                    placeholder={field.placeholder}
                                    className="text-sm bg-transparent outline-none border-none focus:outline-none focus:ring-0"
                                />
                            )}
                        </div>
                        <input
                            type="checkbox"
                            id={field.id}
                            name={field.name}
                            className="w-3 h-3 appearance-none border rounded-full bg-transparent border-mainPurple checked:bg-mainPurple checked:border-mainPurple focus:outline-none transition duration-200 cursor-pointer"
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
