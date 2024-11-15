import { MdOutlineWifiCalling } from "react-icons/md";
import { FaFacebookSquare, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';
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
            <li><a href="/">Company News</a></li>
            <li><a href="/">Projects</a></li>
            <li><a href="/">Case Study</a></li>
          </ul>
        </article>
        <article>
          <h3>Solution & Services</h3>
          <ul>
            <li><a href="/">Industrial Supplies</a></li>
            <li><a href="/">Project Pricing</a></li>
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