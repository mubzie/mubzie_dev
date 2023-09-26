import styles from "./About.module.css";
import html from "/src/assets/icon-html.png";
import css from "/src/assets/icon-css.png";
import javascript from "/src/assets/icon-javascript.png";
import react from "/src/assets/icon-react.png";
import git from "/src/assets/icon-git.png";

const About = () => {
  return (
    <>
      <section className={styles.about}>
        <div className={styles.title}>About Me</div>
        <div className={styles.details}>
          <p className={styles.para}>
            In my position as a frontend engineer, I like to bridge the gap
            between engineering and design by fusing my technical expertise with
            my strong sense of aesthetics to produce stunning products. My
            objective is to constantly create scalable, effective wed apps that
            offer captivating, pixel-perfect user interfaces. In my spare time,
            I mostly listen to music and watch anime.
          </p>
        </div>
      </section>

      <section className={styles.skill}>
        <div className={styles.skill}>Skill</div>
        <div className={styles.container}>
          <div className={styles.html}>
            <span>
              <img src={html}></img>
              html
            </span>
          </div>
          <div className={styles.css}>
            <span>
              <img src={css}></img>
              css
            </span>
          </div>
          <div className={styles.javascript}>
            <span>
              <img src={javascript}></img>
              javascript
            </span>
          </div>
          <div className={styles.react}>
            <span>
              <img src={react}></img>
              reatc
            </span>
          </div>
          <div className={styles.git}>
            <span>
              <img src={git}></img>
              git
            </span>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
