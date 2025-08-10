import { Link } from "react-router-dom";
import PlusEmail from "../../../svg/PlusEmail";
import SendBtn from "../../../svg/SendBtn";
import Logo from "../Logo";
import type { FooterNavColumn } from "../../../types/Home/HomeTypes";

function FooterColumn({
  title,
  links,
}: {
  title?: string;
  links?: { name: string; link: string }[];
}) {
  if (!title || !links) return null;
  return (
    <div className="flex flex-col justify-items-start gap-4 w-full h-fit pb-5 border-b border-b-Grey-15">
      <h3 className="text-base font-medium text-Grey-60">{title}</h3>
      <ul className="space-y-2">
        {links.map((item, idx) => (
          <li key={idx}>
            <Link to={item.link} className="text-sm text-White font-medium transition ">
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function MainFooter({
  navigationColumn,
}: {
  navigationColumn: FooterNavColumn[];
}) {
  const home = navigationColumn.find((col) => col.title === "Home");
  const about = navigationColumn.find((col) => col.title === "About Us");
  const services = navigationColumn.find((col) => col.title === "Services");
  const properties = navigationColumn.find((col) => col.title === "Properties");
  const contact = navigationColumn.find((col) => col.title === "Contact Us");
  return (
    <div className="flex flex-col md:flex-row px-4 py-12.5 gap-12.5">
      {/* logo and form */}
      <div className="flex flex-col gap-5 w-full">
        <Logo type="footer" />
        <form className="px-5 py-3.5 border border-Grey-15 bg-Grey-08 rounded-lg flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <PlusEmail />
            <input
              type="text"
              placeholder="Enter Your Email"
              className="placeholder:text-sm placeholder:text-Grey-60 placeholder:font-medium leading-6 focus:outline-0"
            />
          </div>
          <SendBtn />
        </form>
      </div>
      {/* content */}
      <div className=" flex-col gap-5 hidden">
        {/* home and about us */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
          {navigationColumn.map((col, i) => (
            <div key={i} className="space-y-3">
              {/* العنوان */}
              <label
                className="
          block text-lg font-bold 
          bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 
          bg-clip-text text-transparent 
          drop-shadow-[0_0_10px_rgba(236,72,153,0.8)]
        "
              >
                {col.title}
              </label>

              {/* قائمة الروابط */}
              <ul className="flex flex-col gap-2">
                {col.links.map((link, j) => (
                  <li key={j}>
                    <Link
                      to={link.link}
                      className="
                relative text-gray-300 hover:text-white transition duration-300 
                before:content-[''] before:absolute before:-bottom-1 before:left-0 
                before:w-0 before:h-[2px] 
                before:bg-gradient-to-r before:from-pink-500 before:via-purple-500 before:to-blue-500 
                hover:before:w-full before:transition-all before:duration-500
              "
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/*  small screen */}
      <div className="flex flex-col gap-5 md:hidden">
        {/* First Row */}
        <div className="w-full flex justify-between gap-5">
          <FooterColumn title={home?.title} links={home?.links} />
          <div className="w-px bg-Grey-15"></div>
          <FooterColumn title={about?.title} links={about?.links} />
        </div>

        {/* Second Row */}
        <div className="w-full flex justify-between gap-5">
         <div className="w-full flex flex-col gap-5">
            <FooterColumn title={properties?.title} links={properties?.links} />
            <div className="mt-6">
              <FooterColumn title={contact?.title} links={contact?.links} />
            </div>
          </div>
          <div className="w-px bg-Grey-15"></div>
          <FooterColumn title={services?.title} links={services?.links} />
        </div>
      </div>

      {/* الشاشات المتوسطة والكبيرة */}
      <div className="hidden md:grid md:grid-cols-5 md:gap-8">
        <FooterColumn title={home?.title} links={home?.links} />
        <FooterColumn title={about?.title} links={about?.links} />
        <FooterColumn title={properties?.title} links={properties?.links} />
        <FooterColumn title={services?.title} links={services?.links} />
        <FooterColumn title={contact?.title} links={contact?.links} />
      </div>
    </div>
  );
}

export default MainFooter;
