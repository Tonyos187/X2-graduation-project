import Hero from "../sections/HomePageSections/Hero";
import FaqSection from "../components/cards/FaqSection";
import ClientsSection from "../components/cards/ClientsSection";

const Home = () => {
  return (
    <>
      <div className="space-y-20 md:space-y-30 xl:space-y-37.5">
        <Hero />
        <FaqSection />
        <ClientsSection />
      </div>
    </>
  );
};

export default Home;