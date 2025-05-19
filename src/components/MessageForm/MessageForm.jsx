import { useState } from "react";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import styles from "./MessageForm.module.css";
import Button from "../Button/Button";

const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

function MessageForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const form = useRef();

  const isInputValid =
    formData.name.trim() !== "" &&
    formData.email.trim() !== "" &&
    formData.message.trim() !== "";

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(serviceId, templateId, form.current, { publicKey: publicKey })
      .then(
        () => {
          console.log("Email sent successfully");
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          console.error("Error sending email:", error);
          setFormData({ name: "", email: "", message: "" });

          alert("Failed to send message. Please try again later.");
        }
      );

    console.log("Message sent:", formData.message);
  };

  return (
    <form ref={form} onSubmit={handleSubmit} className={styles.form}>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        id="name"
        placeholder="Name*"
        required
      />

      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        id="email"
        placeholder="Email*"
        required
      />

      <textarea
        name="message"
        id="message"
        placeholder="Type your message here..."
        value={formData.message}
        onChange={handleChange}
        rows={4}
        cols={40}
        required
      ></textarea>

      <Button
        disabled={!isInputValid}
        text="Send message"
        value="send"
        className={`${styles.buttonContainer} ${
          !isInputValid ? styles.disabled : styles.active
        }`}
      />
    </form>
  );
}

export default MessageForm;
