import PropTypes from "prop-types";
import styles from "./LinkButton.module.css";

function LinkButton({ children, icon, size, onClick }) {
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
    <a onClick={onClick} className={`${styles.linkBtn} ${btnSize}`}>
      <span>{children}</span>
      {icon && <Icon size={iconSize[size]}></Icon>}
    </a>
  );
}

LinkButton.propTypes = {
  children: PropTypes.element,
  icon: PropTypes.element,
  size: PropTypes.string,
  onClick: PropTypes.func,
};
export default LinkButton;
