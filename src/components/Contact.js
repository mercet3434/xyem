import { useState } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState(""); // "" | "sending" | "success" | "error"

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((p) => ({ ...p, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // basit kontrol
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setStatus("error");
      return;
    }

    try {
      setStatus("sending");

      await emailjs.send(
        "service_y8j4wrm",
        "template_whyn09b",
        {
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        "Si2qp5xooCCzamA73"
      );

      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      console.error("EmailJS error:", err);
      setStatus("error");
    }
  };

  return (
    <div className="container contact" id="contact">
      <h2 className="main-title text-center">İLETİŞİM</h2>

      <form onSubmit={handleSubmit}>
        <div className="col-md-12">
          <div className="row">
            <div className="col-md-4 mb-1">
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Adınız ve Soyadınız"
                className="contact-input"
              />
            </div>

            <div className="col-md-4 mb-1">
              <input
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="E-postanız"
                className="contact-input"
              />
            </div>

            <div className="col-md-4 mb-1">
              <input
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Konu"
                className="contact-input"
              />
            </div>
          </div>
        </div>

        <br />

        <div className="col-md-12">
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Mesajınızı buraya yazınız..."
            className="contact-textarea"
          />
        </div>

        <br />

        <div className="row">
          <div className="col-md-12">
            <input
              className="form-btn"
              type="submit"
              value={status === "sending" ? "Gönderiliyor..." : "Gönder"}
              disabled={status === "sending"}
            />

            {status === "success" && (
              <p style={{ marginTop: 10 }}>✅ Mesajınız gönderildi.</p>
            )}
            {status === "error" && (
              <p style={{ marginTop: 10 }}>
                ❌ Gönderilemedi. Alanları kontrol edip tekrar deneyin.
              </p>
            )}
          </div>
        </div>
      </form>
    </div>
  );
}

export default Contact;
