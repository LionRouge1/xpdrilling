import Touch from '../assets/get-in-touch.webp';
import touchMobile from '../assets/get-in-touch-mobile.webp';
import touchMobile2 from '../assets/get-in-touch-mobile2.webp';
import '../styles/getintouch.scss';

const GetInTouch = () => (
  <section className="get-in-touch">
    <picture>
      <source media="(min-width: 900px)" srcSet={touchMobile} />
      <source media="(min-width: 500px)" srcSet={touchMobile2} />
      <img src={Touch} alt="Get in Touch" />
    </picture>
    <div className="get-in-touch-content">
    <a href="/contact-us" className="btn">Get In Touch</a>
    <p>
      Ready to experience the excellence of XP 
      Drilling Services? Reach out to us today 
      to discuss your project requirements and 
      discover how we can help you achieve your goals.
    </p>
    </div>
  </section>
);

export default GetInTouch;