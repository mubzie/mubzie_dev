import ExperienceCard from "../Card/Experience/ExperienceCard";
import cardImage from "../../assets/work-card1.png";
import styles from "./Experience.module.css";

const experienceData = [
  {
    organizationName: "Curaboard (Formerly Wishpo) - Product design (Contract)",
    date: "Nov 2023 - May 2024",
    description:
      "I am a product designer with a multidisciplinary background in graphic design, brand identity, and digital experiences.",
  },
  {
    organizationName: "Curaboard (Formerly Wishpo)",
    date: "Nov 2023 - May 2024",
    description:
      "I am a product designer with a multidisciplinary background in graphic design, brand identity, and digital experiences.",
  },
];

function Experience() {
  return (
    <div className={styles.experienceContainer}>
      <div className={styles.textContainer}>
        <h3>Experience</h3>
        <p>
          I am a product designer with a multidisciplinary background in graphic
          design, brand identity, and digital experiences.
        </p>
      </div>

      <div className={styles.experienceCards}>
        {experienceData.map((experience) => (
          <ExperienceCard
            key={experience.organizationName}
            src={cardImage}
            altText="Company Logo"
            organizationName={experience.organizationName}
            date={experience.date}
            description={experience.description}
          />
        ))}
      </div>
    </div>
  );
}

export default Experience;
