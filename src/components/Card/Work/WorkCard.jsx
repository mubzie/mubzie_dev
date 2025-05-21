import styles from "./WorkCard.module.css";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function WorkCard({ id, src, icon, title }) {
  const formattedCardTitle = title.replace(/\s+/g, "-").toLowerCase();

  return (
    <div className={styles.container}>
      <Link to={`/work/${formattedCardTitle}/${id}`}>
        <div className={styles.imageWrapper}>
          <img src={src} alt="" />
        </div>

        <div className={styles.textWrapper}>
          <span className={styles.iconWrapper}>{icon}</span>
          <p className={styles.text}>{title}</p>
        </div>
      </Link>
    </div>
  );
}

WorkCard.propTypes = {
  src: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default WorkCard;
