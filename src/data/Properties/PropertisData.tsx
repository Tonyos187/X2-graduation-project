import AirplaneIcon from "../../svg/Airplane";
import Calendar from "../../svg/Calendar";
import Camera from "../../svg/Camera";
import Cube from "../../svg/Cube";
import Email from "../../svg/Email";
import Location from "../../svg/Location";
import Phone from "../../svg/Phone";
import type {
  ContactHeroDataType,
  ContactLetsConnectFormDataType,
} from "../../types/Contact/ContactType";
import type { PropertiesData } from "../../types/Properties/PropertiesTypes";

// form data

export const contactFormSectionHeader: ContactHeroDataType = {
  title: "Let's Make it Happen",
  description:
    "Ready to take the first step toward your dream property? Fill out the form below, and our real estate wizards will work their magic to find your perfect match. Don't wait; let's embark on this exciting journey together.",
};

export const contactFormSection: ContactLetsConnectFormDataType = {
  conactForm: [
    {
      id: "first-name",
      label: "First Name",
      placeholder: "Enter First Name",
      type: "text",
      name: "firstName",
      required: true,
    },
    {
      id: "last-name",
      label: "Last Name",
      placeholder: "Enter Last Name",
      type: "text",
      name: "lastName",
      required: true,
    },
    {
      id: "email",
      label: "Email",
      placeholder: "Enter Your Email",
      type: "email",
      name: "email",
      required: true,
    },
    {
      id: "phone",
      label: "Phone",
      placeholder: "Enter Phone Number",
      type: "tel",
      name: "phone",
    },
    {
      id: "location",
      label: "Preferred Location",
      placeholder: "Select Location",
      type: "text",
      name: "location",
      options: ["Riyadh", "Jeddah", "Dammam", "Khobar", "Dubai"],
    },
    {
      id: "property-type",
      label: "Property Type",
      placeholder: "Select Property Type",
      type: "text",
      name: "propertyType",
      options: ["Villa", "Apartment", "Office", "Land"],
    },
    {
      id: "bedrooms",
      label: "No. of Bedrooms",
      placeholder: "Select no. of Bedrooms",
      type: "text",
      name: "bedrooms",
      options: ["1", "2", "3", "4", "5+"],
    },
    {
      id: "bathrooms",
      label: "No. of Bathrooms",
      placeholder: "Select no. of Bathrooms",
      type: "text",
      name: "bathrooms",
      options: ["1", "2", "3", "4", "5+"],
    },
    {
      id: "budget",
      label: "Budget",
      placeholder: "Select Budget",
      type: "text",
      name: "budget",
      options: [
        "$100,000 - $300,000",
        "$300,000 - $500,000",
        "$500,000 - $1,000,000",
        "$1,000,000+",
      ],
    },
  ],
  boxCheck: [
    {
      id: "contact-method-phone",
      label: "Preferred Contact Method",
      placeholder: "Enter Your Number",
      type: "checkbox",
      name: "contactByPhone",
      icon: <Phone />,
    },
    {
      id: "contact-method-email",
      placeholder: "Enter Your Email",
      type: "checkbox",
      name: "contactByEmail",
      icon: <Email />,
    },
  ],
  areaText: {
    id: "message",
    label: "Message",
    placeholder: "Enter your Message here..",
    type: "textarea",
    name: "message",
  },
};

// the rest

export const propertiesData: PropertiesData = {
  heroSection: {
    mainTitle: "Find Your Dream Property",
    description:
      "Welcome to Estatein, where your dream property awaits in every corner of our beautiful world. Explore our curated selection of properties, each offering a unique story and a chance to redefine your life. With categories to suit every dreamer, your journey",
  },

  propertySliderSection: {
    sectionTitle: "Discover a World of Possibilities",
    sectionDescription:
      "Our portfolio of properties is as diverse as your dreams. Explore the following categories to find the perfect property that resonates with your vision of home",
    cards: [
      {
        id: 1,
        image: "/assets/images/Properties/imageSlideCard1.webp",
        smallTitle: "Coastal Escapes - Where Waves Beckon",
        mainTitle: "Seaside Serenity Villa",
        description:
          "Wake up to the soothing melody of waves. This beachfront villa offers...",
        price: "$1,250,000",
        button: {
          text: "View Property Details",
          link: "#",
          variant: "primary",
        },
      },
      {
        id: 2,
        image: "/assets/images/Properties/imageSlideCard2.webp",
        smallTitle: "Urban Oasis - Life in the Heart of the City",
        mainTitle: "Metropolitan Haven",
        description:
          "Immerse yourself in the energy of the city. This modern apartment in the heart...",
        price: "$650,000",
        button: {
          text: "View Property Details",
          link: "#",
          variant: "primary",
        },
      },
      {
        id: 3,
        image: "/assets/images/Properties/imageSlideCard3.webp",
        smallTitle: "Countryside Charm - Escape to Nature's Embrace",
        mainTitle: "Rustic Retreat Cottage",
        description:
          "Find tranquility in the countryside. This charming cottage is nestled amidst rolling hills...",
        price: "$350,000",
        button: {
          text: "View Property Details",
          link: "#",
          variant: "primary",
        },
      },
    ],
  },

  searchSection: {
    searchField: {
      id: "property-search",
      placeholder: "Search For A Property",
      type: "text",
    },
    searchButton: {
      text: "Find Property",
      variant: "primary",
      icon: "/assets/icons/searchIcon.svg",
      link: "#",
    },
  },
  searchFilterSection: {
    sectionTitle: "Search Filters",
    formFields: [
      {
        id: "location",
        placeholder: "Select Location",
        type: "select",
        name: "location",
        options: ["Villa", "Apartment", "Office", "Land"],
        icon: Location,
      },
      {
        id: "property-type",
        placeholder: "Select Property Type",
        type: "select",
        name: "propertyType",
        options: ["Villa", "Apartment", "Office", "Land"],
        icon: AirplaneIcon,
      },
      {
        id: "price-range",
        placeholder: "Select Price Range",
        type: "select",
        name: "priceRange",
        options: ["$100K - $300K", "$300K - $500K", "$500K - $1M", "$1M+"],
        icon: Camera,
      },
      {
        id: "property-size",
        placeholder: "Select Size",
        type: "select",
        name: "propertySize",
        options: [
          "500 - 1000 sqft",
          "1000 - 2000 sqft",
          "2000 - 3000 sqft",
          "3000+ sqft",
        ],
        icon: Cube,
      },
      {
        id: "build-year",
        placeholder: "Select Year",
        type: "select",
        name: "buildYear",
        options: [
          "2020 - Present",
          "2010 - 2020",
          "2000 - 2010",
          "1990 - 2000",
        ],
        icon: Calendar,
      },
    ],
    submitButton: {
      text: "Apply Filters",
      link: "#",
      variant: "primary",
    },
  },
};
