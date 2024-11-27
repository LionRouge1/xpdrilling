import { MdOutlineWifiCalling } from "react-icons/md";
import { FaFacebookSquare, FaTwitter, FaInstagram, FaYoutube, FaEnvelope } from 'react-icons/fa';
import Logo from '../assets/xp-logo2.png';
import '../styles/footer.scss'
import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <section className="footer-container">
        <article>
          <img src={Logo} alt="Logo" />
          <p>
            Reliable. Efficient. Sustainable. XP Drilling Services is here to drive your success
          </p>

        </article>
        <article>
          <h3>Contact Us</h3>
          <ul>
            <li className="contact-us">
              <FaLocationDot />
              <Link to="/contact-us" className="our-number">P.O.Box KS 17355, Adum-Kumasi, Ghana</Link>
            </li>
            <li className="contact-us">
              <MdOutlineWifiCalling />
              <a href="tel:+233241214994" className="our-number">+233-241-214994</a>
            </li>
            <li className="contact-us">
              <FaEnvelope />
              <a href="mailto:info@xpdrilling.com" className="our-number">info@xpdrilling.com</a>
            </li>
          </ul>
        </article>
        <article>
          <h3>Industry Company</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about-us">About Us</a></li>
            <li><a href="/hseq">HSEQ</a></li>
          </ul>
        </article>
        <article>
          <h3>Solution & Services</h3>
          <ul>
            <li><a href="/services#diamond-drilling-services">Diamond Drilling Services</a></li>
            <li><a href="/services#reverse-circulation-drilling">Reverse Circulation Techniques</a></li>
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