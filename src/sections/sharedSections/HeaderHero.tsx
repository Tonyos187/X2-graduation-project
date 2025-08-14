import Container from "../../layouts/Container";
import Header from "../../components/sharedComponents/Header";

interface HeaderHeroProps {
  title: string;
  description: string;
}

const HeaderHero = ({ title, description }: HeaderHeroProps) => {
  return (
    <Container
      className="pt-[68px] lg:pt-[77px] xl:pt-[99px]
    bg-[linear-gradient(95.93deg,var(--color-Grey-15)_-26.82%,transparent_40.46%)]"
    >
      <Header className="py-12.5 lg:py-25 xl:pt-37.5 xl:pb-25 w-full lg:w-[85.0877%] m-0" title={title} description={description} />
    </Container>
  );
};

export default HeaderHero;
