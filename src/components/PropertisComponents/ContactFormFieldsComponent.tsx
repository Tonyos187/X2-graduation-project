import React from "react";
import type { FieldSection, FormField } from "../../types/Properties/PropertiesTypes";
import TextInput from "../FormFieldsComponents/TextInput";
import TextareaField from "../FormFieldsComponents/TextareaField";
import SelectField from "../FormFieldsComponents/SelectField";
import CheckboxField from "../FormFieldsComponents/CheckboxField";

interface Props {
  data: FieldSection;
}

const ContactFormFieldsComponent: React.FC<Props> = ({ data }) => {
  const { formFields, submitButton } = data;

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
    <div className="w-full max-w-[1597px] mx-auto  py-10 flex flex-col gap-20 bg-bg transition-colors duration-300">
   

      <form className="flex flex-col gap-10 p-5 md:p-10 lg:p-25 border border-borderColor rounded-xl">
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

        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-mainPurple hover:bg-secPurple transition-colors text-white px-6 py-3 rounded-xl font-medium"
          >
            {submitButton.text}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactFormFieldsComponent;
