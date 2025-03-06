import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        setStatus("Email sent successfully!");
        setFormData({ name: "", email: "", service: "", message: "" }); 
      } else {
        setStatus("Failed to send email. Try again.");
      }
    } catch (error) {
      setStatus("Error sending email. Please try again.");
    }
  };

  return (
    <section id="contact" className="contact-container">
      <div className="contact-left">
        <h5>CONTACT NOW</h5>
        <h2>Do You Have A Project <br /> And Want To Discuss?</h2>
        <p>
          Whether you have a project in mind, questions, or simply want to
          connect, I’m here to help. Feel free to reach out, and let’s start
          the conversation.
        </p>
        <h4>LET'S WORK TOGETHER</h4>
        <p className="email">hasnatnaveed00@gmail.com</p>
      </div>

      <div className="contact-right">
        <form onSubmit={handleSubmit}>
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
            required
          />

          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            required
          />

          <label>Service</label>
          <input
            type="text"
            name="service"
            value={formData.service}
            onChange={handleChange}
            placeholder="Service"
            required
          />

          <label>Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Message"
            rows="4"
            required
          ></textarea>

          <button type="submit" className="send-button">SEND</button>
        </form>
        {status && <p className="status-message">{status}</p>}
      </div>
    </section>
  );
};

export default Contact;
