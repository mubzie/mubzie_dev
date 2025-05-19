import styles from "./Background.module.css";
import Button from "../Button/Button";
import ChevronRight from "../../assets/icons/chevron-right.svg?react";

function Background() {
  const handleButtonClick = () => {
    window.open(
      "https://drive.google.com/file/d/1GUd-awDFRmUn-MVsblINioVztJt-CEne/view?usp=drive_link",
      "_blank"
    );
  };
  
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Background</h3>
      <p className={styles.text}>
        I’m a product designer with expertise in graphic design, branding, and
        digital experiences. Passionate about solving real-world problems
        through user-centered design, my work blends creativity with
        practicality. This portfolio showcases my problem-solving
        approach—turning challenges into elegant solutions. I love collaborating
        with teams that value innovation and execution.
      </p>
      <Button
        onClick={handleButtonClick}
        text="View my resume"
        rightIcon={<ChevronRight />}
      />
    </div>
  );
}

export default Background;
