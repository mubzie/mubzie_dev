import PropTypes from "prop-types";
import styles from "./ExperienceCard.module.css";

function ExperienceCard({ src, altText, organizationName, date, description }) {
  return (
    <div className={styles.container}>
      <div className={styles.imageWrapper}>
        <img src={src} alt={altText} />
      </div>

      <div className={styles.textContainer}>
        <h3 className={styles.organizationName}>{organizationName}</h3>
        <p className={styles.date}>{date}</p>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
}

ExperienceCard.propTypes = {
  src: PropTypes.string.isRequired,
  altText: PropTypes.string.isRequired,
  organizationName: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default ExperienceCard;
