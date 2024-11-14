import { RxHamburgerMenu } from 'react-icons/rx';
import { SlClose } from "react-icons/sl";
import '../styles/menu.scss';

const Menu = () => {

  const showMobileMenu = () => {
    const navContainer = document.querySelector('.nav-container');
    if(!navContainer?.classList.contains('overlay')) navContainer?.classList.add('overlay');
  }

  const hideMobileMenu = () => {
    const navContainer = document.querySelector('.nav-container');
    if(navContainer?.classList.contains('overlay')) navContainer?.classList.remove('overlay');
  }


  return (
    <nav className="navbar">
      <img src="https://colza-demo.pbminfotech.com/demo3/wp-content/uploads/sites/9/2021/10/colza-logo.svg" alt="Colza" />
      <div className="nav-container">
        <ul className="nav-links">
          <div onClick={hideMobileMenu} className="close-btn">
            <SlClose />
          </div>
          <li>
            <a href="/">Home ˅</a>
          </li>
          <li>
            <a href="/">Pages ˅</a>
            <ul className="sous-menu">
              <li><a href="/about">About us</a></li>
              <li><a href="/services">Services</a></li>
              <li><a href="/contact">Contact Us</a></li>
            </ul>
          </li>
          <li>
            <a href="/about">Projects </a>
            <ul className="sous-menu">
              <li><a href="/about">Projects 1</a></li>
              <li><a href="/services">Projects 2</a></li>
              <li><a href="/contact">Projects 3</a></li>
            </ul>
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
      </div>
      <a href="#" className="inqurey-btn">
        <span className="inquery-txt">INQUERY</span>
      </a>
      <div onClick={showMobileMenu} className="mobile-menu">
        <RxHamburgerMenu />
      </div>
    </nav>
  )
};

export default Menu;