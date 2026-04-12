import styles from "./ExperienceSection.module.css";
import ExperienceCard from "../../components/ExperienceCard/ExperienceCard";
import { usePortfolioData } from "../../hooks/usePortfolioData";

function ExperienceSection() {
  const { getWorkExperience } = usePortfolioData();
  const experiences = getWorkExperience();

  return (
    <div>
      <h4 className={styles.experienceTitle}>Work Experience</h4>
      <p className={styles.experienceDescription}>
        A timeline of the teams he&apos;s worked with and the problems he&apos;s
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
