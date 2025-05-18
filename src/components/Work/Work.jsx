import WorkCard from "../Card/Work/WorkCard";
import image from "../../assets/work-card1.png";
import image2 from "../../assets/work-card2.jpg";
import image3 from "../../assets/work-card3.jpg";
import image4 from "../../assets/work-card4.png";
import Paintbrush from "../../assets/icons/paintbrush.svg?react";
import PenLine from "../../assets/icons/pen-line.svg?react";
import Skull from "../../assets/icons/skull-alt.svg?react";
import PenNib from "../../assets/icons/pen-nib.svg?react";
import styles from "./Work.module.css";

const workData = [
  {
    src: image4,
    icon: <Paintbrush />,
    title: "UI exploration",
  },
  {
    src: image3,
    icon: <Skull />,
    title: "Web3 UI exploration",
  },
  {
    src: image2,
    icon: <PenNib />,
    title: "Illustration",
  },
  {
    src: image,
    icon: <PenLine />,
    title: "Case study design",
  },
];

function Work() {
  return (
    <div className={styles.workContainer}>
      <div className={styles.textContainer}>
        <h3>Work</h3>
        <p>
          I am a product designer with a multidisciplinary background in graphic
          design, brand identity, and digital experiences.
        </p>
      </div>

      <div className={styles.workCards}>
        {workData.map((work) => (
          <WorkCard
            key={work.title}
            src={work.src}
            icon={work.icon}
            text={work.title}
          />
        ))}
      </div>
    </div>
  );
}

export default Work;
