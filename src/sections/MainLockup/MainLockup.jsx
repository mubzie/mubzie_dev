import Button from "../../components/Button/Button";
import { ChevronRight } from "lucide-react";
import styles from "./MainLockup.module.css";

function MainLockup() {
  const resume = () => {
    window.open(
      "https://drive.google.com/file/d/1GUd-awDFRmUn-MVsblINioVztJt-CEne/view?usp=sharing",
      "_blank",
      "noopener,noreferrer"
    );
  };

  const instantfind = () => {
    window.open(
      "https://instantfind.me/mubarak",
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <div>
      <h3 className={styles.title}>Mubarak Rabiu - Product designer.</h3>
      <p className={styles.description}>
        I’m a product designer with hands-on experience in graphic design, brand
        identity, and digital experiences. My work is rooted in solving
        real-world problems through thoughtful, user-centered design—where
        creativity meets functionality. This portfolio showcases my
        problem-solving approach—turning challenges into elegant solutions. I
        love collaborating with teams that value innovation and execution.
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
