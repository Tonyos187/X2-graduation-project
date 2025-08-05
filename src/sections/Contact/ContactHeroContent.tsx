import type { ContactHeroDataType } from "../../types/Contact/ContactType";

const ContactHeroContent = ({ title, description }: ContactHeroDataType) => {
  return (
    <section className="bg-[linear-gradient(95.93deg,#262626_-26.82%,rgba(38,38,38,0)_40.46%)] py-12.5 px-4 lg:py-[6.9445vw] lg:pl-[5.5556vw] lg:pr-[13.8889vw] 2xl:pt-[7.8125vw] 2xl:pb-[5.20834vw] 2xl:pl-[8.4375vw] 2xl:pr-[20.8334vw] mt-[68.58px] md:mt-[77px] 2xl:mt-[99px]">
      <div className="flex flex-col gap-2.5 2xl:gap-3">
        <h1 className="text-[7.17948vw]/[150%] sm:text-[28px]/[150%] lg:text-[38px]/[150%] 2xl:text-5xl/[150%] font-semibold">
          {title}
        </h1>
        <p className="text-sm/[150%] lg:text-base/[150%] 2xl:text-lg/[150%] font-medium text-secText">
          {description}
        </p>
      </div>
    </section>
  );
};

export default ContactHeroContent;
