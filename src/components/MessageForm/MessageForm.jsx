import { useState } from "react";
import styles from "./MessageForm.module.css";
import Button from "../Button/Button";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

function MessageForm() {
  const [message, setMessage] = useState("");
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(serviceId, templateId, form.current, { publicKey: publicKey })
      .then(
        () => {
          console.log("Email sent successfully");
        },
        (error) => {
          console.error("Error sending email:", error);
        }
      );

    console.log("Message sent:", message);
  };

  return (
    <form ref={form} onSubmit={handleSubmit} className={styles.form}>
      <input type="text" name="name" id="name" placeholder="Name*" required />

      <input
        type="email"
        name="email"
        id="email"
        placeholder="Email*"
        required
      />

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

      <Button
        text="Send message"
        value="send"
        className={styles.buttonContainer}
      />
    </form>
  );
}

export default MessageForm;
