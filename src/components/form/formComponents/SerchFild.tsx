import React from "react";
import type {
  CTAButton,
  SearchSection,
} from "../../../types/Properties/PropertiesTypes";

interface Props {
  data: SearchSection;
  value?: string;
  onChange?: (value: string) => void;
  onSearch?: () => void;
}

const SearchFild: React.FC<Props> = ({ data, value, onChange, onSearch }) => {
  const { searchField, searchButton } = data;

  const renderButton = (btn: CTAButton) => (
    <button
      type="button"
      onClick={onSearch}
      className="flex items-center text-sm lg:text-lg font-medium gap-[8px] px-[14px] py-[10px] rounded-[10px] bg-Purple-60 text-white hover:bg-Purple-75 transition"
    >
      {btn.icon && (
        <span className="hidden sm:inline-flex">{btn.icon && (
        <img
          src={btn.icon.toString()}
          alt="search icon"
          className="w-5 h-5 lg:w-6 lg:h-6"
        />
      )}</span>
      )}
      <span>{btn.text}</span>
    </button>
  );

  return (
    <div className="w-full">
      <label htmlFor={searchField.id} className="sr-only">
        {searchField.placeholder}
      </label>
      <div className="relative h-[56px] md:h-[64px]">
        <input
          id={searchField.id}
          name={searchField.id}
          type="text"
          placeholder={searchField.placeholder}
          value={value ?? ""}
          onChange={(e) => onChange?.(e.target.value)}
          onKeyDown={(e) => { if (e.key === "Enter") onSearch?.(); }}
          className="w-full h-full text-base md:text-xl px-[24px] pr-[120px] rounded-[12px] bg-Grey-15 border border-Grey-15 text-white placeholder:text-gray-400 focus:outline-none "
        />
        <div className="absolute top-1/2 right-[20px] transform -translate-y-1/2">
          {renderButton(searchButton)}
        </div>
      </div>
    </div>
  );
};

export default SearchFild;
