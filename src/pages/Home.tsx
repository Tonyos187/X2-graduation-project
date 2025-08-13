import HowItWorksCard from "../components/cards/HowItWorksCard";
import Hero from "../sections/HomePageSections/Hero";

const Home = () => {
  return (
    <>
      <Hero />
      <HowItWorksCard
        step="01"
        title="Narrowing Down Your Choices"
        description="Once you've found properties that catch your eye, save them to your account or make a shortlist. This allows you to compare and revisit your favorites as you make your decision."
      />
    </>
  );
};

export default Home;
