import Button from "../../components/Button/Button";
import { ChevronRight } from "lucide-react";
import styles from "./MainLockup.module.css";

function MainLockup() {
  const resume = () => {
    window.open(
      "https://drive.google.com/file/d/1GUd-awDFRmUn-MVsblINioVztJt-CEne/view?usp=sharing",
      "_blank",
      "noopener,noreferrer",
    );
  };

  const instantfind = () => {
    window.open(
      "https://instantfind.me/mubarak",
      "_blank",
      "noopener,noreferrer",
    );
  };

  return (
    <div>
      <h3 className={styles.title}>Mubarak Rabiu - Product designer.</h3>
      <p className={styles.description}>
        Mubarak Rabiu is a product designer who works across brand identity and
        digital experience. For him, the process matters as much as the outcome.
        Problem first, solution second. He&apos;s rooted in user-centered
        thinking, where creativity and functionality work together rather than
        against each other. Browse his case studies on{" "}
        <a href="https://www.behance.net/mubzie">[Behance]</a>, connect
        professionally on{" "}
        <a href="https://www.linkedin.com/in/mubarakrabiu/">[LinkedIn]</a>, or
        catch smaller thoughts and updates on{" "}
        <a href="https://x.com/mubizzu">[X]</a>.
      </p>
      <div className={styles.btnContainer}>
        <Button onClick={resume} variant="primary" icon={ChevronRight}>
          View my resume
        </Button>
        <Button onClick={instantfind} variant="secondary" icon={ChevronRight}>
          instantfind.me
        </Button>
      </div>
    </div>
  );
}

export default MainLockup;
