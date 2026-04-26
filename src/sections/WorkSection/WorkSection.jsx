import styles from "./WorkSection.module.css";
import WorkCard from "../../components/WorkCard/WorkCard";
import homeData from "../../data/homeData.json";

function WorkSection() {
  const categories = [...homeData.categories].sort(
    (a, b) => a.displayOrder - b.displayOrder,
  );

  return (
    <div className={styles.section}>
      <div>
        <h4 className={styles.title}>Featured work</h4>
        <p className={styles.description}>
          Selected work across UI, Web3 UI exploration, illustration, and design
          implementation. Different mediums, one consistent approach.
        </p>
        <div className={styles.cardWrapper}>
          {categories.map((category) => (
            <WorkCard
              key={category.id}
              cardTitle={category.name}
              img={category.image}
              alt={category.name}
              icon={category.icon}
              slug={category.slug}
              isFeatured={category.isFeatured}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default WorkSection;
