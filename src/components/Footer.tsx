import { MdOutlineWifiCalling } from "react-icons/md";
import { FaFacebookSquare, FaTwitter, FaInstagram, FaYoutube, FaPhoneVolume } from 'react-icons/fa';
import { FaLocationDot, FaEnvelope } from 'react-icons/fa6';
import '../styles/footer.scss'

const Footer = () => {
  return (
    <footer>
      <section className="footer-container">
        <article>
          <img src="https://colza-demo.pbminfotech.com/demo3/wp-content/uploads/sites/9/2021/10/colza-logo-white.svg" alt="Logo" />
          <p>
            We are a team of designers and developers that create high quality HTML Template & WordPress Themes.
          </p>
          <div className="contact-us">
            <MdOutlineWifiCalling />
            <div>
              <p>TALK TO OUR SUPPORT</p>
              <p className="our-number">+(123) 456 7890</p>
            </div>
          </div>
        </article>
        <article>
          <h3>Industry Company</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/">About Us</a></li>
            <li><a href="/">Services</a></li>
            <li><a href="/">Contact Us</a></li>
          </ul>
        </article>
        <article>
          <h3>Solution & Services</h3>
          <ul>
            <li><a href="/">Web Development</a></li>
            <li><a href="/">App Development</a></li>
            <li><a href="/">UI/UX Design</a></li>
            <li><a href="/">Digital Marketing</a></li>
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
        <p>&copy; 2021 Colza. All Rights Reserved.</p>
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