import { useEffect } from 'react';
import { FaPlus } from 'react-icons/fa';
import RDrilling from '../assets/RDrilling';
import EfProcesses from '../assets/EfProcesses';
import SustPractices from '../assets/SustPractices';
import TtedPartnerships from '../assets/TtedPartnerships';
import '../styles/qualities.scss';


const qualitiesObj = [
  {
    id: "01",
    title: "Reliable Drilling",
    img: RDrilling
  },
  {
    id: "02",
    title: "Efficient Processes",
    img: EfProcesses
  },
  {
    id: "03",
    title: "Sustainable Practices",
    img: SustPractices
  },
  {
    id: "04",
    title: "Trusted Partnerships",
    img: TtedPartnerships
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
        {qualitiesObj.map((quality) => (
          <div key={quality.id} className={`quality ${(+quality.id % 2 == 0) ? 'even' : ''} ${(+quality.id == 1) ? 'active' : ''}`}>
            <span className="quality-number">{quality.id}</span>
            <div className="quality-content">
              <quality.img />
              <h3>{quality.title}</h3>
            </div>
            <i><FaPlus /></i>
          </div>
        ))}
      </article>
    </section>
  );
};

export default Qualities;