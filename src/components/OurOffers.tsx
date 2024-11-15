import { MdOutlineCheckBox } from "react-icons/md";
import { GiGreekTemple } from "react-icons/gi";
import Offer1 from '../assets/offer1.jpg';
import Offer2 from '../assets/offer2.jpg';
import '../styles/ouroffers.scss';

const OurOffers = () => (
  <section className="our-offers">
    <div className="offers-images-container">
      <img src={Offer1} alt="Offer 1" />
      <img src={Offer2} alt="Offer 2" />
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
        <li><MdOutlineCheckBox /> Highly Rated & Esteemed</li>
        <li><MdOutlineCheckBox /> We are Committed</li>
        <li><MdOutlineCheckBox /> Full Satisfaction Guaran</li>               
      </ul>
      <div className="offer-content-footer">
        <GiGreekTemple />
        <p>We’re in this business Since 1987 and we provide the best services</p>
      </div>
    </div>
  </section>
);

export default OurOffers;