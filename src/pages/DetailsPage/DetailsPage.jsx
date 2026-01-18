import { useParams } from "react-router-dom";
import { usePortfolioData } from "../../hooks/usePortfolioData";
import styles from "./DetailsPage.module.css";

function DetailsPage() {
  const { slug } = useParams();
  const { getCategoryBySlug, getProjectByCategory } = usePortfolioData();

  const category = getCategoryBySlug(slug);
  const projects = getProjectByCategory(slug);

  const categoryName = category.name;
  const categoryDescription = category.description;

  return (
    <>
      <div className={styles.wrapper}>
        <h3 className={styles.header}>{categoryName}</h3>
        <p className={styles.description}>{categoryDescription}</p>

        {projects.map((project) => (
          <div key={project.id} className={styles.imageContainer}>
            {project.images.map((image) => (
              <>
                <img key={image.id} src={image.imagePath} />
                {image.imageDescription && <p>{image.imageDescription}</p>}
              </>
            ))}
            <span className={styles.decorator}>* * *</span>
          </div>
        ))}
      </div>
    </>
  );
}

export default DetailsPage;
