import { FC, useEffect } from "react";
import { HseqProps } from "../types";
import '../styles/hseq.scss';

const HSEQ: FC<HseqProps> = ({ title, description, lists, image }) => {


  useEffect(() => {
    const hseqs = document.querySelectorAll('.hseq');

    const changeColor = (hseq: Element) => {
      console.log(hseq.parentElement)
      hseq.parentElement?.querySelector('.active')?.classList.remove('active');

      hseq.classList.add('active');
    }

    [...hseqs].forEach((mission) => {
      mission.addEventListener('mouseover', () => {
        changeColor(mission);
      });
    });

    return () => {
      [...hseqs].forEach((mission) => {
        mission.removeEventListener('mouseover', () => {
          changeColor(mission);
        });
      });
    };
  }, []);

  if(lists.length == 1) return (
    <section className="hseq-with-one-option">
      <div className="hseq-content">
        <h2>{title}</h2>
        <p>{description}</p>
        <div className="hseq active">
          <span className="position">{lists[0][0]}</span>
          <p>{lists[0][1]}</p>
        </div>
      </div>
      <img src={image} alt={title} />
    </section>
  );

  if (image) return (
    <section className="hseq-with-image" style={{ backgroundImage: `url(${image})` }}>
      <h2>{title}</h2>
      <p>{description}</p>
      <ul className="hseq-list">
        {
          lists.map((list: any, index: number) => (
            <li key={index} className={`hseq ${(index + 1) % 2 == 0 ? 'active' : ''}`}>
              <span className="position">{list[0]}</span>
              {list[1]}
            </li>
          ))
        }
      </ul>
    </section>
  );


  return (
    <section className="hseq-container">
      <h2>{title}</h2>
      <p>{description}</p>
      <ul className="hseq-list">
        {
          lists.map((list: any, index: number) => (
            <li key={index} className={`hseq ${(index + 1) % 2 == 0 ? 'active' : ''}`}>
              <span className="position">{list[0]}</span>
              {list[1]}
            </li>
          ))
        }
      </ul>
    </section>
  )
};

export default HSEQ;