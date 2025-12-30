import PropTypes from "prop-types";
import styles from "./ExperienceCard.module.css";

function ExperienceCard({
  src,
  alt,
  company,
  designation,
  duration,
  description,
}) {
  return (
    <div className={styles.experienceCardWrapper}>
      <div className={styles.container}>
        <img src={src} alt={alt} />
        <div className={styles.textWrapper}>
          <p className={styles.company}>{company}</p>
          <div className={styles.textContainer}>
            <p className={styles.designation}>{designation}</p>
            <p className={styles.duration}>{duration}</p>
          </div>
        </div>
      </div>
      <p className={styles.description}>{description}</p>
    </div>
  );
}

ExperienceCard.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  company: PropTypes.string,
  designation: PropTypes.string,
  duration: PropTypes.string,
  description: PropTypes.string,
};

export default ExperienceCard;
