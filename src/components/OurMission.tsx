import Mission from '../assets/mission.jpg';
import Vision from '../assets/vision.jpg';
import '../styles/ourmission.scss';

const OurMission = () => (
  <>
    <section className="our-mission">
      <img src={Mission} alt="Our mission" />
      <div className="our-mission-content">
        <h4>Our Mission</h4>
        <p>Our mission is to empower the mining industry by providing tailored, high-quality drilling solutions. We invest in cutting-edge technology and uphold the highest standards of safety, while fostering a culture of continuous improvement and professionalism, to build lasting, transparent partnerships.</p>
      </div>
    </section>
    <section className="our-mission">
      <div className="our-mission-content">
        <h4>Our Vision</h4>
        <p>Our vision is to be the premier drilling solutions provider, setting industry benchmarks through innovation, sustainability, and unwavering dedication to our clients' success. We aim to be recognized globally for our expertise, safety, and responsible exploration practices.</p>
      </div>
      <img src={Vision} alt="Our mission" />
    </section>
  </>
);

export default OurMission;