import { FaFacebookSquare, FaTwitter, FaInstagram, FaYoutube, FaPhoneVolume } from 'react-icons/fa';
import { FaLocationDot, FaEnvelope } from 'react-icons/fa6';
import '../styles/header.scss';

const Header = () => (
  <header>
    <ul className="social-media">
      <li><a href="#" target="_black"><FaFacebookSquare /></a></li>
      <li><a href="#" target="_black"><FaTwitter /></a></li>
      <li><a href="#" target="_black"><FaInstagram /></a></li>
      <li><a href="#" target="_black"><FaYoutube /></a></li>
    </ul>
    <ul className="contact-info">
      <li><FaLocationDot /> Los Angels Gournadi, 1230 Bariasl</li>
      <li><FaEnvelope /> info@example.com</li>
      <li><FaPhoneVolume /> +1 (212) 255-5511</li>
    </ul>
  </header>
);

export default Header;