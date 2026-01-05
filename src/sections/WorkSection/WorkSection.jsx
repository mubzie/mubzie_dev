import styles from "./WorkSection.module.css";
import WorkCard from "../../components/WorkCard/WorkCard";
import { SplinePointer } from "lucide-react";

function WorkSection() {
  return (
    <>
      <div>
        <h4 className={styles.title}>Featured work</h4>
        <p className={styles.description}>
          I am a product designer with a multidisciplinary background in graphic
          design, brand identity, and digital experiences.
        </p>
        <div className={styles.cardWrapper}>
          <WorkCard cardTitle="UI exploration" icon={SplinePointer} />
          <WorkCard cardTitle="UI exploration" icon={SplinePointer} />
          <WorkCard cardTitle="UI exploration" icon={SplinePointer} />
          <WorkCard cardTitle="UI exploration" icon={SplinePointer} />
        </div>
      </div>
    </>
  );
}

export default WorkSection;
