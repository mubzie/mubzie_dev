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
          I am a product designer with a multidisciplinary background in graphic
          design, brand identity, and digital experiences. My work is driven by
          a passion for solving real-world problems through innovative,
          user-centered design solutions.
        </p>

        {projects.map((project) => (
          <div key={project.id} className={styles.imageContainer}>
            {project.images.map((image) => (
              <>
                <img key={image.id} src={image.imagePath} />
                <p>{image.imageDescription}</p>
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
