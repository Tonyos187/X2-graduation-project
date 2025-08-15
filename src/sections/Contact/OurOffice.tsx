import { useState } from "react";
import LocationCard from "../../components/cards/LocationCard";
import Header from "../../components/sharedComponents/Header";
import {
  contactDiscoverLocationsData,
  contactDiscoverLocationsFilterData,
} from "../../data/Contact/ContactData";
import { type CategoriesCardType } from "../../types/Contact/ContactType";
import Container from "../../layouts/Container";

const OurOffice = () => {
  const [activeTab, setActiveTab] = useState<string>("All");

  const filteredCards =
    activeTab === "All"
      ? contactDiscoverLocationsFilterData.categoriesCard
      : contactDiscoverLocationsFilterData.categoriesCard.filter(
          (item) => item.id.toLowerCase() === activeTab.toLowerCase()
        );

  return (
    <Container className="">
      <Header
        title={contactDiscoverLocationsData.title}
        description={contactDiscoverLocationsData.description}
      />

      <div className="tabs flex justify-center items-center  gap-2.5 my-[30px] md:mt-[60px] xl:mt-[80px] md:mb-[40px] xl:mb-[50px] bg-Grey-10 rounded-[8px] xl:rounded-[12px] p-2.5 w-full md:max-w-[413px] xl:max-w-[516px]">
        {contactDiscoverLocationsFilterData.FilterOptions.map((option) => (
          <button
            key={option}
            onClick={() => setActiveTab(option)}
            className={`px-[20px] xl:px-6  py-[14px] xl:py-[18px] rounded-[8px] xl:rounded-[10px] border border-Grey-15 transition-all duration-200 text-white 
              ${
                activeTab === option
                  ? "bg-Grey-08  "
                  : "bg-transparent   hover:border-white"
              }`}
          >
            {option}
          </button>
        ))}
      </div>

      <div className="w-full cards flex flex-wrap justify-center items-center gap-5 xl:gap-[30px]">
        {filteredCards.map((item: CategoriesCardType, index) => (
          <LocationCard
            key={index}
            title={item.title}
            address={item.address}
            description={item.description}
            contactDetails={item.contactDetailes}
          />
        ))}
      </div>
    </Container>
  );
};

export default OurOffice;
