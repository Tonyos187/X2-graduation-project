import React, { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import type { FormField } from "../../types/Properties/PropertiesTypes";
import DownArrow from "../../svg/DownArrow";

const SelectField: React.FC<{ field: FormField }> = ({ field }) => {
  const [selected, setSelected] = useState<string | null>("");

  const Icon = typeof field.icon === "function" ? field.icon : undefined;

  return (
    <div className="flex flex-col gap-1 w-full relative">
      {field.label && (
        <label htmlFor={field.id} className="text-white font-semibold text-base ">
          {field.label}
        </label>
      )}


      <Listbox value={selected} onChange={setSelected}>
        <div className="relative mt-1">
          <Listbox.Button
            className={`relative w-full cursor-pointer rounded-lg text-sm lg:text-lg ${Icon ? "bg-bg" : "bg-darkGray"
              } py-4 ${Icon ? "pl-12" : "pl-5"} pr-10 text-left text-secText border border-borderColor focus:outline-none focus-visible:ring-2 focus-visible:ring-mainPurple transition-all duration-200`}
          >{Icon && (
            <>
              <span className="absolute inset-y-0 left-3 flex items-center">
                <Icon className="w-5 h-5 text-white" />
              </span>
              <span className="absolute inset-y-4 mx-1 left-10 w-[1px] bg-borderColor" />
            </>
          )}




            <span className="block truncate">
              {selected || field.placeholder}
            </span>

            <span className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
              <div className="w-6 h-6 flex items-center justify-center rounded-[50%] bg-darkGray">
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
              className="absolute mt-1 max-h-60 w-full overflow-auto rounded-lg bg-darkGray text-white shadow-lg ring-1 ring-mainPurple ring-opacity-5 focus:outline-none z-50"
            >
              {field.options?.map((option) => (
                <Listbox.Option
                  key={option}
                  className={({ active }) =>
                    `relative cursor-pointer select-none py-3 pl-10 pr-4 ${active
                      ? "bg-mainPurple transition-all duration-400 text-white"
                      : "text-secText"
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
                        <span className="absolute inset-y-0 left-2 flex items-center text-white" />
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
