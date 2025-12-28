import PropTypes from "prop-types";
import styles from "./Button.module.css";

function Button({
  children,
  icon,
  size = "default",
  variant = "primary",
  onClick,
}) {
  const Icon = icon;

  const btnVariant = {
    primary: styles.btnPrimary,
    secondary: styles.btnSecondary,
  }[variant];

  const btnSize = {
    default: styles.btnDefault,
    small: styles.btnSmall,
  }[size];

  return (
    <button
      onClick={onClick}
      className={`${styles.btn} ${btnVariant} ${btnSize}`}
    >
      <span>{children}</span>
      {Icon && <Icon className={`${styles.btnIcon}`} />}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.element,
  icon: PropTypes.element,
  size: PropTypes.string,
  variant: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
