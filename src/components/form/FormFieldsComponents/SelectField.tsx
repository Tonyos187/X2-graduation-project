import React, { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import type { FormField } from "../../../types/Properties/PropertiesTypes";
import DownArrow from "../../../svg/DownArrow";

const SelectField: React.FC<{ field: FormField }> = ({ field }) => {
  const [selected, setSelected] = useState<string | null>("");

  const Icon = typeof field.icon === "function" ? field.icon : undefined;

  return (
    <div className="flex flex-col gap-2.5 md:gap-3.5 xl:gap-4 w-full relative">
      {field.label && (
        <label htmlFor={field.id} className="text-White font-semibold text-base/[150%] xl:text-xl/[150%]">
          {field.label}
        </label>
      )}


      <Listbox value={selected} onChange={setSelected}>
        <div className="relative">
          <Listbox.Button
            className={`relative w-full cursor-pointer rounded-md xl:rounded-lg text-sm/[20px] xl:text-lg/[20px] font-medium ${Icon ? "bg-Grey-08" : "bg-Grey-10"
              } py-4 xl:py-6 ${Icon ? "pl-12" : "pl-5"} pr-10 text-left text-Grey-40 border border-Grey-15 focus:outline-none focus-visible:ring-2 focus-visible:ring-Purple-60 transition-all duration-200`}
          >{Icon && (
            <>
              <span className="absolute inset-y-0 left-3 flex items-center">
                <Icon className="w-5 h-5 xl:w-6 xl:h-6 text-White" />
              </span>
              <span className="absolute inset-y-4 mx-1 left-10 w-[1px] bg-Grey-15" />
            </>
          )}




            <span className="block truncate">
              {selected || field.placeholder}
            </span>

            <span className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
              <div className="w-5 h-5 xl:w-6 xl:h-6 flex items-center justify-center rounded-[50%] bg-Grey-10 text-White">
                <DownArrow />

              </div>
            </span>
          </Listbox.Button>

          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 -translate-y-1"
          >
            
            <Listbox.Options
              className="absolute mt-1 max-h-60 w-full overflow-auto rounded-lg bg-Grey-10 text-White shadow-lg ring-1 ring-Purple-60 ring-opacity-5 focus:outline-none z-50"
            >
              {field.options?.map((option) => (
                <Listbox.Option
                  key={option}
                  className={({ active }) =>
                    `relative cursor-pointer select-none py-3 pl-10 pr-4 ${active
                      ? "bg-Purple-60transition-all duration-400 text-White"
                      : "text-Grey-60"
                    }`
                  }
                  value={option}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate ${selected ? "font-medium" : "font-normal"
                          }`}
                      >
                        {option}
                      </span>
                      {selected && (
                        <span className="absolute inset-y-0 left-2 flex items-center text-White" />
                      )}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
};

export default SelectField;
