import styles from "./App.module.css";

import ContactForm from "./components/ContactForm/ContactForm";
import MainLockup from "./sections/MainLockup/MainLockup";
import WorkSection from "./sections/WorkSection/WorkSection";
import ExperienceSection from "./sections/ExperienceSection/ExperienceSection";

function App() {
  return (
    <div className={styles.appWrapper}>
      <MainLockup />
      <WorkSection />
      <ExperienceSection />
      <ContactForm />
    </div>
  );
}

export default App;
