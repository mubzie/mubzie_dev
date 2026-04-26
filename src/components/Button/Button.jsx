import PropTypes from "prop-types";
import styles from "./Button.module.css";

function Button({
  children,
  icon,
  iconLeft,
  size = "big",
  variant = "primary",
  onClick,
  type = "button",
  ariaLabel,
}) {
  const Icon = icon;
  const IconLeft = iconLeft;

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
      type={type}
      onClick={onClick}
      aria-label={ariaLabel}
      className={`${styles.btn} ${btnVariant} ${btnSize}`}
    >
      {IconLeft && <IconLeft size={iconSize[size]} />}
      <span>{children}</span>
      {Icon && <Icon size={iconSize[size]} />}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node,
  icon: PropTypes.elementType,
  iconLeft: PropTypes.elementType,
  size: PropTypes.string,
  variant: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(["button", "submit", "reset"]),
  ariaLabel: PropTypes.string,
};

export default Button;
