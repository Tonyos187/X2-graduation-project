import type { HeroStat } from "../../types/Home/HomeTypes";

//// Hero type ////

export interface HeroSectionType {
  headline: string;
  description: string;
  stats: HeroStat[];
}

//// Our Value sction type ////

// our value card type

export interface OurValueCard {
  id: string;
  icon: string;
  title: string;
  description: string;
}
export interface OurValueSectionType {
  headline: string;
  description: string;
  properties: OurValueCard[];
}
//// Our Achievements sction type ////

// Our Achievements card type

export interface OurAchievementsCard {
  id: string;
  title: string;
  description: string;
}

export interface OurAchievementsSectionType {
  headline: string;
  description: string;
  properties: OurAchievementsCard[];
}

//// Navigating the Estatein Experience sction type ////

// Navigating the Estatein Experience card type

export interface NavigatingEstateinExperienceCard {
  id: string;
  stepId: string;
  title: string;
  description: string;
}
export interface NavigatingEstateinExperienceSectionType {
  headline: string;
  description: string;
  properties: NavigatingEstateinExperienceCard[];
}

////Meet the Estatein Team sction type ////

// Meet the Estatein Team card type

export interface MeetEstateinTeamCard {
  id: string;
  image: string;
  name: string;
  job: string;
}
export interface MeetEstateinTeamCardSectionType {
  headline: string;
  description: string;
  properties: MeetEstateinTeamCard[];
}

////Our Valued Clients section type ////

// Our Valued Clients card type

export interface SubCard {
  icon: string;
  subTitle: string;
  title: string;
}

export interface Button {
  text: string;
  link: string;
}
export interface navigation {
  prevLink: string;
  nextLink: string;
}
export interface OurValuedClientsCard {
  id: string;
  date: string;
  button: Button;
  title: string;
  subCards: SubCard[];
  whatSay: string;
  say: string;
}
export interface OurValuedClientsSectionType {
  headline: string;
  description: string;
  properties: OurValuedClientsCard[];
  pagination: string;
  navigation: navigation;
}
