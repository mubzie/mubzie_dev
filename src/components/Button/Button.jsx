import PropTypes from "prop-types";
import styles from "./Button.module.css";

function Button({
  children,
  icon,
  size = "big",
  variant = "primary",
  onClick,
}) {
  const Icon = icon;

  const btnVariant = {
    primary: styles.btnPrimary,
    secondary: styles.btnSecondary,
  }[variant];

  const btnSize = {
    big: styles.btnBig,
    small: styles.btnSmall,
  }[size];

  const iconSize = {
    default: 24,
    medium: 20,
    small: 16,
  };

  return (
    <button
      onClick={onClick}
      className={`${styles.btn} ${btnVariant} ${btnSize}`}
    >
      <span>{children}</span>
      {Icon && <Icon size={iconSize[size]} />}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.string,
  icon: PropTypes.element,
  size: PropTypes.string,
  variant: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
