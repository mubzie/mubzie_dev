import Header from "./components/Header/Header";
import "./App.css";
import ExperienceCard from "./components/Card/Experience/ExperienceCard";
import cardImage from "./assets/work-card1.png";
import cardImage2 from "./assets/work-card2.jpg";
import WorkCard from "./components/Card/Work/WorkCard";
import Paintbrush from "./assets/icons/paintbrush.svg?react";
import MessageForm from "./components/MessageForm/MessageForm";
import ContactLink from "./components/ContactLink/ContactLink";

function App() {
  return (
    <>
      <Header />
      <ExperienceCard
        src={cardImage}
        altText="Company Logo"
        organizationName="Curaboard (Formerly Wishpo) - Product design (Contract)"
        date="Nov 2023 - May 2024"
        description="I am a product designer with a multidisciplinary background in graphic design, brand identity, and digital experiences."
      />
      <WorkCard src={cardImage2} icon={<Paintbrush />} text="Illustration" />
      <MessageForm />
      <ContactLink />
    </>
  );
}

export default App;
