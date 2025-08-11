
const FormButton = ({content} : {content: string}) => {
  return (
    <button className="px-8.5 py-3.5 xl:px-11.5 xl:py-4.5 bg-Purple-60 text-white rounded-md xl:rounded-lg text-sm/[24px] xl:text-lg/[24px] font-medium cursor-pointer">
      {content}
    </button>
  )
}

export default FormButton
