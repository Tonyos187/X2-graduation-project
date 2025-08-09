// ClientsSection.tsx
import Clients from "./ClientsCard";
import { testimonialsSectionData } from "../../data/Home/HomeData";

const ClientsSection = () => {
  return (
    <section className="px-4 py-12">
      <div className="flex flex-wrap gap-5 justify-center">
        {testimonialsSectionData.testimonials.map((testimonial) => (
          <Clients key={testimonial.id} testimonial={testimonial} />
        ))}
      </div>
    </section>
  );
};

export default ClientsSection;
