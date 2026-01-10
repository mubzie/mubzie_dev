import PropTypes from "prop-types";
import styles from "./WorkCard.module.css";

function WorkCard({ icon, cardTitle, onClick }) {
  const Icon = icon;

  return (
    <div onClick={onClick} className={styles.WorkCardWrapper}>
      <div className={styles.textWrapper}>
        <div className={styles.backdrop}></div>
        <span>{Icon && <Icon />}</span>
        <p>{cardTitle}</p>
      </div>
    </div>
  );
}

WorkCard.propTypes = {
  icon: PropTypes.element,
  cardTitle: PropTypes.string,
  onClick: PropTypes.func,
};

export default WorkCard;
