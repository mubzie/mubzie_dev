import styles from "./ExperienceSection.module.css";
import ExperienceCard from "../../components/ExperienceCard/ExperienceCard";
import img from "../../assets/Images/img1.png";

function ExperienceSection() {
  return (
    <div>
      <h4 className={styles.experienceTitle}>Featured work</h4>
      <p className={styles.experienceDescription}>
        I am a product designer with a multidisciplinary background in graphic
        design, brand identity, and digital experiences.
      </p>
      <div className={styles.experienceCardWrapper}>
        <ExperienceCard
          src={img}
          alt="alt"
          company="Acme"
          designation="product designer"
          duration="Mar 2025 - Present"
          description="Tasked with designing intuitive user and admin dashboards focused on clarity and brand consistency."
        />
        <ExperienceCard
          src={img}
          alt="alt"
          company="Acme"
          designation="product designer"
          duration="Mar 2025 - Present"
          description="Tasked with designing intuitive user and admin dashboards focused on clarity and brand consistency."
        />
        <ExperienceCard
          src={img}
          alt="alt"
          company="Acme"
          designation="product designer"
          duration="Mar 2025 - Present"
          description="Tasked with designing intuitive user and admin dashboards focused on clarity and brand consistency."
        />
      </div>
    </div>
  );
}

export default ExperienceSection;
