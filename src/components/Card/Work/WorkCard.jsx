import styles from "./WorkCard.module.css";
import PropTypes from "prop-types";


function WorkCard({ src, icon, text }) {
  return (
    <div className={styles.container}>
      <div className={styles.imageWrapper}>
        <img src={src} alt="" />
      </div>

      <div className={styles.textWrapper}>
        <span className={styles.iconWrapper}>{icon}</span>
        <p className={styles.text}>{text}</p>
      </div>
    </div>
  );
}

WorkCard.propTypes = {
  src: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
  text: PropTypes.string.isRequired,
};

export default WorkCard;
