import PropTypes from "prop-types";
import styles from "./ExperienceCard.module.css";

function ExperienceCard({
  src,
  altText,
  organizationName,
  date,
  description,
  link,
}) {
  return (
    <div className={styles.container}>
      <div className={styles.imageWrapper}>
        <img src={src} alt={altText} />
      </div>

      <div className={styles.textContainer}>
        <a
          href={link}
          target="blank"
          rel="noopener noreferrer"
          className={styles.organizationName}
        >
          {organizationName}
        </a>
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
  link: PropTypes.string,
};

export default ExperienceCard;
