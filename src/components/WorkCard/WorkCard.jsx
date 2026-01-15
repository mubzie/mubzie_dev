import PropTypes from "prop-types";
import styles from "./WorkCard.module.css";
import { Link } from "react-router-dom";
import { usePortfolioData } from "../../hooks/usePortfolioData";

function WorkCard({ icon, cardTitle, onClick, img, alt, slug }) {
  const { getAllCategories } = usePortfolioData();

  // const category = getAllCategories();

  return (
    <Link to={`work/${slug}`}>
      <div onClick={onClick} className={styles.WorkCardWrapper}>
        <img src={img} alt={alt} className={styles.cardBg} />
        <div className={styles.textWrapper}>
          <img src={icon} alt={alt} className={styles.icon} />
          <p>{cardTitle}</p>
        </div>
      </div>
    </Link>
  );
}

WorkCard.propTypes = {
  icon: PropTypes.string,
  cardTitle: PropTypes.string,
  onClick: PropTypes.func,
  img: PropTypes.string,
  alt: PropTypes.string,
  slug: PropTypes.string,
};

export default WorkCard;
