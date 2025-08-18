import React from "react";
import type { ConactFormType } from "../../../types/Contact/ContactType";
import FormLabel from "./FormLabel";

const TextareaField: React.FC<{ field: ConactFormType }> = ({ field }) => (
    <div className="flex flex-col gap-2.5 md:gap-3.5 xl:gap-4 w-full">
        <FormLabel id={field.id} label={field.label} />
        <textarea
            id={field.id}
            name={field.name}
            placeholder={field.placeholder}
            className="w-full h-22.5 md:h-30.5 xl:h-42.5 bg-Grey-10 text-White placeholder:text-Grey-40 border border-Grey-15 rounded-md xl:rounded-lg px-5 py-4 xl:py-6 text-sm/[20px] xl:text-lg/[20px] outline-none focus:border-Purple-60 transition-all duration-200 resize-none"
            required={field.required}
        />
    </div>
);

export default TextareaField;
