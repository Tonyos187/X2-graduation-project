import type { ReactNode } from "react";

// ContactHero Type

export interface ContactHeroDataType {
  title: string;
  description: string;
}

export interface ContactHeroFeaturesType {
  arrow: ReactNode;
  icon: string;
  title: string | string[];
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

export interface ContactDetailesType {
  icon: ReactNode;
  title: string[];
}

export interface CategoriesCardType {
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

export interface ContactDiscoverLocationsFilterDataType {
  FilterOptions: string[];
  categoriesCard: CategoriesCardType[];
}

// Explore Estatein's World

export interface ContactExplorePhotosType {
  id: string;
  image: string;
}

export interface ContactExplorePhotosDataType {
  photos: ContactExplorePhotosType[];
  contactExploreEstateinData: ContactHeroDataType;
  titlePhoto: string;
}
