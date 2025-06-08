// src/pages/Contact.jsx
import { useRef, useState } from "react";
import emailjs from "emailjs-com";
import "./Contact.css";

const Contact = () => {
  const formRef = useRef(null);
  const [status, setStatus] = useState({ message: "", color: "" });
  const [lastSentTime, setLastSentTime] = useState(0);
  const [isSending, setIsSending] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    if (isSending) return;

    const now = Date.now();
    if (now - lastSentTime < 10000) {
      setStatus({ message: "Please wait at least 10 seconds before submitting again.", color: "red" });
      return;
    }

    const botField = formRef.current["bot-field"];
    if (botField?.value !== "") {
      console.warn("Spam detected.");
      return;
    }

    setIsSending(true);

    emailjs
      .sendForm("service_uedl79e", "template_qu7zerw", formRef.current, "t3lgF6u8-K6Q9DC6E")
      .then(() => {
        setStatus({ message: "Message sent successfully!", color: "var(--color-success)" });
        formRef.current.reset();
        setLastSentTime(now);
      })
      .catch((err) => {
        console.error("EmailJS error:", err);
        setStatus({ message: "Failed to send message. Please try again.", color: "var(--color-error)" });
      })
      .finally(() => {
        setIsSending(false);
      });
  };

  return (
    <>
    <title>Hon’s Contact</title>
    <main>
      <div className="main-wrapper">
        <div className="main-text-container">
          <h1>Contact</h1>
          <p>Get in touch with me via social media or send me an email.</p>

          <div className="contact-links">
            <a
              href="https://linkedin.com/in/liangkuanhon"
              target="_blank"
              rel="noopener noreferrer"
              className="link linkedin"
            >
              <span className="icon-circle">
                <i className="fab fa-linkedin"></i>
              </span>
              <span className="link-text">LinkedIn</span>
            </a>

            <a
              href="https://instagram.com/liangkuanhon"
              target="_blank"
              rel="noopener noreferrer"
              className="link instagram"
            >
              <span className="icon-circle">
                <i className="fab fa-instagram"></i>
              </span>
              <span className="link-text">Instagram</span>
            </a>
          </div>
        </div>
        
        <div className="main-image-container">
          <img
            src="/images/hon-logo.png"
            alt="Liang Kuan Hon"
            className="main-image"
          />
        </div>
      </div>
    </main>

    <div class="full-width-border"></div>

    <div className="contact-form">
      <h2>Send me an email!</h2>

      <form ref={formRef} onSubmit={sendEmail} id="contact-form">
        <input type="text" name="bot-field" style={{ display: "none" }} autoComplete="off" tabIndex="-1" />
        
        <div style={{ marginTop: "10px", fontWeight: "bold", color: status.color }}>
          {status.message}
        </div>

        <div className="form-row">
          <div className="form-left">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
              required
            />

            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />
          </div>

          <div className="form-right">
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" required></textarea>
          </div>
        </div>

        <button type="submit">Send</button>
      </form>
    </div>
    </>
  );
};

export default Contact;
