import { FaFacebookSquare, FaTwitter, FaInstagram, FaYoutube, FaPhoneVolume } from 'react-icons/fa';
import { FaLocationDot, FaEnvelope } from 'react-icons/fa6';
import '../styles/header.scss';

const Header = () => (
  <header>
    <ul className="social-media">
      <li><a href="#" target="_black" rel="noopener noreferrer"><FaFacebookSquare /></a></li>
      <li><a href="#" target="_black" rel="noopener noreferrer"><FaTwitter /></a></li>
      <li><a href="#" target="_black" rel="noopener noreferrer"><FaInstagram /></a></li>
      <li><a href="#" target="_black" rel="noopener noreferrer"><FaYoutube /></a></li>
    </ul>
    <ul className="contact-info">
      <li><FaLocationDot />P.O.Box KS 17355, Adum-Kumasi, Ghana</li>
      <li><a href="mailto:info@xpdrilling.com"><FaEnvelope />  info@xpdrilling.com</a></li>
      <li><a href="tel:+233241214994"><FaPhoneVolume /> +233-241-214994</a></li>
    </ul>
  </header>
);

export default Header;