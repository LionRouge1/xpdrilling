import Impact from '../../assets/impact.webp'
import CallForAction from './CallForAction';
import JoinUs from '../../assets/make-difference.webp';

const OurImpact = () => (
  <>
    <section className="our-impact">
      <div className="our-impact-content">
        <h4>Our Impact</h4>
        <p>
          XP Drilling Services is committed to making a positive impact in the communities where we operate.
          We are dedicated to supporting local businesses, creating jobs, and investing in community projects
          that improve the quality of life for residents. Our goal is to be a responsible corporate citizen
          that contributes to the sustainable development of the regions we serve.
        </p>
      </div>
      <div className="our-impact-image">
        <img src={Impact} alt="Our Impact" />
      </div>
    </section>
    <CallForAction
      title='Join us in making a difference'
      description={['Want to learn more about how XP Drilling Services can support your exploration project?', 'Get in touch with us today to discuss your drilling needs and how we can deliver tailored solutions to meet your goals.']}
      image={JoinUs}
      butonText='Contact Us'
    />
  </>
);

export default OurImpact;