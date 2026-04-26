import { useEffect } from "react";
import { ChevronLeft } from "lucide-react";
import { useParams, useNavigate } from "react-router-dom";
import { usePortfolioData } from "../../hooks/usePortfolioData";
import styles from "./DetailsPage.module.css";
import Button from "../../components/Button/Button";
import { usePageTransition } from "../../hooks/usePageTransition";
import ImageWithSkeleton from "../../components/ImageWithSkeleton/ImageWithSkeleton";

function DetailsPage() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const { getCategoryBySlug, getProjectByCategory } = usePortfolioData();
  const { isExiting, startTransition } = usePageTransition(140);

  const category = getCategoryBySlug(slug);
  const projects = getProjectByCategory(slug);

  const categoryName = category.name;
  const categoryDescription = category.description;

  const handleBackButton = () => {
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
  }, []);

  return (
    <div className={styles.wrapperContainer}>
      <div className={styles.btnContainer}>
        <Button
          variant="secondary"
          iconLeft={ChevronLeft}
          onClick={handleBackButton}
        >
          Back
        </Button>
      </div>

      <div
        className={`${styles.detailsPage} ${isExiting ? styles.pageExit : styles.pageEnter}`}
      >
        <div className={styles.wrapper}>
          <h3 className={styles.header}>{categoryName}</h3>
          <p className={styles.description}>{categoryDescription}</p>

          {projects.map((project) => (
            <div key={project.id} className={styles.imageContainer}>
              {project.images.map((image) => (
                <>
                  {/* <img key={image.id} src={image.imagePath} /> */}
                  <ImageWithSkeleton key={image.id} src={image.imagePath} />
                  {image.imageDescription && (
                    <p className={styles.imageDescription}>
                      {image.imageDescription}
                    </p>
                  )}
                </>
              ))}
              <span className={styles.decorator}>* * *</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default DetailsPage;
