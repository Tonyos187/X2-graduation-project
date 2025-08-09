import TopFooter from "../../components/sharedComponents/footerComponents/TopFooter";
import { ctaSectionData } from "../../data/Home/HomeData";

const Footer = () => {
  return (
    <footer className="mt-20 md:mt-30 xl:mt-37.5">
      <TopFooter data={ctaSectionData}/>
    </footer>
  );
};

export default Footer;