import { RxHamburgerMenu } from 'react-icons/rx';
import '../styles/menu.scss';

const Menu = () => (
  <nav className="navbar">
    <img src="https://colza-demo.pbminfotech.com/demo3/wp-content/uploads/sites/9/2021/10/colza-logo.svg" alt="Colza" />
    <ul className="nav-links">
      <li>
        <a href="/">Home ˅</a>
      </li>
      <li>
        <a href="/about">About us</a>
      </li>
      <li>
        <a href="/services">Services</a>
      </li>
      <li>
        <a href="/contact">Contact Us</a>
      </li>
    </ul>

    <div className="mobile-menu">
      <RxHamburgerMenu />
    </div>

    <a href="#" className="inqurey-btn">
      <span className="inquery-txt">INQUERY</span>
    </a>
  </nav>
);

export default Menu;