import styles from "./Background.module.css";
import Button from "../Button/Button";
import ChevronRight from "../../assets/icons/chevron-right.svg?react";

function Background() {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Background</h3>
      <p className={styles.text}>
        I am a product designer with a multidisciplinary background in graphic
        design, brand identity, and digital experiences. My work is driven by a
        passion for solving real-world problems through innovative,
        user-centered design solutions. This portfolio highlights a selection of
        my projects that demonstrate my approach to creative problem-solving and
        design thinking. While some of my work remains confidential due to
        client agreements, the examples here reflect my ability to transform
        complex challenges into elegant, functional designs. I thrive in
        collaborative environments with forward-thinking teams that value
        creativity, strategy, and execution. My design philosophy balances
        creative vision with practical implementation, ensuring that every
        solution is both impactful and achievable.
      </p>
      <Button text="View my resume" rightIcon={<ChevronRight />} />
    </div>
  );
}

export default Background;
