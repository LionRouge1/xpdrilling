import { RxHamburgerMenu } from 'react-icons/rx';
import { SlClose } from "react-icons/sl";
import { MdArrowDropDown } from "react-icons/md";
import XpLogo from '../assets/xp-logo.png';
import '../styles/menu.scss';
import { NavLink } from 'react-router-dom';

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
      <img src={XpLogo} alt="Xp Drilling" />
      <div className="nav-container">
        <ul className="nav-links">
          <div onClick={hideMobileMenu} className="close-btn">
            <SlClose />
          </div>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="about-us">About Us <MdArrowDropDown /></NavLink>
            <ul className="sous-menu">
              <li><a href="#">Our Team Member</a></li>
              <li><a href="#">FAQ</a></li>
            </ul>
          </li>
          <li>
            <NavLink to="services">Services <MdArrowDropDown /></NavLink>
            <ul className="sous-menu">
              <li><NavLink to="fleet">Fleet <MdArrowDropDown /></NavLink></li>
              <li><NavLink to="hseq">HSEQ <MdArrowDropDown /></NavLink></li>
            </ul>
          </li>
          <li>
            <a href="/">Sustainability</a>
            <NavLink to="sustainability">Sustainability <MdArrowDropDown /></NavLink>
          </li>
          <li>
            <NavLink to="contact-us">Contact Us <MdArrowDropDown /></NavLink>
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