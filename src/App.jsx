import Header from "./components/Header/Header";
import "./App.css";
import cardImage2 from "./assets/work-card2.jpg";
import WorkCard from "./components/Card/Work/WorkCard";
import Paintbrush from "./assets/icons/paintbrush.svg?react";
import MessageForm from "./components/MessageForm/MessageForm";
import ContactLink from "./components/ContactLink/ContactLink";
import Experience from "./components/Experience/Experience";

function App() {
  return (
    <>
      <Header />
      <Experience />
      <WorkCard src={cardImage2} icon={<Paintbrush />} text="Illustration" />
      <MessageForm />
      <ContactLink />
    </>
  );
}

export default App;
