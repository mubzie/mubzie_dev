import PropTypes from "prop-types";
import styles from "./WorkCard.module.css";

function WorkCard({ icon, cardTitle, onClick, img, alt }) {
  // const Icon = icon;

  return (
    <div onClick={onClick} className={styles.WorkCardWrapper}>
      <img src={img} alt={alt} className={styles.cardBg} />
      <div className={styles.textWrapper}>
        <img src={icon} alt={alt} className={styles.icon} />
        <p>{cardTitle}</p>
      </div>
    </div>
  );
}

WorkCard.propTypes = {
  icon: PropTypes.string,
  cardTitle: PropTypes.string,
  onClick: PropTypes.func,
  img: PropTypes.string,
  alt: PropTypes.string,
};

export default WorkCard;
