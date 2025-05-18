import styles from "./Header.module.css";
import Background from "../Background/Background";

const Header = () => {
  return (
    <div>
      <div className={styles.header}>
        <h3 className={styles.name}>
          Mubarak Rabiu - A multidisciplinary designer.
        </h3>
        <Background />
      </div>
    </div>
  );
};

export default Header;
