import type { BtnType } from "../types/Home/HomeTypes"

const DarkButton = ({desc} : BtnType) => {
  return (
    <button className='bg-transparent text-white text-[14px] md:text-[16px] text-nowrap px-5 py-3.5 md:px-6 md:py-[18px] rounded-[10px] h-[60px] cursor-pointer border border-borderColor'>
        {desc}
    </button>
  )
}

export default DarkButton
