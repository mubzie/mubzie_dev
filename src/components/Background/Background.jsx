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
        I’m a product designer with hands-on experience in graphic design, brand
        identity, and digital experiences. My work is rooted in solving
        real-world problems through thoughtful, user-centered design—where
        creativity meets functionality. This portfolio showcases my
        problem-solving approach—turning challenges into elegant solutions. I
        love collaborating with teams that value innovation and execution.
      </p>
      <Button
        onClick={handleButtonClick}
        text="View my resume"
        variant="primary"
        rightIcon={<ChevronRight />}
      />
    </div>
  );
}

export default Background;
