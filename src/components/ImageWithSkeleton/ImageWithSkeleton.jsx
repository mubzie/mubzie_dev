import { useState } from "react";
import PropTypes from "prop-types";
import styles from "./ImageWithSkeleton.module.css";

function ImageWithSkeleton({
  src,
  alt,
  className,
  loading = "lazy",
  decoding = "async",
}) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={styles.container}>
      {!isLoaded && <div className={styles.skeleton}></div>}
      <img
        src={src}
        alt={alt}
        className={`${className} ${isLoaded ? styles.loaded : styles.loading}`}
        loading={loading}
        decoding={decoding}
        onLoad={() => setIsLoaded(true)}
      />
    </div>
  );
}

ImageWithSkeleton.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  className: PropTypes.string,
  loading: PropTypes.oneOf(["lazy", "eager", "auto"]),
  decoding: PropTypes.oneOf(["async", "sync", "auto"]),
};

export default ImageWithSkeleton;
