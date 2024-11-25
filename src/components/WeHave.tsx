import { FC } from 'react';
import '../styles/wehave.scss';
import { WehaveProps } from "../types";

const WeHave: FC<{content: WehaveProps}> = ({content}) => {
  const { title, sousTitle, description, image, reasons } = content;

  const serialized = (text: string) => (
    text.trim().replace(/\s/g, '-').toLowerCase()
  );

  return (
  <section className="we-have" id={serialized(sousTitle)} style={{backgroundImage: `url(${image})`}}>
    {
      title && <h4>{title}</h4>
    }
    {
      sousTitle && <h2>{sousTitle}</h2>
    }
    {
      description && <p>{description}</p>
    }
    <ul className="reasons">
      {
        reasons.map((reason, index) => (
          <li key={index} className="reason">
            <span>
              {
                typeof(reason.image) === 'string'? <img src={reason.image} alt={reason.title} /> : <reason.image />
              }
            </span>
            <h3>{reason.title}</h3>
            <p>{reason.text}</p>
          </li>
        ))
      }
    </ul>
  </section>
)};

export default WeHave;