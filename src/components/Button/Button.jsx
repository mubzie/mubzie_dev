import PropTypes from "prop-types";
import styles from "./Button.module.css";

function Button({
  text,
  className,
  leftIcon,
  rightIcon,
  variant,
  onClick,
  ...delegated
}) {
  const buttonClass = `${styles.button} ${styles[variant]} ${className}`;

  return (
    <div className={className}>
      <button className={buttonClass} onClick={onClick} {...delegated}>
        {leftIcon && <span className={styles.leftIcon}>{leftIcon}</span>}
        {text}
        {rightIcon && <span className={styles.RightIcon}>{rightIcon}</span>}
      </button>
    </div>
  );
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  variant: PropTypes.oneOf(["primary", "secondary"]),
  onClick: PropTypes.func,
};

export default Button;
