import SearchDropDownComponent from "../../components/form/formComponents/SearchDropDown"
import SearchFild from "../../components/form/formComponents/SerchFild"
import Container from "../../layouts/Container"
import type { PropertiesData } from "../../types/Properties/PropertiesTypes"


function SearchandFiltersSection({data}:{data:PropertiesData}) {
    return (
        <Container >
            <div >
                <SearchFild data={data.searchSection} />
                <SearchDropDownComponent data={data.searchFilterSection} />
            </div>
        </Container>
    )
}

export default SearchandFiltersSection
