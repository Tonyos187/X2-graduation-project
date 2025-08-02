import type { ReactNode } from "react";

// ContactHero Type

export interface ContactHeroDataType {
  title: string;
  description: string;
}

// let's connect section

interface ConactFormType {
  id: string;
  name: string;
  label: string;
  type: string;
  placeholder: string;
  icon?: ReactNode;
  options?: string[];
}

export interface ContactLetsConnectFormDataType {
  conactForm: ConactFormType[];
  checkBox: {
    id: string;
    name: string;
    label: string;
  };
  button: {
    text: string;
  };
}

// Discover Our Office Locations

interface ContactDetailesType {
  icon: ReactNode;
  title: string;
}

interface CategoriesCardType {
  id: string;
  title: string;
  address: string;
  description: string;
  contactDetailes: ContactDetailesType[];
  button: {
    text: string;
    link: string;
  };
}

export interface ContactDiscoverLocationsFilterDataType {
  FilterOptions: string[];
  categoriesCard: CategoriesCardType[];
}

// Explore Estatein's World

interface ContactExplorePhotosType {
  id: number;
  image: string;
}

export interface ContactExplorePhotosDataType {
  backgroundImage: string;
  photos: ContactExplorePhotosType[];
  contactExploreEstateinData: ContactHeroDataType;
  titlePhoto: string;
}
