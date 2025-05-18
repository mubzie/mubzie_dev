import styles from "./Contact.module.css";
import ContactLink from "../ContactLink/ContactLink";
import MessageForm from "../MessageForm/MessageForm";

function Contact() {
  return (
    <div className={styles.contactContainer}>
      <div className={styles.textContainer}>
        <h3>Ready to team up? Send me a message.</h3>
      </div>
      <MessageForm />

      <div className={styles.contactLinkContainer}>
        <ContactLink />
      </div>

      <div className={styles.footerText}>
        <p>
          Designed and developed with sweat by: <span>Mubarak Rabiu</span>
        </p>
      </div>
    </div>
  );
}

export default Contact;
