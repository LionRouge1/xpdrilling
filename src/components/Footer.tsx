import { MdOutlineWifiCalling } from "react-icons/md";
import { FaFacebookSquare, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';
import Logo from '../assets/xp-logo2.png';
import '../styles/footer.scss'

const Footer = () => {
  return (
    <footer>
      <section className="footer-container">
        <article>
          <img src={Logo} alt="Logo" />
          <p>
          We bring together innovation, expertise, and state-of-the-art technology to provide top-notch drilling solutions for your projects.
          </p>
          <div className="contact-us">
            <MdOutlineWifiCalling />
            <div>
              <p>TALK TO OUR SUPPORT</p>
              <a className="our-number">+233 (0) 26 311 9815</a>
            </div>
          </div>
        </article>
        <article>
          <h3>Industry Company</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/">About Us</a></li>
            <li><a href="/">Services</a></li>
            <li><a href="/">Fleet</a></li>
            <li><a href="/">HSEQ</a></li>
            <li><a href="/">Sustainability</a></li>
            <li><a href="/">Contact Us</a></li>
          </ul>
        </article>
        <article>
          <h3>Solution & Services</h3>
          <ul>
            <li><a href="/">Diamond drilling</a></li>
            <li><a href="/">Reverse Circulation Techniques</a></li>
            <li><a href="/">Client Testimonials</a></li>
            <li><a href="/">Our Philosophy</a></li>
            <li><a href="/">Cost Calculator</a></li>
          </ul>
        </article>
        <article>
          <h3>Newsletter</h3>
          <p>Subscribe to our newsletter to get the latest news, updates and amazing offers delivered directly in your inbox.</p>
          <input type="email" placeholder="Enter your email" />
          <button>Subscribe</button>
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