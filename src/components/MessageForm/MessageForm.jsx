import { useState } from "react";
import styles from "./MessageForm.module.css";
import Button from "../Button/Button";

function MessageForm() {
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Message sent:", message);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <label htmlFor="message"></label>
      <textarea
        name="message"
        id="message"
        placeholder="Type your message here..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        rows={4}
        cols={40}
        required
      ></textarea>

      <Button text="Send message" className={styles.buttonContainer} />
    </form>
  );
}

export default MessageForm;
