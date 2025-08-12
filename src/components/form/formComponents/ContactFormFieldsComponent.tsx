import React, { useState } from "react";
import type { FieldSection, FormField } from "../../../types/Properties/PropertiesTypes";
import TextInput from "../FormFieldsComponents/TextInput";
import TextareaField from "../FormFieldsComponents/TextareaField";
import SelectField from "../FormFieldsComponents/SelectField";
import CheckboxField from "../FormFieldsComponents/CheckboxField";
import FormButton from "../FormButton";
import { Link } from "react-router-dom";

interface Props {
  data: FieldSection;
}

const ContactFormFieldsComponent: React.FC<Props> = ({ data }) => {
  const { formFields } = data;
  const [checked, setChecked] = useState(false);

  const renderInput = (field: FormField) => {
    switch (field.type) {
      case "text":
      case "email":
      case "tel":
        return <TextInput key={field.id} field={field} />;
      case "textarea":
        return <TextareaField key={field.id} field={field} />;
      case "select":
        return <SelectField key={field.id} field={field} />;
      case "checkbox":
        return <CheckboxField key={field.id} field={field} />;
      default:
        return null;
    }
  };

  return (
    <div className="w-full max-w-[1597px] mx-auto  py-10 flex flex-col gap-20 bg-Grey-08 transition-colors duration-300">
   

      <form className="flex flex-col gap-10 p-5 md:p-10 lg:p-25 border border-Grey-15 rounded-xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 lg:gap-7">
          {formFields.slice(0, 4).map(renderInput)}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 lg:gap-7">
          {formFields.slice(4, 8).map(renderInput)}
        </div>


        <div className="flex flex-col md:flex-row gap-7 items-stretch md:items-center justify-between">
          <div className="w-full md:w-1/2">{renderInput(formFields[8])}</div>
          <div className="w-full lg:w-1/2 flex flex-col  sm:flex-row items-end gap-5">
            {renderInput(formFields[9])}
            {renderInput(formFields[10])}
          </div>
        </div>

        <div className="w-full">{renderInput(formFields[11])}</div>

        <div className="flex flex-col lg:flex-row justify-between gap-5 lg:gap-12.5 w-full mt-2.5 md:mt-0">
        <div className="flex gap-1.5 xl:gap-2.5 items-center flex-1">
            <div className="relative w-6 h-6 xl:w-7 xl:h-7">
                {checked && <input id="check-here" type="checkbox" checked={checked} onChange={() => setChecked(!checked)} className="w-6 h-6 xl:w-7 xl:h-7 border border-Grey-15 accent-Grey-15 rounded-sm cursor-pointer" />}
                {checked === false && <span onClick={() => setChecked(!checked)} className="absolute top-0 left-0 w-6 h-6 xl:w-7 xl:h-7 border border-Grey-15 bg-Grey-10 rounded-sm cursor-pointer"></span>}
            </div>
            <label onClick={() => setChecked(!checked)} className="text-sm/[150%] md:text-base/[150%] xl:text-lg/[150%] font-medium text-Grey-60">I agree with <Link to="/" className="underline">Terms of Use</Link> and <Link to="/" className="underline">Privacy Policy</Link></label>
        </div>
        <FormButton content="Send Your Message" />
      </div>
      </form>
    </div>
  );
};

export default ContactFormFieldsComponent;
