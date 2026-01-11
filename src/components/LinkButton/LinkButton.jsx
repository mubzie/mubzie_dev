import PropTypes from "prop-types";
import styles from "./LinkButton.module.css";

function LinkButton({ children, icon, size, link }) {
  const Icon = icon;

  const btnSize = {
    medium: styles.btnMedium,
    small: styles.btnSmall,
  }[size];

  const iconSize = {
    medium: 20,
    small: 16,
  };

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={`${styles.linkBtn} ${btnSize}`}
    >
      <span>{children}</span>
      {icon && <Icon size={iconSize[size]}></Icon>}
    </a>
  );
}

LinkButton.propTypes = {
  children: PropTypes.string,
  icon: PropTypes.element,
  size: PropTypes.string,
  link: PropTypes.string,
};
export default LinkButton;
