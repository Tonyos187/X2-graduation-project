import type { ComponentType, ReactElement, ReactNode } from "react";

// ContactHero Type

export interface ContactHeroDataType {
  title: string;
  description: string;
}

export interface ContactHeroFeaturesType {
  arrow: ReactNode,
    icon: string,
    title: string | string[],
}

// let's connect section

export interface ConactFormType {
  id: string;
  name: string;
  label: string;
  type: | 'text'
    | 'email'
    | 'tel'
    | 'select'
    | 'checkbox'
    | 'textarea';
  placeholder: string;
  icon?: string | ReactElement | ComponentType<{ className?: string }>;
  options?: string[];
  location?: ReactNode;
}

export interface ContactLetsConnectFormDataType {
  conactForm: ConactFormType[];
  areaText: ConactFormType;
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

export interface ContactExplorePhotosType {
  id: string;
  image: string;
}

export interface ContactExplorePhotosDataType {
  photos: ContactExplorePhotosType[];
  contactExploreEstateinData: ContactHeroDataType;
  titlePhoto: string;
}
