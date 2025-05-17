import Header from "./components/header/header";
import About from "./components/About/About";
import Project from "./components/Project/Project";
import "./App.css";
import Background from "./components/Background/Background";
import ExperienceCard from "./components/Card/ExperienceCard";
import cardImage from "./assets/work-card1.png";

function App() {
  return (
    <>
      <Header />
      <Background />
      <ExperienceCard
        src={cardImage}
        altText="Company Logo"
        organizationName="Curaboard (Formerly Wishpo) - Product design (Contract)"
        date="Nov 2023 - May 2024"
        description="I am a product designer with a multidisciplinary background in graphic design, brand identity, and digital experiences."
      />
      <About />
      <Project />
    </>
  );
}

export default App;
