import styles from "./App.module.css";
import { SquareArrowOutUpRight } from "lucide-react";

import ContactForm from "./components/ContactForm/ContactForm";
import MainLockup from "./sections/MainLockup/MainLockup";
import WorkSection from "./sections/WorkSection/WorkSection";
import ExperienceSection from "./sections/ExperienceSection/ExperienceSection";
import LinkButton from "./components/LinkButton/LinkButton";

function App() {
  return (
    <div className={styles.appWrapper}>
      <MainLockup />
      <WorkSection />
      <ExperienceSection />
      <ContactForm />
      <LinkButton size="small" icon={SquareArrowOutUpRight}>
        Github
      </LinkButton>
    </div>
  );
}

export default App;
