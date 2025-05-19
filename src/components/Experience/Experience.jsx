import ExperienceCard from "../Card/Experience/ExperienceCard";
import cardImage from "../../assets/curaboard.png";
import cardImage2 from "../../assets/microsoft-adc.png";
import styles from "./Experience.module.css";

const experienceData = [
  {
    organizationName: "Curaboard (Formerly Wishpo) - Product design (Contract)",
    date: "Oct 2023 - Mar 2024",
    src: cardImage,
    altText: "Company Logo",
    description:
      "Tasked with designing an intuitive user and admin dashboards that is focused on clarity and brand consistency.",
    link: "https://www.curaboard.com/",
  },
  {
    organizationName:
      "Microsoft ADC Student League - Design engineer (Volunteer)",
    date: "May 2023 - Feb 2024",
    src: cardImage2,
    altText: "Company Logo",
    description:
      "I helped bridged UX and engineering to create functional, user-centric tools for an edtech solution for student developers.",
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
            link={experience.link}
            key={experience.organizationName}
            src={experience.src}
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
