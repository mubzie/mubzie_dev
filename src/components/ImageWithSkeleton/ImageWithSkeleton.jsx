import { useState } from "react";
import PropTypes from "prop-types";
import styles from "./ImageWithSkeleton.module.css";

function ImageWithSkeleton({ src, alt, className }) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={styles.container}>
      {!isLoaded && <div className={styles.skeleton}></div>}
      <img
        src={src}
        alt={alt}
        className={`${className} ${isLoaded ? styles.loaded : styles.loading}`}
        onLoad={() => setIsLoaded(true)}
      />
    </div>
  );
}

ImageWithSkeleton.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  className: PropTypes.string,
};

export default ImageWithSkeleton;
