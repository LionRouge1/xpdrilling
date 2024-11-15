import { useEffect } from 'react';
import { FaPlus } from 'react-icons/fa';
import { MdOutlineCheckBox } from "react-icons/md";
import Offer1 from '../assets/offer1.jpg';
import Offer2 from '../assets/offer2.jpg';
import '../styles/qualities.scss';

const qualitiesObj = [
  {
    id: "01",
    title: "Reliable Drilling",
    img: "service1.jpg"
  },
  {
    id: "02",
    title: "Efficient Processes",
    img: "service2.jpg"
  },
  {
    id: "03",
    title: "Sustainable Practices",
    img: "service3.jpg"
  },
  {
    id: "04",
    title: "Trusted Partnerships",
    img: "service4.jpg"
  }
]

const Qualities = () => {

  useEffect(() => {
    const qualities = document.querySelectorAll('.quality');
    const container = document.querySelector('.qualities-container')

    qualities.forEach((quality) => {
      quality.addEventListener('mouseover', () => {
        container?.querySelector('.active')?.classList.remove('active');

        quality.classList.add('active')
      })
    })
  });

  return (
    <section className="qualities">
      <article className="qualities-container">
        {qualitiesObj.map(({ id, img, title }) => (
          <div key={id} className={`quality ${(+id % 2 == 0) ? 'even' : ''} ${(+id == 1) ? 'active' : ''}`}>
            <span className="quality-number">{id}</span>
            <div className="quality-content">
              <img src={`../assets/${img}`} alt={title} />
              <h3>{title}</h3>
            </div>
            <a href="/"><FaPlus /></a>
          </div>
        ))}
      </article>
      <article className="our-offers">
        <div className="img-container">
          <img src={Offer1} alt="Happy face" />
          <img src={Offer2} alt="Marchine" />
          <p className="trusted">
            <span className="text">Trusted By</span>
            <span className="number">4890</span>
          </p>
        </div>
        <div className="text-container">
          <h4>WHAT WE OFFER</h4>
          <h2>Delivering Excellence in Drilling Solutions</h2>
          <p>
            At XP Drilling Services, we bring together innovation, 
            expertise, and state-of-the-art technology to provide 
            top-notch drilling solutions for your projects. With 
            a commitment to excellence and a focus on customer 
            satisfaction, we are your trusted partner for all your 
            drilling needs.
          </p>
          <ul className="qualities-list">
            <li><MdOutlineCheckBox /> Trusted and recommended</li>
            <li><MdOutlineCheckBox /> State-of-the-art equipment</li>
            <li><MdOutlineCheckBox /> Experienced team</li>
            <li><MdOutlineCheckBox /> Highly Rated & Esteemed</li>
            <li><MdOutlineCheckBox /> We are Committed</li>
            <li><MdOutlineCheckBox /> Full Satisfaction Guaran</li>        
          </ul>
        </div>
      </article>
    </section>
  );
};

export default Qualities;