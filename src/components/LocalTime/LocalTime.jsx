import { useState, useEffect } from "react";
import styles from "./LocalTime.module.css";

function LocalTime() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (date) => {
    return date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
  };

  const currentYear = new Date().getFullYear();
  return (
    <div className={styles.wrapper}>
      <span className={styles.copyright}>© {currentYear}</span>
      <span className={styles.divider}></span>
      <span className={styles.time}>{formatTime(time)}</span>
    </div>
  );
}

export default LocalTime;
