export interface PricingCardItem {
    label: string;
    value: string;
    description?: string; 
}
export interface PricingDetailsSection {
    title: string;
    pricingCard: PricingCardItem[];
}
export interface PricingDetailsDataType {
    note: string;
    listingPrice: string;
    pricingDetailsCards: PricingDetailsSection[];
}

