import styles from "./ExperienceSection.module.css";
import ExperienceCard from "../../components/ExperienceCard/ExperienceCard";
import img from "../../../public/Images/img1.png";
import { usePortfolioData } from "../../hooks/usePortfolioData";

function ExperienceSection() {
  const { getWorkExperience } = usePortfolioData();
  const experiences = getWorkExperience();

  return (
    <div>
      <h4 className={styles.experienceTitle}>Work Experience</h4>
      <p className={styles.experienceDescription}>
        A timeline of the teams I&apos;ve worked with and the problems I&apos;ve
        helped solve.
      </p>
      <div className={styles.experienceCardWrapper}>
        {experiences.map((experience) => (
          <ExperienceCard
            key={experience.id}
            src={experience.image}
            alt={experience.company}
            company={experience.company}
            designation={experience.designation}
            duration={experience.duration}
            description={experience.description}
          />
        ))}
      </div>
    </div>
  );
}

export default ExperienceSection;
