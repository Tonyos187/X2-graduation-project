import { useState } from "react";
import { contactFormSection } from "../../../data/Properties/PropertisData";
import FormLabel from "./FormLabel";

const CheckboxField: React.FC = () => {
  const [checked, setChecked] = useState<{ [key: string]: boolean }>({});

  const handleCheckboxChange = (id: string) => {
    setChecked((prevChecked) => ({
      ...prevChecked,
      [id]: !prevChecked[id],
    }));
  };

  return (
    <div className="flex flex-col gap-2.5 md:gap-3.5 xl:gap-4 md:col-span-2">
      <FormLabel label="Preferred Contact Method" />

      <div className="flex flex-col md:flex-row gap-4">
        {contactFormSection.boxCheck?.map((item) => (
          <div key={item.id} className="relative w-full">
            <div className="w-4 h-4 xl:w-6 xl:h-6 text-White absolute top-1/2 -translate-y-1/2 left-5 xl:left-6">
              {item.icon}
            </div>
            <input
              type="text"
              disabled={!checked[item.id]}
              placeholder={item.placeholder}
              className="w-full text-sm/[20px] xl:text-lg/[20px] font-medium focus:outline-none pl-11.5 xl:pl-15 pr-7.5 xl:pr-10 py-4 xl:py-6 bg-Grey-10 text-White border border-Grey-15 rounded-md xl:rounded-lg placeholder:text-Grey-40 focus:border-Purple-60"
            />
            <input
              type="checkbox"
              id={item.id}
              name={item.name}
              className="w-2.5 h-2.5 xl:w-4 xl:h-4 appearance-none border rounded-full bg-transparent border-Purple-60 checked:bg-Purple-60 focus:outline-none transition duration-200 cursor-pointer absolute right-5 xl:right-6 top-1/2 -translate-y-1/2"
              checked={!!checked[item.id]}
              onChange={() => handleCheckboxChange(item.id)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CheckboxField;
