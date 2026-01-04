// import Header from "./components/header/header";
import About from "./components/About/About";
import Project from "./components/Project/Project";
// import { ChevronRight } from "lucide-react";
// import { SplinePointer } from "lucide-react";
// import img from "./assets/Images/img1.png";

// import Button from "./components/Button/Button";
// import WorkCard from "./components/WorkCard/WorkCard";
// import ExperienceCard from "./components/ExperienceCard/ExperienceCard";
import ContantForm from "./components/ContantForm/ContactForm";

function App() {
  return (
    <>
      {/* <Header /> */}
      <About />
      {/* <WorkCard cardTitle="UI exploration" icon={SplinePointer} /> */}
      {/* <ExperienceCard
        src={img}
        alt="alt"
        company="Acme"
        designation="product designer"
        duration="Mar 2025 - Present"
        description="Tasked with designing intuitive user and admin dashboards focused on clarity and brand consistency."
      /> */}
      <ContantForm />
      <Project />
    </>
  );
}

export default App;
