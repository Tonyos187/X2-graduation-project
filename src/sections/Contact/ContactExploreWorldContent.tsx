import CardImage from "../../components/CardImage";
import SectionHeader from "../../components/SectionHeader";

import type { ContactHeroDataType } from "../../types/Contact/ContactType";

const ContactExploreWorldContent = ({
  mainText,
  mainImage,
}: {
  mainText: ContactHeroDataType;
  mainImage: string;
}) => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-5">

      <div className="my-auto">
        <SectionHeader title={mainText.title}
        description={mainText.description}
        withIcon />
      </div>

      {/* <IconTitleDescription
        title={mainText.title}
        description={mainText.description}
        showIcon={true}
        icon="/assets/icons/stars-of-title.svg"
        className="my-auto"
      /> */}

      <CardImage
        src={mainImage}
        alt="main-image"
        height="h-[34.61538vw] lg:h-[15.2778vw] 2xl:h-[14.58334vw]"
      />
    </section>
  );
};

export default ContactExploreWorldContent;
