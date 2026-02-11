import { useParams, useNavigate } from "react-router-dom";
import { usePortfolioData } from "../../hooks/usePortfolioData";
import styles from "./DetailsPage.module.css";
import Button from "../../components/Button/Button";
import { usePageTransition } from "../../hooks/usePageTransition";
import { useEffect } from "react";

function DetailsPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  // const location = useLocation();
  const { getCategoryBySlug, getProjectByCategory } = usePortfolioData();
  const { isExiting, startTransition } = usePageTransition(300);

  const category = getCategoryBySlug(slug);
  const projects = getProjectByCategory(slug);

  const categoryName = category.name;
  const categoryDescription = category.description;

  const handleBack = () => {
    startTransition(() => {
      if (window.history.state && window.history.state.idx > 0) {
        navigate(-1);
      } else {
        navigate("/");
      }
    });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <div
      className={`${styles.page} ${isExiting ? styles.pageExit : styles.pageEnter}`}
    >
      <div className={styles.btnContainer}>
        <Button variant="secondary" onClick={handleBack}>
          Back
        </Button>
      </div>
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
    </div>
  );
}

export default DetailsPage;
