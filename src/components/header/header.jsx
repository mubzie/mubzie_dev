import styles from "./Header.module.css";
import Background from "../Background/Background";

const Header = () => {
  return (
    <div className={styles.header}>
      <h3 className={styles.name}>
        Mubarak Rabiu - A multidisciplinary product designer.
      </h3>
      <Background />
    </div>
  );
};

export default Header;
