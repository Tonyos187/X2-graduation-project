import type { ReactNode } from "react";


//Home Section
export interface HeroButtonTypes {
  text: string;
  link: string;
  primary?: boolean;
}

export interface HeroStat {
  value: string;
  label: string;
}

export interface HeroSectionType {
  headline: string;
  description: string;
  buttons: HeroButtonTypes[];
  stats: HeroStat[];
}

export interface FeatureItem {
<<<<<<< HEAD
  arrow: string;
  icon: string;
  title: string | string[];
=======
  arrow: ReactNode;
  icon: ReactNode;
  title: string;
>>>>>>> d487c24de961aad2712714c7bcd7254f3135fa26
}

export interface NavItem {
  name: string;
  link: string;
}

export interface TopBannerType {
    text: string,
    linkText: string,
    link: string,
}

export interface SiteInfoType {
    siteTitle: string,
    logo: string
}


// Featured Properties Section
export interface FeaturedPropertyDetail {
  icon: ReactNode;
  label: string;
}

export interface FeaturedPropertyButton {
  text: string;
  link: string;
}

export interface FeaturedProperty {
  id: string;
  image: string;
  title: string;
  description: string;
  readMoreLink: string;
  details: FeaturedPropertyDetail[];
  price: string;
  button: FeaturedPropertyButton;
}

export interface FeaturedPropertiesSectionType {
  headline: string;
  description: string;
  button: FeaturedPropertyButton;
  properties: FeaturedProperty[];
  pagination: string;
}

// Author of testimonial
export interface TestimonialAuthor {
  name: string;
  location: string;
  avatar: string;
}

// فرد من التقييمات
export interface Testimonial {
  id: string;
  icon: string;
  rating: number;
  title: string;
  text: string;
  author: TestimonialAuthor;
}

// بيانات التنقل للسكريبت (الأسهم)
export interface TestimonialNavigation {
  prevLink: string;
  nextLink: string;
}

// البيانات الكاملة لقسم التقييمات
export interface TestimonialsSectionType {
  headline: string;
  description: string;
  button: {
    text: string;
    link: string;
  };
  testimonials: Testimonial[];
  pagination: string;
  navigation: TestimonialNavigation;
}


// عنصر فردي في قائمة الأسئلة
export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  readMoreLink: string;
}


export interface FaqNavigation {
  prevLink: string;
  nextLink: string;
}



export interface FaqSectionType {
  headline: string;
  description: string;
  button: {
    text: string;
    link: string;
  };
  faqs: FaqItem[];
  pagination: string;
  navigation: FaqNavigation;
}


// Start Your Real Estate Journey Today Types 
// القسم يلي فوق الفوتر

export interface CtaSectionType {
  background: string;
  headline: string;
  description: string;
  button: {
    text: string;
    link: string;
  };
}



//footer

export interface FooterType {
  logo: {
    text: string;
    logo: string;
  };
  newsletter: {
    placeholder: string;
    buttonIcon: ReactNode;
  };
  navigationColumns: FooterNavColumn[];
  copyright: string;
  termsAndConditionsLink: {
    text: string;
    link: string;
  };
  socialLinks: SocialLink[];
}

export interface FooterNavColumn {
  title: string;
  links: {
    name: string;
    link: string;
  }[];
}

export interface SocialLink {
  name: string;
  icon: ReactNode;
  link: string;
}



