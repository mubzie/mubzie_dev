import styles from "./header.module.css";
import icon from "/src/assets/icon-mode.png";
import twitter from "/src/assets/icon-twitter.png";
import github from "/src/assets/icon-github.png";
import fire from "/src/assets/icon-fire.png";

const Header = () => {
  return (
    <>
      <nav className={styles.header}>
        <div className={styles.headerTag}>
          <span className="icon">
            <img src={fire} className={styles.fireIcon}></img>
          </span>
          <div className={styles.headerName}> mubzie_dev</div>
        </div>

        <div>
          <span className="icon">
            {" "}
            <img src={icon}></img>
          </span>
        </div>
      </nav>

      <div className={styles.landingPage}>
        <div className={styles.name}>Mubarak Rabiu</div>
        <div className={styles.title}>Frontend Developer</div>
        <div className={styles.iconContainer}>
          <div className="twitter">
            <span className="icon">
              <img src={twitter} className={styles.twiiterIcon}></img>
            </span>
          </div>
          <div className="linkedIn">
            <span className="icon">
              <img src={github} className={styles.githubIcon}></img>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
