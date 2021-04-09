import { ContactForm, Title, WorkSection } from "../components.pages/main";
import { OptionsSection } from "../components.pages/main";
import HeadTitle from "../components/HeadTitle";

export default function Home() {
  return (
    <>
      <HeadTitle title={"Hlavní stránka"} />
      <Title />
      <OptionsSection />
      <WorkSection />
      <ContactForm />
    </>
  );
}
