import styles from "./Project.module.css";

const Project = () => {
  return (
    <>
      <section className={styles.project}>
        <div className={styles.title}>Projects </div>
        <div className={styles.projectContainer}>
          {/* <div className={styles.details}>
            <div className={styles.head}>
              <div>Profile page</div>
              <div>
                {" "}
                <a href=""></a>livelink
              </div>
            </div>
            <p className={styles.para}>
              Spearheaded the building of the frontend of the website,
              integrating the backend API endpoints with the frontend and
              implementing the UI design for the landing pages, login pages.
              Nextjs ChakraUI React Query Collate Africa Live Collate.Africa was
              a groundbreaking project aimed at empowering Nigerian citizens to
              actively participate in the electoral process by providing a
              seamless platform for submitting and accessing election results
              during the last conducted elections
            </p>
            <div className={styles.stackContainer}>
              <span className={styles.stack}> javaScript</span>
              <span className={styles.stack}>HTML</span>
              <span className={styles.stack}>CSS</span>
            </div>
          </div> */}
          <div className={styles.details}>
            <div className={styles.head}>
              <div>MovieBox</div>
              <div>
                <a href="https://moviebox-ten-amber.vercel.app/">live link</a>{" "}
              </div>
            </div>
            <p className={styles.para}>
              This is the second task that was given to the frontend Intern. The
              purpose of this task is to test the ability of frontend intern on
              how to consume API.
            </p>
            <div className={styles.stackContainer}>
              <span className={styles.stack}>React</span>
              <span className={styles.stack}>Context API</span>
              <span className={styles.stack}>CSS</span>
            </div>
          </div>
          <div className={styles.details}>
            <div className={styles.head}>
              <div>Drag&Drop</div>
              <div>
                {" "}
                <a href="https://hng-stage3-task-iota.vercel.app/login">
                  live link
                </a>{" "}
              </div>
            </div>
            <p className={styles.para}>
              This is the third task that was given to the frontend Intern. The
              aim of this task is to text intern knowledge on how to implement
              authentication in a react application.
            </p>
            <div className={styles.stackContainer}>
              <span className={styles.stack}>React</span>
              <span className={styles.stack}>Firebase</span>
              <span className={styles.stack}>Context API</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Project;
