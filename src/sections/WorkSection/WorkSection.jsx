import styles from "./WorkSection.module.css";
import WorkCard from "../../components/WorkCard/WorkCard";
import { SplinePointer } from "lucide-react";
import { usePortfolioData } from "../../hooks/usePortfolioData";

function WorkSection() {
  const { getAllCategories } = usePortfolioData();

  const categories = getAllCategories();
  console.log(categories);

  return (
    <>
      <div>
        <h4 className={styles.title}>Featured work</h4>
        <p className={styles.description}>
          I am a product designer with a multidisciplinary background in graphic
          design, brand identity, and digital experiences.
        </p>
        <div className={styles.cardWrapper}>
          {categories.map((category) => (
            <WorkCard
              key={category.id}
              cardTitle={category.name}
              img={category.image}
              icon={SplinePointer}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default WorkSection;
