import { FC, useEffect } from "react";
import { HseqProps } from "../types";
import '../styles/hseq.scss';

const HSEQ: FC<HseqProps> = ({ title, description, lists, image }) => {


  useEffect(()=> {
    // const missions = document.querySelectorAll('.our-mission-content');
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

  if (image) return (
    <section className="hseqs-with-image" style={{ backgroundImage: `url(${image})` }}>
        <h2>{title}</h2>
        <p>{description}</p>
        <ul className="hseqs-list">
          {
            lists.map((list: any, index: number) => (
              <li key={index} className={`hseq ${(index + 1) % 2 == 0 ? 'active': ''}`}>
                <span className="position">{list[0]}</span>
                {list[1]}
              </li>
            ))
          }
        </ul>
    </section>
  );


  return (
    <section className="hseqs-container">
      <h2>{title}</h2>
      <p>{description}</p>
      <ul className="hseqs">
        {
          lists.map((list: any, index: number) => (
            <li key={index} className={`hseq ${(index + 1) % 2 == 0 ? 'active': ''}`}>
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