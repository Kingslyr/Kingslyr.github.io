import { useState } from "react";

const contactEndpoint = import.meta.env.VITE_CONTACT_ENDPOINT || "/api/contact";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("idle");
  const [feedback, setFeedback] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus("sending");
    setFeedback("");

    try {
      const response = await fetch(contactEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Request failed");
      }

      setStatus("success");
      setFeedback("Thanks. Your inquiry was sent successfully.");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      setStatus("error");
      setFeedback("Unable to send right now. Please use WhatsApp or try again later.");
    }
  };

  return (
    <form className="glass-form" onSubmit={handleSubmit}>
      <div className="input-group">
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Corporate Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>

      <input
        type="text"
        name="subject"
        placeholder="Inquiry Subject (e.g., EIA Consultation)"
        value={formData.subject}
        onChange={handleChange}
      />

      <textarea
        name="message"
        rows="5"
        placeholder="Project details and requirements..."
        value={formData.message}
        onChange={handleChange}
        required
      />

      <button type="submit" className="btn-primary submit-btn" disabled={status === "sending"}>
        {status === "sending" ? "Sending..." : "Submit Request"}
      </button>

      {feedback ? (
        <p className={`form-feedback form-feedback--${status === "success" ? "success" : "error"}`}>
          {feedback}
        </p>
      ) : null}
    </form>
  );
}
