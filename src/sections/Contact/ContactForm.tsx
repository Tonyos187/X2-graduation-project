import Header from "../../components/sharedComponents/Header"
import SharedForm from "../../components/sharedComponents/SharedForm"
// import { contactLetsConnectData, contactLetsConnectFormData } from "../../data/Contact/ContactData"
import Container from "../../layouts/Container"
import type { ConactFormType } from "../../types/Contact/ContactType"

interface Props {
  title: string;
  description: string;
  data: ConactFormType[];
  areaText: ConactFormType;
  detailsPage?: boolean;
}

const ContactForm = ({title, description, data, areaText, detailsPage} : Props) => {
  return (
    <Container className={`flex flex-col ${detailsPage ? "lg:flex-row lg:gap-[5.5556vw] xl:gap-[5.20834vw]" : "lg:gap-15 xl:gap-20"} gap-10 md:gap-12.5`}>
      <div className={`w-full ${detailsPage ? "lg:w-[28.6112vw] xl:w-[27.03125vw]" : "lg:w-[81.21478%]"}`}>
      <Header title={title} description={description} withIcon />
      </div>

     <div className="flex-1">
       <SharedForm data={data} areaText={areaText} detailsForm={detailsPage ? true : false} />
     </div>
    </Container>
  )
}

export default ContactForm
