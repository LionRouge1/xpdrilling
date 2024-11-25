import { MdOutlineWifiCalling } from "react-icons/md";
import { FaFacebookSquare, FaTwitter, FaInstagram, FaYoutube, FaEnvelope } from 'react-icons/fa';
import Logo from '../assets/xp-logo2.png';
import '../styles/footer.scss'

const Footer = () => {
  return (
    <footer>
      <section className="footer-container">
        <article>
          <img src={Logo} alt="Logo" />
          {/* <p>
          We bring together innovation, expertise, and state-of-the-art technology to provide top-notch drilling solutions for your projects.
          </p> */}
          <ul>
            <li className="contact-us">
              <MdOutlineWifiCalling />
              <div>
                <p>Contact Us</p>
                <a href="tel:+233241214994" className="our-number">+233-241-214994</a>
              </div>
            </li>
            <li className="contact-us">
              <FaEnvelope />
              <div>
                <p>Email</p>
                <a href="mailto:info@xpdrilling.com" className="our-number">info@xpdrilling.com</a>
              </div>
            </li>
          </ul>
        </article>
        <article>
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about-us">About Us</a></li>
            <li><a href="/hseq">HSEQ</a></li>
          </ul>
        </article>
        <article>
          <h3>Solution & Services</h3>
          <ul>
            <li><a href="/services">Diamond Drilling Services</a></li>
            <li><a href="/services">Reverse Circulation Techniques</a></li>
            <li><a href="/fleet">Fleet</a></li>
          </ul>
        </article>
      </section>
      <section className="footer-bottom">
        <p>&copy; 2024 Xp Drilling. All Rights Reserved.</p>
        <ul className="social-media">
          <li><a href="#" target="_black"><FaFacebookSquare /></a></li>
          <li><a href="#" target="_black"><FaTwitter /></a></li>
          <li><a href="#" target="_black"><FaInstagram /></a></li>
          <li><a href="#" target="_black"><FaYoutube /></a></li>
        </ul>
      </section>
    </footer>
  );
};

export default Footer;