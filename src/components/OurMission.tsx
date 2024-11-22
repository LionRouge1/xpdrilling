import { useEffect } from 'react';
import '../styles/ourmission.scss';

const OurMission = () => {

  useEffect(() => {
    const missions = document.querySelectorAll('.our-mission-content');
    const container = document.querySelector('.our-mission');

    const changeColor = (mission: Element) => {
      container?.querySelector('.active')?.classList.remove('active');

      mission.classList.add('active');
    }

    [...missions].forEach((mission) => {
      mission.addEventListener('mouseover', () => {
        changeColor(mission);
      });
    });

    return () => {
      [...missions].forEach((mission) => {
        mission.removeEventListener('mouseover', () => {
          changeColor(mission);
        });
      });
    };

  }, []);

  return (
    <section className="our-mission">
      <div className="our-mission-content active">
        <h4>Our Mission</h4>
        <p>Our mission is to empower the mining industry by providing tailored, high-quality drilling solutions. We invest in cutting-edge technology and uphold the highest standards of safety, while fostering a culture of continuous improvement and professionalism, to build lasting, transparent partnerships.</p>
      </div>
      <div className="our-mission-content">
        <h4>Our Vision</h4>
        <p>Our vision is to be the premier drilling solutions provider, setting industry benchmarks through innovation, sustainability, and unwavering dedication to our clients' success. We aim to be recognized globally for our expertise, safety, and responsible exploration practices.</p>
      </div>
    </section>
  )
};

export default OurMission;