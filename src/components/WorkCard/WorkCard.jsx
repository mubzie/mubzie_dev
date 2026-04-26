import PropTypes from "prop-types";
import styles from "./WorkCard.module.css";
import { Link } from "react-router-dom";
import { Lock } from "lucide-react";

function WorkCard({ icon, cardTitle, onClick, img, alt, slug, isFeatured }) {
  if (!isFeatured) {
    return (
      <div
        className={`${styles.WorkCardWrapper} ${styles.inactiveCard}`}
        aria-disabled="true"
      >
        <img
          src={img}
          alt={alt}
          className={styles.cardBg}
          loading="lazy"
          decoding="async"
        />
        <div className={styles.textWrapper}>
          <p>{cardTitle}</p>
          <Lock
            size={20}
            className={`${styles.icon} ${styles.lockIcon}`}
            aria-hidden="true"
          />
        </div>
      </div>
    );
  }

  return (
    <Link
      to={`featured-work/${slug}`}
      onClick={onClick}
      className={styles.WorkCardWrapper}
    >
      <img
        src={img}
        alt={alt}
        className={styles.cardBg}
        loading="lazy"
        decoding="async"
      />
      <div className={styles.textWrapper}>
        <p>{cardTitle}</p>
        <img
          src={icon}
          alt={alt}
          className={`${styles.icon} ${styles.imageIcon}`}
          loading="lazy"
          decoding="async"
        />
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
  isFeatured: PropTypes.bool,
};

export default WorkCard;
