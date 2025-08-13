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
    <div className="flex flex-col justify-items-start gap-4 md:gap-6 xl:gap-7.5 w-full h-fit pb-5 border-b border-b-Grey-15 md:border-0">
      <h3 className="text-base md:text-lg xl:text-xl leading-6 font-medium text-Grey-60">{title}</h3>
      <ul className="space-y-2 md:space-y-4 xl:space-y-5">
        {links.map((item, idx) => (
          <li key={idx}>
            <Link
              to={item.link}
              className="text-sm md:text-base xl:text-lg leading-6 text-White font-medium transition "
            >
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
  navigationColumn: { left: FooterNavColumn[]; right: FooterNavColumn[] };
}) {
  const home = navigationColumn.left.find((col) => col.title === "Home");
  const about = navigationColumn.right.find((col) => col.title === "About Us");
  const services = navigationColumn.right.find(
    (col) => col.title === "Services"
  );
  const properties = navigationColumn.left.find(
    (col) => col.title === "Properties"
  );
  const contact = navigationColumn.left.find(
    (col) => col.title === "Contact Us"
  );
  return (
    <div className="flex flex-col lg:flex-row px-4 py-12.5 md:px-20 md:py-20 xl:px-40.5 xl:py-25 gap-12.5 md:gap-20">
      {/* logo and form */}
      <div className="flex flex-col gap-5 md:gap-6 xl:gap-7.5 w-full lg:w-[26%]">
        <Logo type="footer" />
        <form className="px-5 py-3.5 border border-Grey-15 bg-Grey-08 rounded-lg flex items-center justify-between gap-1.5 xl:gap-2.5">
          <div className="w-[90%] flex items-center gap-1.5 xl:gap-2.5">
            <div className="min-w-5 xl:min-w-6 aspect-square">
              <PlusEmail />
            </div>
            <input
              type="text"
              placeholder="Enter Your Email"
              className="w-full placeholder:text-sm xl:placeholder:text-lg placeholder:text-Grey-60 placeholder:font-medium leading-6 focus:outline-0"
            />
          </div>
          <div className="max-w-6 xl:max-w-7.5 max-h-6 xl:max-h-7.5 aspect-square">
            <SendBtn />
          </div>
        </form>
      </div>
      {/* content */}

      {/*  small screens */}
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

      {/* medium and larg screens */}
      <div className="hidden md:grid md:grid-cols-5 md:gap-8 lg:w-[72%]">
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
