import Area from "../../svg/Area";
import Bathroom from "../../svg/Bathroom";
import Bed from "../../svg/Bedroom";
import Lightning from "../../svg/Lightning";
import type { PropertyDetailsType } from "../../types/PropertyDetails/PropertyDetailsTypes";

export const PropertyDetailsData : PropertyDetailsType={
    title: "Seaside Serenity Villa",
    location : "Malibu, California" ,
    price : "$1,250,000",
    PropertyImages : [ 
        {image: "/assets/images/PropertyDetails/SeasideSerenityVilla1.webp",},
        {image: "/assets/images/PropertyDetails/SeasideSerenityVilla2.webp",},
        {image: "/assets/images/PropertyDetails/SeasideSerenityVilla3.webp",},
        {image: "/assets/images/PropertyDetails/SeasideSerenityVilla4.webp",},
        {image: "/assets/images/PropertyDetails/SeasideSerenityVilla5.webp",},
        {image: "/assets/images/PropertyDetails/SeasideSerenityVilla6.webp",},
        {image: "/assets/images/PropertyDetails/SeasideSerenityVilla7.webp",},
        {image: "/assets/images/PropertyDetails/SeasideSerenityVilla8.webp",},
        {image: "/assets/images/PropertyDetails/SeasideSerenityVilla9.webp",},
    ],
    description :{
        description : "Discover your own piece of paradise with the Seaside Serenity Villa. T With an open floor plan, breathtaking ocean views from every room, and direct access to a pristine sandy beach, this property is the epitome of coastal living.",
        details: [
            { 
                icon: <Bed/>, 
                label: "Bedrooms" ,
                value : "04",
            },
            { 
                icon: <Bathroom/>, 
                label: "Bathrooms",
                value : "03",
            },
            { 
                icon: <Area/>, 
                label: "Area",
                value : "2,500 Square Feet",
            },
        ],
        features : [
            {
                icon: <Lightning/>, 
                label: "Expansive oceanfront terrace for outdoor entertaining",
            },
            {
                icon: <Lightning/>, 
                label: "Gourmet kitchen with top-of-the-line appliances",
            },
            {
                icon: <Lightning/>, 
                label: "Private beach access for morning strolls and sunset views",
            },
            {
                icon: <Lightning/>, 
                label: "Master suite with a spa-inspired bathroom and ocean-facing balcony",
            },
            {
                icon: <Lightning/>, 
                label: "Private garage and ample storage space",
            },
        ],
    },
}

