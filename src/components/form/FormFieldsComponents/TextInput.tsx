import React from "react";
import type { ConactFormType } from "../../../types/Contact/ContactType";
import FormLabel from "./FormLabel";

const TextInput: React.FC<{ field: ConactFormType }> = ({ field }) => {
  return (
    <div className="flex flex-col gap-2.5 md:gap-3.5 xl:gap-4 font-medium w-full">
      <FormLabel id={field.id} label={field.label} />
      <div className="relative">
        <input
          type={field.type}
          id={field.id}
          name={field.name}
          placeholder={field.placeholder}
          className="w-full bg-Grey-10 text-White placeholder:text-Grey-40 border border-Grey-15 rounded-md xl:rounded-lg px-5 py-4 xl:py-6 text-sm/[20px] xl:text-lg/[20px] outline-none focus:border-Purple-60 transition-all duration-200"
          required={field.required}
        />
        {field.icon && (
          <div className="absolute top-1/2 -translate-y-1/2 right-4 xl:right-6 w-5 h-5 xl:w-6 xl:h-6 text-White-90">
            {field.icon}
          </div>
        )}
      </div>
    </div>
  );
};

export default TextInput;
