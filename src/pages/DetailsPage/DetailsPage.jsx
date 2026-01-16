import { useParams } from "react-router-dom";
import { usePortfolioData } from "../../hooks/usePortfolioData";
import styles from "./DetailsPage.module.css";

function DetailsPage() {
  const { slug } = useParams();
  const { getCategoryBySlug, getProjectByCategory } = usePortfolioData();

  const category = getCategoryBySlug(slug);
  const projects = getProjectByCategory(slug);

  console.log(category);
  console.log(projects);

  const categoryName = category.name;
  // const categoryDescription = category
  return (
    <>
      <div className={styles.wrapper}>
        <h3 className={styles.header}>{categoryName}</h3>
        <p className={styles.description}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat,
          aperiam adipisci? Quo voluptatibus magnam nobis, quae doloremque saepe
          vero maxime.
        </p>

        {projects.map((project) => (
          <div key={project.id} className={styles.imageContainer}>
            <img src={project.images[0].imagePath} />
            <img src={project.images[1].imagePath} />
          </div>
        ))}
      </div>
    </>
  );
}

export default DetailsPage;
