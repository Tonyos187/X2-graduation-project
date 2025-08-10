import { Link } from "react-router-dom";
import type { EndFooterType } from "../../../types/Home/HomeTypes";

function EndFooter({ endFooterData }: { endFooterData: EndFooterType }) {
  return (
    <div className="flex flex-col-reverse md:flex-row md:justify-between gap-5 px-4 py-5 md:px-20 md:py-3 xl:px-40.5 xl:py-7.5 border-t border-t-Grey-10 w-full bg-Grey-10">
      <div className="flex flex-col md:flex-row md:justify-between items-center justify-center gap-2.5 md:gap-5 xl:gap-9.5 py-2.5
         text-sm xl:text-[18px] font-medium leading-6 text-White">
        <span>{endFooterData.copyright}</span>
        <Link to={endFooterData.termsAndConditionsLink.link}>
        {endFooterData.termsAndConditionsLink.text}
        </Link>
      </div>
      <div className="flex items-center justify-center gap-2">
        {endFooterData.socialLinks.map((icon, index) => (
          <Link to="#" key={index} className="flex items-center justify-center text-White w-15 h-15 p-5 md:w-10 md:h-10 md:p-2.5 xl:w-13.5 xl:h-13.5 xl:p-3.5 bg-Grey-08 rounded-full">
            {icon.icon}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default EndFooter;
