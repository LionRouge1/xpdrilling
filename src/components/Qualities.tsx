import { useEffect } from 'react';
import { FaPlus } from 'react-icons/fa';
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
    </section>
  );
};

export default Qualities;