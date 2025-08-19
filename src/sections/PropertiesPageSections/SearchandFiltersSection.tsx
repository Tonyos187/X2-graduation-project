import SearchAndFilters from "../../components/form/FormFieldsComponents/SearchAndFilters"
import { propertiesData } from "../../data/Properties/PropertisData"
import Container from "../../layouts/Container"


function SearchAndFiltersSection() {
    return (
        <Container>
            <SearchAndFilters searchData={propertiesData.searchSection} filterData={propertiesData.searchFilterSection}/>
        </Container>
    )
}

export default SearchAndFiltersSection
