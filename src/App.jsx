import styles from "./App.module.css";
import { useEffect } from "react";

import ContactForm from "./components/ContactForm/ContactForm";
import MainLockup from "./sections/MainLockup/MainLockup";
import WorkSection from "./sections/WorkSection/WorkSection";
import ExperienceSection from "./sections/ExperienceSection/ExperienceSection";
// import Footer from "./sections/Footer/Footer";

function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Mubarak Rabiu - Portfolio";
  }, []);

  return (
    <>
      <a href="#main-content" className={styles.skipLink}>
        Skip to main content
      </a>
      <main id="main-content" className={styles.appWrapper}>
        <MainLockup />
        <WorkSection />
        <ExperienceSection />
        <ContactForm />
        {/* <Footer /> */}
      </main>
    </>
  );
}

export default App;
