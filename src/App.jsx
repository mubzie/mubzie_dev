import { ChevronRight } from "lucide-react";
import { SplinePointer } from "lucide-react";
import img from "./assets/Images/img1.png";
import styles from "./App.module.css";

// import Button from "./components/Button/Button";
import WorkCard from "./components/WorkCard/WorkCard";
import ExperienceCard from "./components/ExperienceCard/ExperienceCard";
import ContantForm from "./components/ContactForm/ContactForm";

function App() {
  return (
    <div className={styles.appWrapper}>
      <WorkCard cardTitle="UI exploration" icon={SplinePointer} />
      <ExperienceCard
        src={img}
        alt="alt"
        company="Acme"
        designation="product designer"
        duration="Mar 2025 - Present"
        description="Tasked with designing intuitive user and admin dashboards focused on clarity and brand consistency."
      />
      <ContantForm />
    </div>
  );
}

export default App;
