import type { BtnType } from '../types/Home/HomeTypes'

const PurpleMainButton = ({ desc }: BtnType) => {
  return (
    <button className="bg-mainPurple text-white px-6 py-[18px] rounded-[10px] max-h-[60px] cursor-pointer whitespace-nowrap min-w-fit">
      {desc}
    </button>
  )
}

export default PurpleMainButton
