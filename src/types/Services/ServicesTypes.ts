import type { ComponentType, ReactElement } from "react";
import type { FeaturesType } from "../Contact/ContactType";

export interface ServicesData {
    heroSection: HeroSection;
    servicesSection: ServicesSection; 
    unlockProperty :ServicesSection;
    effortlessProperty: ServicesSection;
    smartInvestments:ServicesSection;
}
// export interface CTAButton {
//     text: string;
//     link: string;
//     variant?: 'primary' | 'secondary' | 'outline' | 'text';
//     icon?: string | ReactElement | ComponentType<{ className?: string }>;
// }

export interface HeroSection {
    mainTitle: string;
    description: string;
}

export interface ServiceCard {
    id: number;
    icon?: string | ReactElement | ComponentType<{ className?: string }>;
    title: string;
    description?: string; // اختياري للاستخدام 
}

export interface ServicesSection {
    img?: string;// اختياري
    sectionTitle?: string; // اختياري
    sectionDescription?: string; // اختياري
    cards?: ServiceCard[];
    featuresCards?: FeaturesType[];
    promotionalCard?: PromotionalCard; // البطاقة الإعلانية 

}

export interface PromotionalCard {
    title: string;
    description: string;
    link: string;
}