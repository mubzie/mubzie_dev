import styles from "./WorkCard.module.css";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function WorkCard({ id, src, icon, text }) {
  return (
    <div className={styles.container}>
      <Link to={`/work/${id}`}>
        <div className={styles.imageWrapper}>
          <img src={src} alt="" />
        </div>

        <div className={styles.textWrapper}>
          <span className={styles.iconWrapper}>{icon}</span>
          <p className={styles.text}>{text}</p>
        </div>
      </Link>
    </div>
  );
}

WorkCard.propTypes = {
  src: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
  text: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default WorkCard;
