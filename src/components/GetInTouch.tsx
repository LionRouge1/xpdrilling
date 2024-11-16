import Touch from '../assets/get-in-touch.jpg';
import '../styles/getintouch.scss';

const GetInTouch = () => (
  <section className="get-in-touch">
    <img src={Touch} alt="Get in Touch" />
    <div className="get-in-touch-content">
    <a href="#" className="btn">Get In Touch</a>
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