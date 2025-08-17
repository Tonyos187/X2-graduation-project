import { Link } from "react-router-dom";
import SelectField from "../form/FormFieldsComponents/SelectField";
import TextareaField from "../form/FormFieldsComponents/TextareaField";
import TextInput from "../form/FormFieldsComponents/TextInput";
import { useState } from "react";
import FormButton from "../form/FormButton";
import type { ConactFormType } from "../../types/Contact/ContactType";
import CheckboxField from "../form/FormFieldsComponents/CheckboxField";

interface FormProps {
  data: ConactFormType[];
  areaText: ConactFormType;
  detailsForm?: boolean;
  propertiesForm?: boolean;
}

const SharedForm = ({
  data,
  areaText,
  detailsForm,
  propertiesForm,
}: FormProps) => {
  const [checked, setChecked] = useState(false);
  return (
    <form
      className={`rounded-xl p-5 md:p-10 border border-Grey-15 flex flex-col gap-5 ${
        detailsForm
          ? "lg:p-[2.77778vw] xl:p-12.5 md:gap-5 xl:gap-7.5"
          : propertiesForm
          ? "lg:gap-7.5 xl:gap-12.5 p-5 md:p-[3.47223vw] lg:p-[5.20834vw]"
          : "lg:p-20 xl:p-25 md:gap-7.5 xl:gap-12.5 "
      }`}
    >
      <div
        className={`grid grid-cols-1 md:grid-cols-2 ${
          detailsForm
            ? "lg:grid-cols-2 md:gap-5 xl:gap-7.5"
            : propertiesForm
            ? "lg:grid-cols-4 lg:gap-[2.08334vw] xl:gap-[2.604167vw]"
            : "lg:grid-cols-3 md:gap-7.5 xl:gap-12.5"
        } gap-5`}
      >
        {data.map((item: ConactFormType) => {
          return item.options ? (
            <div key={item.id} className={`${item.id === "budget" && "md:col-span-2"}`}>
              <SelectField field={item} />
            </div>
          ) : (
            <div
            key={item.id}
              className={`${
                item.id === "selected_property" && "md:col-span-2"
              }`}
            >
              <TextInput field={item} />
            </div>
          );
        })}
        {propertiesForm && <CheckboxField />}
      </div>
      <TextareaField field={areaText} />
      <div
        className={`flex flex-col lg:flex-row justify-between gap-5 lg:gap-1 w-full mt-2.5 ${
          detailsForm ? "md:mt-5" : "md:mt-0"
        }`}
      >
        <div className="flex gap-1.5 xl:gap-2.5 items-center flex-1">
          <div className="relative w-6 h-6 xl:w-7 xl:h-7">
            {checked && (
              <input
                id="check-here"
                type="checkbox"
                checked={checked}
                onChange={() => setChecked(!checked)}
                className="w-6 h-6 xl:w-7 xl:h-7 border border-Grey-15 accent-Grey-15 rounded-sm cursor-pointer"
              />
            )}
            {checked === false && (
              <span
                onClick={() => setChecked(!checked)}
                className="absolute inset-0 w-6 h-6 xl:w-7 xl:h-7 border border-Grey-15 bg-Grey-10 rounded-sm cursor-pointer"
              ></span>
            )}
          </div>
          <label
            onClick={() => setChecked(!checked)}
            className="text-sm/[150%] md:text-base/[150%] xl:text-lg/[150%] font-medium text-Grey-60 cursor-pointer"
          >
            I agree with{" "}
            <Link to="/" className="underline">
              Terms of Use
            </Link>{" "}
            and{" "}
            <Link to="/" className="underline">
              Privacy Policy
            </Link>
          </label>
        </div>
        <FormButton content="Send Your Message" />
      </div>
    </form>
  );
};

export default SharedForm;
