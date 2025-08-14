import React, { useState } from "react";
import type { FormField } from "../../../types/Properties/PropertiesTypes";

const CheckboxField: React.FC<{ field: FormField }> = ({ field }) => {
  const Icon = field.icon && typeof field.icon !== "string" ? field.icon : null;
  const [checked, setChecked] = useState(false);

  return (
    <div className="flex flex-col gap-2.5 md:gap-3.5 xl:gap-4 w-full">
      {field.label && (
        <label
          htmlFor={field.id}
          className="text-White font-semibold text-base/[150%] xl:text-xl/[150%]"
        >
          {field.label}
        </label>
      )}

      <div className="flex flex-col py-4 xl:py-5.5 bg-Grey-10 border-Grey-15 rounded-md xl:rounded-lg px-5 xl:px-5.5 text-White border">
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            {Icon && typeof Icon === "function" ? (
              <div className="w-4 h-4 xl:w-6 xl:h-6 text-White">
                <Icon />
              </div>
            ) : React.isValidElement(Icon) ? (
              React.cloneElement(Icon)
            ) : null}
            <input
              type="text"
              disabled={!checked}
              placeholder={field.placeholder}
              className="text-sm/[20px] xl:text-lg/[20px] font-medium bg-transparent outline-none border-none focus:outline-none focus:ring-0 placeholder:text-Grey-40"
            />
          </div>
          <input
            type="checkbox"
            id={field.id}
            name={field.name}
            className="w-2.5 h-2.5 xl:w-4 xl:h-4 appearance-none border rounded-full bg-transparent border-Purple-60 checked:bg-Purple-60 checked:border-Purple-60 focus:outline-none transition duration-200 cursor-pointer"
            checked={checked}
            onChange={() => setChecked(!checked)}
          />
        </div>
      </div>
    </div>
  );
};

export default CheckboxField;
