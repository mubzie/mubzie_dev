import { ChevronRight } from "lucide-react";
import { SplinePointer } from "lucide-react";
import img from "./assets/Images/img1.png";
import styles from "./App.module.css";

// import Button from "./components/Button/Button";
import WorkCard from "./components/WorkCard/WorkCard";
import ExperienceCard from "./components/ExperienceCard/ExperienceCard";
import ContantForm from "./components/ContactForm/ContactForm";
import MainLockup from "./sections/MainLockup/MainLockup";
import WorkSection from "./sections/WorkSection/WorkSection";
import ExperienceSection from "./sections/ExperienceSection/ExperienceSection";

function App() {
  return (
    <div className={styles.appWrapper}>
      <MainLockup />
      <WorkSection />
      <ExperienceSection />
      {/* <ContantForm /> */}
    </div>
  );
}

export default App;
