import styles from "./Project.module.css";

const Project = () => {
  return (
    <>
      <section className={styles.project}>
        <div className={styles.title}>Projects </div>
        <div className={styles.details}>
          <div className={styles.head}>
            <div>MovieBox</div>
            <div> livelink</div>
          </div>
          <p className={styles.para}>
            Spearheaded the building of the frontend of the website, integrating
            the backend API endpoints with the frontend and implementing the UI
            design for the landing pages, login pages. Nextjs ChakraUI React
            Query Collate Africa Live Collate.Africa was a groundbreaking
            project aimed at empowering Nigerian citizens to actively
            participate in the electoral process by providing a seamless
            platform for submitting and accessing election results during the
            last conducted elections
          </p>
          <div className={styles.stackContainer}>
            <span className={styles.stack}>javascript</span>
            <span className={styles.stack}>html</span>
            <span className={styles.stack}>css</span>
          </div>
        </div>
      </section>
    </>
  );
};

export default Project;
