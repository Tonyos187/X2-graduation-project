import React from "react";
import { useSearch } from "../../../SearchContext";
import Container from "../../../layouts/Container";
import PropertiesCard from "../../cards/PropertiesCard";
import Slider from "../../sharedComponents/Slider";

const SearchResults: React.FC = () => {
  const { searchResults, hasSearched, clearFilters } = useSearch();

  if (!hasSearched) {
    return null;
  }

  const resultCards = searchResults.map(property => (
    <div key={property.id} className="h-full">
      <PropertiesCard
        showInfo={true}
        details={property.details}
        fullDescription={property.fullDescription}
        image={property.image}
        discoverDescription={property.discoverDescription}
        price={property.price}
        title={property.title}
        btnText={property.btnText}
        btnLink={property.btnLink}
      />
    </div>
  ));

  return (
    <Container className="my-20">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold text-white">
          Search Result {searchResults.length > 0 ? `(${searchResults.length})` : ''}
        </h2>
        <button
          onClick={clearFilters}
          className="px-4 py-2 bg-Grey-15 text-white rounded-lg hover:bg-Grey-20 transition-colors"
        >
          Clear Filters
        </button>
      </div>
      
      {searchResults.length === 0 ? (
        <div className="text-center py-10">
          <p className="text-Grey-60 text-lg">No Data Found</p>
          <button
            onClick={clearFilters}
            className="mt-4 px-6 py-2 bg-Purple-60 text-white rounded-lg hover:bg-Purple-70 transition-colors"
          >
            Clear Search
          </button>
        </div>
      ) : (
        searchResults.length > 1 ? (
          <Slider
            cards={resultCards}
            num_Of_Cards_in_sm_screen={1}
            num_Of_Cards_in_md_screen={2}
            num_Of_Cards_in_xl_screen={3}
            gap_cards="gap-6"
          />
        ) : (
          <div className="grid grid-cols-1 gap-6">
            {resultCards}
          </div>
        )
      )}
    </Container>
  );
};

export default SearchResults;