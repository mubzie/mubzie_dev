import PropTypes from "prop-types";
import styles from "./WorkCard.module.css";
import { Link } from "react-router-dom";

function WorkCard({ icon, cardTitle, onClick, img, alt, slug }) {
  return (
    <Link
      to={`featured-work/${slug}`}
      onClick={onClick}
      className={styles.WorkCardWrapper}
    >
      <img src={img} alt={alt} className={styles.cardBg} />
      <div className={styles.textWrapper}>
        <p>{cardTitle}</p>
        <img src={icon} alt={alt} className={styles.icon} />
      </div>
    </Link>
  );
}

WorkCard.propTypes = {
  icon: PropTypes.string,
  cardTitle: PropTypes.string,
  onClick: PropTypes.func,
  img: PropTypes.string,
  alt: PropTypes.string,
  slug: PropTypes.string,
};

export default WorkCard;
