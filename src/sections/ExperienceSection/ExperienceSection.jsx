import styles from "./ExperienceSection.module.css";
import ExperienceCard from "../../components/ExperienceCard/ExperienceCard";
import img from "../../../public/Images/img1.png";

function ExperienceSection() {
  return (
    <div>
      <h4 className={styles.experienceTitle}>Work Experience</h4>
      <p className={styles.experienceDescription}>
        A timeline of the teams I&apos;ve worked with and the problems I&apos;ve
        helped solve.
      </p>
      <div className={styles.experienceCardWrapper}>
        <ExperienceCard
          src={img}
          alt="alt"
          company="Cloudify"
          designation="product designer"
          duration="Mar '25 - Present"
          description="Tasked with designing intuitive user and admin dashboards focused on clarity and brand consistency."
        />
        <ExperienceCard
          src={img}
          alt="alt"
          company="Plently"
          designation="product designer"
          duration="Mar '25 - Present"
          description="Tasked with designing intuitive user and admin dashboards focused on clarity and brand consistency."
        />
        <ExperienceCard
          src={img}
          alt="alt"
          company="WishPo"
          designation="product designer"
          duration="Mar '23 - Dec '24"
          description="Tasked with designing intuitive user and admin dashboards focused on clarity and brand consistency."
        />
      </div>
    </div>
  );
}

export default ExperienceSection;
