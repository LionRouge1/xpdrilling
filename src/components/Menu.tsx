import { RxHamburgerMenu } from 'react-icons/rx';
import { SlClose } from "react-icons/sl";
import { MdArrowDropDown } from "react-icons/md";
import XpLogo from '../assets/logo.png';
import '../styles/menu.scss';
import { NavLink } from 'react-router-dom';
import { useEffect } from 'react';

const Menu = () => {
  const showMobileMenu = () => {
    const navContainer = document.querySelector('.nav-container');
    if (!navContainer?.classList.contains('overlay')) navContainer?.classList.add('overlay');
  }

  const hideMobileMenu = () => {
    console.log(window.screen.width);
    // if(window.screen.width > 900 ) return
    const navContainer = document.querySelector('.nav-container');
    if (navContainer?.classList.contains('overlay')) navContainer?.classList.remove('overlay');
  }

  const isHomePage = () => {
    return window.location.pathname === '/'
  }

  useEffect(() => {
    const navbar = document.querySelector('.navbar') as HTMLElement;
    const size = isHomePage()? window.screen.height : 400;

    const makeMenuFixed = (height:number) => {
      if(
        document.body.scrollTop > height || document.documentElement.scrollTop > height) {
        navbar.style.position = 'sticky';
        navbar.style.top = '0';
        navbar.style.boxShadow = "0 3px 10px #ceaa52";
      } else {
        navbar.style.position = 'relative';
        navbar.style.top = '';
        navbar.style.boxShadow = 'none';
      }
    }

    document.addEventListener('scroll', () => {
      makeMenuFixed(size)
    })

    return (
      document.removeEventListener('scroll', () => {
        makeMenuFixed(size)
      })
    );
  }, []);

  return (
    <nav className="navbar">
      <img src={XpLogo} alt="Xp Drilling" />
      <div className="nav-container">
        <ul className="nav-links">
          <div onClick={hideMobileMenu} className="close-btn">
            <SlClose />
          </div>
          <li onClick={hideMobileMenu}>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            About Us <MdArrowDropDown />
            <ul className="sous-menu">
              <li><NavLink to="about-us">About Us</NavLink></li>
              <li onClick={hideMobileMenu}><NavLink to="our-team">Our Team Members</NavLink></li>
            </ul>
          </li>
          
          <li onClick={hideMobileMenu}>
            <NavLink to="services">Services</NavLink>
          </li>
          <li onClick={hideMobileMenu}>
            <NavLink to="fleet">Fleet</NavLink>
          </li>
          <li onClick={hideMobileMenu}><NavLink to="hseq">HSEQ</NavLink></li>
          <li onClick={hideMobileMenu}>
            <NavLink to="sustainability">Sustainability</NavLink>
          </li>
          <li onClick={hideMobileMenu}>
            <NavLink to="contact-us">Contact Us </NavLink>
          </li>
        </ul>
      </div>
      <a href="#" className="inqurey-btn">
        INQUERY
      </a>
      <div onClick={showMobileMenu} className="mobile-menu">
        <RxHamburgerMenu />
      </div>
    </nav>
  )
};

export default Menu;