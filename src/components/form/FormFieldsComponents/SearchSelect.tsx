import React, { useEffect, useRef, useState, type ReactNode } from "react";
import DownArrow from "../../../svg/DownArrow";

interface BaseSelectField {
  id: string;
  label?: string;
  type: string;
  name: string;
  placeholder: string;
  required?: boolean;
  options?: string[];
  icon?: ReactNode;
}

interface Props {
  field: BaseSelectField;
  value?: string;
  onChange?: (id: string, value: string) => void;
}

const SearchSelect: React.FC<Props> = ({ field, value, onChange }) => {
  const [internal, setInternal] = useState<string>("");
  const [showList, setShowList] = useState(false);
  const selectRef = useRef<HTMLDivElement>(null);

  const selected = value ?? internal;

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
        setShowList(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const setSelected = (val: string) => {
    if (onChange) onChange(field.id, val);
    else setInternal(val);
  };

  return (
    <div className="relative w-full" ref={selectRef}>
      <label htmlFor={field.id} className="sr-only">{field.placeholder}</label>
      <div
        id={field.id}
        onClick={() => setShowList((p) => !p)}
        className="bg-Grey-15 border border-Grey-15 rounded-xl px-4 h-[56px] md:h-[64px] flex items-center justify-between cursor-pointer"
      >
        <div className="flex items-center gap-2 truncate">
          {field.icon && <span className="shrink-0">{field.icon}</span>}
          <span className={`truncate ${selected ? "text-white" : "text-Grey-60"}`}>
            {selected || field.placeholder}
          </span>
        </div>
        <DownArrow />
      </div>
      {showList && (
        <ul className="absolute z-50 left-0 right-0 mt-2 bg-Grey-10 border border-Grey-15 rounded-xl max-h-64 overflow-auto">
          {(field.options ?? []).map((option) => (
            <li
              key={option}
              onClick={() => {
                setSelected(option);
                setShowList(false);
              }}
              className={`cursor-pointer hover:bg-Grey-40 py-3 px-4 ${selected === option ? "bg-Grey-20" : ""}`}
            >
              {option}
            </li>
          ))}
          {/* Clear */}
          <li
            onClick={() => {
              setSelected("");
              setShowList(false);
            }}
            className="cursor-pointer hover:bg-Grey-40 py-3 px-4 text-Grey-60"
          >
            Clear
          </li>
        </ul>
      )}
    </div>
  );
};

export default SearchSelect;
    