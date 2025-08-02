import Email from "../../svg/Email";
import Phone from "../../svg/Phone";
import type { PropertiesData } from "../../types/Properties/PropertiesTypes";
export const propertiesData: PropertiesData = {
    heroSection: {
        mainTitle: "Find Your Dream Property",
        description: "Welcome to Estatein, where your dream property awaits in every corner of our beautiful world. Explore our curated selection of properties, each offering a unique story and a chance to redefine your life. With categories to suit every dreamer, your journey"
    },


    propertySliderSection: {
        sectionTitle: "Discover a World of Possibilities",
        sectionDescription: "Our portfolio of properties is as diverse as your dreams. Explore the following categories to find the perfect property that resonates with your vision of home",
        cards: [
            {
                id: 1,
                image: "/assets/Properties/imageSlideCard1.webp",
                smallTitle: "Coastal Escapes - Where Waves Beckon",
                mainTitle: "Seaside Serenity Villa",
                description: "Wake up to the soothing melody of waves. This beachfront villa offers...",
                price: "$1,250,000",
                button: {
                    text: "View Property Details",
                    link: "#",
                    variant: 'primary'
                }
            },
            {
                id: 2,
                image: "/assets/Properties/imageSlideCard2.webp",
                smallTitle: "Urban Oasis - Life in the Heart of the City",
                mainTitle: "Metropolitan Haven",
                description: "Immerse yourself in the energy of the city. This modern apartment in the heart...",
                price: "$650,000",
                button: {
                    text: "View Property Details",
                    link: "#",
                    variant: 'primary'
                }
            },
            {
                id: 3,
                image: "/assets/Properties/imageSlideCard3.webp",
                smallTitle: "Countryside Charm - Escape to Nature's Embrace",
                mainTitle: "Rustic Retreat Cottage",
                description: "Find tranquility in the countryside. This charming cottage is nestled amidst rolling hills...",
                price: "$350,000",
                button: {
                    text: "View Property Details",
                    link: "#",
                    variant: 'primary'
                }
            }
        ]
    },

    contactFormSection: {
        sectionTitle: "Let's Make it Happen",
        sectionDescription: "Ready to take the first step toward your dream property? Fill out the form below, and our real estate wizards will work their magic to find your perfect match. Don't wait; let's embark on this exciting journey together.",
        formFields: [
            {
                id: "first-name",
                label: "First Name",
                placeholder: "Enter First Name",
                type: "text",
                name: "firstName",
                required: true
            },
            {
                id: "last-name",
                label: "Last Name",
                placeholder: "Enter Last Name",
                type: "text",
                name: "lastName",
                required: true
            },
            {
                id: "email",
                label: "Email",
                placeholder: "Enter Your Email",
                type: "email",
                name: "email",
                required: true
            },
            {
                id: "phone",
                label: "Phone",
                placeholder: "Enter Phone Number",
                type: "tel",
                name: "phone"
            },
            {
                id: "location",
                label: "Preferred Location",
                placeholder: "Select Location",
                type: "select",
                name: "location",
                options: ["Riyadh", "Jeddah", "Dammam", "Khobar", "Dubai"]
            },
            {
                id: "property-type",
                label: "Property Type",
                placeholder: "Select Property Type",
                type: "select",
                name: "propertyType",
                options: ["Villa", "Apartment", "Office", "Land"]
            },
            {
                id: "bedrooms",
                label: "No. of Bedrooms",
                placeholder: "Select no. of Bedrooms",
                type: "select",
                name: "bedrooms",
                options: ["1", "2", "3", "4", "5+"]
            },
            {
                id: "bathrooms",
                label: "No. of Bathrooms",
                placeholder: "Select no. of Bathrooms",
                type: "select",
                name: "bathrooms",
                options: ["1", "2", "3", "4", "5+"]
            },
            {
                id: "budget",
                label: "Budget",
                placeholder: "Select Budget",
                type: "select",
                name: "budget",
                options: ["$100,000 - $300,000", "$300,000 - $500,000", "$500,000 - $1,000,000", "$1,000,000+"]
            },
            {
                id: "contact-method-phone",
                label: "Phone",
                placeholder: "Enter Your Number",
                type: "checkbox",
                name: "contactByPhone",
                icon: Phone 
            },
            {
                id: "contact-method-email",
                label: "Email",
                placeholder: "Enter Your Email",
                type: "checkbox",
                name: "contactByEmail",
                icon: Email
            },
            {
                id: "message",
                label: "Message",
                placeholder: "Enter your Message here..",
                type: "textarea",
                name: "message"
            }
        ],
        submitButton: {
            text: "Send Your Message",
            link: "#",
            variant: 'primary'
        }
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
            link: "#"
        }
    },



}