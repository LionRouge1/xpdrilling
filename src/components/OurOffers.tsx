import { MdOutlineCheckBox } from "react-icons/md";
import drillingHome from '../assets/Drilling-home.webp';
import thumpUp from '../assets/thumb-up.webp';
import '../styles/ouroffers.scss';

const OurOffers = () => (
  <section className="our-offers">
    <div className="offers-images-container">
      <img src={drillingHome} alt="Offer 1" />
      <img src={thumpUp} alt="Offer 2" />
      <p className="trusted">
        <span className="trusted-text">TRUSTED BY</span>
        <span className="trusted-number">+500</span>
      </p>
    </div>
    <div className="offer-content">
      <h4>WHAT WE OFFER</h4>
      <h2>Delivering Excellence in Drilling Solutions</h2>
      <p>
        At XP Drilling Services, we bring together innovation, 
        expertise, and state-of-the-art technology to provide 
        top-notch drilling solutions for your projects. With 
        a commitment to excellence and a focus on customer 
        satisfaction, we are your trusted partner for 
        all your drilling needs.
      </p>
      <ul>
        <li><MdOutlineCheckBox /> Trusted and recommended</li>
        <li><MdOutlineCheckBox /> State-of-the-art equipment</li>
        <li><MdOutlineCheckBox /> Experienced team</li>
        <li><MdOutlineCheckBox /> Full Satisfaction Guaranteed</li>               
      </ul>
    </div>
  </section>
);

export default OurOffers;