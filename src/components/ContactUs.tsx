import { useState } from "react";
import { GrMapLocation } from "react-icons/gr";
import { LuPhoneCall } from "react-icons/lu";
import { LiaEnvelopeOpenTextSolid } from "react-icons/lia";
import { CgUser } from "react-icons/cg";
import { FaMapMarkerAlt, FaPhoneAlt, FaRegEnvelope, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaFacebookSquare, FaYoutube } from "react-icons/fa";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    service: "",
    message: "",
  });

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setFormData({
      name: "",
      email: "",
      number: "",
      service: "",
      message: "",
    });
  };

  return (
    <section className="contact-us">
      <div className="contact-info">
        <div className="contact-title">
          <h4>Contact Us</h4>
          <h2>Get in touch</h2>
        </div>
        <ul className="contacts">
          <li>
            <GrMapLocation />
            <div>
              <h3>Our Location</h3>
              <p>456, Lorem Street, New York, 33454</p>
            </div>
          </li>
          <li>
            <LuPhoneCall />
            <div>
              <h3>Phone Number</h3>
              <p>+1 (800) 123 456 789</p>
            </div>
          </li>
          <li>
            <LiaEnvelopeOpenTextSolid />
            <div>
              <h3>Email Address</h3>
              <p>info@xpdrilling.com</p>
            </div>
          </li>
        </ul>
        <ul className="social-media">
          <li><a href="#" target="_black"><FaFacebookSquare /></a></li>
          <li><a href="#" target="_black"><FaTwitter /></a></li>
          <li><a href="#" target="_black"><FaInstagram /></a></li>
          <li><a href="#" target="_black"><FaYoutube /></a></li>
        </ul>
      </div>

      {/* Form Section */}
      <div className="contact-form">
        <h2>Make Your Request</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label className="contact-input">
            <input
              type="text"
              placeholder="Your name"
              required
              name="name"
              onChange={handleChange}
              value={formData.name}
            />
            <CgUser />
            </label>
            <label className="contact-input">
            <input
              type="email"
              placeholder="Email address"
              required
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            <FaRegEnvelope />
            </label>
          </div>
          <div>
            <label className="contact-input">
            <input
              type="text"
              placeholder="Your Number"
              required
              name="number"
              onChange={handleChange}
              value={formData.number}
            />
            <FaPhoneAlt />
            </label>
            <label className="contact-input">
            <select
              required
              name="service"
              onChange={handleChange}
              value={formData.service}
            >
              <option value="">Service 01</option>
              <option value="Service 02">Service 02</option>
              <option value="Service 03">Service 03</option>
            </select>
            </label>
          </div>
          <textarea
            placeholder="Message"
            rows={4}
            required
            name="message"
            onChange={handleChange}
            value={formData.message}
          ></textarea>
          <button type="submit" className="btn">
            Send a Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactPage;
