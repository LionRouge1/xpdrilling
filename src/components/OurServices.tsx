import { GiDiamondHard } from 'react-icons/gi';
import Diamond from '../assets/diamond.jpg';
import Reverse from '../assets/reverse.jpg';
import '../styles/ourservices.scss';
import { Link } from 'react-router-dom';

const OurServices = () => (
  <section className="services">
    <div className="services-container">
      <h4>OUR SERVICES</h4>
      <h2 className="services-title">Comprehensive Drilling Solutions</h2>
      <Link to="/services" className="btn desktop">Learn more</Link>
      <div className="services-content">
        <p>
          Whether you need precision-grade control drilling or core
          sampling, we have the expertise and equipment to deliver
          results. Our fleet is equipped with the latest technologies
          to ensure accuracy, efficiency, and safety in every project.
        </p>
        <ul>
          <li className="service">
            <div className="img">
              <img src={Diamond} alt="Diamond Drilling" />
            </div>
            <div className="service-footer">
              <GiDiamondHard />
              <h3>Diamond Drilling</h3>
            </div>
          </li>
          <li className="service">
            <div className="img">
              <img src={Reverse} alt="Reverse Circulation Techniques" />
            </div>
            <div className="service-footer">
              <GiDiamondHard />
              <h3>Reverse Circulation Techniques</h3>
            </div>
          </li>
        </ul>
        <Link to="/services" className="btn mobile">Learn more</Link>
      </div>
    </div>
  </section>
);

export default OurServices;