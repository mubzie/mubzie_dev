import styles from "./ContactForm.module.css";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

function ContantForm() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_qq8xmzm", "template_z0rjz8h", form.current, {
        publicKey: "ZkhEvabllPsAmXHK_",
      })
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );

    setUsername("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className={styles.formWrapper}>
      <h3 className={styles.headerContainer}>
        Ready to team up? Send me a message.
      </h3>
      <form
        ref={form}
        onSubmit={handleSubmit}
        className={styles.formContainter}
      >
        <input
          type="text"
          name="name"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="enter your name"
        />
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="enter your email"
        />
        <textarea
          name="message"
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type your message here"
        ></textarea>
        <button className={styles.formBtn}>Send message</button>
      </form>
    </div>
  );
}

export default ContantForm;
