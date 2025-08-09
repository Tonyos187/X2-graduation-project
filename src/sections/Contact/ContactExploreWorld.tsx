import { contactExplorePhotosData } from "../../data/Contact/ContactData";
import ContactExploreWorldContent from "./ContactExploreWorldContent";
import ContactExploreWorldImages from "./ContactExploreWorldImages";

const ContactExploreWorld = () => {
  return (
    <div className="mx-4 lg:mx-[5.5556vw] 2xl:mx-[8.4375vw] bg-[url('/assets/images/Contact/ExploreBackground.webp')] p-[6.1538vw] lg:p-[4.1667vw] 2xl:p-[5.5556vw] bg-Grey-10 border border-Grey-15 rounded-xl overflow-hidden flex flex-col gap-[14.35897vw] md:gap-[6vw] lg:gap-5">
      <ContactExploreWorldImages photos={contactExplorePhotosData.photos} />

      <ContactExploreWorldContent
        White={contactExplorePhotosData.contactExploreEstateinData}
        mainImage={contactExplorePhotosData.titlePhoto}
      />
    </div>
  );
};

export default ContactExploreWorld;
