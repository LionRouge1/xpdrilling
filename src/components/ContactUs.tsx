import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const ContactPage = () => {
  const handleSubmit = (e:any) => {
    e.preventDefault();
    alert("Your message has been sent!");
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif", background: "#f7f7f7", padding: "40px 20px" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", gap: "40px" }}>
        {/* Contact Info Section */}
        <div style={{ flex: "1", background: "#fff", padding: "20px", borderRadius: "8px", boxShadow: "0 4px 10px rgba(0,0,0,0.1)" }}>
          <h2 style={{ fontSize: "24px", fontWeight: "bold", color: "#333", marginBottom: "20px" }}>Get in touch</h2>
          <div style={{ marginBottom: "20px", display: "flex", alignItems: "center", gap: "10px" }}>
            <FaMapMarkerAlt style={{ color: "#dd042b", fontSize: "20px" }} />
            <div>
              <h4 style={{ margin: "0", fontSize: "16px", color: "#333" }}>Our Location</h4>
              <p style={{ margin: "0", fontSize: "14px", color: "#777" }}>456, Lorem Street, New York, 33454</p>
            </div>
          </div>
          <div style={{ marginBottom: "20px", display: "flex", alignItems: "center", gap: "10px" }}>
            <FaPhoneAlt style={{ color: "#dd042b", fontSize: "20px" }} />
            <div>
              <h4 style={{ margin: "0", fontSize: "16px", color: "#333" }}>Phone Number</h4>
              <p style={{ margin: "0", fontSize: "14px", color: "#777" }}>+1 (800) 123 456 789</p>
            </div>
          </div>
          <div style={{ marginBottom: "20px", display: "flex", alignItems: "center", gap: "10px" }}>
            <FaEnvelope style={{ color: "#dd042b", fontSize: "20px" }} />
            <div>
              <h4 style={{ margin: "0", fontSize: "16px", color: "#333" }}>Email Address</h4>
              <p style={{ margin: "0", fontSize: "14px", color: "#777" }}>info@newwebmail.com</p>
            </div>
          </div>
          <div style={{ display: "flex", gap: "10px", marginTop: "20px" }}>
            <div style={{ width: "30px", height: "30px", background: "#333", color: "#fff", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <FaFacebookF />
            </div>
            <div style={{ width: "30px", height: "30px", background: "#333", color: "#fff", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <FaTwitter />
            </div>
            <div style={{ width: "30px", height: "30px", background: "#333", color: "#fff", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <FaInstagram />
            </div>
            <div style={{ width: "30px", height: "30px", background: "#333", color: "#fff", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <FaLinkedinIn />
            </div>
          </div>
        </div>

        {/* Form Section */}
        <div style={{ flex: "2", background: "#fff", padding: "20px", borderRadius: "8px", boxShadow: "0 4px 10px rgba(0,0,0,0.1)" }}>
          <h2 style={{ fontSize: "24px", fontWeight: "bold", color: "#333", marginBottom: "20px" }}>Make Your Request</h2>
          <form onSubmit={handleSubmit}>
            <div style={{ display: "flex", gap: "20px", marginBottom: "15px" }}>
              <input
                type="text"
                placeholder="Your name"
                required
                style={{
                  flex: "1",
                  padding: "10px",
                  fontSize: "14px",
                  border: "1px solid #ddd",
                  borderRadius: "4px",
                  background: "#f7f7f7",
                }}
              />
              <input
                type="email"
                placeholder="Email address"
                required
                style={{
                  flex: "1",
                  padding: "10px",
                  fontSize: "14px",
                  border: "1px solid #ddd",
                  borderRadius: "4px",
                  background: "#f7f7f7",
                }}
              />
            </div>
            <div style={{ display: "flex", gap: "20px", marginBottom: "15px" }}>
              <input
                type="text"
                placeholder="Your Number"
                required
                style={{
                  flex: "1",
                  padding: "10px",
                  fontSize: "14px",
                  border: "1px solid #ddd",
                  borderRadius: "4px",
                  background: "#f7f7f7",
                }}
              />
              <select
                required
                style={{
                  flex: "1",
                  padding: "10px",
                  fontSize: "14px",
                  border: "1px solid #ddd",
                  borderRadius: "4px",
                  background: "#f7f7f7",
                }}
              >
                <option value="">Service 01</option>
                <option value="Service 02">Service 02</option>
                <option value="Service 03">Service 03</option>
              </select>
            </div>
            <textarea
              placeholder="Message"
              rows={4}
              required
              style={{
                width: "100%",
                padding: "10px",
                fontSize: "14px",
                border: "1px solid #ddd",
                borderRadius: "4px",
                background: "#f7f7f7",
                marginBottom: "15px",
              }}
            ></textarea>
            <button
              type="submit"
              style={{
                background: "#dd042b",
                color: "#fff",
                padding: "10px 20px",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
                fontSize: "14px",
                fontWeight: "bold",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              Send a Message →
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
