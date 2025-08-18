import React, { useEffect, useRef, useState } from "react";
import DownArrow from "../../../svg/DownArrow";
import type { ConactFormType } from "../../../types/Contact/ContactType";
import FormLabel from "./FormLabel";

const SelectField: React.FC<{ field: ConactFormType }> = ({ field }) => {
  const [selected, setSelected] = useState<string>("");
  const [showList, setShowList] = useState<boolean>(false);
  const selectRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        selectRef.current &&
        !selectRef.current.contains(event.target as Node)
      ) {
        setShowList(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="flex flex-col gap-2.5 md:gap-3.5 xl:gap-4 w-full relative">
      <FormLabel label={field.label} id={field.id} />

      <div ref={selectRef} className="relative">
        <input
          type={field.type}
          id={field.id}
          disabled
          name={field.name}
          value={selected}
          placeholder={field.placeholder}
          className={`w-full bg-Grey-10 text-White placeholder:text-Grey-40 border border-Grey-15 rounded-md xl:rounded-lg pl-5 pr-9 xl:pr-12 py-4 xl:py-6 text-sm/[20px] xl:text-lg/[20px] outline-none transition-all duration-200 ${
            showList && "border-Purple-60"
          }`}
          required={field.required}
        />

        <div
          onClick={() => setShowList(!showList)}
          className="absolute top-1/2 -translate-y-1/2 right-4 xl:right-6 w-5 h-5 xl:w-6 xl:h-6 text-White"
        >
          <DownArrow />
        </div>

        {showList && (
          <ul className="absolute top-full inset-x-0 w-full bg-Grey-08 p-5 xl:p-7 flex flex-col gap-4 xl:gap-6 text-sm/[20px] xl:text-lg/[20px] text-White border border-Grey-15 rounded-md xl:rounded-lg z-30 shadow-md">
            {field.options?.map((option) => (
              <li
                key={option}
                onClick={() => {
                  setSelected(option);
                  setShowList(false);
                }}
                className="cursor-pointer hover:bg-Grey-08"
              >
                {option}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default SelectField;
