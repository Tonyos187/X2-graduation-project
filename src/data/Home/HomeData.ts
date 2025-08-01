import type { CtaSectionData, FaqSectionData, FeaturedPropertiesSectionData, FeatureItem, FooterData, HeroSectionData, NavItem, SiteInfoData, TestimonialsSectionData, TopBannerData } from "../../types/Home/HomeTypes";


// Hero Data 

export const heroSectionData: HeroSectionData = {
  headline: "Discover Your Dream Property with Estatein",
  description: "Your journey to finding the perfect property begins here. Explore our listings to find the home that matches your dreams.",
  buttons: [
    { text: "Learn More", link: "#" },
    { text: "Browse Properties", link: "#", primary: true },
  ],
  stats: [
    { value: "200+", label: "Happy Customers" },
    { value: "10k+", label: "Properties For Clients" },
    { value: "16+", label: "Years of Experience" },
  ],
}; 

export const featuresSectionData: FeatureItem[] = [
  {
    arrow: "/assets/Home/TopRightArrow.svg",
    icon: "/assets/Home/marketIconHero.svg",
    title: "Find Your Dream Home",
  },
  {
    arrow: "/assets/Home/TopRightArrow.svg",
    icon: "/assets/Home/tecketIconHero.svg",
    title: "Unlock Property Value",
  },
  {
    arrow: "/assets/Home/TopRightArrow.svg",
    icon: "/assets/Home/buildingIconHero.svg",
    title: "Effortless Property Management",
  },
  {
    arrow: "/assets/Home/TopRightArrow.svg",
    icon: "/assets/Home/sunIconHero.svg",
    title: "Smart Investments, Informed Decisions",
  },
];

export const navigationData: NavItem[] = [
  { name: "Home", link: "#" },
  { name: "About Us", link: "#" },
  { name: "Properties", link: "#" },
  { name: "Services", link: "#" },
  { name: "Contact Us", link: "#" },
];

export const topBannerData: TopBannerData = {
  text: "Discover Your Dream Property with Estatein",
  linkText: "Learn More",
  link: "#"
};

export const siteInfo: SiteInfoData = {
  siteTitle: "Estatein",
  logo: "/assets/Home/estateinLogo.svg"
};



// Featured Properties Data

export const featuredPropertiesSectionData: FeaturedPropertiesSectionData = {
  headline: "Featured Properties",
  description:
    "Explore our handpicked selection of featured properties. Each listing offers a glimpse into exceptional homes and investments available through Estatein. Click 'View Details' for more information.",
  button: {
    text: "View All Properties",
    link: "#",
  },
  properties: [
    {
      id: "property-1",
      image: "/assets/Home/villaSliderCard1.webp",
      title: "Seaside Serenity Villa",
      description: "A stunning 4-bedroom, 3-bathroom villa in a peaceful suburban neighborhood.",
      readMoreLink: "#",
      details: [
        { icon: "/assets/Home/bedroom.svg", label: "4-Bedroom" },
        { icon: "/assets/Home/bathroom.svg", label: "3-Bathroom" },
        { icon: "/assets/Home/villa.svg", label: "Villa" },
      ],
      price: "$550,000",
      button: {
        text: "View Property Details",
        link: "#",
      },
    },
    {
      id: "property-2",
      image: "/assets/Home/buildingSliderCard2.webp",
      title: "Metropolitan Haven",
      description: "A chic and fully-furnished 2-bedroom apartment with panoramic city views.",
      readMoreLink: "#",
      details: [
        { icon: "/assets/Home/bedroom.svg", label: "4-Bedroom" },
        { icon: "/assets/Home/bathroom.svg", label: "3-Bathroom" },
        { icon: "/assets/Home/villa.svg", label: "Villa" },
      ],
      price: "$550,000",
      button: {
        text: "View Property Details",
        link: "#",
      },
    },
    {
      id: "property-3",
      image: "/assets/Home/modernCitySliderCard3.webp",
      title: "Rustic Retreat Cottage",
      description: "An elegant 3-bedroom, 2.5-bathroom townhouse in a gated community.",
      readMoreLink: "#",
      details: [
        { icon: "/assets/Home/bedroom.svg", label: "4-Bedroom" },
        { icon: "/assets/Home/bathroom.svg", label: "3-Bathroom" },
        { icon: "/assets/Home/villa.svg", label: "Villa" },
      ],
      price: "$550,000",
      button: {
        text: "View Property Details",
        link: "#",
      },
    },
  ],
  pagination: "01 of 60",
};



// What Our Clients Say Data


export const testimonialsSectionData: TestimonialsSectionData = {
  headline: "What Our Clients Say",
  description: "Read the success stories and heartfelt testimonials from our valued clients. Discover why they chose Estatein for their real estate needs.",
  button: {
    text: "View All Testimonials",
    link: "#",
  },
  testimonials: [
    {
      id: "testimonial-1",
      rating: 5,
      title: "Exceptional Service!",
      text: "Our experience with Estatein was outstanding. Their teams dedication and professionalism made finding our dream home a breeze. Highly recommended!",
      author: {
        name: "Wade Warren",
        location: "USA, California",
        avatar: "/assets/Home/person1.webp",
      },
    },
    {
      id: "testimonial-2",
      rating: 5,
      title: "Efficient and Reliable",
      text: "Estatein provided us with top-notch service. They helped us sell our property quickly and at a great price. We couldn't be happier with the results.",
      author: {
        name: "Emelie Thomson",
        location: "USA, Florida",
        avatar: "/assets/Home/person2.webp",
      },
    },
    {
      id: "testimonial-3",
      rating: 5,
      title: "Trusted Advisors",
      text: "The Estatein team guided us through the entire buying process. Their knowledge and commitment to our needs were impressive. Thank you for your support!",
      author: {
        name: "John Mans",
        location: "USA, Nevada",
        avatar: "/assets/Home/person3.webp",
      },
    },
  ],
  pagination: "01 of 10",
  navigation: {
    prevLink: "#",
    nextLink: "#",
  }
};



// Frequently Asked Questions Data

export const faqSectionData: FaqSectionData = {
  headline: "Frequently Asked Questions",
  description: "Find answers to common questions about Estatein's services, property listings, and the real estate process. We're here to provide clarity and assist you every step of the way.",
  button: {
    text: "View All FAQ's",
    link: "#",
  },
  faqs: [
    {
      id: "faq-1",
      question: "How do I search for properties on Estatein?",
      answer: "Learn how to use our user-friendly search tools to find properties that match your your criteria.",
      readMoreLink: "#", 
    },
    {
      id: "faq-2",
      question: "What documents do I need to sell my property through Estatein?",
      answer: "Find out about the necessary documentation for listing your property with us.",
      readMoreLink: "#",
    },
    {
      id: "faq-3",
      question: "How can I contact an Estatein agent?",
      answer: "Discover the different ways you can get in touch with our experienced agents.",
      readMoreLink: "#",
    },
  ],
  pagination: "01 of 10",
  navigation: {
    prevLink: "#",
    nextLink: "#",
  }
};



export const ctaSectionData: CtaSectionData = {
  headline: "Start Your Real Estate Journey Today",
  description: "Your dream property is just a click away. Whether you're looking for a new home, a strategic investment, or expert real estate advice. Estatein is here to assist you every step of the way. Take the first step towards your real estate goals and explore our available properties or get in touch with our team for personalized assistance.",
  button: {
    text: "Explore Properties",
    link: "#",
  },
};


export const footerData: FooterData = {
  logo: {
    text: "Estatein",
    logo: "/assets/Home/estateinLogo.svg",
  },
  newsletter: {
    placeholder: "Enter Your Email",
    buttonIcon: "send-arrow",
  },
  navigationColumns: [
    {
      title: "Home",
      links: [
        { name: "Hero Section", link: "#hero" },
        { name: "Features", link: "#features" },
        { name: "Properties", link: "#properties" },
        { name: "Testimonials", link: "#testimonials" },
        { name: "FAQs", link: "#faqs" },
      ],
    },
    {
      title: "About Us",
      links: [
        { name: "Our Story", link: "#about-story" },
        { name: "Our Works", link: "#about-works" },
        { name: "How It Works", link: "#about-how-it-works" },
        { name: "Our Team", link: "#about-team" },
        { name: "Our Clients", link: "#about-clients" },
      ],
    },
    {
      title: "Properties",
      links: [
        { name: "Portfolio", link: "#properties-portfolio" },
        { name: "Categories", link: "#properties-categories" },
      ],
    },
    {
      title: "Services",
      links: [
        { name: "Valuation Mastery", link: "#services-valuation" },
        { name: "Strategic Marketing", link: "#services-marketing" },
        { name: "Negotiation Wizardry", link: "#services-negotiation" },
        { name: "Closing Success", link: "#services-closing" },
        { name: "Property Management", link: "#services-management" },
      ],
    },
    {
      title: "Contact Us",
      links: [
        { name: "Contact Form", link: "#contact-form" },
        { name: "Our Offices", link: "#contact-offices" },
      ],
    },
  ],
  copyright: "©2023 Estatein. All Rights Reserved.",
  termsAndConditionsLink: {
    text: "Terms & Conditions",
    link: "#terms",
  },
  socialLinks: [
    { name: "Facebook", icon: "/assets/Home/facebookIcon.svg", link: "#" },
    { name: "LinkedIn", icon: "/assets/Home/linkedinIcon.svg", link: "#" },
    { name: "Twitter", icon: "/assets/Home/twitterIcon.svg", link: "#" },
    { name: "YouTube", icon: "/assets/Home/youtubeIcon.svg.svg", link: "#" },
  ],
};
