import { Link } from "react-router-dom"
// import { contactLetsConnectFormData } from "../../data/Contact/ContactData"
import SelectField from "../form/FormFieldsComponents/SelectField"
import TextareaField from "../form/FormFieldsComponents/TextareaField"
import TextInput from "../form/FormFieldsComponents/TextInput"
import { useState } from "react"
import FormButton from "../form/FormButton"
import type { ConactFormType } from "../../types/Contact/ContactType"

const SharedForm = ({data, areaText, detailsForm} : {data: ConactFormType[] , areaText: ConactFormType , detailsForm?: boolean}) => {
    const [checked, setChecked] = useState(false);
  return (
    <form className={`rounded-xl p-5 md:p-10 border border-Grey-15 flex flex-col gap-5 ${detailsForm ? 'lg:p-[2.77778vw] xl:p-12.5 md:gap-5 xl:gap-7.5' : 'lg:p-20 xl:p-25 md:gap-7.5 xl:gap-12.5 '}`}>
      <div className={`grid grid-cols-1 md:grid-cols-2 ${detailsForm ? 'lg:grid-cols-2' : 'lg:grid-cols-3'} gap-5 ${detailsForm ? 'md:gap-5 xl:gap-7.5' : 'md:gap-7.5 xl:gap-12.5'}`}>
        {data.map((item: ConactFormType) => { 
            return item.icon ? <SelectField field={item} /> : detailsForm ? (
                <>
                    {item.location ? (
                        <div className="relative md:col-span-2">
                            <TextInput field={item} />
                            <div className="absolute bottom-4.5 xl:bottom-6 right-4.5 md:right-5 xl:right-6 w-4.5 h-4.5 md:w-5 md:h-5 xl:w-6 xl:h-6 text-White-90 pointer-events-none">{item.location}</div>
                        </div>
                    ) : <TextInput field={item} />}
                </>
            ) : (<TextInput field={item} />)
        })}
      </div>
      <TextareaField field={areaText} />
      <div className={`flex flex-col lg:flex-row justify-between gap-5 lg:gap-1 w-full mt-2.5 ${detailsForm ? 'md:mt-5' : 'md:mt-0'}`}>
        <div className="flex gap-1.5 xl:gap-2.5 items-center flex-1">
            <div className="relative w-6 h-6 xl:w-7 xl:h-7">
                {checked && <input id="check-here" type="checkbox" checked={checked} onChange={() => setChecked(!checked)} className="w-6 h-6 xl:w-7 xl:h-7 border border-Grey-15 accent-Grey-15 rounded-sm cursor-pointer" />}
                {checked === false && <span onClick={() => setChecked(!checked)} className="absolute inset-0 w-6 h-6 xl:w-7 xl:h-7 border border-Grey-15 bg-Grey-10 rounded-sm cursor-pointer"></span>}
            </div>
            <label onClick={() => setChecked(!checked)} className="text-sm/[150%] md:text-base/[150%] xl:text-lg/[150%] font-medium text-Grey-60 cursor-pointer">I agree with <Link to="/" className="underline">Terms of Use</Link> and <Link to="/" className="underline">Privacy Policy</Link></label>
        </div>
        <FormButton content="Send Your Message" />
      </div>
    </form>
  )
}

export default SharedForm
