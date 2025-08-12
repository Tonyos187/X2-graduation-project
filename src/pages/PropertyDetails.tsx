import PropertiesCard from "../components/cards/PropertiesCard";
import { featuredPropertiesSectionData } from "../data/Home/HomeData";
import ComprehensiveDetails from "../sections/propertiesDetails/ComprehensiveDetails";



const PropertyDetails = () => {
  const data =featuredPropertiesSectionData.properties
  return (
    <div className="space-y-20 md:space-y-30 xl:space-y-37.5 ">
      <ComprehensiveDetails/>
      
            {/* <div className="flex justify-between flex-wrap">
              {data.map((dat,index) => {
                return(
                    <PropertiesCard showInfo={true} key={dat.id} details={dat.details} image={dat.image} price={dat.price} title={dat.title} lessDescription={dat.description}/>
                )
            })} 
            </div> */}
      
    </div>
  );
};

export default PropertyDetails;
