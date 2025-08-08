import React from "react";
import type { FormField } from "../../../types/Properties/PropertiesTypes";

const TextareaField: React.FC<{ field: FormField }> = ({ field }) => (
    <div className="flex flex-col gap-1 w-full">
        {field.label && <label htmlFor={field.id} className="text-white font-semibold text-base  	">{field.label}</label>}
        <textarea
            id={field.id}
            name={field.name}
            placeholder={field.placeholder}
            className="w-full bg-Grey-10text-white placeholder-secText border border-Grey-15 rounded-lg px-5 py-4 text-sm outline-none focus:border-Purple-60 transition-all duration-200"
            rows={4}
            required={field.required}
        />
    </div>
);

export default TextareaField;
