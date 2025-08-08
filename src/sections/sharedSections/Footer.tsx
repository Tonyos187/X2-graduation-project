import TopFooter from "../../components/sharedComponents/footerComponents/TopFooter";
import { ctaSectionData } from "../../data/Home/HomeData";

const Footer = () => {
  return (
    <footer className="">
      <TopFooter data={ctaSectionData}/>
    </footer>
  );
};

export default Footer;