import SearchAndFilters from "../../components/form/FormFieldsComponents/SearchAndFilters";
import { propertiesData } from "../../data/Properties/PropertisData";
import { featuredPropertiesSectionData } from "../../data/Home/HomeData";
import Container from "../../layouts/Container";
import PropertiesCard from "../../components/cards/PropertiesCard";
import { useMemo, useState } from "react";

type FeaturedProperty = (typeof featuredPropertiesSectionData.properties)[number];

const normalizePrice = (price: string): number => {
    const digits = price.replace(/[^0-9]/g, "");
    return digits ? parseInt(digits, 10) : 0;
};

const inPriceRange = (price: number, range?: string): boolean => {
    if (!range) return true;
    const ranges: Record<string, [number, number | null]> = {
        "$100K - $300K": [100_000, 300_000],
        "$300K - $500K": [300_000, 500_000],
        "$500K - $1M": [500_000, 1_000_000],
        "$1M+": [1_000_000, null],
    };
    const r = ranges[range];
    if (!r) return true;
    const [min, max] = r;
    if (price < min) return false;
    if (max !== null && price > max) return false;
    return true;
};

const matchesType = (p: FeaturedProperty, type?: string): boolean => {
    if (!type) return true;
    const hay = (p.title + " " + p.description + " " + (p.details?.map(d => d.label).join(" ") ?? "")).toLowerCase();
    return hay.includes(type.toLowerCase());
};

const matchesQuery = (p: FeaturedProperty, q?: string): boolean => {
    if (!q) return true;
    const hay = (p.title + " " + p.description).toLowerCase();
    return hay.includes(q.toLowerCase());
};

function SearchAndFiltersSection() {
    const [criteria, setCriteria] = useState<Record<string, string> | null>(null);

    const results = useMemo(() => {
        if (!criteria) return [] as FeaturedProperty[];
        const q = criteria.q || "";
        const type = criteria["property-type"] || criteria["location"] || "";
        const priceRange = criteria["price-range"] || "";
        return featuredPropertiesSectionData.properties.filter((p) => {
            const price = normalizePrice(p.price ?? "");
            return matchesQuery(p, q) && matchesType(p, type) && inPriceRange(price, priceRange);
        });
    }, [criteria]);

    const onSearch = (c: Record<string, string>) => {
        setCriteria(c);
    };

    const showResults = !!criteria;

    return (
        <>
            <Container className="mt-[-40px] lg:mt-[-120px] xl:mt-[-150px] lg:translate-y-[-26.1538%] space-y-8 relative z-10">
                <SearchAndFilters
                    searchData={propertiesData.searchSection}
                    filterData={propertiesData.searchFilterSection}
                    onSearch={onSearch}
                />
            </Container>

            {showResults && (
                <Container className="relative z-0 mt-12 space-y-6">
                    <div id="properties-categories" className="flex items-end justify-between">
                        <div>
                            <h2 className="text-2xl md:text-3xl font-semibold">Search Results</h2>
                            <p className="text-Grey-60 text-sm md:text-base">
                                Showing {results.length} result{results.length !== 1 ? "s" : ""} for your query.
                            </p>
                        </div>
                    </div>

                    {results.length === 0 ? (
                        <div className="rounded-xl border border-Grey-15 bg-Grey-10 p-6 text-Grey-60">
                            No properties matched your filters.
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
                            {results.map((property) => (
                                <PropertiesCard
                                    key={property.id}
                                    image={property.image}
                                    fullDescription={property.title}
                                    lessDescription={property.description}
                                    details={property.details}
                                    showInfo={true}
                                    price={property.price}
                                    btnLink={`/properties/${property.id}`}
                                    btnText="View Property Details"
                                />
                            ))}
                        </div>
                    )}
                </Container>
            )}
        </>
    );
}

export default SearchAndFiltersSection;
